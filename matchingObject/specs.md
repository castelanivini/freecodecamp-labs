# Implement a Matching Object Filter

## Objetivo

Criar uma função que receba:

1. um array de objetos;
2. um objeto contendo propriedades que queremos procurar.

A função deve retornar apenas os objetos que possuem **todas as propriedades e valores presentes no objeto de busca**.

O exercício trabalha principalmente com:

- arrays de objetos;
- `filter()`;
- propriedades de objetos;
- `Object.keys()`;
- `every()`;
- comparação de valores.

---

## 1. Criar a função

Crie uma função chamada:

```javascript
whatIsInAName(collection, source)
```

Ela recebe dois argumentos:

```javascript
collection
```

que será um array de objetos, e:

```javascript
source
```

que será um objeto contendo as propriedades que precisam ser encontradas.

---

## 2. Entendendo o problema

Considere:

```javascript
const collection = [
  {
    first: "Romeo",
    last: "Montague"
  },
  {
    first: "Mercutio",
    last: null
  },
  {
    first: "Tybalt",
    last: "Capulet"
  }
];
```

E queremos procurar:

```javascript
const source = {
  last: "Capulet"
};
```

Você precisa analisar cada objeto da `collection`.

---

### Primeiro objeto

```javascript
{
  first: "Romeo",
  last: "Montague"
}
```

Precisamos de:

```javascript
last: "Capulet"
```

Mas temos:

```javascript
last: "Montague"
```

Então:

```text
não corresponde ❌
```

---

### Segundo objeto

```javascript
{
  first: "Mercutio",
  last: null
}
```

Precisamos de:

```javascript
last: "Capulet"
```

Também não corresponde:

```text
não corresponde ❌
```

---

### Terceiro objeto

```javascript
{
  first: "Tybalt",
  last: "Capulet"
}
```

Temos exatamente:

```javascript
last: "Capulet"
```

Então:

```text
corresponde ✅
```

Resultado:

```javascript
[
  {
    first: "Tybalt",
    last: "Capulet"
  }
]
```

---

# 3. O detalhe mais importante: TODAS as propriedades

O `source` pode possuir mais de uma propriedade.

Por exemplo:

```javascript
const source = {
  first: "Tybalt",
  last: "Capulet"
};
```

Agora não basta o objeto possuir:

```javascript
first: "Tybalt"
```

Ele também precisa possuir:

```javascript
last: "Capulet"
```

Ou seja:

```text
first correto
     E
last correto
```

Todos precisam corresponder.

---

## Exemplo

Considere:

```javascript
const collection = [
  {
    first: "Tybalt",
    last: "Montague"
  },
  {
    first: "Romeo",
    last: "Capulet"
  },
  {
    first: "Tybalt",
    last: "Capulet"
  }
];
```

E:

```javascript
const source = {
  first: "Tybalt",
  last: "Capulet"
};
```

### Objeto 1

```javascript
{
  first: "Tybalt",
  last: "Montague"
}
```

Comparação:

```text
first:

"Tybalt" === "Tybalt"
✅

last:

"Montague" === "Capulet"
❌
```

Como uma propriedade falhou:

```text
objeto inteiro falha ❌
```

---

### Objeto 2

```javascript
{
  first: "Romeo",
  last: "Capulet"
}
```

Temos:

```text
first → ❌
last  → ✅
```

Também falha.

---

### Objeto 3

```javascript
{
  first: "Tybalt",
  last: "Capulet"
}
```

Temos:

```text
first → ✅
last  → ✅
```

Esse objeto entra no resultado.

---

# 4. Primeiro desafio: descobrir quais propriedades procurar

Você recebe:

```javascript
source
```

Por exemplo:

```javascript
{
  first: "Tybalt",
  last: "Capulet"
}
```

Mas você não deve assumir que sempre serão:

```javascript
first
last
```

O objeto poderia ser:

```javascript
{
  age: 30
}
```

ou:

```javascript
{
  username: "dog",
  active: true,
  level: 10
}
```

Portanto, você precisa descobrir dinamicamente quais são as propriedades de `source`.

---

# 5. `Object.keys()`

O método:

```javascript
Object.keys()
```

retorna um array contendo as chaves de um objeto.

Exemplo:

```javascript
const source = {
  first: "Tybalt",
  last: "Capulet"
};
```

Fazendo:

```javascript
Object.keys(source);
```

temos:

```javascript
["first", "last"]
```

Agora você consegue percorrer as propriedades que precisam ser verificadas.

---

## Visualmente

```text
source
│
├── first: "Tybalt"
│
└── last: "Capulet"

        ↓

Object.keys(source)

        ↓

["first", "last"]
```

---

# 6. Usando a chave para acessar o valor

Se você tiver:

```javascript
const key = "first";
```

pode acessar:

```javascript
source[key]
```

Isso seria equivalente a:

```javascript
source["first"]
```

e retornaria:

```javascript
"Tybalt"
```

Da mesma forma, se tivermos um objeto da collection:

```javascript
const person = {
  first: "Tybalt",
  last: "Capulet"
};
```

podemos fazer:

```javascript
person[key]
```

para obter:

```javascript
"Tybalt"
```

Então podemos comparar:

```javascript
person[key] === source[key]
```

---

# 7. Usando `filter()`

Você quer retornar apenas alguns objetos da `collection`.

Isso é exatamente o tipo de problema para o qual:

```javascript
filter()
```

é útil.

Conceitualmente:

```javascript
collection.filter((item) => {
  // esse item possui TODAS
  // as propriedades necessárias?
});
```

Se o callback retornar:

```javascript
true
```

o objeto permanece.

Se retornar:

```javascript
false
```

o objeto é removido.

---

# 8. Agora surge outro problema

Dentro do `filter`, você precisa verificar **várias propriedades**.

Por exemplo:

```javascript
source = {
  first: "Tybalt",
  last: "Capulet"
};
```

Para determinado objeto:

```javascript
item
```

você precisa verificar:

```text
first corresponde?
      ↓
     SIM

last corresponde?
      ↓
     SIM
```

Somente se **TODAS** forem verdadeiras:

```text
item permanece
```

---

# 9. `every()`

O método:

```javascript
every()
```

é muito útil quando a pergunta é:

> Todos os elementos passam nessa condição?

Exemplo:

```javascript
const numbers = [2, 4, 6];

numbers.every((number) => {
  return number % 2 === 0;
});
```

Resultado:

```javascript
true
```

Porque:

```text
2 → par ✅
4 → par ✅
6 → par ✅
```

Mas:

```javascript
const numbers = [2, 4, 5];
```

produziria:

```javascript
false
```

porque:

```text
2 → ✅
4 → ✅
5 → ❌
```

---

# 10. Ligando `filter()` com `every()`

Esse é o coração do exercício.

Você pode pensar:

```text
FILTER
│
│ "esse objeto deve permanecer?"
│
└── EVERY
      │
      │ "todas as propriedades
      │  do source correspondem?"
      │
      ├── sim → true
      │
      └── não → false
```

Ou seja:

```text
collection
    ↓
filter cada objeto
    ↓
para esse objeto:
    ↓
every propriedade do source
    ↓
todas correspondem?
   ┌────┴────┐
  sim       não
   │         │
   ▼         ▼
 mantém     remove
```

---

# 11. Comparação

Para cada chave encontrada em:

```javascript
Object.keys(source)
```

você precisa comparar:

```javascript
item[key]
```

com:

```javascript
source[key]
```

Conceitualmente:

```text
item[key] === source[key]
```

---

## Exemplo

Temos:

```javascript
item = {
  first: "Tybalt",
  last: "Capulet"
};
```

E:

```javascript
source = {
  last: "Capulet"
};
```

As chaves são:

```javascript
["last"]
```

Então:

```javascript
key = "last"
```

Comparação:

```javascript
item[key] === source[key]
```

vira:

```javascript
item["last"] === source["last"]
```

que vira:

```javascript
"Capulet" === "Capulet"
```

Resultado:

```javascript
true
```

---

# 12. Quando nenhuma correspondência existir

Considere:

```javascript
const collection = [
  { name: "Ana" },
  { name: "Carlos" },
  { name: "Maria" }
];
```

E:

```javascript
const source = {
  name: "João"
};
```

Nenhum objeto corresponde.

O `filter()` naturalmente produzirá:

```javascript
[]
```

Então você não precisa criar um tratamento especial para retornar um array vazio.

---

# Estrutura sugerida

```javascript
function whatIsInAName(collection, source) {
  const keys = Object.keys(source);

  return collection.filter((item) => {

    // verificar se TODAS as keys
    // correspondem aos valores
    // existentes em source

  });
}
```

Você pode usar:

```javascript
every()
```

dentro do `filter()` para fazer essa verificação.

---

# Pseudocódigo

```text
função whatIsInAName recebe collection e source

    pegar todas as chaves de source

    filtrar collection

        para cada objeto:

            verificar TODAS
            as chaves de source

            para cada chave:

                comparar:

                valor do objeto
                com
                valor do source

            se todas forem iguais:

                manter objeto

            senão:

                remover objeto

    retornar novo array
```

---

# Exemplo de raciocínio completo

Entrada:

```javascript
collection = [
  { a: 1, b: 2 },
  { a: 1, b: 3 },
  { a: 1, b: 2, c: 5 }
];
```

Source:

```javascript
source = {
  a: 1,
  b: 2
};
```

Primeiro:

```javascript
Object.keys(source);
```

gera:

```javascript
["a", "b"]
```

Agora:

### Primeiro objeto

```javascript
{ a: 1, b: 2 }
```

Verificações:

```text
a:

1 === 1
✅

b:

2 === 2
✅
```

Todas passaram:

```text
mantém ✅
```

---

### Segundo objeto

```javascript
{ a: 1, b: 3 }
```

Verificações:

```text
a:

1 === 1
✅

b:

3 === 2
❌
```

Uma falhou:

```text
remove ❌
```

---

### Terceiro objeto

```javascript
{ a: 1, b: 2, c: 5 }
```

Verificações:

```text
a:

1 === 1
✅

b:

2 === 2
✅
```

A propriedade:

```javascript
c
```

não importa.

O `source` não pediu que `c` fosse verificada.

Então:

```text
mantém ✅
```

Resultado:

```javascript
[
  { a: 1, b: 2 },
  { a: 1, b: 2, c: 5 }
]
```

---

# Importante: o objeto pode ter propriedades extras

O objeto da `collection` não precisa ser exatamente igual ao `source`.

Por exemplo:

```javascript
source = {
  name: "John"
};
```

Este objeto:

```javascript
{
  name: "John",
  age: 30,
  city: "London"
}
```

deve passar.

Porque a pergunta não é:

```text
"Os objetos são idênticos?"
```

A pergunta é:

```text
"O objeto possui TODOS
os pares chave-valor
exigidos pelo source?"
```

As propriedades extras não importam.

---

# Critérios de Aceitação

- [ ] Criar uma função chamada `whatIsInAName`.
- [ ] A função receber `collection` e `source`.
- [ ] `collection` ser tratado como um array de objetos.
- [ ] Obter as propriedades existentes em `source`.
- [ ] Verificar cada objeto da `collection`.
- [ ] Comparar os valores das propriedades.
- [ ] Todas as propriedades de `source` precisarem corresponder.
- [ ] Objetos com propriedades extras poderem permanecer.
- [ ] Retornar um novo array.
- [ ] Retornar `[]` quando nenhum objeto corresponder.

---

# Conceitos praticados

- Arrays
- Objetos
- Arrays de objetos
- Propriedades dinâmicas
- Bracket notation
- `Object.keys()`
- `filter()`
- `every()`
- Callbacks
- Higher-order functions
- Comparação com `===`
- `return`

---

# Regra Mental

Existem **dois níveis de pergunta** neste exercício.

Primeiro:

```text
FILTER

"Esse OBJETO pode entrar
no resultado?"
```

Para descobrir isso, fazemos outra pergunta:

```text
EVERY

"TODAS as propriedades
do source correspondem?"
```

Então pense:

```text
collection
    ↓
pegar um objeto
    ↓
source possui quais keys?
    ↓
["first", "last"]
    ↓
verificar cada uma
    ↓
first bate? ──→ ✅
last bate?  ──→ ✅
    ↓
TODAS bateram?
    ↓
   SIM
    ↓
mantém o objeto
```

Se apenas uma falhar:

```text
first bate? ──→ ✅
last bate?  ──→ ❌
                ↓
           objeto removido
```

A ideia central é:

```text
filter()
   ↓
QUAIS objetos?

every()
   ↓
TODAS as condições?
```

Ou, resumidamente:

```text
FILTER escolhe os objetos.

EVERY decide se cada objeto
cumpre TODOS os requisitos.
```