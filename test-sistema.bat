@echo off
REM Script para verificar Sistema de Louvores

echo.
echo 🔍 Verificando Sistema de Louvores...
echo.

REM Teste 1: Node instalado
echo 1️⃣ Verificando Node.js...
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
    echo ✅ Node.js instalado: %NODE_VERSION%
) else (
    echo ❌ Node.js não encontrado
    echo.
    echo Instale em: https://nodejs.org
    pause
    exit /b 1
)

REM Teste 2: Backend node_modules
echo.
echo 2️⃣ Verificando Backend...
if exist "backend\node_modules" (
    echo ✅ Backend dependencies instaladas
) else (
    echo ⚠️ Backend dependencies não encontradas
    echo.
    echo Instalando...
    cd backend
    call npm install
    cd ..
)

REM Teste 3: Frontend node_modules
echo.
echo 3️⃣ Verificando Frontend...
if exist "frontend\node_modules" (
    echo ✅ Frontend dependencies instaladas
) else (
    echo ⚠️ Frontend dependencies não encontradas
    echo.
    echo Instalando...
    cd frontend
    call npm install
    cd ..
)

REM Teste 4: Verificar Backend
echo.
echo 4️⃣ Verificando Backend em http://localhost:3001...
powershell -Command "try { $response = Invoke-WebRequest -Uri 'http://localhost:3001/api/health' -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop; if ($response.StatusCode -eq 200) { Write-Host '✅ Backend respondendo corretamente' } } catch { Write-Host '❌ Backend não está respondendo'; Write-Host '   Solução:'; Write-Host '   1. Abra um terminal:'; Write-Host '      cd backend && npm run dev'; Write-Host '   2. Aguarde: 🎵 Servidor rodando em http://localhost:3001' }"

REM Teste 5: Verificar Frontend
echo.
echo 5️⃣ Verificando Frontend em http://localhost:5173...
powershell -Command "try { $response = Invoke-WebRequest -Uri 'http://localhost:5173' -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop; if ($response.StatusCode -eq 200) { Write-Host '✅ Frontend respondendo corretamente' } } catch { Write-Host '❌ Frontend não está respondendo'; Write-Host '   Solução:'; Write-Host '   1. Abra um OUTRO terminal:'; Write-Host '      cd frontend && npm run dev'; Write-Host '   2. Aguarde: Local:   http://localhost:5173' }"

echo.
echo ═══════════════════════════════════════════════════
echo.
echo 🎯 Resumo:
echo   Backend:  http://localhost:3001
echo   Frontend: http://localhost:5173
echo.
echo Se ambos estão ✅, abra:
echo   👉 http://localhost:5173
echo.
echo ═══════════════════════════════════════════════════
echo.
pause
