# Especificação - Largest Number Finder

## Objetivo

Criar uma função em JavaScript que receba um **array contendo vários subarrays** e retorne um novo array contendo o **maior número de cada subarray**.

---

# Exemplo

Entrada:

```javascript
[
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]
```

O maior número de cada grupo é:

```text
[4, 5, 1, 3]
    ↑
    5

[13, 27, 18, 26]
     ↑
     27

[32, 35, 37, 39]
             ↑
             39

[1000, 1001, 857, 1]
       ↑
       1001
```

Resultado:

```javascript
[5, 27, 39, 1001]
```

---

# Requisitos Funcionais

## 1. Criar a Função

* [ ] Criar uma função chamada `largestOfAll`.
* [ ] A função deve receber um array de arrays como argumento.

### Estrutura

```javascript
function largestOfAll(arr) {
  // lógica
}
```

### Parâmetro

| Parâmetro | Tipo                   | Descrição                           |
| --------- | ---------------------- | ----------------------------------- |
| `arr`     | `Array<Array<number>>` | Array contendo os grupos de números |

---

# 2. Criar o Array de Resultado

A função deve produzir um novo array contendo os maiores valores encontrados.

Por exemplo:

```javascript
const result = [];
```

Esse array será preenchido conforme cada subarray for analisado.

---

# 3. Percorrer os Subarrays

Você pode utilizar um loop para acessar cada subarray.

Visualmente:

```text
arr
 │
 ├── [4, 5, 1, 3]
 │
 ├── [13, 27, 18, 26]
 │
 ├── [32, 35, 37, 39]
 │
 └── [1000, 1001, 857, 1]
```

O primeiro loop pode percorrer:

```text
arr[0]
arr[1]
arr[2]
arr[3]
```

---

# 4. Encontrar o Maior Número

Para cada subarray:

* [ ] Escolher um valor inicial como maior número.
* [ ] Percorrer os demais números.
* [ ] Comparar cada número com o maior encontrado até aquele momento.
* [ ] Atualizar o maior valor quando necessário.

---

## Exemplo

Para:

```javascript
[13, 27, 18, 26]
```

Podemos começar considerando:

```text
maior = 13
```

Depois:

```text
13

27 > 13
↓
maior = 27

18 > 27?
não

26 > 27?
não
```

Resultado:

```text
maior = 27
```

---

# 5. Adicionar o Maior ao Resultado

Depois de encontrar o maior número de um subarray:

* [ ] Adicionar esse número ao array de resultados.

Conceitualmente:

```javascript
result.push(maior);
```

Então:

```text
primeiro grupo
     ↓
     5
     ↓
[5]

segundo grupo
     ↓
     27
     ↓
[5, 27]

terceiro grupo
     ↓
     39
     ↓
[5, 27, 39]
```

---

# 6. Retornar o Resultado

Depois de analisar todos os subarrays:

* [ ] Retornar o array contendo os maiores números.

```javascript
return result;
```

---

# Estrutura Mental com Dois Loops

Uma forma de resolver o exercício é utilizar **loops aninhados**:

```text
Loop externo
│
│ percorre cada subarray
│
├── subarray 1
│      │
│      └── loop interno → encontra maior
│
├── subarray 2
│      │
│      └── loop interno → encontra maior
│
├── subarray 3
│      │
│      └── loop interno → encontra maior
│
└── subarray 4
       │
       └── loop interno → encontra maior
```

Em pseudocódigo:

```text
criar result vazio

para cada subarray:

    considerar um número como maior

    para cada número do subarray:

        se número > maior:
            atualizar maior

    adicionar maior em result

retornar result
```

---

# Cuidado com Números Negativos

Um detalhe importante é não assumir automaticamente:

```javascript
let largest = 0;
```

Isso pode gerar problemas.

Considere:

```javascript
[-10, -5, -20, -3]
```

Todos os números são menores que `0`.

Se começar com:

```javascript
largest = 0;
```

nenhum número substituiria `0`.

O resultado seria incorretamente:

```text
0
```

Mas o maior número realmente é:

```text
-3
```

Uma estratégia melhor é começar com o **primeiro elemento do subarray**:

```javascript
let largest = arr[i][0];
```

Assim:

```text
[-10, -5, -20, -3]
  ↑
largest começa como -10
```

Depois as comparações podem acontecer normalmente.

---

# Exemplos Esperados

### Exemplo 1

```javascript
largestOfAll([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
```

Retorno:

```javascript
[5, 27, 39, 1001]
```

---

### Exemplo 2

```javascript
largestOfAll([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1]
]);
```

Retorno:

```javascript
[9, 35, 97, 1000000]
```

---

### Exemplo 3 - Números Negativos

```javascript
largestOfAll([
  [-10, -5, -20],
  [-100, -50, -75],
]);
```

Retorno:

```javascript
[-5, -50]
```

---

# Fluxo Esperado

```text
Receber arr
    │
    ▼
Criar array result
    │
    ▼
Percorrer cada subarray
    │
    ▼
Definir maior inicial
    │
    ▼
Percorrer números
    │
    ▼
número > maior?
 ┌──┴───┐
 │      │
Sim    Não
 │      │
 ▼      ▼
Atualizar Continuar
maior
    │
    ▼
Adicionar maior
em result
    │
    ▼
Próximo subarray
    │
    ▼
Retornar result
```

---

# Critérios de Aceitação

O exercício estará concluído quando:

* [ ] A função `largestOfAll` existir.
* [ ] A função receber um array de arrays.
* [ ] Cada subarray for analisado.
* [ ] O maior número de cada subarray for identificado.
* [ ] Números negativos forem tratados corretamente.
* [ ] Cada maior número for adicionado ao resultado.
* [ ] A ordem dos grupos for preservada.
* [ ] A função retornar um novo array.
* [ ] O retorno possuir um maior número para cada subarray.

---

# Conceitos Praticados

* Funções
* Arrays
* Arrays bidimensionais
* Índices
* Loops
* Loops aninhados
* Comparação numérica
* Variável acumuladora
* `push()`
* `return`
