#!/bin/bash

echo "🔍 Verificando Sistema de Louvores..."
echo ""

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Teste 1: Node instalado
echo "1️⃣  Verificando Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✅ Node.js instalado: $NODE_VERSION${NC}"
else
    echo -e "${RED}❌ Node.js não encontrado${NC}"
    echo "   Instale em: https://nodejs.org"
    exit 1
fi

# Teste 2: Backend node_modules
echo ""
echo "2️⃣  Verificando Backend..."
if [ -d "backend/node_modules" ]; then
    echo -e "${GREEN}✅ Backend dependencies instaladas${NC}"
else
    echo -e "${YELLOW}⚠️  Backend dependencies não encontradas${NC}"
    echo "   Executando: npm install"
    cd backend
    npm install
    cd ..
fi

# Teste 3: Frontend node_modules
echo ""
echo "3️⃣  Verificando Frontend..."
if [ -d "frontend/node_modules" ]; then
    echo -e "${GREEN}✅ Frontend dependencies instaladas${NC}"
else
    echo -e "${YELLOW}⚠️  Frontend dependencies não encontradas${NC}"
    echo "   Executando: npm install"
    cd frontend
    npm install
    cd ..
fi

# Teste 4: Verificar Backend rodando
echo ""
echo "4️⃣  Verificando Backend em http://localhost:3001..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/api/health 2>/dev/null)

if [ "$RESPONSE" == "200" ]; then
    echo -e "${GREEN}✅ Backend respondendo corretamente${NC}"
else
    echo -e "${RED}❌ Backend não está respondendo${NC}"
    echo "   Solução:"
    echo "   1. Abra um terminal:"
    echo "      cd backend && npm run dev"
    echo "   2. Aguarde: '🎵 Servidor rodando em http://localhost:3001'"
fi

# Teste 5: Verificar Frontend rodando
echo ""
echo "5️⃣  Verificando Frontend em http://localhost:5173..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5173 2>/dev/null)

if [ "$RESPONSE" == "200" ]; then
    echo -e "${GREEN}✅ Frontend respondendo corretamente${NC}"
else
    echo -e "${RED}❌ Frontend não está respondendo${NC}"
    echo "   Solução:"
    echo "   1. Abra um OUTRO terminal:"
    echo "      cd frontend && npm run dev"
    echo "   2. Aguarde: 'Local:   http://localhost:5173'"
fi

echo ""
echo "═══════════════════════════════════════════════════"
echo ""
echo "🎯 Resumo:"
echo "  Backend:  http://localhost:3001"
echo "  Frontend: http://localhost:5173"
echo ""
echo "Se ambos estão ✅, abra:"
echo "  👉 http://localhost:5173"
echo ""
echo "═══════════════════════════════════════════════════"
