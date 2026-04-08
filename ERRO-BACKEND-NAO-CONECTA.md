# 🆘 Erro: Backend Não Conecta - Solução Rápida

## ❌ O Problema

```
Erro: "Não foi possível conectar ao servidor"
Causa: Backend não está rodando em http://localhost:3001
```

---

## ✅ Solução em 3 Passos

### PASSO 1️⃣ - Verificar Backend

Abra um **terminal NOVO** (não use os que já têm):

```powershell
cd c:\Users\Fernando\Documents\louvores\backend
```

### PASSO 2️⃣ - Instalar Dependências

```powershell
npm install
```

**Aguarde completar!** Vai aparecer `added X packages`

### PASSO 3️⃣ - Rodar o Backend

```powershell
npm run dev
```

**Procure por:**
```
🎵 Servidor rodando em http://localhost:3001
🚀 Ambiente: development
```

Se vir isso = ✅ **Backend está funcionando!**

---

## 🔀 Teste se Conecta

Em outro terminal:

```powershell
curl http://localhost:3001/api/health
```

Se retornar:
```json
{"status":"OK","timestamp":"..."}
```

✅ **Está funcionando!**

---

## 🆘 Se Ainda Não Funcionar

### Erro: "npm: não encontrado"

```
Solução:
1. Instale Node.js: https://nodejs.org
2. Reinicie o terminal
3. Tente novamente
```

### Erro: "Cannot find module"

```
Solução:
1. Verifique se está em: c:\Users\Fernando\Documents\louvores\backend
2. Execute: npm install (novamente)
3. Tente: npm run dev
```

### Erro: "Port 3001 is already in use"

```
Solução: Algum processo já está usando porta 3001
1. Feche todos os terminais
2. Reinicie o PC (opcional)
3. Tente novamente
```

### Erro: "TypeError: cannot read property 'run' of undefined"

```
Solução:
1. Delete pasta node_modules:
   rm -r node_modules
   
2. Delete package-lock.json:
   rm package-lock.json
   
3. Reinstale:
   npm install
```

---

## 📋 Checklist

Antes de tentar conectar no Frontend:

- [ ] Terminal aberto em: `backend/`
- [ ] Executado: `npm install` (completou)
- [ ] Executado: `npm run dev`
- [ ] Ver mensagem: "🎵 Servidor rodando em http://localhost:3001"
- [ ] Testar: `curl http://localhost:3001/api/health`
- [ ] Retornou: `{"status":"OK"...}`

---

## 🎯 Próximo Passo

Depois que Backend estiver rodando:

1. **Abra OUTRO terminal** (não feche o Backend!)
2. Vá para a pasta frontend:
   ```powershell
   cd c:\Users\Fernando\Documents\louvores\frontend
   npm run dev
   ```
3. Acesse: http://localhost:5173
4. **Pronto!** Frontend agora consegue conectar! ✅

---

## ⚠️ IMPORTANTE

**NUNCA feche o terminal do Backend!**

Você precisa de DOIS terminais abertos:

```
Terminal 1 (NUNCA fechar):
cd backend
npm run dev
↓
🎵 Servidor rodando em http://localhost:3001

Terminal 2 (NUNCA fechar):
cd frontend
npm run dev
↓
➜  Local:   http://localhost:5173/
```

---

## ✨ Se Conseguir Conectar

Vai funcionar 100%! Você poderá:

- ✅ Cadastrar louvores
- ✅ Gerar PowerPoints
- ✅ Fazer tudo que a app faz
- ✅ Sem erros!

---

**Conseguiu? Me avisa! 🎉**

Se continuar com erro, copie a mensagem exata de erro e me passa!
