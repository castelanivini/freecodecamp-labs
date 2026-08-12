# Create a Deep Flattening Tool

## Objetivo

Criar uma função que receba um array com qualquer nível de aninhamento e retorne um novo array completamente achatado.

"Achar" ou "flatten" um array significa transformar algo como:

```javascript
[[1], [], [2, [3]]]
```

em:

```javascript
[1, 2, 3]
```

O exercício trabalha principalmente com:

- arrays aninhados;
- recursão;
- `Array.isArray()`;
- loops;
- construção de novos arrays;
- ausência de variáveis globais.

---

## 1. Criar a função

Crie uma função chamada:

```javascript
steamrollArray(arr)
```

Ela deve receber um array como argumento.

Exemplo:

```javascript
steamrollArray([[1], [2, [3]]]);
```

Retorno esperado:

```javascript
[1, 2, 3]
```

---

## 2. Entendendo o problema

Considere:

```javascript
[1, [2, [3, 4]], 5]
```

Você precisa percorrer os elementos em ordem.

Temos:

```text
1
[2, [3, 4]]
5
```

O `1` não é array.

Então ele entra direto no resultado.

O segundo elemento:

```javascript
[2, [3, 4]]
```

é um array.

Então você precisa "abrir" esse array também.

Dentro dele:

```text
2
[3, 4]
```

O `2` entra direto.

Mas:

```javascript
[3, 4]
```

também é array.

Então precisa abrir novamente.

Resultado final:

```javascript
[1, 2, 3, 4, 5]
```

---

## 3. O nível de aninhamento pode variar

Você não sabe antecipadamente quantos níveis existirão.

Pode ser algo simples:

```javascript
[1, [2, 3]]
```

Ou:

```javascript
[1, [2, [3, [4, [5]]]]]
```

Por isso, uma lógica fixa de:

```text
abrir 1 vez
abrir 2 vezes
abrir 3 vezes
```

não resolve o problema de forma geral.

Você precisa de uma lógica que consiga continuar enquanto encontrar arrays.

---

## 4. Apenas arrays devem ser "abertos"

Outros tipos devem permanecer exatamente como estão.

Por exemplo:

```javascript
[
  1,
  { foo: "bar" },
  [2]
]
```

deve virar:

```javascript
[
  1,
  { foo: "bar" },
  2
]
```

O objeto:

```javascript
{ foo: "bar" }
```

não deve ser alterado.

---

## Outro exemplo

Entrada:

```javascript
["baz", [1, 2], {}]
```

Saída:

```javascript
["baz", 1, 2, {}]
```

A string:

```javascript
"baz"
```

permanece.

O objeto:

```javascript
{}
```

também permanece.

Apenas:

```javascript
[1, 2]
```

é "desembrulhado".

---

## 5. Como descobrir se algo é array

Você pode usar:

```javascript
Array.isArray(value)
```

Exemplos:

```javascript
Array.isArray([1, 2, 3]);
```

Retorna:

```javascript
true
```

---

```javascript
Array.isArray("hello");
```

Retorna:

```javascript
false
```

---

```javascript
Array.isArray({ foo: "bar" });
```

Retorna:

```javascript
false
```

---

## 6. A pergunta central do exercício

Para cada elemento, você precisa perguntar:

```text
"Esse elemento é um array?"
```

Se não:

```text
adiciona ao resultado
```

Se sim:

```text
entra nele
e aplica a mesma lógica
```

Visualmente:

```text
elemento
   │
   ▼
é array?
 ┌──┴───┐
 │      │
não    sim
 │      │
 ▼      ▼
push   abrir
       array
         │
         ▼
   repetir lógica
```

---

## 7. Recursão combina muito bem com esse problema

Recursão acontece quando uma função chama ela mesma.

Exemplo conceitual:

```javascript
function exemplo(value) {
  if (/* condição */) {
    exemplo(/* algo menor */);
  }
}
```

No caso do `steamrollArray`, a ideia é:

```text
se encontrar valor comum
    ↓
adiciona

se encontrar array
    ↓
chama a mesma lógica
para esse array
```

---

## Exemplo visual de recursão

Entrada:

```javascript
[1, [2, [3]]]
```

Primeira chamada:

```text
steamrollArray([1, [2, [3]]])
```

Encontra:

```text
1
```

Adiciona.

Depois encontra:

```javascript
[2, [3]]
```

Como é array:

```text
processa novamente
```

Agora temos:

```text
2
[3]
```

O `2` é adicionado.

Depois:

```javascript
[3]
```

também é array.

Processa novamente.

Finalmente:

```text
3
```

é adicionado.

Resultado:

```javascript
[1, 2, 3]
```

---

## 8. Não usar `flat()`

O exercício proíbe:

```javascript
arr.flat()
```

e:

```javascript
arr.flatMap()
```

Mesmo isso:

```javascript
arr.flat(Infinity)
```

não pode ser utilizado.

O objetivo é praticar o algoritmo manualmente.

---

## 9. Não usar variáveis globais

Evite algo como:

```javascript
let result = [];

function steamrollArray(arr) {
  // usa result global
}
```

Isso cria estado fora da função.

O exercício pede que:

```text
Global variables should not be used.
```

Então o array de resultado deve existir dentro da própria função ou dentro de uma função auxiliar local.

---

## Exemplo de problema com variável global

```javascript
let result = [];

function steamrollArray(arr) {
  // ...
}
```

Se você executar:

```javascript
steamrollArray([1, 2]);
steamrollArray([3, 4]);
```

a segunda chamada poderia acabar reutilizando dados da primeira.

É exatamente esse tipo de efeito colateral que queremos evitar.

---

## 10. Estratégia com função auxiliar

Uma abordagem interessante é criar o resultado dentro da função principal:

```javascript
function steamrollArray(arr) {
  const result = [];

  // função auxiliar aqui dentro

  return result;
}
```

A função auxiliar pode:

```text
receber um array
    ↓
percorrer elementos
    ↓
se for array:
    chamar auxiliar novamente
    ↓
se não:
    adicionar em result
```

Como a função auxiliar está dentro de:

```javascript
steamrollArray
```

não existe variável global.

---

## Estrutura sugerida

```javascript
function steamrollArray(arr) {
  const result = [];

  function flatten(current) {
    for (const item of current) {

      if (/* item é array? */) {
        // processar esse array novamente
      } else {
        // adicionar item ao resultado
      }

    }
  }

  // iniciar processamento

  return result;
}
```

---

## 11. Exemplo passo a passo

Entrada:

```javascript
steamrollArray([
  1,
  [2, [3]],
  4
]);
```

Inicialmente:

```text
result = []
```

---

### Primeiro item

```text
1
```

É array?

```text
não
```

Então:

```javascript
result = [1]
```

---

### Segundo item

```javascript
[2, [3]]
```

É array?

```text
sim
```

Então processamos esse array.

---

### Dentro dele

Primeiro:

```text
2
```

Não é array.

Resultado:

```javascript
[1, 2]
```

Depois:

```javascript
[3]
```

É array.

Processamos novamente.

---

### Dentro de `[3]`

Temos:

```text
3
```

Não é array.

Resultado:

```javascript
[1, 2, 3]
```

---

### Voltando ao array inicial

Último item:

```text
4
```

Resultado final:

```javascript
[1, 2, 3, 4]
```

---

## 12. Arrays vazios

Considere:

```javascript
[[1], [], [2]]
```

O array vazio:

```javascript
[]
```

não adiciona nada ao resultado.

Então:

```javascript
steamrollArray([[1], [], [2]]);
```

deve retornar:

```javascript
[1, 2]
```

---

## 13. Objetos devem permanecer

Entrada:

```javascript
[
  1,
  {
    foo: "bar"
  },
  [2]
]
```

Processamento:

```text
1
↓
mantém

{ foo: "bar" }
↓
não é array
↓
mantém

[2]
↓
é array
↓
abre
↓
2
```

Resultado:

```javascript
[
  1,
  {
    foo: "bar"
  },
  2
]
```

---

## Fluxo Geral

```text
steamrollArray(arr)
       │
       ▼
criar result = []
       │
       ▼
percorrer cada item
       │
       ▼
Array.isArray(item)?
     ┌────┴────┐
     │         │
    não       sim
     │         │
     ▼         ▼
result.push   processar
(item)        item novamente
                 │
                 └──────┐
                        │
                        ▼
                  mesma lógica
       │
       ▼
retornar result
```

---

## Pseudocódigo

```text
função steamrollArray recebe arr

    criar result vazio

    criar função auxiliar flatten

        para cada item do array recebido:

            se item for array:

                chamar flatten(item)

            senão:

                adicionar item em result


    chamar flatten(arr)

    retornar result
```

---

## Exemplos esperados

### Exemplo 1

```javascript
steamrollArray([[1], [], [2, [3]]]);
```

Retorno:

```javascript
[1, 2, 3]
```

---

### Exemplo 2

```javascript
steamrollArray([
  1,
  { foo: "bar" },
  [2]
]);
```

Retorno:

```javascript
[
  1,
  { foo: "bar" },
  2
]
```

---

### Exemplo 3

```javascript
steamrollArray([
  "baz",
  [1, 2],
  {}
]);
```

Retorno:

```javascript
[
  "baz",
  1,
  2,
  {}
]
```

---

### Exemplo 4

```javascript
steamrollArray([
  1,
  [2, [3, [4, [5]]]]
]);
```

Retorno:

```javascript
[1, 2, 3, 4, 5]
```

---

### Exemplo 5

```javascript
steamrollArray([[], [[]], [[[]]]]);
```

Retorno:

```javascript
[]
```

---

## Critérios de Aceitação

- [ ] Criar uma função chamada `steamrollArray`.
- [ ] A função receber um array.
- [ ] Aceitar diferentes níveis de aninhamento.
- [ ] Retornar um array completamente achatado.
- [ ] Preservar a ordem dos elementos.
- [ ] Abrir apenas valores que sejam arrays.
- [ ] Preservar strings.
- [ ] Preservar números.
- [ ] Preservar objetos.
- [ ] Arrays vazios não adicionarem elementos.
- [ ] Não utilizar `flat()`.
- [ ] Não utilizar `flatMap()`.
- [ ] Não utilizar variáveis globais.
- [ ] Retornar um novo array.

---

## Conceitos praticados

- Arrays
- Arrays aninhados
- Recursão
- Funções
- Funções auxiliares
- Escopo
- `Array.isArray()`
- Loops
- `for...of`
- `push()`
- Estruturas condicionais
- Call stack
- `return`

---

## Regra Mental

Pense em cada elemento individualmente:

```text
"É array?"
```

Se não:

```text
vai para o resultado
```

Se sim:

```text
abre e faz a MESMA pergunta
para tudo que estiver dentro
```

Exemplo:

```text
[1, [2, [3]]]
```

Pense:

```text
1
↓
não é array
↓
push


[2, [3]]
↓
é array
↓
abre


2
↓
não é array
↓
push


[3]
↓
é array
↓
abre


3
↓
não é array
↓
push
```

Resultado:

```javascript
[1, 2, 3]
```

A ideia central é:

```text
SE NÃO É ARRAY
      ↓
   GUARDA


SE É ARRAY
      ↓
   ABRE
      ↓
APLICA A MESMA LÓGICA
```

É justamente esse "aplicar a mesma lógica novamente" que torna a **recursão** uma solução natural para esse problema.