#!/bin/bash

echo "🚀 Deploy Automático para Vercel"
echo ""

# Verificar se está no branch main
branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$branch" != "main" ]; then
    echo "❌ Você deve estar no branch 'main' para fazer deploy"
    git checkout main
fi

# Push para GitHub
echo "📤 Enviando para GitHub..."
git add .
git commit -m "Deploy: $(date '+%d/%m/%Y %H:%M:%S')" || echo "Nada novo para fazer commit"
git push -u origin main

# Instalar Vercel CLI se não estiver instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "✅ Código enviado para GitHub!"
echo "🎨 Frontend vai fazer deploy automácamente em Vercel"
echo ""
echo "Para fazer deploy do backend:"
echo "  cd backend"
echo "  vercel"
echo ""
echo "🔗 URLs:"
echo "  Frontend: https://seu-projeto-frontend.vercel.app"
echo "  Backend: https://seu-projeto-backend.vercel.app"
