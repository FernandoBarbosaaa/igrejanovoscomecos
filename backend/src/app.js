import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Importar rotas
import louvoresRoutes from './routes/louvores.js';
import apresentacoesRoutes from './routes/apresentacoes.js';

// Criar app Express
const app = express();

// Middleware CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));

// Middleware de parsing
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Servir arquivos estáticos (uploads e gerados)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/presentations', express.static(path.join(__dirname, '..', 'presentations')));

// Middleware de logging simples
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Rotas
app.use('/api/louvores', louvoresRoutes);
app.use('/api/apresentacoes', apresentacoesRoutes);

// Rota de health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Tratamento de erro 404
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Tratamento de erros global
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(500).json({ 
    error: 'Erro interno do servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🎵 Servidor rodando em http://localhost:${PORT}`);
  console.log(`🚀 Ambiente: ${process.env.NODE_ENV}`);
});
