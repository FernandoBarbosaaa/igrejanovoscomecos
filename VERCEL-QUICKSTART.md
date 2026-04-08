# ⚡ Deploy Vercel - Quick Start (5 min)

## 🎯 Objetivo

Colocar seu sistema de louvores online em Vercel gratuitamente!

---

## 🚀 3 Passos Rápidos

### 1️⃣ Conectar GitHub

```bash
# No seu projeto local:
git add .
git commit -m "Ready for Vercel"
git push origin main
```

### 2️⃣ Deploy Frontend (Automático)

1. Acesse: https://vercel.com
2. "New Project" → Conecte seu repo
3. Escolha pasta `frontend`
4. Deploy!

✅ **Frontend live em ~2 min!**

### 3️⃣ Deploy Backend (Opcional)

```bash
# Instalar CLI
npm install -g vercel

# Deploy
cd backend
vercel
```

✅ **Backend live em ~5 min!**

---

## 📊 Sua App Estará Em:

```
🌐 Frontend: https://seu-projeto.vercel.app
🔌 Backend: https://seu-backend.vercel.app
```

---

## ⚙️ Configurar API URL

1. **Backend URL:** Copie do Vercel
2. **Frontend Vercel → Settings → Env:**
   ```
   VITE_API_URL=https://seu-backend.vercel.app
   ```
3. **Redeploy frontend**

✅ Pronto!

---

## 🆘 Problemas?

Veja guia completo: [VERCEL.md](VERCEL.md)

---

**Status:** ✅ Pronto para produção! 🎉
