# ⚡ Passo 3 - Clique por Clique (Super Rápido!)

## 🎯 Objetivo
Ensinar ao Frontend onde está o Backend

## ⏱️ Tempo
2 minutos!

---

## 📍 Os 5 Cliques

### CLIQUE 1️⃣ 
Abra: https://vercel.com

```
Você vai ver:
┌─────────────────────────┐
│  Vercel Dashboard       │
│  Projects:              │
│  □ seu-projeto-frontend │
└─────────────────────────┘
```

### CLIQUE 2️⃣
Clique no seu projeto Frontend:
```
seu-projeto-frontend
      ↓ CLIQUE
```

### CLIQUE 3️⃣
Procure no menu lateral pela engrenagem ⚙️ (Settings):

```
Ao lado esquerdo:
Deployments
Analytics
Settings  ← AQUI!
Domains
```

**Clique em Settings**

### CLIQUE 4️⃣
Procure por "Environment Variables" (Variáveis de Ambiente):

```
Você verá várias abas:
General
Git
Environment Variables  ← AQUI!
```

**Clique em Environment Variables**

### CLIQUE 5️⃣
Clique no botão "+ Add":

```
Environment Variables
[+ Add]  ← CLIQUE
```

---

## ✍️ Preenchimento

### Tela que vai aparecer:

```
┌──────────────────────────────┐
│ Add an Environment Variable  │
├──────────────────────────────┤
│ Name:                        │
│ [_____________________]      │
│                              │
│ Value:                       │
│ [_____________________]      │
│                              │
│           [Save] [Cancel]    │
└──────────────────────────────┘
```

### Preencha assim:

```
Name:  VITE_API_URL
Value: http://localhost:3001
```

### Depois clique [Save]

---

## 🔄 Redeploy (Ultra Importante!)

Depois de salvar, volta para "Deployments"

```
Menu esquerdo → Deployments
```

Vai ver seu último deploy:

```
┌─────────────────────┐
│ Latest Deployment   │
│ ✅ seu-projeto      │
│ [⋮ More]            │
└─────────────────────┘
```

Clique nos 3 pontinhos [⋮ More]:

```
┌─────────────────────┐
│ Rebuild             │
│ Redeploy  ← CLIQUE! │
│ View Logs           │
└─────────────────────┘
```

**Clique em "Redeploy"**

---

## ⏳ Aguarde

```
Status vai mudar:

🔄 Building...
   ↓
🔄 Deploying...
   ↓
✅ Ready
```

Pronto! Seu Frontend agora sabe onde está o Backend! 🎉

---

## ✅ Como Saber se Funcionou?

Abra seu Frontend:
```
https://seu-projeto.vercel.app
```

Preencha um louvor de teste:
- Nome: "Teste"
- Cantor: "Artista"
- Letra: "Uma linha"

Clique em "Criar"

Se aparecer: **"Louvor criado com sucesso"** ✅

**FUNCIONOU!** 🎉

---

## 🆘 Se Não Funcionou

### Erro: "Cannot GET /api/louvores"

```
Solução:
1. Verifique se backend está rodando:
   http://localhost:3001/api/health
   
2. Se não, abra terminal e rode:
   cd backend
   npm run dev
   
3. Volta no Vercel e redeploy novamente
```

### Erro: "CORS Error"

```
Solução:
Você pode precisar permitir no Backend:
backend/.env → CORS_ORIGIN
```

---

## 📝 Resumo Total

```
1. Abra Vercel.com ✅
2. Clique no projeto ✅
3. Vá em Settings ✅
4. Vá em Environment Variables ✅
5. Clique [+ Add] ✅
6. Preencha:
   Name:  VITE_API_URL
   Value: http://localhost:3001
7. Clique [Save] ✅
8. Vá em Deployments ✅
9. Clique [Redeploy] ✅
10. Aguarde terminar ✅
11. PRONTO! 🎉
```

---

## 🎯 Próximo Passo

Pronto! Agora seu Frontend consegue falar com o Backend!

Você pode:
- ✅ Cadastrar louvores
- ✅ Gerar PowerPoints
- ✅ Fazer tudo que a app faz

**Divirta-se! 🎵**

---

Dúvida? Me chamaaaa! 😊
