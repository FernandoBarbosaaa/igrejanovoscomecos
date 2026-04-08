import { v4 as uuidv4 } from 'uuid';
import { dbRun, dbGet, dbAll } from '../database.js';

/**
 * Criar novo louvor
 */
export async function criarLouvor(req, res) {
  try {
    const { nome, cantor, letra } = req.body;

    if (!nome || !cantor || !letra) {
      return res.status(400).json({ 
        error: 'Nome, cantor e letra são obrigatórios' 
      });
    }

    const id = uuidv4();
    const audioFilename = req.file?.filename || null;

    await dbRun(
      `INSERT INTO louvores (id, nome, cantor, letra, audio_filename) 
       VALUES (?, ?, ?, ?, ?)`,
      [id, nome, cantor, letra, audioFilename]
    );

    const louvor = await dbGet('SELECT * FROM louvores WHERE id = ?', [id]);

    res.status(201).json({
      message: 'Louvor criado com sucesso',
      louvor
    });
  } catch (err) {
    console.error('Erro ao criar louvor:', err);
    res.status(500).json({ error: 'Erro ao criar louvor' });
  }
}

/**
 * Obter todos os louvores
 */
export async function obterLouvores(req, res) {
  try {
    const louvores = await dbAll('SELECT * FROM louvores ORDER BY criado_em DESC');
    res.json(louvores);
  } catch (err) {
    console.error('Erro ao obter louvores:', err);
    res.status(500).json({ error: 'Erro ao obter louvores' });
  }
}

/**
 * Obter louvor por ID
 */
export async function obterLouvorPorId(req, res) {
  try {
    const { id } = req.params;
    const louvor = await dbGet('SELECT * FROM louvores WHERE id = ?', [id]);

    if (!louvor) {
      return res.status(404).json({ error: 'Louvor não encontrado' });
    }

    res.json(louvor);
  } catch (err) {
    console.error('Erro ao obter louvor:', err);
    res.status(500).json({ error: 'Erro ao obter louvor' });
  }
}

/**
 * Atualizar louvor
 */
export async function atualizarLouvor(req, res) {
  try {
    const { id } = req.params;
    const { nome, cantor, letra } = req.body;

    const louvor = await dbGet('SELECT * FROM louvores WHERE id = ?', [id]);
    if (!louvor) {
      return res.status(404).json({ error: 'Louvor não encontrado' });
    }

    await dbRun(
      `UPDATE louvores 
       SET nome = ?, cantor = ?, letra = ?, atualizado_em = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [nome || louvor.nome, cantor || louvor.cantor, letra || louvor.letra, id]
    );

    const louvurAtualizado = await dbGet('SELECT * FROM louvores WHERE id = ?', [id]);
    
    res.json({
      message: 'Louvor atualizado com sucesso',
      louvor: louvurAtualizado
    });
  } catch (err) {
    console.error('Erro ao atualizar louvor:', err);
    res.status(500).json({ error: 'Erro ao atualizar louvor' });
  }
}

/**
 * Deletar louvor
 */
export async function deletarLouvor(req, res) {
  try {
    const { id } = req.params;

    const louvor = await dbGet('SELECT * FROM louvores WHERE id = ?', [id]);
    if (!louvor) {
      return res.status(404).json({ error: 'Louvor não encontrado' });
    }

    await dbRun('DELETE FROM louvores WHERE id = ?', [id]);

    res.json({ 
      message: 'Louvor deletado com sucesso',
      id 
    });
  } catch (err) {
    console.error('Erro ao deletar louvor:', err);
    res.status(500).json({ error: 'Erro ao deletar louvor' });
  }
}
