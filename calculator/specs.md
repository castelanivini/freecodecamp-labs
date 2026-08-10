# Especificação - Random Fortune Generator

## Objetivo

Criar um programa em JavaScript que sorteia e exibe uma mensagem de fortuna aleatoriamente.

---

## Requisitos Funcionais

### 1. Criação das Fortunas

Criar as seguintes variáveis contendo mensagens do tipo `string`:

| Variável | Descrição |
|----------|-----------|
| `fortune1` | Primeira fortuna |
| `fortune2` | Segunda fortuna |
| `fortune3` | Terceira fortuna |
| `fortune4` | Quarta fortuna |
| `fortune5` | Quinta fortuna |

- [ ] Cada variável deve receber uma mensagem de sua escolha.

Exemplos de mensagens:

- `"Your cat will look very cuddly today."`
- `"The weather will be nice tomorrow."`
- `"Be cautious of your new neighbors."`
- `"You will find a new hobby soon."`
- `"It would be wise to avoid the color red today."`

---

### 2. Número Aleatório

- [ ] Criar uma variável chamada `randomNumber`.
- [ ] Gerar um número inteiro aleatório entre **1** e **5**, inclusive.
- [ ] Armazenar o resultado em `randomNumber`.

---

### 3. Seleção da Fortuna

- [ ] Criar uma variável chamada `selectedFortune`.
- [ ] Atribuir uma das cinco fortunas com base no valor de `randomNumber`, seguindo as regras:

| Valor de `randomNumber` | Valor atribuído a `selectedFortune` |
|--------------------------|--------------------------------------|
| `1` | `fortune1` |
| `2` | `fortune2` |
| `3` | `fortune3` |
| `4` | `fortune4` |
| `5` | `fortune5` |

---

### 4. Exibição

Exibir no console o conteúdo da variável:

```text
selectedFortune
```

---

# Critérios de Aceitação

O programa será considerado concluído quando:

- [ ] As cinco variáveis de fortuna forem criadas.
- [ ] Todas as fortunas forem do tipo `string`.
- [ ] A variável `randomNumber` gerar apenas valores entre **1** e **5**.
- [ ] A variável `selectedFortune` receber corretamente uma das cinco mensagens.
- [ ] Apenas uma fortuna for selecionada por execução.
- [ ] A fortuna selecionada for exibida no console.

---

# Conceitos Praticados

- Variáveis
- Strings
- Geração de números aleatórios (`Math.random()` e `Math.floor()`)
- Estruturas condicionais (`if`, `else if` ou `switch`)
- Fluxo de controle
- `console.log()`