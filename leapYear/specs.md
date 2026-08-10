# Especificação - Truncate a String Algorithm

## Objetivo

Criar um programa em JavaScript que trunque uma string para um tamanho máximo especificado, adicionando `...` ao final quando houver truncamento.

---

## Requisitos Funcionais

### 1. Criar a Função

- [ ] Criar uma função chamada `truncateString`.
- [ ] A função deve receber dois parâmetros:

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `str` | `string` | Texto que será analisado |
| `maxLength` | `number` | Quantidade máxima de caracteres permitida |

---

### 2. Verificar o Tamanho da String

Dentro da função:

- [ ] Verificar o comprimento da string utilizando a propriedade `length`.

---

### 3. Truncar a String

Se o comprimento da string for **maior** que `maxLength`:

- [ ] Reduzir a string para os primeiros `maxLength` caracteres.
- [ ] Acrescentar `...` ao final da string truncada.
- [ ] Retornar a nova string.

---

### 4. Retornar a String Original

Se o comprimento da string for **menor ou igual** a `maxLength`:

- [ ] Retornar a string original sem alterações.

---

# Exemplos Esperados

| Entrada | Saída |
|----------|-------|
| `truncateString("Hello World", 5)` | `"Hello..."` |
| `truncateString("JavaScript", 10)` | `"JavaScript"` |
| `truncateString("freeCodeCamp", 4)` | `"free..."` |
| `truncateString("ChatGPT", 20)` | `"ChatGPT"` |

---

# Critérios de Aceitação

O programa será considerado concluído quando:

- [ ] A função `truncateString` existir.
- [ ] A função receber uma `string` e um `number`.
- [ ] Strings maiores que o limite forem truncadas.
- [ ] A string truncada terminar com `...`.
- [ ] Strings com tamanho igual ao limite forem retornadas sem alterações.
- [ ] Strings menores que o limite forem retornadas sem alterações.
- [ ] A função retornar o resultado em todos os casos.

---

# Conceitos Praticados

- Funções
- Parâmetros
- Strings
- Propriedade `length`
- Método `slice()`
- Estruturas condicionais (`if` / `else`)
- Concatenação de strings
- `return`