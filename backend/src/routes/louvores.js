import express from 'express';
import * as louvoresController from '../controllers/louvoresController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Criar novo louvor (com upload opcional de áudio)
router.post('/', upload.single('audio'), louvoresController.criarLouvor);

// Obter todos os louvores
router.get('/', louvoresController.obterLouvores);

// Obter louvor por ID
router.get('/:id', louvoresController.obterLouvorPorId);

// Atualizar louvor
router.put('/:id', louvoresController.atualizarLouvor);

// Deletar louvor
router.delete('/:id', louvoresController.deletarLouvor);

export default router;
