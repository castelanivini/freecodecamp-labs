# Implement a Value Remover Function

## Objetivo

Criar uma função que receba um array como primeiro argumento e depois uma quantidade variável de valores que devem ser removidos desse array.

A função deve retornar um **novo array**, contendo apenas os elementos que não correspondem aos valores informados para remoção.

O exercício trabalha principalmente com:

- argumentos de função;
- quantidade variável de argumentos;
- rest parameters;
- arrays;
- `filter()`;
- `includes()`.

---

## 1. Criar a função

Crie uma função chamada:

```javascript
destroyer()
```

Ela deve receber:

1. um array;
2. um ou mais valores que devem ser removidos.

Por exemplo:

```javascript
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

Nesse caso:

```text
array original:
[1, 2, 3, 1, 2, 3]

valores para remover:
2
3
```

O resultado deve ser:

```javascript
[1, 1]
```

---

## 2. Quantidade indeterminada de argumentos

Essa é uma das partes mais importantes do exercício.

A função não recebe sempre a mesma quantidade de argumentos.

Por exemplo:

```javascript
destroyer([1, 2, 3], 2);
```

possui:

```text
2 argumentos
```

Enquanto:

```javascript
destroyer([1, 2, 3, 4], 2, 3, 4);
```

possui:

```text
4 argumentos
```

E poderia existir:

```javascript
destroyer([1, 2, 3, 4, 5], 1, 2, 3, 4, 5);
```

Portanto, você não pode criar parâmetros fixos como:

```javascript
function destroyer(arr, value1, value2) {
  // ...
}
```

porque não sabemos quantos valores serão enviados.

---

## 3. Rest Parameters

JavaScript permite capturar uma quantidade variável de argumentos usando:

```javascript
...
```

Isso é chamado de:

```text
Rest Parameter
```

Exemplo:

```javascript
function example(first, ...rest) {
  console.log(first);
  console.log(rest);
}
```

Chamando:

```javascript
example(10, 20, 30, 40);
```

Temos:

```text
first
  ↓
 10


rest
  ↓
[20, 30, 40]
```

Ou seja, o rest parameter transforma todos os argumentos restantes em um array.

---

## 4. Aplicando ao `destroyer`

Conceitualmente, sua função pode separar:

```text
primeiro argumento
       ↓
array original


argumentos restantes
       ↓
valores para remover
```

Por exemplo:

```javascript
destroyer([1, 2, 3, 4], 2, 4);
```

Dentro da função você quer trabalhar mentalmente com:

```text
arr
↓
[1, 2, 3, 4]


valores para remover
↓
[2, 4]
```

Isso deixa o problema muito mais simples.

---

## 5. Filtrar o array original

Depois de separar os valores que devem ser removidos, você precisa percorrer o array original.

Para cada elemento, pergunte:

```text
"Esse valor está na lista
de valores para remover?"
```

Se estiver:

```text
remove
```

Se não estiver:

```text
mantém
```

---

## Exemplo

Entrada:

```javascript
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

Valores para remover:

```javascript
[2, 3]
```

Processamento:

```text
1
↓
está em [2, 3]?
↓
não
↓
mantém
```

```text
2
↓
está em [2, 3]?
↓
sim
↓
remove
```

```text
3
↓
está em [2, 3]?
↓
sim
↓
remove
```

Depois:

```text
1 → mantém
2 → remove
3 → remove
```

Resultado:

```javascript
[1, 1]
```

---

## 6. `filter()` pode ajudar

O método:

```javascript
filter()
```

cria um novo array contendo apenas os elementos para os quais o callback retorna:

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

No `destroyer`, você quer utilizar a mesma ideia.

Mas a pergunta será:

```text
"Esse elemento NÃO deve ser removido?"
```

---

## 7. `includes()` pode ajudar

Se os valores para remover estiverem em um array:

```javascript
const valuesToRemove = [2, 3];
```

você pode verificar:

```javascript
valuesToRemove.includes(2);
```

Resultado:

```javascript
true
```

Enquanto:

```javascript
valuesToRemove.includes(1);
```

retorna:

```javascript
false
```

---

## 8. A lógica do filtro

Você quer **manter** os elementos que não aparecem na lista de remoção.

Então:

```text
elemento existe
nos valores para remover?
        │
    ┌───┴───┐
    │       │
   sim     não
    │       │
    ▼       ▼
 remove    mantém
```

Como `filter()` mantém quando recebe:

```javascript
true
```

sua condição precisa representar:

```text
"o elemento NÃO está
na lista de remoção"
```

---

## 9. Todas as ocorrências devem ser removidas

Considere:

```javascript
destroyer([1, 2, 2, 2, 3], 2);
```

Não deve ser removido apenas o primeiro `2`.

Todos devem sair:

```text
[1, 2, 2, 2, 3]
    ↑  ↑  ↑
   remove todos
```

Resultado:

```javascript
[1, 3]
```

---

## 10. Mais de um valor para remover

Considere:

```javascript
destroyer(
  ["tree", "hamburger", 53],
  "tree",
  53
);
```

Valores para remover:

```javascript
["tree", 53]
```

Processamento:

```text
"tree"
↓
remove


"hamburger"
↓
mantém


53
↓
remove
```

Resultado:

```javascript
["hamburger"]
```

---

## 11. Não alterar o array original

A função deve retornar:

```text
um novo array
```

Você não precisa remover elementos diretamente do array original.

Por exemplo:

```javascript
const original = [1, 2, 3];

const result = destroyer(original, 2);
```

Resultado:

```javascript
result
```

deve ser:

```javascript
[1, 3]
```

Enquanto:

```javascript
original
```

continua:

```javascript
[1, 2, 3]
```

O `filter()` já é útil aqui porque ele retorna um novo array.

---

## Fluxo Geral

```text
destroyer(
  [1, 2, 3, 2],
  2,
  3
)
        │
        ▼
separar argumentos
        │
   ┌────┴────┐
   │         │
   ▼         ▼
array      valores
original   para remover
   │         │
   ▼         ▼
[1,2,3,2]  [2,3]
   │
   ▼
percorrer com filter
   │
   ▼
item está em [2,3]?
   │
┌──┴──┐
│     │
sim   não
│     │
▼     ▼
remove mantém
        │
        ▼
      [1]
```

---

## Pseudocódigo

```text
função destroyer recebe:

    array
    e uma quantidade variável
    de valores para remover


separar:

    array original

    valores para remover


filtrar o array original

    para cada elemento:

        verificar se ele existe
        nos valores para remover

        se existir:
            não manter

        se não existir:
            manter


retornar novo array
```

---

## Estrutura sugerida

```javascript
function destroyer(arr, ...values) {

  // arr contém o array original

  // values contém todos os argumentos
  // restantes em um array


  return arr.filter((item) => {

    // verificar se item
    // NÃO está em values

  });
}
```

---

## Exemplos esperados

### Exemplo 1

```javascript
destroyer(
  [1, 2, 3, 1, 2, 3],
  2,
  3
);
```

Retorno:

```javascript
[1, 1]
```

---

### Exemplo 2

```javascript
destroyer(
  [1, 2, 3, 5, 1, 2, 3],
  2,
  3
);
```

Retorno:

```javascript
[1, 5, 1]
```

---

### Exemplo 3

```javascript
destroyer(
  ["tree", "hamburger", 53],
  "tree",
  53
);
```

Retorno:

```javascript
["hamburger"]
```

---

### Exemplo 4

```javascript
destroyer(
  [1, 2, 2, 2, 3],
  2
);
```

Retorno:

```javascript
[1, 3]
```

---

## Critérios de Aceitação

- [ ] Criar uma função chamada `destroyer`.
- [ ] A função receber um array como primeiro argumento.
- [ ] Aceitar uma quantidade indeterminada de argumentos adicionais.
- [ ] Separar os valores que devem ser removidos.
- [ ] Verificar cada elemento do array original.
- [ ] Remover todas as ocorrências dos valores informados.
- [ ] Manter os elementos que não estão na lista de remoção.
- [ ] Retornar um novo array.
- [ ] Não alterar o array original.

---

## Conceitos praticados

- Arrays
- Funções
- Argumentos
- Rest parameters
- `...`
- Callback functions
- `filter()`
- `includes()`
- Operador de negação `!`
- Imutabilidade
- Quantidade variável de argumentos
- `return`

---

## Regra Mental

Primeiro pense:

```text
"Qual é o array?"
```

Depois:

```text
"Quais são os valores
que preciso destruir?"
```

Exemplo:

```javascript
destroyer([1, 2, 3, 2, 4], 2, 4);
```

Mentalmente transforme em:

```text
ARRAY
↓
[1, 2, 3, 2, 4]


DESTRUIR
↓
[2, 4]
```

Agora basta perguntar para cada elemento:

```text
1 → está em [2,4]? NÃO → mantém

2 → está em [2,4]? SIM → remove

3 → está em [2,4]? NÃO → mantém

2 → está em [2,4]? SIM → remove

4 → está em [2,4]? SIM → remove
```

Resultado:

```javascript
[1, 3]
```

A ideia central é:

```text
ARRAY ORIGINAL
      -
VALORES INFORMADOS
      =
NOVO ARRAY
```