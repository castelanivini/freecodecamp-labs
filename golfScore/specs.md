# Especificação - Golf Score Translator

## Objetivo

Criar uma função em JavaScript que receba o **par** de um buraco de golfe e a quantidade de **strokes** (tacadas) realizadas pelo jogador, retornando o apelido correspondente ao desempenho.

---

## Tabela de Pontuação

| Condição | Retorno |
|-----------|----------|
| `strokes === 1` | `"Hole-in-one!"` |
| `strokes <= par - 2` | `"Eagle"` |
| `strokes === par - 1` | `"Birdie"` |
| `strokes === par` | `"Par"` |
| `strokes === par + 1` | `"Bogey"` |
| `strokes === par + 2` | `"Double Bogey"` |
| `strokes >= par + 3` | `"Go Home!"` |

---

## Requisitos Funcionais

### 1. Criar a Função

- [ ] Criar uma função chamada `golfScore`.

---

### 2. Parâmetros

A função deve receber dois parâmetros numéricos:

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `par` | `number` | Número esperado de tacadas para concluir o buraco |
| `strokes` | `number` | Número de tacadas realizadas pelo jogador |

---

### 3. Retornar um Texto

- [ ] A função deve sempre retornar uma `string`.

---

### 4. Regras de Pontuação

Aplicar as seguintes regras na ordem apresentada:

#### Hole-in-one

Se:

```text
strokes === 1
```

Retornar:

```text
Hole-in-one!
```

---

#### Eagle

Se:

```text
strokes <= par - 2
```

Retornar:

```text
Eagle
```

---

#### Birdie

Se:

```text
strokes === par - 1
```

Retornar:

```text
Birdie
```

---

#### Par

Se:

```text
strokes === par
```

Retornar:

```text
Par
```

---

#### Bogey

Se:

```text
strokes === par + 1
```

Retornar:

```text
Bogey
```

---

#### Double Bogey

Se:

```text
strokes === par + 2
```

Retornar:

```text
Double Bogey
```

---

#### Go Home!

Se:

```text
strokes >= par + 3
```

Retornar:

```text
Go Home!
```

---

# Exemplos Esperados

| Entrada | Saída |
|----------|-------|
| `golfScore(5, 1)` | `"Hole-in-one!"` |
| `golfScore(5, 3)` | `"Eagle"` |
| `golfScore(5, 4)` | `"Birdie"` |
| `golfScore(5, 5)` | `"Par"` |
| `golfScore(5, 6)` | `"Bogey"` |
| `golfScore(5, 7)` | `"Double Bogey"` |
| `golfScore(5, 8)` | `"Go Home!"` |

---

# Critérios de Aceitação

O programa será considerado concluído quando:

- [ ] A função `golfScore` existir.
- [ ] A função receber os parâmetros `par` e `strokes`.
- [ ] A função retornar uma `string`.
- [ ] Retornar `"Hole-in-one!"` quando `strokes === 1`.
- [ ] Retornar `"Eagle"` quando `strokes <= par - 2`.
- [ ] Retornar `"Birdie"` quando `strokes === par - 1`.
- [ ] Retornar `"Par"` quando `strokes === par`.
- [ ] Retornar `"Bogey"` quando `strokes === par + 1`.
- [ ] Retornar `"Double Bogey"` quando `strokes === par + 2`.
- [ ] Retornar `"Go Home!"` quando `strokes >= par + 3`.
- [ ] As condições forem avaliadas na ordem correta.

---

# Conceitos Praticados

- Funções
- Parâmetros
- Estruturas condicionais (`if`, `else if`, `else`)
- Operadores de comparação (`===`, `<=`, `>=`)
- Operadores aritméticos (`+`, `-`)
- Ordem de avaliação das condições
- `return`