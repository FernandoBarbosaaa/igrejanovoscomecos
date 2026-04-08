# ❌ Erro: EADDRINUSE - Porta 3001 em Uso

## 🎯 O Problema

```
Error: listen EADDRINUSE :::3001
errno: -4091
syscall: 'listen'
port: 3001
```

**Significado:** Algo já está usando a porta 3001!

---

## ✅ Solução Rápida (Windows)

### OPÇÃO 1: Encontrar e Matar o Processo

**1️⃣ Abra PowerShell como ADMINISTRADOR**

```powershell
# Clique com botão direito no PowerShell
# Escolha "Run as Administrator"
```

**2️⃣ Execute este comando:**

```powershell
# Encontrar processo na porta 3001
netstat -ano | findstr :3001
```

**Vai aparecer algo como:**
```
TCP    0.0.0.0:3001    LISTENING    12345
```

Anote o número no final (PID = 12345)

**3️⃣ Mate o processo:**

```powershell
# Substitua 12345 pelo número que viu acima
taskkill /PID 12345 /F
```

**Deve aparecer:**
```
SUCCESS: The process with PID 12345 has been terminated.
```

**4️⃣ Agora tente rodar o backend:**

```powershell
cd c:\Users\Fernando\Documents\louvores\backend
npm run dev
```

✅ **Deve funcionar agora!**

---

## ✅ Solução - OPÇÃO 2: Fechar Todos os Terminais

Às vezes há processos filho pendentes. Solução simples:

**1️⃣ Feche TODOS os terminais abertos**

**2️⃣ Feche VS Code completamente**

**3️⃣ Reinicie seu PC** (opcional, mas garante)

**4️⃣ Abra um terminal NOVO**

```powershell
cd c:\Users\Fernando\Documents\louvores\backend
npm install
npm run dev
```

---

## ✅ Solução - OPÇÃO 3: Usar Outra Porta

Se nenhuma solução acima funcionar, use outra porta:

**1️⃣ Abra `backend/.env`:**

```env
PORT=3001
```

**2️⃣ Mude para:**

```env
PORT=3002
```

**3️⃣ Salve e rode:**

```powershell
npm run dev
```

**4️⃣ Depois você precisa atualizar Frontend:**

- Vá em: `frontend/.env.local`
- Mude: `VITE_API_URL=http://localhost:3002`

---

## 📋 Passo a Passo - Solução Completa

### Se Usar OPÇÃO 1 (Recomendado):

```powershell
# 1. Abra PowerShell como ADMIN
# 2. Execute:
netstat -ano | findstr :3001

# 3. Viu um número? Copie!
# 4. Execute (substitua 12345):
taskkill /PID 12345 /F

# 5. Agora rode:
cd c:\Users\Fernando\Documents\louvores\backend
npm run dev

# 6. Procure por:
# 🎵 Servidor rodando em http://localhost:3001
```

---

## 🆘 Ainda Não Funcionar?

### Teste se Porta Está Livre:

```powershell
# Teste depois que matou o processo
Test-NetConnection -ComputerName localhost -Port 3001 -ErrorAction SilentlyContinue

# Se retornar "False" = Porta está LIVRE ✅
# Se retornar "True" = Porta ainda em uso ❌
```

### Nuclear Option (Último Recurso):

```powershell
# Reiniciar seu PC garante que libera a porta
# Depois:
cd c:\Users\Fernando\Documents\louvores\backend
npm run dev
```

---

## ✨ Quando Funcionar

Você vai ver:

```
🎵 Servidor rodando em http://localhost:3001
🚀 Ambiente: development
Conectado ao banco de dados SQLite
Banco de dados inicializado com sucesso!
```

---

## 🎯 Quiz Rápido

**P: Como saber se a porta 3001 está livre?**
R: Execute: `netstat -ano | findstr :3001`
Se não retornar nada = LIVRE ✅

**P: Como matar um processo?**
R: `taskkill /PID <numero> /F`

**P: E se não consigo achar o processo?**
R: Reinicia o PC (garante 100%)

---

**Conseguiu? Me avisa qual solução funcionou! 🎉**
