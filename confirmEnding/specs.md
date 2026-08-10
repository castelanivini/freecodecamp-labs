# Especificação - Leap Year Calculator

## Objetivo

Criar um programa em JavaScript que determine se um determinado ano é **bissexto** de acordo com as regras do calendário gregoriano.

---

## Regras para Ano Bissexto

Um ano é considerado **bissexto** quando:

1. É divisível por **4**;
2. **Exceto** quando também é divisível por **100**;
3. **A menos que** também seja divisível por **400**.

### Exemplos

| Ano | Resultado |
|------|-----------|
| 2024 | Bissexto |
| 2028 | Bissexto |
| 1900 | Não é bissexto |
| 2000 | Bissexto |

---

## Requisitos Funcionais

### 1. Criar a Função

- [ ] Criar uma função chamada `isLeapYear`.
- [ ] A função deve receber um parâmetro numérico representando um ano.

---

### 2. Criar a Variável do Ano

Fora da função:

- [ ] Declarar uma variável chamada `year`.
- [ ] Armazenar o ano que será verificado.

---

### 3. Verificar se o Ano é Bissexto

Dentro da função:

- [ ] Utilizar uma estrutura `if/else` **ou** um operador ternário.
- [ ] Aplicar as regras para identificar se o ano é bissexto.

#### Regras

- [ ] Se o ano for divisível por **4**, ele pode ser bissexto.
- [ ] Se também for divisível por **100**, ele deixa de ser bissexto.
- [ ] Se também for divisível por **400**, volta a ser considerado bissexto.

---

### 4. Retornar o Resultado

Se o ano for bissexto, retornar:

```text
[year] is a leap year.
```

Caso contrário, retornar:

```text
[year] is not a leap year.
```

> Substituir `[year]` pelo valor recebido no parâmetro da função.

---

### 5. Executar a Função

- [ ] Chamar `isLeapYear(year)`.
- [ ] Armazenar o retorno em uma variável chamada `result`.

---

### 6. Exibir o Resultado

Exibir no console o conteúdo da variável:

```text
result
```

---

# Exemplos Esperados

| Entrada | Saída |
|----------|-------|
| `2024` | `2024 is a leap year.` |
| `2023` | `2023 is not a leap year.` |
| `1900` | `1900 is not a leap year.` |
| `2000` | `2000 is a leap year.` |

---

# Critérios de Aceitação

O programa será considerado concluído quando:

- [ ] A função `isLeapYear` existir.
- [ ] A função receber um número como parâmetro.
- [ ] A variável `year` for criada.
- [ ] As regras de ano bissexto forem aplicadas corretamente.
- [ ] A função retornar a mensagem apropriada para anos bissextos.
- [ ] A função retornar a mensagem apropriada para anos não bissextos.
- [ ] O retorno for armazenado em `result`.
- [ ] O valor de `result` for exibido utilizando `console.log()`.

---

# Conceitos Praticados

- Funções
- Parâmetros
- Variáveis
- Estruturas condicionais (`if` / `else`)
- Operador ternário
- Operador módulo (`%`)
- Comparações lógicas
- `return`
- `console.log()`