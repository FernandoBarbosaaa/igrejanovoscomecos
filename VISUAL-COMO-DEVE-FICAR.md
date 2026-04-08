# 📺 Visual - Como Deve Ficar

## ✅ Tela Correta (Backend Rodando)

### Terminal Backend

```powershell
PS C:\Users\Fernando\Documents\louvores\backend> npm run dev

> louvores-api@1.0.0 dev
> nodemon src/app.js

[nodemon] 2.0.20
[nodemon] to restart at any time, type `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,json
[nodemon] starting `node src/app.js`

🎵 Servidor rodando em http://localhost:3001
🚀 Ambiente: development
Conectado ao banco de dados SQLite
Banco de dados inicializado com sucesso!
```

**✅ SE VER ISSO = FUNCIONA!**

---

### Terminal Frontend

```powershell
PS C:\Users\Fernando\Documents\louvores\frontend> npm run dev

vite v4.3.9 building for development...

➜  Local:   http://localhost:5173/
➜  press h to show help

VITE v4.3.9  ready in 456 ms

➜  Local:   http://localhost:5173/
```

**✅ SE VER ISSO = FUNCIONA!**

---

### No Navegador

1. Abra: http://localhost:5173
2. Vai aparecer:

```
║  🎵 Sistema de Louvores                              ║
║  Gerador automático de apresentações em PowerPoint   ║
║                                                      ║
║  ➕ ADICIONAR NOVO LOUVOR                             ║
║  ┌────────────────────────────────┐                 ║
║  │ Nome do Louvor: [          ]   │                 ║
║  │ Cantor: [                  ]   │                 ║
║  │ Letra: [                   ]   │                 ║
║  │ [Escolher Arquivo]             │                 ║
║  │ [✨ Criar Louvor]              │                 ║
║  └────────────────────────────────┘                 ║
```

**✅ SE VER ISSO = FUNCIONA!**

---

## ❌ Telas Incorretas (Erro)

### Terminal - Erro de Porta

```powershell
Error: listen EADDRINUSE :::3001
```

**Solução:** Porta 3001 já usada
- Feche outros processos
- Ou use outra porta

---

### Terminal - Erro de Módulo

```powershell
Error: Cannot find module 'express'
```

**Solução:** Faltam dependências
```powershell
npm install
```

---

### Terminal - Erro de Sintaxe

```powershell
SyntaxError: Unexpected token '{'
```

**Solução:** Problema no arquivo src/app.js
- Verifique se tem vírgula faltando
- Ou parêntese não fechado

---

### Navegador - Mensagem de Erro

```
❌ Aviso: Servidor backend não está respondendo
   corretamente
```

**Solução:** Backend não está rodando!
```powershell
cd backend
npm run dev
```

---

## 🎯 O Que Deve Ter Aberto

### Para Desenvolvimento Local

```
┌─────────────────────┐
│ TERMINAL 1          │
│ Backend rodando     │
│ Port: 3001          │
│ "npm run dev"       │
│ ✅ NUNCA FECHAR!    │
└─────────────────────┘

┌─────────────────────┐
│ TERMINAL 2          │
│ Frontend rodando    │
│ Port: 5173          │
│ "npm run dev"       │
│ ✅ NUNCA FECHAR!    │
└─────────────────────┘

┌─────────────────────┐
│ NAVEGADOR           │
│ localhost:5173      │
│ Sistema funcionando │
│ ✅ APP ABERTA!      │
└─────────────────────┘
```

---

## ✅ Teste de Conexão

### Via Navegador

1. Abra: http://localhost:3001/api/health
2. Deve aparecer:

```json
{
  "status": "OK",
  "timestamp": "2026-04-08T10:30:45.123Z"
}
```

### Via Terminal PowerShell

```powershell
curl http://localhost:3001/api/health
```

Deve retornar:

```
StatusCode        : 200
StatusDescription : OK
Content           : {"status":"OK","timestamp":"2026-04-08T..."}
```

---

## 🎯 Se Ficar Assim, Está Perfeito!

```
Terminal 1:  Backend rodando, sem erros
Terminal 2:  Frontend rodando, sem erros
Navegador:   App abre, tudo funciona
API:         Responde corretamente
```

**PRONTO!** Sistema funcional 100%! 🎉

---

## 🆘 Como Debugar

Se algo não funciona:

1. **Verifique Terminal 1:**
   ```
   🎵 Servidor rodando em http://localhost:3001
   ```
   Se não tiver, backend não iniciou!

2. **Verifique Terminal 2:**
   ```
   ➜  Local:   http://localhost:5173/
   ```
   Se não tiver, frontend não iniciou!

3. **Abra Console do Navegador (F12):**
   Se tiver erros vermelhos, algo está errado!

4. **Teste Backend:**
   ```powershell
   curl http://localhost:3001/api/health
   ```
   Se falhar, backend não está respondendo!

---

**Conseguiu? Fala comigo! 🎉**
