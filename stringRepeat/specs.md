# Especificação - String Repeating Function

## Objetivo

Criar uma função em JavaScript que repita uma string um número específico de vezes.

> **Importante:** para este exercício, **não** utilize o método nativo `.repeat()`.

---

# Requisitos Funcionais

## 1. Criar a Função

* [ ] Criar uma função chamada `repeatStringNumTimes`.

### Parâmetros

| Parâmetro | Tipo     | Descrição                |
| --------- | -------- | ------------------------ |
| `str`     | `string` | Texto que será repetido  |
| `num`     | `number` | Quantidade de repetições |

### Estrutura

```javascript id="vijqsm"
function repeatStringNumTimes(str, num) {
  // lógica
}
```

---

## 2. Repetir a String

Se `num` for maior que `0`:

* [ ] Repetir a string exatamente `num` vezes.
* [ ] Concatenar todas as repetições em uma única string.
* [ ] Retornar o resultado.

### Exemplo

Entrada:

```javascript id="d6r4x0"
repeatStringNumTimes("abc", 3)
```

Retorno:

```text id="8z6d0y"
abcabcabc
```

---

## 3. Quantidade Inválida

Se:

```text id="jlwmq0"
num <= 0
```

A função deve:

* [ ] Retornar uma string vazia.

Retorno esperado:

```text id="0p9c0n"
```

---

## Restrições

Durante a implementação:

* [ ] Não utilizar o método `.repeat()`.

Exemplo **não permitido**:

```javascript id="qywfr3"
str.repeat(num);
```

A repetição deve ser construída manualmente, utilizando estruturas de repetição e concatenação de strings.

---

# Fluxo Esperado

```text id="um8xwz"
Receber str e num
        │
        ▼
num <= 0 ?
    ┌───┴────┐
    │        │
   Sim      Não
    │        │
Retorna   Criar uma
""        string vazia
             │
             ▼
      Repetir str
      num vezes
             │
             ▼
      Retornar resultado
```

---

# Exemplos Esperados

| Entrada                                   | Retorno          |
| ----------------------------------------- | ---------------- |
| `repeatStringNumTimes("*", 3)`            | `"***"`          |
| `repeatStringNumTimes("abc", 3)`          | `"abcabcabc"`    |
| `repeatStringNumTimes("freeCodeCamp", 1)` | `"freeCodeCamp"` |
| `repeatStringNumTimes("abc", 0)`          | `""`             |
| `repeatStringNumTimes("abc", -2)`         | `""`             |

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] A função `repeatStringNumTimes` existir.
* [ ] A função receber uma `string` e um `number` como parâmetros.
* [ ] A string for repetida exatamente `num` vezes quando `num > 0`.
* [ ] A função retornar uma string vazia quando `num <= 0`.
* [ ] O método `.repeat()` não for utilizado.
* [ ] A função retornar corretamente a string resultante.

---

# Conceitos Praticados

* Funções
* Parâmetros
* Strings
* Concatenação de strings
* Estruturas de repetição (`for`, `while`, `do...while`)
* Estruturas condicionais (`if` / `else`)
* Acumuladores
* `return`
