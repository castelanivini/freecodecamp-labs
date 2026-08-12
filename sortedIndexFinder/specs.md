# Implement a Sorted Index Finder

## Objetivo

Criar uma função que descubra em qual posição um número deveria ser inserido em um array depois que o array for ordenado em ordem crescente.

O exercício trabalha principalmente com:

- `sort()`;
- `findIndex()`;
- funções de callback;
- índices de arrays;
- ordenação numérica.

---

## 1. Criar a função

Crie uma função chamada:

```javascript
getIndexToIns(arr, num)
```

Ela deve receber dois argumentos:

- `arr`: array de números;
- `num`: número que queremos inserir.

A função deve retornar:

```javascript
number
```

representando o menor índice onde `num` poderia ser inserido mantendo o array ordenado.

---

## 2. Primeiro ordenar o array

Antes de procurar a posição correta, você deve ordenar:

```javascript
arr
```

em ordem crescente.

Por exemplo:

```javascript
[20, 3, 5]
```

deve virar:

```javascript
[3, 5, 20]
```

---

## Cuidado com `sort()` em números

Por padrão:

```javascript
arr.sort();
```

não é uma boa forma de ordenar números.

JavaScript pode comparar os valores como strings.

Por exemplo:

```javascript
[2, 10, 5]
```

poderia ser ordenado de maneira inesperada.

Para ordenar numericamente, utilize uma função de comparação:

```javascript
(a, b) => {
  // comparação
}
```

Para ordem crescente, pense:

```text
menor → maior
```

---

## 3. Encontrar o índice correto

Depois de ordenar o array, você deve usar:

```javascript
findIndex()
```

para encontrar a posição onde `num` deveria entrar.

---

## Como pensar na condição?

Considere:

```javascript
arr = [1, 2, 3, 4]

num = 1.5
```

Você procura o **primeiro elemento que seja maior ou igual a `num`**.

Percorrendo:

```text
1 >= 1.5
↓
false

2 >= 1.5
↓
true
```

O `2` está no índice:

```text
1
```

Portanto:

```javascript
getIndexToIns([1, 2, 3, 4], 1.5);
```

deve retornar:

```javascript
1
```

---

## 4. Por que usar `>=`?

Considere:

```javascript
arr = [1, 2, 3, 4]

num = 3
```

O número `3` já existe.

O exercício pede o:

```text
lowest index
```

ou seja, o **menor índice possível** para inserir esse número.

Percorrendo:

```text
1 >= 3 → false
2 >= 3 → false
3 >= 3 → true
```

Então o índice correto é:

```text
2
```

Por isso, conceitualmente, você procura:

```text
primeiro elemento >= num
```

e não apenas:

```text
primeiro elemento > num
```

---

## 5. Usando `findIndex()`

O método:

```javascript
findIndex()
```

recebe uma função de callback.

Exemplo:

```javascript
const numbers = [10, 20, 30];

const index = numbers.findIndex((number) => {
  return number >= 15;
});
```

Processamento:

```text
10 >= 15 → false

20 >= 15 → true
             ↑
           index 1
```

Resultado:

```javascript
1
```

---

## 6. O que `findIndex()` retorna quando não encontra?

Essa é uma parte importante do exercício.

Considere:

```javascript
arr = [1, 2, 3, 4]

num = 10
```

Você procura:

```text
primeiro elemento >= 10
```

Mas:

```text
1 >= 10 → false
2 >= 10 → false
3 >= 10 → false
4 >= 10 → false
```

Nenhum elemento satisfaz a condição.

Nesse caso:

```javascript
findIndex()
```

retorna:

```javascript
-1
```

---

## 7. Mas `-1` não é a resposta final

Se:

```javascript
num = 10
```

e o array é:

```javascript
[1, 2, 3, 4]
```

o número deveria ser colocado no final:

```javascript
[1, 2, 3, 4, 10]
```

O índice seria:

```text
4
```

Observe:

```text
índices atuais:

 0  1  2  3
 ↓  ↓  ↓  ↓

[1, 2, 3, 4]

             ↑
           índice 4
```

Portanto, se `findIndex()` retornar:

```javascript
-1
```

você precisa tratar esse caso.

Uma informação útil nesse momento é:

```javascript
arr.length
```

---

## 8. Exemplo completo de raciocínio

Entrada:

```javascript
getIndexToIns([20, 3, 5], 19);
```

### Etapa 1 — Ordenar

Original:

```javascript
[20, 3, 5]
```

Ordenado:

```javascript
[3, 5, 20]
```

---

### Etapa 2 — Procurar o primeiro valor `>= 19`

```text
3 >= 19
↓
false

5 >= 19
↓
false

20 >= 19
↓
true
```

O `20` está no índice:

```text
2
```

Portanto:

```javascript
getIndexToIns([20, 3, 5], 19);
```

retorna:

```javascript
2
```

---

## 9. Número menor que todos

Considere:

```javascript
getIndexToIns([10, 20, 30], 5);
```

Depois de ordenar:

```javascript
[10, 20, 30]
```

Primeira comparação:

```text
10 >= 5
↓
true
```

Então:

```text
index = 0
```

Resultado:

```javascript
0
```

Porque `5` entraria aqui:

```text
    ↓
[5, 10, 20, 30]
```

---

## 10. Número maior que todos

Considere:

```javascript
getIndexToIns([10, 20, 30], 40);
```

Nenhum valor é:

```text
>= 40
```

Então:

```javascript
findIndex()
```

retorna:

```javascript
-1
```

Mas `40` deveria entrar depois de todos:

```javascript
[10, 20, 30, 40]
```

Portanto, o índice esperado é:

```javascript
3
```

Que também corresponde a:

```javascript
arr.length
```

---

## Fluxo Geral

```text
Receber arr e num
       │
       ▼
Ordenar arr
do menor para o maior
       │
       ▼
Usar findIndex()
       │
       ▼
Procurar primeiro valor
que seja >= num
       │
       ▼
Encontrou?
   ┌───┴───┐
   │       │
  sim     não
   │       │
   ▼       ▼
retornar   findIndex
 índice    retorna -1
               │
               ▼
          retornar posição
          depois do último
```

---

## Pseudocódigo

```text
função getIndexToIns recebe arr e num

    ordenar arr em ordem crescente

    procurar com findIndex
    o primeiro elemento que seja
    maior ou igual a num

    guardar o índice encontrado

    se nenhum índice for encontrado:

        retornar posição
        depois do último elemento

    senão:

        retornar índice encontrado
```

---

## Estrutura sugerida

```javascript
function getIndexToIns(arr, num) {
  arr.sort((a, b) => {
    // ordenar numericamente
  });

  const index = arr.findIndex((value) => {
    // verificar se num pode entrar aqui
  });

  // tratar o caso em que findIndex retorna -1

  // retornar índice
}
```

---

## Exemplos esperados

### Exemplo 1

```javascript
getIndexToIns([1, 2, 3, 4], 1.5);
```

Array:

```text
[1, 2, 3, 4]
    ↑
   1.5
```

Retorno:

```javascript
1
```

---

### Exemplo 2

```javascript
getIndexToIns([20, 3, 5], 19);
```

Depois de ordenar:

```javascript
[3, 5, 20]
        ↑
       19
```

Retorno:

```javascript
2
```

---

### Exemplo 3

```javascript
getIndexToIns([10, 20, 30], 5);
```

Retorno:

```javascript
0
```

---

### Exemplo 4

```javascript
getIndexToIns([10, 20, 30], 40);
```

Retorno:

```javascript
3
```

---

### Exemplo 5

```javascript
getIndexToIns([1, 2, 3, 4], 3);
```

O primeiro valor maior ou igual a `3` é o próprio:

```text
3
```

Retorno:

```javascript
2
```

---

## Critérios de Aceitação

- [ ] Criar uma função chamada `getIndexToIns`.
- [ ] A função receber um array e um número.
- [ ] Utilizar `sort()`.
- [ ] Ordenar numericamente em ordem crescente.
- [ ] Utilizar `findIndex()`.
- [ ] Procurar o menor índice possível para inserir `num`.
- [ ] Considerar valores iguais usando `>=`.
- [ ] Tratar o retorno `-1` do `findIndex()`.
- [ ] Retornar o índice final do array quando `num` for maior que todos os elementos.
- [ ] A função sempre retornar um número.

---

## Conceitos praticados

- Arrays
- Índices
- Funções
- Callback functions
- Higher-order functions
- `sort()`
- `findIndex()`
- Ordenação numérica
- Comparações
- `arr.length`
- `return`

---

## Regra Mental

Pense no exercício como duas perguntas.

Primeiro:

```text
"Como ficaria o array
do menor para o maior?"
```

```text
[20, 3, 5]
     ↓
[3, 5, 20]
```

Depois:

```text
"Qual é o PRIMEIRO número
que já é >= ao número
que quero inserir?"
```

Para:

```text
num = 19
```

temos:

```text
[3, 5, 20]
 ↑  ↑   ↑
não não SIM
         │
         ▼
       index 2
```

Então:

```text
primeiro valor >= num
        ↓
esse é o índice de inserção
```

Se nenhum valor for grande o suficiente:

```text
[3, 5, 20]     num = 30

nenhum >= 30
      ↓
entra no final
      ↓
arr.length
```