# Especificação - Factorial Calculator

## Objetivo

Criar um programa em JavaScript que calcule o **fatorial** de um número inteiro.

O fatorial de um número é o produto desse número por todos os inteiros positivos menores que ele até chegar em `1`.

Exemplo:

```text
5! = 5 × 4 × 3 × 2 × 1 = 120
```

---

# Conceito de Fatorial

| Número | Fatorial |
| -----: | -------: |
|    `1` |      `1` |
|    `2` |      `2` |
|    `3` |      `6` |
|    `4` |     `24` |
|    `5` |    `120` |
|    `6` |    `720` |

---

# Requisitos Funcionais

## 1. Criar a Variável

* [ ] Declarar uma variável chamada `num`.
* [ ] Atribuir um número inteiro entre **1** e **20** (inclusive).

### Exemplos válidos

```javascript
let num = 5;
```

```javascript
let num = 12;
```

---

## 2. Criar a Função

Criar uma função chamada:

```text
factorialCalculator
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                           |
| --------- | -------- | ----------------------------------- |
| `number`  | `number` | Número cujo fatorial será calculado |

### Estrutura

```javascript
function factorialCalculator(number) {
  // lógica
}
```

---

## 3. Calcular o Fatorial

Dentro da função:

* [ ] Declarar uma variável chamada `result`.
* [ ] Inicializar `result` com o valor **1**.

```javascript
let result = 1;
```

---

### Percorrer os Números

Utilizar **um** dos seguintes loops:

* [ ] `for`
* [ ] `while`
* [ ] `do...while`

O loop deve percorrer todos os números de **1** até o número recebido como parâmetro (inclusive).

---

### Atualizar o Resultado

A cada iteração:

* [ ] Multiplicar `result` pelo número atual.
* [ ] Armazenar o novo valor novamente em `result`.

Exemplo para `5`:

| Iteração | Resultado |
| -------: | --------: |
|      `1` |       `1` |
|      `2` |       `2` |
|      `3` |       `6` |
|      `4` |      `24` |
|      `5` |     `120` |

---

## 4. Retornar o Resultado

Ao final da função:

* [ ] Retornar o valor armazenado em `result`.

---

## 5. Executar a Função

Fora da função:

* [ ] Chamar `factorialCalculator`.
* [ ] Passar `num` como argumento.
* [ ] Armazenar o retorno em uma variável chamada `factorial`.

Exemplo:

```javascript
const factorial = factorialCalculator(num);
```

---

## 6. Criar a Mensagem Final

Criar uma variável chamada:

```text
resultMsg
```

Ela deve armazenar uma string no formato:

```text
Factorial of [num] is [factorial]
```

Substituindo:

* `[num]` pelo valor de `num`;
* `[factorial]` pelo resultado calculado.

### Exemplo

Se:

```javascript
num = 5
```

Resultado:

```text
Factorial of 5 is 120
```

---

## 7. Exibir o Resultado

* [ ] Exibir `resultMsg` utilizando `console.log()`.

---

# Fluxo Esperado

```text
Criar num
      │
      ▼
Executar factorialCalculator(num)
      │
      ▼
Inicializar result = 1
      │
      ▼
Percorrer de 1 até num
      │
      ▼
Multiplicar result pelo número atual
      │
      ▼
Retornar result
      │
      ▼
Criar resultMsg
      │
      ▼
Exibir no console
```

---

# Exemplos Esperados

| Entrada (`num`) | Valor de `factorial` | Mensagem Final               |
| --------------: | -------------------: | ---------------------------- |
|             `1` |                  `1` | `Factorial of 1 is 1`        |
|             `3` |                  `6` | `Factorial of 3 is 6`        |
|             `5` |                `120` | `Factorial of 5 is 120`      |
|             `7` |               `5040` | `Factorial of 7 is 5040`     |
|            `10` |            `3628800` | `Factorial of 10 is 3628800` |

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] A variável `num` existir.
* [ ] `num` possuir um valor entre **1** e **20**.
* [ ] A função `factorialCalculator` existir.
* [ ] A função receber um número como parâmetro.
* [ ] A variável `result` for criada e inicializada com `1`.
* [ ] Um loop (`for`, `while` ou `do...while`) for utilizado.
* [ ] O loop percorrer de `1` até o número informado.
* [ ] O valor de `result` for atualizado a cada iteração.
* [ ] A função retornar o fatorial calculado.
* [ ] O retorno for armazenado em `factorial`.
* [ ] A variável `resultMsg` for criada.
* [ ] `resultMsg` seguir o formato `Factorial of [num] is [factorial]`.
* [ ] A mensagem final for exibida utilizando `console.log()`.

---

# Conceitos Praticados

* Variáveis
* Funções
* Parâmetros
* Estruturas de repetição (`for`, `while`, `do...while`)
* Operador de multiplicação (`*`)
* Acumuladores
* `return`
* Template literals
* `console.log()`
