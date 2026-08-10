# Especificação - Longest Word Finder App

## Objetivo

Criar uma função em JavaScript que receba uma frase e retorne o comprimento da maior palavra presente nela.

Por exemplo, na frase:

```text
The quick brown fox jumped over the lazy dog
```

A maior palavra é:

```text
jumped
```

Que possui **6 caracteres**.

---

# Função Principal

## 1. Criar a Função

* [ ] Criar uma função chamada `findLongestWordLength`.

### Parâmetros

| Parâmetro  | Tipo     | Descrição                |
| ---------- | -------- | ------------------------ |
| `sentence` | `string` | Frase que será analisada |

### Estrutura

```javascript
function findLongestWordLength(sentence) {
  // lógica
}
```

---

# Regras da Função

## 2. Identificar as Palavras

A função deve:

* [ ] Receber uma frase.
* [ ] Separar a frase em palavras individuais.
* [ ] Comparar o tamanho de cada palavra.

> **Dica:** métodos como `split()` e a propriedade `length` podem ser utilizados.

---

## 3. Encontrar a Maior Palavra

Durante a análise da frase, a função deve:

* [ ] Identificar qual palavra possui o maior número de caracteres.
* [ ] Armazenar o comprimento da maior palavra encontrada.

---

## 4. Retornar o Resultado

Ao final da execução, a função deve:

* [ ] Retornar um número (`number`).
* [ ] Esse número deve representar o comprimento da maior palavra da frase.

---

# Exemplos Esperados

| Entrada                                                          | Retorno |
| ---------------------------------------------------------------- | ------: |
| `"The quick brown fox jumped over the lazy dog"`                 |     `6` |
| `"May the force be with you"`                                    |     `5` |
| `"Google do a barrel roll"`                                      |     `6` |
| `"What if we try a super-long word such as otorhinolaryngology"` |    `22` |
| `"OpenAI creates amazing tools"`                                 |     `7` |

---

# Fluxo da Solução

```text
Receber a frase
        │
        ▼
Separar em palavras
        │
        ▼
Percorrer cada palavra
        │
        ▼
Comparar seu comprimento
        │
        ▼
Guardar o maior comprimento encontrado
        │
        ▼
Retornar esse valor
```

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] A função `findLongestWordLength` existir.
* [ ] A função receber uma `string` como parâmetro.
* [ ] A frase for dividida em palavras.
* [ ] O comprimento de cada palavra for analisado.
* [ ] O maior comprimento encontrado for armazenado.
* [ ] A função retornar um valor do tipo `number`.
* [ ] O valor retornado corresponder ao tamanho da maior palavra da frase.

---

# Conceitos Praticados

* Funções
* Parâmetros
* Strings
* Arrays
* Método `split()`
* Propriedade `length`
* Estruturas de repetição (`for`, `for...of`)
* Comparação de valores
* `return`
