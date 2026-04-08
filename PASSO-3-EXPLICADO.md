# 📚 Passo 3 Explicado - Configurar Variáveis de Ambiente

## 🎯 O Que é o Passo 3?

Depois que você faz deploy do **Frontend** em Vercel, você precisa **conectar a API do Backend**.

O Passo 3 é exatamente isso!

---

## 🔗 Por Que Precisa do Passo 3?

```
Frontend (React)
     ↓
Precisa falar com a API
     ↓
Mas como sabe onde está a API?
     ↓
Resposta: Variáveis de Ambiente! 📍
```

---

## 📝 Passo 3 - Passo a Passo Visual

### Cenário 1: Se fizer Deploy só do Frontend (Mais comum)

```
1. Frontend está em: https://seu-projeto.vercel.app ✅
2. Backend está em: http://localhost:3001 🏠 (seu PC)

Problema: Frontend não conhece URL do Backend!
Solução: Configurar VITE_API_URL
```

#### Como Fazer:

**1️⃣ Abra Vercel Dashboard**
```
https://vercel.com → Projects → seu-projeto-frontend
```

**2️⃣ Vá em Settings (Engrenagem)**
```
Configurações → Environment Variables
```

**3️⃣ Adicione uma nova variável**
```
Nome:  VITE_API_URL
Valor: http://localhost:3001
```

Se você está testando localmente, use `http://localhost:3001`

**4️⃣ Salve e Redeploy**
```
Volte para "Deployments"
Clique no último deploy
Clique "Redeploy"
```

✅ **Pronto!** Frontend agora sabe onde está o Backend!

---

### Cenário 2: Se fizer Deploy do Backend também (Avançado)

```
1. Frontend em:  https://seu-projeto.vercel.app ✅
2. Backend em:   https://seu-backend.vercel.app ✅

Como conectar?
↓
Mesma coisa, mas com URL do Backend!
```

#### Como Fazer:

**1️⃣ Deploy Backend primeiro**
```bash
npm install -g vercel
cd backend
vercel
# Ele vai dar URL como: https://seu-backend.vercel.app
# Copie essa URL!
```

**2️⃣ Configure no Frontend**
```
Vercel Dashboard → Frontend → Settings → Environment Variables
Nome:  VITE_API_URL
Valor: https://seu-backend.vercel.app
```

**3️⃣ Redeploy Frontend**
```
Volte para "Deployments"
Clique "Redeploy"
```

✅ **Agora tudo está conectado na nuvem!**

---

## 🎯 Resumo Passo 3

| O que fazer | Onde | Qual Valor |
|------------|------|-----------|
| Abrir dashboard | https://vercel.com | - |
| Ir em Settings | Frontend Project → Settings | - |
| Environment Variables | Settings → Environment Variables | - |
| Adicionar variável | + Add | VITE_API_URL |
| Valor da variável | Input | http://localhost:3001 (ou URL do backend) |
| Salvar e Redeploy | Deployments → Redeploy | - |

---

## ❓ Dúvidas Comuns

### "Por que precisa fazer isso?"

Porque o Frontend precisa saber onde conectar na API!

Sem isso:
```
❌ Frontend: "Onde está a API?"
❌ Error: Cannot GET /api/louvores
```

Com VITE_API_URL:
```
✅ Frontend: "API está em http://localhost:3001"
✅ Conecta corretamente!
```

### "Qual valor devo colocar?"

Depende de onde está o Backend:

```
Se Backend local:
VITE_API_URL = http://localhost:3001

Se Backend em Vercel:
VITE_API_URL = https://seu-backend.vercel.app

Se Backend em Railway:
VITE_API_URL = https://seu-backend.railway.app
```

### "Preciso fazer isso sempre?"

Você configura **UMA VEZ** no Vercel, e pronto!

Depois:
- Push → GitHub
- Vercel redeploya automaticamente
- Continua funcionando!

---

## 📸 Screenshots dos Passos

```
1. Dashboard Vercel
   ┌─────────────────────────────┐
   │ Projects                    │
   │ [seu-projeto]  ← Clique     │
   └─────────────────────────────┘

2. Página do Projeto
   ┌─────────────────────────────┐
   │ ⚙️ Settings ← Clique        │
   │ 📊 Analytics                │
   │ 🔗 Domains                  │
   └─────────────────────────────┘

3. Settings
   ┌─────────────────────────────┐
   │ Environment Variables ←     │
   │ [+ Add]                     │
   │ VITE_API_URL: ...           │
   └─────────────────────────────┘

4. Add Variable
   ┌─────────────────────────────┐
   │ Name: VITE_API_URL          │
   │ Value: http://localhost:... │
   │ [Save]                      │
   └─────────────────────────────┘
```

---

## ✅ Checklist Passo 3

- [ ] Abru Vercel Dashboard
- [ ] Fui em Settings do projeto
- [ ] Cliquei em "Environment Variables"
- [ ] Adicionei VITE_API_URL
- [ ] Coloquei o valor correto
- [ ] Salvei
- [ ] Fiz "Redeploy"
- [ ] Frontend conectou no Backend ✅

---

## 🎉 Depois do Passo 3

Seu Frontend agora:
- ✅ Sabe onde encontr a API
- ✅ Consegue cadastrar louvores
- ✅ Consegue gerar PowerPoints
- ✅ Está totalmente funcional! 

---

**Ficou claro agora? 😊**

Se ainda tiver dúvida, pode me chamar!
