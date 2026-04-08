# 🚀 Deploy no Vercel - Guia Completo

## 📋 Recomendação de Arquitetura

Para melhor desempenho em Vercel, recomendamos:

```
Frontend:  Deploy em Vercel (automático)
Backend:   Deploy em Vercel + Railway/Render para BD
```

Isso porque:
- ✅ Vercel otimizado para static sites e Vite/React
- ✅ Backend separado = melhor escalabilidade
- ⚠️ SQLite em Vercel é temporário (/tmp)

---

## 🎨 Deploy do Frontend em Vercel

### Pré-requisitos

- [ ] Conta no Vercel (gratuita)
- [ ] Projeto no GitHub
- [ ] Git instalado

### Passo 1: Push para GitHub

```bash
cd c:\Users\Fernando\Documents\louvores
git add .
git commit -m "Prepare for Vercel deployment"
git push -u origin main
```

### Passo 2: Conectar Vercel

1. Acesse: https://vercel.com
2. Clique em "New Project"
3. Conecte seu repositório GitHub
4. Selecione `frontend` como root directory

### Passo 3: Configurar Variáveis de Ambiente

Na dashboard do Vercel:

```
VITE_API_URL = https://seu-backend-url.vercel.app
```

Ou se using Railway/Render:

```
VITE_API_URL = https://seu-backend.railway.app
```

### Passo 4: Deploy

Vercel vai fazer deploy automaticamente quando:
- Fizer push para `main` branch
- Detecta `vercel.json`
- Encontra `package.json`
- Executa `npm run build`

✅ **Frontend estará live em ~2 minutos!**

---

## 🔌 Deploy do Backend em Vercel

### Opção 1: Vercel + Banco de Dados Externo (RECOMENDADO)

#### A. Criar banco externo (ex: PostgreSQL no Vercel)

Vercel oferece PostgreSQL gratuito! 

1. No dashboard Vercel
2. Projeto → Storage → "Create Database"
3. Copie connection string

#### B. Atualizar Backend para PostgreSQL

Instale driver:
```bash
cd backend
npm install pg
```

#### C. Deploy do Backend

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
cd backend
vercel
```

Durante o setup:
- [ ] "Which scope?" → Sua conta
- [ ] "Link to existing?" → No
- [ ] "Project name?" → louvores-api
- [ ] "Command" → npm start

### Opção 2: Vercel Serverless (Simples, mas com limitações)

#### Reestruturas pastas:

```
backend/
├── api/
│   ├── louvores.js
│   ├── apresentacoes.js
│   └── health.js
└── vercel.json
```

Ou use **API Routes** do Next.js.

---

## 🗄️ Banco de Dados para Produção

### Opção A: PostgreSQL no Vercel (Fácil)

```
1. Vercel Dashboard → Storage → "Create Database"
2. Escolha PostgreSQL
3. Copie credenciais
4. Atualize .env em Vercel
```

### Opção B: Railway (Alternativa)

```bash
npm install -g railway
railway login
cd backend
railway init
railway up
```

Costs: Freemium ($5/mês para iniciar)

### Opção C: PlanetScale (MySQL)

```
1. https://planetscale.com
2. Cria database
3. Copia connection string
4. Usa em backend
```

Costs: Freemium com limitações

---

## 📝 Configurar Variáveis de Ambiente no Vercel

### Frontend

Dashboard → Settings → Environment Variables

```
VITE_API_URL = https://louvores-api.vercel.app
```

### Backend

Dashboard → Settings → Environment Variables

```
NODE_ENV = production
DATABASE_URL = postgresql://user:pass@host/db
CORS_ORIGIN = https://seu-frontend.vercel.app
```

---

## ✅ Checklist de Deploy

### Antes de fazer Deploy

- [ ] Teste local funcionando (`npm run dev` em ambos)
- [ ] Git commit de todas as mudanças
- [ ] `.env` com variáveis corretas
- [ ] `vercel.json` no root de cada pasta
- [ ] Banco de dados externo criado (se usando)

### Deploy Frontend

- [ ] Conectar GitHub ao Vercel
- [ ] Selecionar `frontend` como root
- [ ] Configurar `VITE_API_URL`
- [ ] Deploy automático

### Deploy Backend

- [ ] Instalar Vercel CLI: `npm install -g vercel`
- [ ] `cd backend && vercel`
- [ ] Configurar variáveis de ambiente
- [ ] Deploy

---

## 🔗 URLs Finais

Após deploy bem-sucedido:

```
Frontend: https://seu-projeto-frontend.vercel.app
Backend:  https://seu-projeto-backend.vercel.app

Ou se Railway:
Backend:  https://seu-projeto.railway.app
```

---

## 🐛 Troubleshooting

### "Cannot GET /api/louvores"

```
❌ Backend não está respondendo
✅ Verificar:
   - URLs no Vercel.json corretas
   - CORS configurado
   - Database conectada
   - Variáveis de ambiente setadas
```

### "CORS Error"

```
No backend .env, adicione:
CORS_ORIGIN = https://seu-frontend.vercel.app
```

### "Database connection refused"

```
✅ Verificar connection string
✅ Firewall permite requests
✅ Credenciais corretas
```

### "Build failed"

```
✅ Verifique: npm install localmente
✅ Teste: npm run build
✅ Cheque package.json scripts
```

---

## 📊 Monitoramento

### Vercel Dashboard

- Logs em tempo real
- Performance metrics
- Error tracking
- Deployment history

```
Vercel → Project → Deployments → Live logs
```

### Backend Logs

```bash
# Se em Railway
Railway → Logs

# Se em Vercel (Serverless)
Vercel → Functions → Logs
```

---

## 💡 Dicas Importantes

### ✅ Fazer

1. Use `.env` local e variáveis em Vercel
2. Ignore `/uploads` e `/tmp` em .vercelignore
3. Use banco externo para dados persistentes
4. Configure CORS corretamente
5. Teste localmente antes de fazer push

### ❌ Evitar

1. ❌ Salvar dados em /tmp (são deletados)
2. ❌ Variáveis sensíveis no código
3. ❌ Muitos uploads grandes
4. ❌ Deploy sem `.env` configurado

---

## 🚀 Script Rápido de Deploy

```bash
# Frontend
cd frontend
npm run build
vercel

# Backend
cd ../backend
vercel
```

---

## 📞 Recursos

- Docs Vercel: https://vercel.com/docs
- Railway: https://railway.app
- PlanetScale: https://planetscale.com
- PostgreSQL on Vercel: https://vercel.com/storage/postgres

---

## ✨ Próximas Etapas

1. ✅ Prepare local (feito!)
2. ✅ Push para GitHub
3. ✅ Deploy frontend em Vercel
4. ✅ Setup banco de dados
5. ✅ Deploy backend
6. ✅ Testar em produção
7. ✅ Compartilhar com a comunidade!

---

**Status:** ✅ **PRONTO PARA VERCEL**

Sistema configurado e otimizado para deployment em Vercel! 🎉
