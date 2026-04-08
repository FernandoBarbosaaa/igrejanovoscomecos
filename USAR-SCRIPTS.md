# 🔧 Como Usar os Scripts de Correção

## Opção 1: Script PowerShell (Recomendado)

**Passo 1:** Abra PowerShell como ADMINISTRADOR
- Clique direito no Windows → "Windows PowerShell (Admin)" ou "Terminal (Admin)"

**Passo 2:** Execute este comando:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force; &'c:\Users\Fernando\Documents\louvores\fix-porta-3001.ps1'
```

**Pronto!** O script vai:
- ✅ Verificar a porta 3001
- ✅ Matar o processo se necessário
- ✅ Instalar dependências (se faltarem)
- ✅ Rodar o backend automaticamente

---

## Opção 2: Script Batch (Windows)

**Passo 1:** Abra `Prompt de Comando` como ADMINISTRADOR
- Clique direito no Windows → "Prompt de Comando (Admin)"

**Passo 2:** Execute:
```batch
c:\Users\Fernando\Documents\louvores\fix-porta-3001.bat
```

**Pronto!** Mesmo procedimento automático

---

## ⚠️ Importante

- **SEMPRE execute COMO ADMINISTRADOR** (sem entrar especial, não funciona)
- Os scripts são **seguros** - só fazem o que precisa
- Se perguntar sobre executar script: clique sim/allow

---

## 👀 O que Você Vai Ver

Se tudo correr bem:
```
✅ Porta 3001 está livre!

🚀 Iniciando backend...

> backend@1.0.0 dev
> nodemon src/app.js

[nodemon] 2.0.20
[nodemon] to restart at any time, type `rs`
[nodemon] watching path(s): src/**
[nodemon] watching extensions: js,json
🎵 Servidor rodando em http://localhost:3001
```

**Pronto! Backend está rodando! 🎉**

---

## ❌ Se der erro

1. **"Access Denied"** → Execute COMO ADMINISTRADOR
2. **"Cannot find network file"** → Verifique se os arquivos existem na pasta
3. **"Connection refused"** → Ainda há outro processo → tente Option 3 em ERRO-EADDRINUSE.md

**Precisa de ajuda?** Me avisa qual erro! 😊
