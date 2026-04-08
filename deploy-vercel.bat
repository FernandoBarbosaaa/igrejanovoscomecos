@echo off
echo 🚀 Deploy Automático para Vercel
echo.

REM Verificar se está no branch main
git rev-parse --abbrev-ref HEAD > tmp.txt
set /p branch=<tmp.txt
del tmp.txt

if not "%branch%"=="main" (
    echo ❌ Você deve estar no branch 'main' para fazer deploy
    git checkout main
)

REM Push para GitHub
echo 📤 Enviando para GitHub...
git add .
git commit -m "Deploy: %date% %time%" 2>nul || echo Nada novo para fazer commit
git push -u origin main

REM Instalar Vercel CLI
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 📦 Instalando Vercel CLI...
    npm install -g vercel
)

echo.
echo ✅ Código enviado para GitHub!
echo 🎨 Frontend vai fazer deploy automamente em Vercel
echo.
echo Para fazer deploy do backend:
echo   cd backend
echo   vercel
echo.
echo 🔗 URLs:
echo   Frontend: https://seu-projeto-frontend.vercel.app
echo   Backend: https://seu-projeto-backend.vercel.app
