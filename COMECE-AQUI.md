# 🎯 GUIA RÁPIDO - Do Zero ao Funcionando

## 1️⃣ Primeira Vez Rodando (ou Primeira vez após erro)

### Opção A: Automático (Recomendado ⭐)

**Abra PowerShell como ADMINISTRADOR** e execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force; &'c:\Users\Fernando\Documents\louvores\fix-porta-3001.ps1'
```

**Ou use o .bat** (mais simples):
- Abra Prompt de Comando como ADMINISTRADOR
- Execute: `c:\Users\Fernando\Documents\louvores\fix-porta-3001.bat`

✅ Pronto! Backend rodando na porta 3001

---

### Opção B: Manual

**Terminal 1 - Backend:**
```powershell
cd c:\Users\Fernando\Documents\louvores\backend
npm run dev
```

Deve aparecer:
```
🎵 Servidor rodando em http://localhost:3001
```

**Terminal 2 - Frontend (abra um NOVO terminal, NÃO use o mesmo):**
```powershell
cd c:\Users\Fernando\Documents\louvores\frontend
npm run dev
```

Deve aparecer:
```
➜ Local: http://localhost:5173/
```

---

## 2️⃣ Abra o App no Navegador

🔗 **http://localhost:5173/**

Deve aparecer a tela com título "Meus Louvores" e um botão para criar novo louvor.

---

## 3️⃣ Teste o Sistema

### Criar Louvor:
1. Clique em "Novo Louvor"
2. Preencha:
   - **Nome**: ex: "Graças Dou"
   - **Artista**: ex: "Church Band"
   - **Letra**: Cole a letra do louvor (com quebras de linha)
3. Clique "Criar"

### Gerar PowerPoint:
1. Localize o louvor na lista
2. Clique no botão "📊 Gerar PPT"
3. Arquivo `.pptx` baixa automaticamente

### Verificar Backend:
```powershell
curl http://localhost:3001/api/health
```

Deve retornar:
```json
{"status":"ok"}
```

---

## 4️⃣ Erros Comuns e Soluções

### ❌ "Porta 3001 em uso"
Vá para [ERRO-EADDRINUSE.md](ERRO-EADDRINUSE.md)
- Use o script `fix-porta-3001.ps1` ou `.bat`

### ❌ "Não conecta ao backend"
Vá para [ERRO-BACKEND-RAPIDO.md](ERRO-BACKEND-RAPIDO.md)
- Verifique se backend está rodando
- Abra novo terminal (não use o mesmo)

### ❌ "npm: comando não encontido"
Node.js não está instalado. Instale de: https://nodejs.org/

---

## 5️⃣ Quando Finalmente Funcionar

### Preparar para Vercel:
1. **Git**: Faz commit do código
   ```powershell
   cd c:\Users\Fernando\Documents\louvores
   git add .
   git commit -m "Sistema funcionando localmente"
   git push origin main
   ```

2. **Frontend no Vercel**:
   - Vá para vercel.com
   - Import seu projeto GitHub
   - Siga [VERCEL-QUICKSTART.md](VERCEL-QUICKSTART.md)

3. **Backend**:
   - Opção A: Deploy no Vercel (gratuito)
   - Opção B: Railway.app ou Render (recomendado para Node)

---

## 📋 Checklist Rápido

- [ ] PowerShell/CMD aberto **como ADMINISTRADOR**
- [ ] Backend rodando (comando `npm run dev` no backend/)
- [ ] Frontend rodando (comando `npm run dev` no frontend/, **novo terminal**)
- [ ] Navegador abrindo http://localhost:5173
- [ ] Sistema responsivo a cliques
- [ ] Consegue criar novo louvor
- [ ] Consegue gerar PPT
- [ ] Arquivo baixa corretamente

**Se tudo checked ✅** → Pronto para Vercel!

---

## 🆘 Precisa de Ajuda?

- **Script não funciona?** → Verifique se é ADMINISTRADOR
- **Porta ainda em uso?** → Reinicie o PC
- **Outro erro?** → Procure em:
  - [ERRO-BACKEND-RAPIDO.md](ERRO-BACKEND-RAPIDO.md)
  - [ERRO-EADDRINUSE.md](ERRO-EADDRINUSE.md)
  - [VISUAL-COMO-DEVE-FICAR.md](VISUAL-COMO-DEVE-FICAR.md)

**Tá funcionando?** Avisa! 🎉
