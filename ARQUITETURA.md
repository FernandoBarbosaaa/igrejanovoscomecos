# 🏗️ Arquitetura do Sistema de Louvores

## 📊 Arquitetura Geral

```
┌─────────────────────────────────────────────────────────────┐
│                    NAVEGADOR DO USUÁRIO                     │
│              http://localhost:5173 (Frontend)               │
└────────────────────────┬───────────────────────────────────┘
                         │
                    HTTP/AJAX
                         │
         ┌───────────────┴───────────────┐
         │                               │
    ┌────▼──────────────────┐    ┌──────▼──────────────────────┐
    │   VITE DEV SERVER     │    │   REACT COMPONENTS          │
    │   Port: 5173          │    │  ├─ Header.jsx              │
    │                       │    │  ├─ FormadoAcesso.jsx      │
    │ Proxy para API:       │    │  ├─ LouvoresList.jsx       │
    │ /api -> :3001         │    │  └─ App.jsx                 │
    └───────────────────────┘    └─────────────────────────────┘

                         │
                    API REST
       http://localhost:3001/api
                         │
         ┌───────────────┴───────────────┐
         │                               │
    ┌────▼──────────────────┐    ┌──────▼──────────────────────┐
    │   EXPRESS SERVER      │    │   ESTRUTURA DA API          │
    │   Port: 3001          │    │ ├─ /louvores (CRUD)        │
    │                       │    │ ├─ /apresentacoes (PPT)    │
    │ Middlewares:          │    │ └─ /health (status)        │
    │ ├─ CORS               │    │                             │
    │ ├─ Body Parser        │    │ Controllers:                │
    │ ├─ Multer (upload)    │    │ ├─ louvoresController.js   │
    │ └─ Router             │    │ └─ apresentacoesController.js│
    └───────────────────────┘    └─────────────────────────────┘

                         │
         ┌───────────────┴───────────────┐
         │                               │
    ┌────▼──────────────────┐    ┌──────▼──────────────────────┐
    │   SQLITE DATABASE     │    │   GERADOR PPTX             │
    │   louvores.db         │    │  (pptxgenjs)                │
    │                       │    │ Gera slides automaticamente │
    │ Tables:               │    │ com formatação profissional │
    │ ├─ louvores           │    │                             │
    │ └─ apresentacoes      │    │ Features:                   │
    │                       │    │ ├─ Capa personalizada       │
    │                       │    │ ├─ Quebra automática        │
    │                       │    │ ├─ Tema escuro              │
    │                       │    │ └─ Download direto          │
    └───────────────────────┘    └─────────────────────────────┘

         ┌───────────────┴───────────────┐
         │                               │
    ┌────▼──────────────────┐    ┌──────▼──────────────────────┐
    │   SISTEMA DE ARQUIVOS │    │   ARMAZENAMENTO            │
    │                       │    │ ├─ /uploads (áuidios)      │
    │ Estrutura:            │    │ ├─ /presentations (PPTx)   │
    │ ├─ uploads/           │    │ ├─ database/               │
    │ │  └─ audio_001.mp3   │    │ └─ logs/                   │
    │ ├─ presentations/     │    │                             │
    │ │  └─ louvor_xyz.pptx │    │                             │
    │ └─ database/          │    │                             │
    │    └─ louvores.db     │    │                             │
    └───────────────────────┘    └─────────────────────────────┘
```

---

## 📁 Estrutura de Pastas

```
louvores/
│
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 controllers/
│   │   │   ├── louvoresController.js      # CRUD de louvores
│   │   │   └── apresentacoesController.js # Geração de PPT
│   │   │
│   │   ├── 📁 routes/
│   │   │   ├── louvores.js               # Rotas: GET, POST, PUT, DELETE
│   │   │   └── apresentacoes.js          # Rotas: POST (gerar), GET
│   │   │
│   │   ├── 📁 middleware/
│   │   │   └── upload.js                 # Configuração multer
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── pptxGenerator.js          # Gera PowerPoint
│   │   │   └── fileHandler.js            # Gerencia arquivos
│   │   │
│   │   ├── database.js                   # Conexão SQLite3
│   │   └── app.js                        # Servidor Express
│   │
│   ├── 📁 uploads/                       # Áudios dos louvores
│   ├── 📁 presentations/                 # PPTs gerados
│   ├── 📁 database/                      # Banco de dados
│   ├── package.json
│   ├── .env                              # Variáveis de ambiente
│   ├── .gitignore
│   └── Dockerfile
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── Header.jsx                # Cabeçalho da app
│   │   │   ├── Header.css
│   │   │   ├── FormadoAcesso.jsx        # Formulário novo louvor
│   │   │   ├── FormadoAcesso.css
│   │   │   ├── LouvoresList.jsx         # Lista de louvores
│   │   │   └── LouvoresList.css
│   │   │
│   │   ├── 📁 services/
│   │   │   └── api.js                    # Client HTTP (axios)
│   │   │
│   │   ├── 📁 styles/
│   │   │   └── global.css                # Estilos globais
│   │   │
│   │   ├── App.jsx                       # Componente root
│   │   ├── App.css
│   │   └── main.jsx                      # Entry point React
│   │
│   ├── index.html                        # HTML template
│   ├── vite.config.js                    # Config Vite
│   ├── package.json
│   ├── .gitignore
│   ├── Dockerfile
│   └── nginx.conf
│
├── 📄 README.md                          # Documentação principal
├── 📄 QUICKSTART.md                      # Guia rápido
├── 📄 EXEMPLO.md                         # Exemplo de uso
├── 📄 DEPLOYMENT.md                      # Guia de produção
├── 📄 .gitignore
├── 📄 docker-compose.yml
├── setup.bat                             # Setup Windows
└── setup.sh                              # Setup Linux/Mac
```

---

## 🔄 Fluxo de Dados

### 1️⃣ Criar Louvor

```
Frontend (FormadoAcesso)
    ↓
Formulário preenchido
    ↓
POST /api/louvores
    ↓
Backend (louvoresController.criarLouvor)
    ↓
Validação de dados
    ↓
Multer processa áudio (se houver)
    ↓
Salva em SQLite3
    ↓
Retorna JSON com louvor criado
    ↓
Frontend atualiza lista
```

### 2️⃣ Gerar Apresentação

```
Frontend (LouvoresList)
    ↓
Clica "Gerar Apresentação"
    ↓
POST /api/apresentacoes/{id}/gerar
    ↓
Backend obtém louvor do BD
    ↓
pptxGenerator.js processa:
    1. Divide letra em slides
    2. Cria layout profissional
    3. Salva como .pptx
    ↓
Registra em apresentacoes table
    ↓
Retorna URL de download
    ↓
Frontend baixa automaticamente
    ↓
Usuário recebe arquivo PPT
```

### 3️⃣ Download de Arquivo

```
Frontend
    ↓
fetch("http://localhost:3001/presentations/louvor_xyz.pptx")
    ↓
Express retorna arquivo
    ↓
Browser faz download
    ↓
Arquivo salvo em Downloads/
```

---

## 🗄️ Database Schema

### Tabela: louvores

```sql
CREATE TABLE louvores (
  id TEXT PRIMARY KEY,                    -- UUID único
  nome TEXT NOT NULL,                     -- Ex: "Graciosa Deus"
  cantor TEXT NOT NULL,                   -- Ex: "Bruna Olly"
  letra TEXT NOT NULL,                    -- Letra completa
  audio_filename TEXT,                    -- Nome do arquivo MP3
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  atualizado_em DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

### Tabela: apresentacoes

```sql
CREATE TABLE apresentacoes (
  id TEXT PRIMARY KEY,
  louvor_id TEXT NOT NULL,
  pptx_filename TEXT NOT NULL,            -- Nome do arquivo PPT
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(louvor_id) REFERENCES louvores(id)
)
```

---

## 🔌 API Endpoints

### Louvores

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/louvores` | Criar novo louvor |
| `GET` | `/api/louvores` | Listar todos |
| `GET` | `/api/louvores/:id` | Obter um louvor |
| `PUT` | `/api/louvores/:id` | Atualizar louvor |
| `DELETE` | `/api/louvores/:id` | Deletar louvor |

### Apresentações

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/apresentacoes/:louvorId/gerar` | Gerar PPT |
| `GET` | `/api/apresentacoes/:louvorId` | Obter apresentação |
| `GET` | `/api/apresentacoes` | Listar todas |

### Health Check

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/health` | Status do servidor |

---

## 🛠️ Tecnologias Utilizadas

### Backend

- **Express.js** - Framework web
- **SQLite3** - Banco de dados leve
- **pptxgenjs** - Geração de PowerPoint
- **Multer** - Upload de arquivos
- **CORS** - Cross-origin requests
- **UUID** - IDs únicos

### Frontend

- **React 18** - UI library
- **Vite** - Build tool ultra-rápido
- **Axios** - HTTP client
- **CSS3** - Styling

### DevOps

- **Docker** - Containerização
- **Docker Compose** - Orquestração
- **Node.js** - Runtime

---

## ⚙️ Configurações Importantes

### Backend (.env)

```env
PORT=3001
NODE_ENV=development
DATABASE_PATH=./database/louvores.db
UPLOAD_DIR=./uploads
CORS_ORIGIN=http://localhost:5173
```

### Frontend (vite.config.js)

```javascript
proxy: {
  '/api': {
    target: 'http://localhost:3001',
    changeOrigin: true
  }
}
```

---

## 📈 Escalabilidade Futura

### Melhorias planejadas:

1. **Autenticação** (JWT)
2. **Multi-usuário** (permissões)
3. **Cache** (Redis)
4. **Busca** (Elasticsearch)
5. **Analytics** (rastreamento de uso)
6. **Editor Visual** (WYSIWYG)
7. **Streaming de áudio**
8. **Preview em tempo real**

---

Desenvolvido com ❤️ para o reino 🎵
