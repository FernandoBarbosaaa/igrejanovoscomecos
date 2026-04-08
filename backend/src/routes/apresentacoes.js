import express from 'express';
import * as apresentacoesController from '../controllers/apresentacoesController.js';

const router = express.Router();

// Gerar apresentação para um louvor
router.post('/:louvorId/gerar', apresentacoesController.gerarApresentacao);

// Obter apresentação de um louvor
router.get('/:louvorId', apresentacoesController.obterApresentacao);

// Listar todas as apresentações
router.get('/', apresentacoesController.listarApresentacoes);

export default router;
