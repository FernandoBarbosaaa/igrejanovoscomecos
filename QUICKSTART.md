# Sistema de Louvores - Guia Rápido de Início

## ⚡ Inicialização Rápida

### Opção 1: Manualmente (Recomendado para Desenvolvimento)

#### Terminal 1 - Instalar e rodar o Backend

```powershell
cd c:\Users\Fernando\Documents\louvores\backend
npm install
npm run dev
```

#### Terminal 2 - Instalar e rodar o Frontend

```powershell
cd c:\Users\Fernando\Documents\louvores\frontend
npm install
npm run dev
```

#### Acesse no navegador:
```
http://localhost:5173
```

---

### Opção 2: Scripts Automáticos (Windows)

Duplo-clique em:
```
setup.bat
```

Isso vai instalar automaticamente todas as dependências!

---

## 📋 Checklist de Funcionamento

Após iniciar, verifique:

- [ ] Backend rodando em `http://localhost:3001/api/health` (deve mostrar `{"status":"OK"}`)
- [ ] Frontend acessível em `http://localhost:5173`
- [ ] Formulário de adicionar louvor aparece normalmente
- [ ] Botões responsivos (sem erros no console do navegador)

---

## 🎯 Teste Rápido

1. **Adicione um louvor de teste:**
   - Nome: Graciosa Deus
   - Cantor: Bruna Olly
   - Letra: (copie do arquivo EXEMPLO.md)

2. **Gere a apresentação:**
   - Clique em "📊 Gerar Apresentação"
   - Aguarde o download

3. **Abra o arquivo PowerPoint:**
   - Verifique os slides
   - Confirme formatação correta

---

## 🆘 Problemas Comuns

### "Cannot GET /api/louvores"
❌ Backend não está rodando
✅ Solução: Certifique-se que o backend está rodando em http://localhost:3001

### "Failed to fetch"
❌ CORS bloqueando requisição
✅ Solução: Verificar se a porta está correta (.env)

### "Erro: Apenas arquivos de áudio são permitidos"
❌ Arquivo não é áudio válido
✅ Solução: Use MP3, WAV ou OGG

### PPT não é criado
❌ Permissões insuficientes nas pastas
✅ Solução: Criar manualmente `backend/presentations` e `backend/uploads`

---

## 📚 Próximos Passos

- [ ] Cadastrar múltiplos louvores
- [ ] Testar download de PowerPoints
- [ ] Adicionar áudios aos louvores
- [ ] Customizar cores/tema se desejado

---

## 🔗 Links Úteis

- Frontend: http://localhost:5173
- Backend: http://localhost:3001
- API Docs: http://localhost:3001/api/health

---

**Dúvidas?** Consulte o `README.md` para mais detalhes!
