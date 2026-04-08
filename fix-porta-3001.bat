@echo off
REM Script para liberar porta 3001 e rodar backend
REM EXECUTE COMO ADMINISTRADOR!

echo.
echo 🔧 Verificando porta 3001...
echo.

REM Verificar se há processo na porta 3001
for /f "tokens=5" %%A in ('netstat -ano ^| findstr :3001') do set PID=%%A

if defined PID (
    echo ⚠️ Porta 3001 está em uso! PID: %PID%
    echo.
    echo 🔨 Matando processo...
    taskkill /PID %PID% /F
    echo.
    echo ✅ Porta liberada!
    echo.
    timeout /t 2
) else (
    echo ✅ Porta 3001 está livre!
    echo.
)

REM Navegar para backend
cd backend

REM Instalar dependências se necessário
if not exist "node_modules" (
    echo.
    echo 📦 Instalando dependências...
    echo.
    call npm install
)

REM Rodar backend
echo.
echo 🚀 Iniciando backend...
echo.
call npm run dev
