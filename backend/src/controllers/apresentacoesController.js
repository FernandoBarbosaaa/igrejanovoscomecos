import { v4 as uuidv4 } from 'uuid';
import { dbRun, dbGet, dbAll } from '../database.js';
import { gerarPowerPoint } from '../utils/pptxGenerator.js';
import { obterCaminhoApresentacao, removerArquivo } from '../utils/fileHandler.js';

/**
 * Gerar apresentação (PowerPoint) para um louvor
 */
export async function gerarApresentacao(req, res) {
  try {
    const { louvorId } = req.params;

    // Verificar se louvor existe
    const louvor = await dbGet('SELECT * FROM louvores WHERE id = ?', [louvorId]);
    if (!louvor) {
      return res.status(404).json({ error: 'Louvor não encontrado' });
    }

    // Remover apresentação anterior se existir
    const apresentacaoAntiga = await dbGet(
      'SELECT * FROM apresentacoes WHERE louvor_id = ?',
      [louvorId]
    );

    if (apresentacaoAntiga) {
      removerArquivo(obterCaminhoApresentacao(apresentacaoAntiga.pptx_filename));
      await dbRun('DELETE FROM apresentacoes WHERE louvor_id = ?', [louvorId]);
    }

    // Gerar novo arquivo PowerPoint
    const nomeArquivo = `louvor_${louvorId}_${Date.now()}.pptx`;
    const caminhoCompleto = obterCaminhoApresentacao(nomeArquivo);

    await gerarPowerPoint(louvor, caminhoCompleto);

    // Registrar no banco de dados
    const apresentacaoId = uuidv4();
    await dbRun(
      `INSERT INTO apresentacoes (id, louvor_id, pptx_filename) 
       VALUES (?, ?, ?)`,
      [apresentacaoId, louvorId, nomeArquivo]
    );

    const apresentacao = await dbGet(
      'SELECT * FROM apresentacoes WHERE id = ?',
      [apresentacaoId]
    );

    res.json({
      message: 'Apresentação gerada com sucesso',
      apresentacao,
      downloadUrl: `/presentations/${nomeArquivo}`
    });
  } catch (err) {
    console.error('Erro ao gerar apresentação:', err);
    res.status(500).json({ error: 'Erro ao gerar apresentação' });
  }
}

/**
 * Obter apresentação por ID do louvor
 */
export async function obterApresentacao(req, res) {
  try {
    const { louvorId } = req.params;

    const apresentacao = await dbGet(
      'SELECT * FROM apresentacoes WHERE louvor_id = ?',
      [louvorId]
    );

    if (!apresentacao) {
      return res.status(404).json({ error: 'Apresentação não encontrada' });
    }

    res.json({
      apresentacao,
      downloadUrl: `/presentations/${apresentacao.pptx_filename}`
    });
  } catch (err) {
    console.error('Erro ao obter apresentação:', err);
    res.status(500).json({ error: 'Erro ao obter apresentação' });
  }
}

/**
 * Listar todas as apresentacoes
 */
export async function listarApresentacoes(req, res) {
  try {
    const apresentacoes = await dbAll(
      `SELECT a.*, l.nome, l.cantor FROM apresentacoes a
       JOIN louvores l ON a.louvor_id = l.id
       ORDER BY a.criado_em DESC`
    );

    res.json(apresentacoes);
  } catch (err) {
    console.error('Erro ao listar apresentacoes:', err);
    res.status(500).json({ error: 'Erro ao listar apresentacoes' });
  }
}
