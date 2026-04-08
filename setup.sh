#!/bin/bash

echo "🎵 Iniciando Sistema de Louvores..."
echo ""

# Instalar dependências do backend
echo "📦 Instalando dependências do backend..."
cd backend
npm install

# Instalar dependências do frontend
echo "📦 Instalando dependências do frontend..."
cd ../frontend
npm install

echo ""
echo "✅ Instalação concluída!"
echo ""
echo "🚀 Para iniciar o servidor:"
echo ""
echo "   Terminal 1 - Backend:"
echo "   cd backend && npm run dev"
echo ""
echo "   Terminal 2 - Frontend:"
echo "   cd frontend && npm run dev"
echo ""
echo "   Depois acesse: http://localhost:5173"
