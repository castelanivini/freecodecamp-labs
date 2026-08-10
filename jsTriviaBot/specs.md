# Especificação - Coding Fun Fact Guide

## Objetivo
Criar um pequeno programa em JavaScript que simula um bot compartilhando curiosidades sobre sua linguagem de programação favorita.

---

## Requisitos Funcionais

### 1. Saudação
- [ ] Exibir no console a mensagem:

```text
Hello! I'm your coding fun fact guide!
```

---

### 2. Variáveis do Bot

Criar as seguintes variáveis utilizando `const`:

| Variável | Descrição |
|----------|-----------|
| `botName` | Nome do bot |
| `botLocation` | Local de origem do bot |
| `favoriteLanguage` | Linguagem de programação favorita do bot |

---

### 3. Apresentação

Exibir no console:

```text
My name is (botName) and I live on (botLocation).
```

Substituindo os valores das variáveis.

---

### 4. Linguagem Favorita

Exibir no console:

```text
My favorite programming language is (favoriteLanguage).
```

---

### 5. Curiosidade #1

- [ ] Criar uma variável `codingFact` utilizando `let`.
- [ ] Atribuir uma curiosidade sobre `favoriteLanguage`.
- [ ] A mensagem deve utilizar a variável `favoriteLanguage`.
- [ ] Exibir `codingFact` no console.

---

### 6. Curiosidade #2

- [ ] Reatribuir um novo valor para `codingFact`.
- [ ] A nova curiosidade deve utilizar novamente `favoriteLanguage`.
- [ ] Exibir `codingFact` no console.

---

### 7. Curiosidade #3

- [ ] Reatribuir um terceiro valor para `codingFact`.
- [ ] A terceira curiosidade deve utilizar novamente `favoriteLanguage`.
- [ ] Exibir `codingFact` no console.

---

### 8. Despedida

Exibir no console:

```text
It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation).
```

Substituindo as variáveis pelos respectivos valores.

---

# Critérios de Aceitação

O programa será considerado concluído quando:

- [ ] A saudação inicial for exibida.
- [ ] As variáveis `botName`, `botLocation` e `favoriteLanguage` forem criadas.
- [ ] O bot se apresentar corretamente.
- [ ] A linguagem favorita for informada.
- [ ] A variável `codingFact` for criada utilizando `let`.
- [ ] Três curiosidades diferentes forem exibidas.
- [ ] `codingFact` for reutilizada e reatribuída entre cada curiosidade.
- [ ] A mensagem final de despedida for exibida.

---

# Conceitos Praticados

- Variáveis (`const` e `let`)
- Strings
- Template literals
- Reatribuição de variáveis
- `console.log()`