# Especificação - Card Counting Assistant

## Objetivo

Criar um programa em JavaScript que implemente um assistente de **Card Counting** para Blackjack, mantendo uma contagem global das cartas jogadas e indicando se o jogador deve **apostar (Bet)** ou **aguardar (Hold)**.

---

## Regras do Card Counting

Cada carta altera a contagem (`count`) de acordo com as seguintes regras:

| Carta | Ação |
|--------|------|
| 2, 3, 4, 5, 6 | `count += 1` |
| 7, 8, 9 | Nenhuma alteração |
| 10, J, Q, K, A | `count -= 1` |

Após atualizar a contagem:

- Se `count` for **maior que 0**, o jogador deve **Bet**.
- Se `count` for **menor ou igual a 0**, o jogador deve **Hold**.

---

## Requisitos Funcionais

### 1. Variável Global

- [ ] Criar uma variável global chamada `count`.
- [ ] Declará-la utilizando `let`.
- [ ] Inicializar seu valor com **0**.

---

### 2. Criar a Função

- [ ] Criar uma função chamada `cardCounter`.
- [ ] A função deve receber um parâmetro chamado `card`.

---

### 3. Tipos Aceitos

O parâmetro `card` poderá receber:

| Tipo | Valores |
|------|----------|
| `number` | `2` até `10` |
| `string` | `"J"`, `"Q"`, `"K"`, `"A"` |

---

### 4. Atualizar a Contagem

Dentro da função:

#### Cartas Baixas

Se `card` for:

```text
2
3
4
5
6
```

- [ ] Incrementar `count` em **1**.

---

#### Cartas Neutras

Se `card` for:

```text
7
8
9
```

- [ ] Não alterar `count`.

---

#### Cartas Altas

Se `card` for:

```text
10
"J"
"Q"
"K"
"A"
```

- [ ] Decrementar `count` em **1**.

---

### 5. Retorno da Função

Após atualizar a contagem:

Se:

```text
count > 0
```

Retornar:

```text
<count> Bet
```

Caso contrário:

```text
<count> Hold
```

Os dois valores devem ser separados por um espaço.

Exemplo:

```text
2 Bet
```

```text
-3 Hold
```

---

# Exemplos Esperados

| Sequência de Cartas | Retorno |
|---------------------|---------|
| `cardCounter(2)` | `1 Bet` |
| `cardCounter(3)` | `2 Bet` |
| `cardCounter(7)` | `2 Bet` |
| `cardCounter("K")` | `1 Bet` |
| `cardCounter("A")` | `0 Hold` |

---

# Critérios de Aceitação

O programa será considerado concluído quando:

- [ ] A variável global `count` existir.
- [ ] `count` for declarada utilizando `let`.
- [ ] `count` iniciar com o valor **0**.
- [ ] A função `cardCounter` existir.
- [ ] A função aceitar números e strings.
- [ ] Cartas de 2 a 6 incrementarem a contagem.
- [ ] Cartas de 7 a 9 não alterarem a contagem.
- [ ] Cartas 10, J, Q, K e A decrementarem a contagem.
- [ ] A função retornar `<count> Bet` quando `count > 0`.
- [ ] A função retornar `<count> Hold` quando `count <= 0`.
- [ ] O retorno estiver no formato `"count decisão"` separado por um espaço.

---

# Conceitos Praticados

- Variáveis globais
- `let`
- Funções
- Parâmetros
- Condicionais (`if`, `else`, `switch`)
- Operadores de comparação
- Manipulação de estado
- Strings
- Template literals
- `return`