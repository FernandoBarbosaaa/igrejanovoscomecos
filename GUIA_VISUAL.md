# 🎵 Sistema de Louvores - Guia Visual Rápido

## 🚀 Lançamento em 3 Passos

### Passo 1: Abra 2 Terminais

```
Terminal 1:
cd c:\Users\Fernando\Documents\louvores\backend
npm install
npm run dev

Aguarde aparecer:
🎵 Servidor rodando em http://localhost:3001
```

```
Terminal 2:
cd c:\Users\Fernando\Documents\louvores\frontend
npm install  
npm run dev

Aguarde aparecer:
➜  Local:   http://localhost:5173/
```

### Passo 2: Abra o Navegador

Clique aqui: **[http://localhost:5173](http://localhost:5173)**

Você verá:

```
╔════════════════════════════════════════════════════════════╗
║  🎵 Sistema de Louvores                                    ║
║  Gerador automático de apresentações em PowerPoint         ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║  ➕ ADICIONAR NOVO LOUVOR                                   ║
║  ┌──────────────────────────────────────────────────────┐  ║
║  │ Nome do Louvor *                                      │  ║
║  │ [_________________________________]                  │  ║
║  │                                                       │  ║
║  │ Cantor/Banda *                                        │  ║
║  │ [_________________________________]                  │  ║
║  │                                                       │  ║
║  │ Letra Completa *                                      │  ║
║  │ [_________________________________]                  │  ║
║  │ [_________________________________]                  │  ║
║  │                                                       │  ║
║  │ Arquivo de Áudio (MP3, WAV, OGG)                     │  ║
║  │ [Escolher arquivo]                                   │  ║
║  │                                                       │  ║
║  │ [✨ CRIAR LOUVOR]                                      │  ║
║  └──────────────────────────────────────────────────────┘  ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║  📋 LOUVORES CADASTRADOS                                   ║
║                                                            ║
║  ┌──────────────────────┐  ┌──────────────────────┐        ║
║  │ Graciosa Deus        │  │ Jesus Te Amo         │        ║
║  │ Bruna Olly           │  │ Ministério JECG      │        ║
║  │                      │  │                      │        ║
║  │ Prévia: Graciosa...  │  │ Prévia: Jesus...     │        ║
║  │                      │  │                      │        ║
║  │ [📊 Gerar] [🗑️ Delete]  │ [📊 Gerar] [🗑️ Delete]  │        ║
║  └──────────────────────┘  └──────────────────────┘        ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

### Passo 3: Use a Aplicação!

```
A. Preencha o formulário com um louvor
B. Clique em "✨ Criar Louvor"
C. Ver na lista → Clique "📊 Gerar Apresentação"
D. PowerPoint baixa automaticamente!
```

---

## 📊 Fluxo de Uso

```
USUÁRIO
  ↓
[Abrir browser: localhost:5173]
  ↓
VÊ FORMULÁRIO
  ↓
[Preencher dados]
  ├─ Nome do louvor
  ├─ Cantor
  ├─ Letra
  └─ (Opcional) Áudio
  ↓
[Clical em "Criar"]
  ↓
✅ LOUVOR CRIADO (aparece na lista)
  ↓
[Clical em "Gerar Apresentação"]
  ↓
⏳ GERANDO... (processando)
  ↓
📥 DOWNLOAD AUTOMÁTICO
  ↓
✅ ARQUIVO .PPTX SALVO NA PASTA DOWNLOADS
  ↓
[Abrir PowerPoint]
  ↓
📊 SLIDES PRONTOS PARA PROJETAR!
```

---

## 🎯 Exemplo Prático Completo

### Dados para testar:

**Nome:** Graciosa Deus  
**Cantor:** Bruna Olly  
**Letra:**
```
Graciosa Deus, acima da minha cabeça
Sua mão, junto a mim e me protege
Você conhece cada passo que eu vou dar

Antes de andar, você está comigo
Seu amor, é incomparável e infinito
Seu perdão, sempre me faz vencer

Quando fraco meu coração se vê
Sua graça me faz permanecer
Eu permaneço em você

Coração na mão de Cristo
Seu amor me faz vencer
Toda luta que há em mim
```

Resultado: PowerPoint com 5 slides profissionais!

---

## 🔍 Verificar se Está Funcionando

### Checklist de Inicialização:

- [ ] Terminal 1 mostra: `🎵 Servidor rodando em http://localhost:3001`
- [ ] Terminal 2 mostra: `➜  Local:   http://localhost:5173/`
- [ ] Browser abre em localhost:5173 sem erro
- [ ] Página carrega com cabeçalho 🎵 Sistema de Louvores
- [ ] Formulário visível
- [ ] Botões estão clickáveis

### Se Alguma Coisa Falhar:

```
❌ "Cannot GET /api/louvores"
→ Backend não iniciou. Cheque Terminal 1

❌ "Failed to fetch"
→ Erro de CORS. Certifique de que ambos os terminais
  estão rodando

❌ Formulário não funciona
→ Abra DevTools (F12) → Console → veja erros

❌ PowerPoint não baixa
→ Verifique permissões na pasta Downloads
```

---

## 💡 Dicas de Uso

### ✅ Boas Práticas

1. **Quebregue linhas na letra** para melhor formatação dos slides
2. **Nomes simples** facilitam identificação
3. **Adicione áudio** para referência durante culto
4. **Gere múltiplas** vezes se precisar ajustar

### ⚠️ Evite

1. ❌ Letra sem quebras de linhas
2. ❌ Nomes muito longos
3. ❌ Arquivos de áudio muito grande (>50MB)
4. ❌ Deletar dados sem backup

---

## 📞 Suporte Rápido

| Problema | Solução |
|----------|---------|
| App não carrega | `npm install` novamente |
| API 503 | Reinicie backend |
| PPT não gera | Verifique espaço em disco |
| Áudio não sobe | Formatos: MP3, WAV, OGG |
| Interface lenta | Limpe cache (Ctrl+Shift+Del) |

---

## 🎵 Aproveitando ao Máximo

### Você pode:

✅ Criar biblioteca completa de louvores  
✅ Gerar PPTs em segundos  
✅ Usar em múltiplas igrejas (multiplique sistema)  
✅ Customizar cores/letras  
✅ Compartilhar arquivos com outras pessoas  
✅ Fazer backup dos MPP's gerados  

### Próximo Nível:

🚀 Instalar em servidor para toda a comunidade  
🚀 Integrar com site da igreja  
🚀 Adicionar mais usuários  
🚀 Fazer automações  

---

## 🙏 Bênção

Use este sistema para glorificar o nome de Jesus e trazer adoração em sua igreja!

**🎵 "Que todo o meu ser louve ao Senhor!" - Salmo 103:1**

---

© 2024 - Sistema de Louvores - Desenvolvido com ❤️ e ☕
