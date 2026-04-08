# Script para liberar porta 3001 e rodar backend
# Execute como ADMINISTRADOR

Write-Host "🔧 Verificando porta 3001..." -ForegroundColor Yellow
Write-Host ""

# Verificar se há processo na porta 3001
$netstatOutput = netstat -ano | Select-String ":3001"

if ($netstatOutput) {
    Write-Host "⚠️  Porta 3001 está em uso!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Processso encontrado:" -ForegroundColor Yellow
    Write-Host $netstatOutput
    Write-Host ""
    
    # Extrair PID
    $pid = [regex]::Matches($netstatOutput, '\d+$')[0].Value
    
    Write-Host "🔨 Matando processo PID: $pid" -ForegroundColor Yellow
    taskkill /PID $pid /F
    
    Write-Host ""
    Write-Host "✅ Porta liberada!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "✅ Porta 3001 está livre!" -ForegroundColor Green
    Write-Host ""
}

# Verificar se está na pasta backend
$currentPath = Get-Location
if (-not $currentPath.Path.EndsWith("backend")) {
    Write-Host "📁 Navegando para pasta backend..." -ForegroundColor Yellow
    cd backend
}

# Instalar dependências se necessário
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

# Rodar backend
Write-Host "🚀 Iniciando backend..." -ForegroundColor Green
Write-Host ""
npm run dev
