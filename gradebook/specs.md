# Especificação - Gradebook App

## Objetivo

Criar um programa em JavaScript para calcular a média de uma turma, converter uma pontuação numérica em conceito, verificar aprovação e gerar uma mensagem final para o aluno.

---

# 1. Função `getAverage`

Criar uma função chamada:

```javascript
getAverage(scores)
```

## Parâmetro

| Parâmetro | Tipo            | Descrição               |
| --------- | --------------- | ----------------------- |
| `scores`  | `Array<number>` | Lista de notas da turma |

## Comportamento

A função deve:

* [ ] Somar todas as notas do array.
* [ ] Dividir a soma pela quantidade de notas.
* [ ] Retornar a média.

### Fórmula

```text
média = soma das notas / quantidade de notas
```

### Exemplo

```javascript
getAverage([80, 90, 100]);
```

Cálculo:

```text
80 + 90 + 100 = 270

270 / 3 = 90
```

Retorno:

```javascript
90
```

---

# 2. Função `getGrade`

Criar uma função chamada:

```javascript
getGrade(score)
```

## Parâmetro

| Parâmetro | Tipo     | Descrição     |
| --------- | -------- | ------------- |
| `score`   | `number` | Nota do aluno |

## Retorno

A função deve retornar uma string representando o conceito correspondente à nota.

| Nota      | Conceito |
| --------- | -------- |
| `100`     | `"A+"`   |
| `90 - 99` | `"A"`    |
| `80 - 89` | `"B"`    |
| `70 - 79` | `"C"`    |
| `60 - 69` | `"D"`    |
| `0 - 59`  | `"F"`    |

---

## Ordem das Condições

A ordem importa.

Por exemplo:

```text
score === 100
    ↓
"A+"

score >= 90
    ↓
"A"

score >= 80
    ↓
"B"
```

Se você começar por:

```javascript
score >= 90
```

então `100` também satisfaria essa condição e poderia retornar `"A"` em vez de `"A+"`.

---

# Exemplos

```javascript
getGrade(100);
```

Retorno:

```javascript
"A+"
```

```javascript
getGrade(95);
```

Retorno:

```javascript
"A"
```

```javascript
getGrade(83);
```

Retorno:

```javascript
"B"
```

```javascript
getGrade(52);
```

Retorno:

```javascript
"F"
```

---

# 3. Função `hasPassingGrade`

Criar uma função chamada:

```javascript
hasPassingGrade(score)
```

## Objetivo

Determinar se a nota corresponde a uma aprovação.

Uma nota é considerada aprovada quando seu conceito for diferente de:

```javascript
"F"
```

---

## Regra Importante

A função deve utilizar:

```javascript
getGrade(score)
```

para descobrir o conceito.

Depois, deve verificar se o resultado é diferente de `"F"`.

Conceitualmente:

```text
score
  ↓
getGrade(score)
  ↓
conceito
  ↓
conceito !== "F" ?
```

---

## Exemplos

```javascript
hasPassingGrade(75);
```

`getGrade(75)` retorna:

```javascript
"C"
```

Como:

```javascript
"C" !== "F"
```

Resultado:

```javascript
true
```

---

Outro exemplo:

```javascript
hasPassingGrade(40);
```

`getGrade(40)` retorna:

```javascript
"F"
```

Resultado:

```javascript
false
```

---

# 4. Função `studentMsg`

Criar uma função chamada:

```javascript
studentMsg(scores, studentScore)
```

## Parâmetros

| Parâmetro      | Tipo            | Descrição      |
| -------------- | --------------- | -------------- |
| `scores`       | `Array<number>` | Notas da turma |
| `studentScore` | `number`        | Nota do aluno  |

---

# Informações Necessárias

Dentro da função, você precisará descobrir:

### Média da turma

Utilizando:

```javascript
getAverage(scores)
```

### Conceito do aluno

Utilizando:

```javascript
getGrade(studentScore)
```

### Situação do aluno

Utilizando:

```javascript
hasPassingGrade(studentScore)
```

---

# 5. Mensagem para Aluno Aprovado

Se o aluno tiver uma nota diferente de `"F"`, retornar exatamente no formato:

```text
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
```

Por exemplo:

```javascript
studentMsg([80, 90, 100], 95);
```

Média:

```text
90
```

Conceito:

```text
A
```

Resultado:

```text
Class average: 90. Your grade: A. You passed the course.
```

---

# 6. Mensagem para Aluno Reprovado

Se o conceito for `"F"`, retornar:

```text
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
```

Exemplo:

```javascript
studentMsg([80, 90, 100], 50);
```

Resultado:

```text
Class average: 90. Your grade: F. You failed the course.
```

---

# Fluxo Geral

```text
scores + studentScore
        │
        ├───────────────┐
        ▼               ▼
getAverage(scores)  getGrade(studentScore)
        │               │
        ▼               ▼
      média            conceito
                         │
                         ▼
              hasPassingGrade(studentScore)
                         │
                  ┌──────┴──────┐
                  │             │
                true          false
                  │             │
                  ▼             ▼
              "passed"      "failed"
                  │             │
                  └──────┬──────┘
                         ▼
                montar mensagem
                         │
                         ▼
                      return
```

---

# Exemplos Esperados

| Chamada                     | Resultado |
| --------------------------- | --------- |
| `getAverage([80, 90, 100])` | `90`      |
| `getGrade(100)`             | `"A+"`    |
| `getGrade(92)`              | `"A"`     |
| `getGrade(85)`              | `"B"`     |
| `getGrade(73)`              | `"C"`     |
| `getGrade(65)`              | `"D"`     |
| `getGrade(50)`              | `"F"`     |
| `hasPassingGrade(75)`       | `true`    |
| `hasPassingGrade(40)`       | `false`   |

---

# Exemplo Completo

Entrada:

```javascript
const scores = [92, 88, 76, 100, 84];

studentMsg(scores, 88);
```

Primeiro:

```text
média da turma = 88
```

Depois:

```text
nota do aluno = 88
conceito = B
```

Como `"B"` é diferente de `"F"`:

```text
aprovado
```

Resultado:

```text
Class average: 88. Your grade: B. You passed the course.
```

---

# Critérios de Aceitação

* [ ] A função `getAverage` existir.
* [ ] `getAverage` receber um array de notas.
* [ ] `getAverage` retornar corretamente a média.
* [ ] A função `getGrade` existir.
* [ ] `100` retornar `"A+"`.
* [ ] Notas de `90` a `99` retornarem `"A"`.
* [ ] Notas de `80` a `89` retornarem `"B"`.
* [ ] Notas de `70` a `79` retornarem `"C"`.
* [ ] Notas de `60` a `69` retornarem `"D"`.
* [ ] Notas de `0` a `59` retornarem `"F"`.
* [ ] A função `hasPassingGrade` existir.
* [ ] `hasPassingGrade` utilizar `getGrade`.
* [ ] Qualquer conceito diferente de `"F"` ser aprovado.
* [ ] `"F"` ser considerado reprovação.
* [ ] A função `studentMsg` existir.
* [ ] `studentMsg` utilizar `getAverage`.
* [ ] `studentMsg` utilizar `getGrade`.
* [ ] A mensagem de aprovação seguir exatamente o formato solicitado.
* [ ] A mensagem de reprovação seguir exatamente o formato solicitado.

---

# Conceitos Praticados

* Funções
* Arrays
* Loops
* Acumuladores
* Média aritmética
* Condicionais
* Comparações
* Composição de funções
* Reutilização de código
* Template literals
* Valores booleanos
* `return`

## Regra Mental

Você pode pensar no exercício como quatro responsabilidades separadas:

```text
getAverage
    ↓
"Qual é a média?"


getGrade
    ↓
"Qual é o conceito?"


hasPassingGrade
    ↓
"Passou ou não?"


studentMsg
    ↓
"Junta tudo em uma mensagem"
```

A ideia mais importante aqui é **não repetir lógica**. Se `getGrade` já sabe transformar uma nota em conceito, `hasPassingGrade` deve reutilizá-la em vez de recriar todas as faixas de notas.
