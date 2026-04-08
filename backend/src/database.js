import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbDir = path.join(__dirname, '..', 'database');
const dbPath = path.join(dbDir, 'louvores.db');

// Criar pasta database se não existir
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new sqlite3.Database(dbPath, async (err) => {
  if (err) {
    console.error('Erro ao conectar com SQLite:', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');
    await initializeDatabase();
  }
});

async function initializeDatabase() {
  const queries = [
    `CREATE TABLE IF NOT EXISTS louvores (
      id TEXT PRIMARY KEY,
      nome TEXT NOT NULL,
      cantor TEXT NOT NULL,
      letra TEXT NOT NULL,
      audio_filename TEXT,
      criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
      atualizado_em DATETIME DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS apresentacoes (
      id TEXT PRIMARY KEY,
      louvor_id TEXT NOT NULL,
      pptx_filename TEXT NOT NULL,
      criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(louvor_id) REFERENCES louvores(id) ON DELETE CASCADE
    )`
  ];

  for (const query of queries) {
    await new Promise((resolve, reject) => {
      db.run(query, (err) => {
        if (err) {
          console.error('Erro ao criar tabela:', err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  console.log('Banco de dados inicializado com sucesso!');
}

// Helper para promessificar callbacks do sqlite3
export function dbRun(query, params = []) {
  return new Promise((resolve, reject) => {
    db.run(query, params, function(err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
}

export function dbGet(query, params = []) {
  return new Promise((resolve, reject) => {
    db.get(query, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

export function dbAll(query, params = []) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows || []);
    });
  });
}

export default db;
