# 🔄 CI/CD - Continuous Integration & Deployment

## Workflows Configurados

### ✅ Frontend Build
- ✅ Roda em cada push para `main` e `develop`
- ✅ Instala dependências
- ✅ Faz build com Vite
- ✅ Verifica se dist/ foi criada

### ✅ Backend Check
- ✅ Roda em cada push para `main` e `develop`
- ✅ Instala dependências
- ✅ Testa inicialização do app
- ✅ Valida package.json

---

## 🔗 GitHub Actions

Os workflows estão em `.github/workflows/`:

```
.github/
└── workflows/
    ├── frontend-build.yml
    └── backend-build.yml
```

---

## 📊 Status

Ver status em: `https://github.com/seu-usuario/louvores/actions`

---

## 🚀 Deployment Automático

Quando você faz push:

1. **GitHub Actions** roda testes
2. **Vercel** detecta mudanças
3. **Deploy automático** se tudo passar

```
git push → GitHub Actions testa → Vercel deploya
```

---

## ✅ Next Steps

```bash
# 1. Fazer push
git push origin main

# 2. Verificar Actions
# GitHub → Actions → Ver status

# 3. Vercel faz deploy automático
# Vercel Dashboard → Deployments
```

---

Status: ✅ **CI/CD Configurado**
