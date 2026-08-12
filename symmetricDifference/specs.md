# Build a Symmetric Difference Function

## Objetivo

Criar uma função que compare dois arrays e retorne apenas os elementos que aparecem em **um dos arrays, mas não nos dois**.

Esse conceito é chamado de:

```text
Symmetric Difference
```

ou:

```text
Diferença Simétrica
```

O exercício trabalha principalmente com:

- comparação entre arrays;
- `filter()`;
- `includes()`;
- combinação de resultados;
- funções de callback.

---

## 1. Criar a função

Crie uma função chamada:

```javascript
diffArray(arr1, arr2)
```

Ela deve receber dois argumentos:

- `arr1`: primeiro array;
- `arr2`: segundo array.

A função deve sempre retornar:

```javascript
Array
```

---

## 2. Entendendo a diferença simétrica

Considere:

```javascript
const arr1 = ["diamond", "stick", "apple"];

const arr2 = ["stick", "emerald", "bread"];
```

Os dois arrays possuem:

```text
stick
```

Como `"stick"` aparece **nos dois arrays**, ele não deve fazer parte do resultado.

---

### Elementos exclusivos de `arr1`

```text
diamond
apple
```

Eles não aparecem em `arr2`.

---

### Elementos exclusivos de `arr2`

```text
emerald
bread
```

Eles não aparecem em `arr1`.

---

### Resultado

```javascript
[
  "diamond",
  "apple",
  "emerald",
  "bread"
]
```

---

## 3. Não confundir com diferença comum

Você não quer descobrir apenas:

```text
"O que existe em arr1 e não existe em arr2?"
```

Você também precisa descobrir:

```text
"O que existe em arr2 e não existe em arr1?"
```

Ou seja, a comparação acontece nas duas direções:

```text
arr1 → arr2

e

arr2 → arr1
```

---

## 4. Primeira comparação

Primeiro você pode analisar:

```javascript
arr1
```

e perguntar para cada elemento:

```text
"Esse elemento existe em arr2?"
```

Se existir:

```text
não quero
```

Se não existir:

```text
quero manter
```

---

### Exemplo

```javascript
arr1 = ["diamond", "stick", "apple"]

arr2 = ["stick", "emerald", "bread"]
```

Processando `arr1`:

```text
diamond
   ↓
existe em arr2?
   ↓
não
   ↓
mantém
```

```text
stick
   ↓
existe em arr2?
   ↓
sim
   ↓
remove
```

```text
apple
   ↓
existe em arr2?
   ↓
não
   ↓
mantém
```

Resultado parcial:

```javascript
["diamond", "apple"]
```

---

## 5. Segunda comparação

Agora você precisa fazer o contrário.

Percorrer:

```javascript
arr2
```

e perguntar:

```text
"Esse elemento existe em arr1?"
```

---

### Exemplo

```text
stick
   ↓
existe em arr1?
   ↓
sim
   ↓
remove
```

```text
emerald
   ↓
existe em arr1?
   ↓
não
   ↓
mantém
```

```text
bread
   ↓
existe em arr1?
   ↓
não
   ↓
mantém
```

Resultado parcial:

```javascript
["emerald", "bread"]
```

---

## 6. Juntar os dois resultados

Agora temos:

```javascript
["diamond", "apple"]
```

e:

```javascript
["emerald", "bread"]
```

Precisamos combinar os dois:

```javascript
[
  "diamond",
  "apple",
  "emerald",
  "bread"
]
```

Você pode pensar conceitualmente em:

```text
exclusivos de arr1
        +
exclusivos de arr2
        ↓
diferença simétrica
```

---

## 7. Utilizando `filter()`

A especificação exige o uso de:

```javascript
filter()
```

Lembre que `filter()` cria um novo array contendo apenas os elementos para os quais o callback retorna:

```javascript
true
```

Exemplo:

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter((number) => {
  return number > 2;
});
```

Resultado:

```javascript
[3, 4]
```

---

## 8. `includes()` pode ajudar

Para descobrir se um array contém determinado valor, você pode utilizar:

```javascript
includes()
```

Exemplo:

```javascript
const arr = ["a", "b", "c"];

arr.includes("b");
```

Retorna:

```javascript
true
```

Enquanto:

```javascript
arr.includes("x");
```

retorna:

```javascript
false
```

---

## 9. A lógica do filtro

Considere:

```javascript
arr1.filter((item) => {
  // ...
});
```

Para cada `item`, você precisa descobrir:

```text
item existe no outro array?
```

Mas lembre:

Você quer manter justamente os que **NÃO existem** no outro array.

Então a lógica é:

```text
item existe no outro array?
        │
    ┌───┴───┐
    │       │
   sim     não
    │       │
    ▼       ▼
 remove    mantém
```

---

## 10. Caso os arrays sejam iguais

Considere:

```javascript
diffArray(
  [1, 2, 3],
  [1, 2, 3]
);
```

Comparando:

```text
1 → existe nos dois
2 → existe nos dois
3 → existe nos dois
```

Não existe nenhum elemento exclusivo.

Então o resultado deve ser:

```javascript
[]
```

---

## 11. Caso nenhum elemento seja igual

Considere:

```javascript
diffArray(
  [1, 2],
  [3, 4]
);
```

Nenhum elemento aparece nos dois arrays.

Então todos são exclusivos.

Resultado:

```javascript
[1, 2, 3, 4]
```

---

## Fluxo Geral

```text
          arr1                   arr2
            │                      │
            ▼                      ▼
        filter()                filter()
            │                      │
            ▼                      ▼
elementos de arr1          elementos de arr2
que NÃO estão em arr2      que NÃO estão em arr1
            │                      │
            └──────────┬───────────┘
                       │
                       ▼
                 juntar arrays
                       │
                       ▼
             diferença simétrica
```

---

## Pseudocódigo

```text
função diffArray recebe arr1 e arr2

    filtrar arr1

        manter elementos
        que não existem em arr2

    guardar resultado


    filtrar arr2

        manter elementos
        que não existem em arr1

    guardar resultado


    juntar os dois resultados

    retornar novo array
```

---

## Estrutura sugerida

```javascript
function diffArray(arr1, arr2) {
  const onlyArr1 = arr1.filter((item) => {
    // verificar se item NÃO existe em arr2
  });

  const onlyArr2 = arr2.filter((item) => {
    // verificar se item NÃO existe em arr1
  });

  // juntar os dois resultados

  // retornar resultado
}
```

---

## Exemplos esperados

### Exemplo 1

```javascript
diffArray(
  ["diamond", "stick", "apple"],
  ["stick", "emerald", "bread"]
);
```

Retorno:

```javascript
["diamond", "apple", "emerald", "bread"]
```

---

### Exemplo 2

```javascript
diffArray(
  [1, 2, 3],
  [1, 2, 3]
);
```

Retorno:

```javascript
[]
```

---

### Exemplo 3

```javascript
diffArray(
  [1, 2],
  [3, 4]
);
```

Retorno:

```javascript
[1, 2, 3, 4]
```

---

### Exemplo 4

```javascript
diffArray(
  [1, 2, 3, 5],
  [1, 2, 3, 4, 5]
);
```

O único elemento exclusivo é:

```text
4
```

Retorno:

```javascript
[4]
```

---

## Critérios de Aceitação

- [ ] Criar uma função chamada `diffArray`.
- [ ] A função receber dois arrays.
- [ ] A função sempre retornar um array.
- [ ] Utilizar o método `filter()`.
- [ ] Encontrar elementos de `arr1` que não aparecem em `arr2`.
- [ ] Encontrar elementos de `arr2` que não aparecem em `arr1`.
- [ ] Combinar os dois resultados.
- [ ] Não incluir elementos presentes nos dois arrays.
- [ ] Retornar `[]` quando não houver diferença simétrica.

---

## Conceitos praticados

- Arrays
- Comparação entre arrays
- Funções
- Callback functions
- Higher-order functions
- `filter()`
- `includes()`
- Spread operator
- Diferença simétrica
- Operador de negação `!`
- `return`

---

## Regra Mental

Não pense apenas:

```text
"O que A tem que B não tem?"
```

Isso resolve apenas metade do problema.

Pense:

```text
O que A tem que B não tem?
            +
O que B tem que A não tem?
            ↓
    DIFERENÇA SIMÉTRICA
```

Visualmente:

```text
A = [1, 2, 3]
B =    [2, 3, 4]

A exclusivo:
[1]

B exclusivo:
[4]

elementos compartilhados:
[2, 3]
  ↓
ignorar

resultado:
[1, 4]
```

A palavra-chave do exercício é:

```text
EXCLUSIVO
```

Se aparece **somente em um dos arrays**, entra no resultado.

Se aparece **nos dois**, fica de fora.