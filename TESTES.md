# 🧪 Guia de Testes e Validação

## ✅ Teste de Inicialização

### 1. Backend iniciando corretamente?

```bash
# Você deve ver:
cd backend && npm run dev

🎵 Servidor rodando em http://localhost:3001
🚀 Ambiente: development
```

✅ **Checklist:**
- [ ] Mensagem "Servidor rodando" aparece
- [ ] Banco de dados inicializa
- [ ] Nenhum erro no console

### 2. Frontend iniciando corretamente?

```bash
cd frontend && npm run dev

➜  Local:   http://localhost:5173/
```

✅ **Checklist:**
- [ ] Vite compila sem erros
- [ ] URL localhost:5173 funciona
- [ ] Página carrega sem 404

### 3. API respondendo?

```bash
# Abra o navegador e acesse:
http://localhost:3001/api/health

# Você deve ver:
{"status":"OK","timestamp":"2024-04-08T..."}
```

✅ **Checklist:**
- [ ] Resposta JSON válida
- [ ] Status code 200
- [ ] Timestamp atual

---

## 🎯 Testes de Funcionalidade

### Teste 1: Criar Louvor

**Passos:**
1. Acesse `http://localhost:5173`
2. Preencha:
   - Nome: "Louvor de Teste"
   - Cantor: "Artista Teste"
   - Letra: "Primeira linha\nSegunda linha\nTerceira linha"
3. Clique em "✨ Criar Louvor"

**Validações:**
- [ ] Formulário limpa após envio
- [ ] Mensagem "Louvor criado com sucesso"
- [ ] Louvor aparece na lista abaixo
- [ ] Dados aparecem corretamente

**Verificação Backend:**
```bash
# No console do backend deve aparecer:
POST /api/louvores

# Verifique banco de dados:
# arquivo: backend/database/louvores.db existe?
```

---

### Teste 2: Upload de Áudio

**Preparação:**
- Tenha um arquivo MP3/WAV (pode ser qualquer um)

**Passos:**
1. No formulário, clique em "Escolher arquivo"
2. Selecione um arquivo de áudio
3. Preencha outros campos
4. Clique em "✨ Criar Louvor"

**Validações:**
- [ ] Arquivo é aceito (não mostra erro)
- [ ] Texto "✓ arquivo.mp3" aparece
- [ ] Louvor é criado normalmente
- [ ] Arquivo está em `backend/uploads/`

---

### Teste 3: Listagem de Louvores

**Passos:**
1. Crie 2-3 louvores
2. Observe a lista abaixo

**Validações:**
- [ ] Todos os louvores aparecem
- [ ] Ordem: mais recentes primeiro
- [ ] Cards mostram nome, cantor, prévia
- [ ] Botões estão visíveis

---

### Teste 4: Gerar PowerPoint

**Passos:**
1. Na lista, clique em "📊 Gerar Apresentação"
2. Aguarde (pode levar alguns segundos)
3. Download deve ocorrer automaticamente

**Validações:**
- [ ] Botão muda para "⏳ Gerando..."
- [ ] Arquivo .pptx é criado
- [ ] Download é feito automaticamente
- [ ] Arquivo está em `backend/presentations/`

**Verificação do PowerPoint:**
- [ ] Abra o arquivo baixado
- [ ] Slide 1: Capa com nome do louvor grande
- [ ] Slide 2+: Letra dividida em partes
- [ ] Fundo preto em todos os slides
- [ ] Texto branco legível

---

### Teste 5: Deletar Louvor

**Passos:**
1. Clique em "🗑️ Deletar" em um louvor
2. Confirme na caixa de diálogo

**Validações:**
- [ ] Louvor é removido da lista
- [ ] Mensagem de sucesso aparece
- [ ] Frontend atualiza automaticamente

---

### Teste 6: Responsividade

**Desktop (1920px+):**
```
[Abrir DevTools: F12]
Redimensionar para:
```

- [ ] 1920x1080 - Layout perfeito
- [ ] 1280x720 - Sem problemas

**Tablet (768px+):**
- [ ] 768x1024 - Cards em 2 colunas
- [ ] Botões acessíveis

**Mobile (<767px):**
- [ ] 375x667 - Cards em 1 coluna
- [ ] Texto legível
- [ ] Botões clicáveis

---

### Teste 7: Animações e UX

**Verificações:**
- [ ] Fade-in quando louvor é criado
- [ ] Loading spinner ao gerar PPT
- [ ] Mensagens aparecem e desaparecem
- [ ] Hover effects nos botões
- [ ] Transições suaves

---

## 🔍 Testes de Integração

### API Response Tests

```bash
# Test 1: GET all louvores
curl http://localhost:3001/api/louvores

# Deve retornar: []

# Test 2: Create louvor
curl -X POST http://localhost:3001/api/louvores \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teste","cantor":"Artista","letra":"Letra"}'

# Deve retornar: {louvor_id, dados...}
```

---

## 🆘 Testes de Erro

### Teste: Validação de Formulário

**Passos:**
1. Tente submeter formulário sem preencher campos

**Validação:**
- [ ] Alerta vermelho aparece
- [ ] Mensagem clara
- [ ] Louvor não é criado

### Teste: Backend Offline

**Passos:**
1. Encerre backend (Ctrl+C)
2. Tente criar louvor no frontend

**Validação:**
- [ ] Erro "Não foi possível conectar" aparece
- [ ] App não quebra
- [ ] Usuário entende o problema

### Teste: Arquivo Inválido

**Passos:**
1. Tente upload de arquivo não-áudio (ex: .txt)

**Validação:**
- [ ] Erro aparece
- [ ] Arquivo não é enviado
- [ ] Mensagem clara

---

## 📊 Performance Tests

### Teste: Múltiplos Louvores

**Passos:**
1. Crie 10+ louvores
2. Observe performance

**Validação:**
- [ ] Lista carrega rápido
- [ ] Sem travamentos
- [ ] Scroll suave
- [ ] Memory stable

### Teste: PPT Grande

**Passos:**
1. Crie louvor com letra bem longa (500+ linhas)
2. Gere apresentação

**Validação:**
- [ ] PPT é gerado (pode levar mais tempo)
- [ ] Arquivo tem muitos slides
- [ ] Formatação mantida

---

## ✅ Checklist Final de Validação

### Funcionalidade
- [ ] ✅ Criar louvor
- [ ] ✅ Listar louvores
- [ ] ✅ Deletar louvor
- [ ] ✅ Upload áudio
- [ ] ✅ Gerar PPT
- [ ] ✅ Download automático

### Interface
- [ ] ✅ Desktop responsivo
- [ ] ✅ Tablet responsivo
- [ ] ✅ Mobile responsivo
- [ ] ✅ Tema escuro
- [ ] ✅ Animações suaves
- [ ] ✅ Alertas claros

### Backend
- [ ] ✅ API respondendo
- [ ] ✅ Banco de dados OK
- [ ] ✅ Erros tratados
- [ ] ✅ CORS funcionando
- [ ] ✅ Upload funcionando

### Performance
- [ ] ✅ Carregamento rápido
- [ ] ✅ Geração PPT rápida
- [ ] ✅ Sem memory leaks
- [ ] ✅ Scroll smooth

---

## 🐛 Registrar Bugs

Se encontrar algum problema:

1. **Anote:**
   - O que tentou fazer
   - O que esperava
   - O que aconteceu
   - Capturas de tela/erro

2. **Verifique:**
   - Console do navegador (F12)
   - Terminal do backend
   - Terminal do frontend

3. **Reporte:**
   - Descreva com clareza
   - Inclua passos de reprodução
   - Anexe logs/erros

---

## ✨ Parabéns!

Se todos os testes passarem, você tem um **Sistema de Louvores totalmente funcional!** 🎉

---

**Próximos passos:**
1. ✅ Testar com dados reais
2. ✅ Coletar feedback
3. ✅ Fazer pequenos ajustes
4. ✅ Deploy em produção

🎵 **Aproveite o sistema e aproveite bem!**
