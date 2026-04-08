# Sistema de Louvores - Deployment para Produção

## 📦 Build para Produção

### Backend

```bash
cd backend

# Criar versão de produção
npm run build  # (se houver script)

# Ou rodar direto:
NODE_ENV=production node src/app.js
```

### Frontend

```bash
cd frontend

# Criar build do Vite
npm run build

# Isso gera pasta 'dist' com arquivos estáticos
```

---

## 🐳 Deploy com Docker

### Build das Imagens

```bash
# Backend
docker build -t louvores-api ./backend

# Frontend  
docker build -t louvores-web ./frontend
```

### Rodar com Docker Compose

```bash
docker-compose up -d
```

Acesse em: `http://localhost:3000` (frontend) e `http://localhost:3001` (API)

---

## ☁️ Deploy em Servidores

### Opção 1: Heroku

#### Backend

```bash
heroku login
heroku create seu-app-api
git push heroku main
```

#### Frontend

```bash
heroku create seu-app-web
npm run build
git push heroku main
```

---

### Opção 2: DigitalOcean/AWS/Azure

1. **SSH no servidor**
2. **Instalar Node.js e npm**
3. **Clonar repositório**
4. **Rodar:**
   ```bash
   npm install
   npm run dev  # ou NODE_ENV=production node src/app.js
   ```
5. **Usar PM2 para gerenciar processo:**
   ```bash
   npm install -g pm2
   pm2 start src/app.js --name "louvores-api"
   pm2 startup
   pm2 save
   ```

---

### Opção 3: Vercel (Frontend)

```bash
npm install -g vercel
vercel deploy
```

---

## 📝 Variáveis de Ambiente para Produção

### Backend (.env)

```env
NODE_ENV=production
PORT=3001
DATABASE_PATH=/mnt/data/louvores.db
UPLOAD_DIR=/mnt/data/uploads
CORS_ORIGIN=https://seu-dominio.com
```

### Frontend (vite.config.js)

```javascript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.seu-dominio.com',
        changeOrigin: true
      }
    }
  }
})
```

---

## 🔒 Segurança

- [ ] Usar HTTPS em produção
- [ ] Validar uploads de arquivo (tipo e tamanho)
- [ ] Limpar diretório de apresentações periodicamente
- [ ] Backupar banco de dados regularmente
- [ ] Rate limiting na API
- [ ] Autenticação de usuários (futuro)

---

## 📊 Monitoramento

### Logs

```bash
# Backend
pm2 logs louvores-api

# Frontend (check nginx logs)
tail -f /var/log/nginx/access.log
```

### Performance

Monitorar:
- Tempo de geração de PPT
- Espaço em disco
- Taxa de erro da API

---

## 🚀 CI/CD

### GitHub Actions (exemplo)

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - run: npm start
```

---

## ✅ Checklist de Deploy

- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados criado e migrado
- [ ] Pastas de uploads/presentations criadas
- [ ] CORS configurado corretamente
- [ ] HTTPS habilitado
- [ ] Backups agendados
- [ ] Logs configurados
- [ ] SSL certificates válidos

---

Para problemas, consulte a documentação oficial:
- Express: https://expressjs.com
- React: https://react.dev  
- Vite: https://vitejs.dev
