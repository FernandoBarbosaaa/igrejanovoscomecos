import PptxGenJs from 'pptxgenjs';

/**
 * Quebra o texto da letra em partes para slides
 * Mantém frases inteiras e evita cortar no meio
 * @param {string} texto - Texto da letra
 * @param {number} linhasPorSlide - Quantidade de linhas por slide
 * @returns {string[]} Array com texto para cada slide
 */
function dividirLetra(texto, linhasPorSlide = 3) {
  const linhas = texto.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const slides = [];
  let slidesAtual = [];

  for (const linha of linhas) {
    if (slidesAtual.length < linhasPorSlide) {
      slidesAtual.push(linha);
    } else {
      slides.push(slidesAtual.join('\n'));
      slidesAtual = [linha];
    }
  }

  // Adicionar últimas linhas
  if (slidesAtual.length > 0) {
    slides.push(slidesAtual.join('\n'));
  }

  return slides;
}

/**
 * Gera arquivo PowerPoint com os slides do louvor
 * @param {object} louvor - Objeto com dados do louvor
 * @param {string} outputPath - Caminho onde salvar o arquivo
 */
export async function gerarPowerPoint(louvor, outputPath) {
  const prs = new PptxGenJs();

  // Configurar dimensões padrão
  prs.defineLayout({ name: 'LAYOUT_16x9', width: 13.333, height: 7.5 });
  prs.layout = 'LAYOUT_16x9';

  // Definir cores e fonts padrão
  const corFundo = '1a1a1a'; // Preto bem escuro
  const corTexto = 'ffffff'; // Branco
  const fontName = 'Arial';

  // ===== SLIDE 1: CAPA =====
  const slideCapa = prs.addSlide();
  slideCapa.background = { color: corFundo };

  // Adicionar nome do louvor
  slideCapa.addText(louvor.nome, {
    x: 0.5,
    y: 2.5,
    w: 12.333,
    h: 1.5,
    fontSize: 54,
    bold: true,
    color: corTexto,
    align: 'center',
    fontFace: fontName,
    valign: 'middle'
  });

  // Adicionar nome do cantor
  slideCapa.addText(louvor.cantor, {
    x: 0.5,
    y: 4.2,
    w: 12.333,
    h: 0.8,
    fontSize: 28,
    color: 'cccccc', // Cinza mais claro
    align: 'center',
    fontFace: fontName,
    valign: 'middle'
  });

  // ===== SLIDES DE LETRA =====
  const slidesLetra = dividirLetra(louvor.letra, 3);

  for (const textoSlide of slidesLetra) {
    const slide = prs.addSlide();
    slide.background = { color: corFundo };

    slide.addText(textoSlide, {
      x: 0.5,
      y: 2.5,
      w: 12.333,
      h: 4.5,
      fontSize: 28,
      color: corTexto,
      align: 'left',
      fontFace: fontName,
      valign: 'middle',
      wrap: true,
      lineSpacing: 32
    });
  }

  // Salvar arquivo
  await prs.writeFile({ fileName: outputPath });
  console.log(`✅ PowerPoint gerado: ${outputPath}`);

  return slidesLetra.length + 1; // +1 para o slide de capa
}

export default { gerarPowerPoint, dividirLetra };
