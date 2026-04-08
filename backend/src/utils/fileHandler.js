import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const UPLOAD_DIR = path.join(__dirname, '..', '..', 'uploads');
const PRESENTATIONS_DIR = path.join(__dirname, '..', '..', 'presentations');

// Criar diretórios se não existirem
[UPLOAD_DIR, PRESENTATIONS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

/**
 * Remove arquivo se existir
 */
export function removerArquivo(caminhoArquivo) {
  try {
    if (fs.existsSync(caminhoArquivo)) {
      fs.unlinkSync(caminhoArquivo);
      console.log(`Arquivo removido: ${caminhoArquivo}`);
    }
  } catch (err) {
    console.error(`Erro ao remover arquivo: ${err.message}`);
  }
}

/**
 * Obter caminho completo para arquivo de upload
 */
export function obterCaminhoUpload(filename) {
  return path.join(UPLOAD_DIR, filename);
}

/**
 * Obter caminho completo para apresentação gerada
 */
export function obterCaminhoApresentacao(filename) {
  return path.join(PRESENTATIONS_DIR, filename);
}

/**
 * Listar todos os arquivos de um diretório
 */
export function listarArquivos(diretorio) {
  try {
    return fs.readdirSync(diretorio) || [];
  } catch (err) {
    console.error(`Erro ao listar arquivos: ${err.message}`);
    return [];
  }
}

/**
 * Limpar diretório de apresentações antigas (> 7 dias)
 */
export function limparApresentacoesAntigas() {
  const arquivos = listarArquivos(PRESENTATIONS_DIR);
  const agora = Date.now();
  const semana = 7 * 24 * 60 * 60 * 1000;

  arquivos.forEach(arquivo => {
    const caminhoCompleto = path.join(PRESENTATIONS_DIR, arquivo);
    const stats = fs.statSync(caminhoCompleto);
    
    if (agora - stats.mtimeMs > semana) {
      removerArquivo(caminhoCompleto);
    }
  });
}

export { UPLOAD_DIR, PRESENTATIONS_DIR };
