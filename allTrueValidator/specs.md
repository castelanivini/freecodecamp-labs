# Build an All-True Property Validator

## Objetivo

Criar uma função que receba:

1. um array de objetos;
2. o nome de uma propriedade.

A função deve verificar se essa propriedade possui um valor **truthy em TODOS os objetos**.

O exercício trabalha principalmente com:

- arrays de objetos;
- propriedades dinâmicas;
- valores `truthy` e `falsy`;
- `every()`;
- callbacks.

---

## 1. Criar a função

Crie uma função chamada:

```javascript
truthCheck(collection, prop)
```

Ela recebe:

```javascript
collection
```

um array de objetos, e:

```javascript
prop
```

uma string contendo o nome da propriedade que deve ser verificada.

---

## 2. Entendendo o problema

Considere:

```javascript
const collection = [
  {
    name: "Quincy",
    role: "Founder",
    isBot: false
  },
  {
    name: "Naomi",
    role: "",
    isBot: false
  },
  {
    name: "Camperbot",
    role: "Bot",
    isBot: true
  }
];
```

Se chamarmos:

```javascript
truthCheck(collection, "name");
```

precisamos verificar:

```text
Quincy     → truthy ✅
Naomi      → truthy ✅
Camperbot  → truthy ✅
```

Todos são `truthy`.

Portanto:

```javascript
true
```

---

# 3. E se uma propriedade for falsy?

Agora:

```javascript
truthCheck(collection, "role");
```

Temos:

```text
"Founder" → truthy ✅
""        → falsy  ❌
"Bot"     → truthy ✅
```

Como pelo menos um valor é `falsy`:

```javascript
false
```

---

# 4. Relembrando `truthy` e `falsy`

JavaScript consegue converter valores para boolean automaticamente.

Alguns valores são considerados `falsy`:

```javascript
false
0
""
null
undefined
NaN
```

Por exemplo:

```javascript
Boolean("");
```

retorna:

```javascript
false
```

Enquanto:

```javascript
Boolean("Quincy");
```

retorna:

```javascript
true
```

---

## Outros exemplos

```javascript
Boolean(10);          // true
Boolean(-5);          // true
Boolean("hello");     // true
Boolean({});          // true
Boolean([]);          // true

Boolean(0);           // false
Boolean("");          // false
Boolean(null);        // false
Boolean(undefined);   // false
Boolean(NaN);         // false
Boolean(false);       // false
```

---

# 5. A propriedade é dinâmica

Esse detalhe é importante.

Você não sabe antecipadamente qual propriedade será testada.

Pode ser:

```javascript
"name"
```

ou:

```javascript
"role"
```

ou:

```javascript
"isBot"
```

Por isso, não faria sentido escrever:

```javascript
obj.name
```

porque a função precisa funcionar para qualquer propriedade recebida.

---

## Bracket notation

Se:

```javascript
prop = "name";
```

você pode acessar:

```javascript
obj[prop]
```

Isso equivale a:

```javascript
obj["name"]
```

que acessa:

```javascript
obj.name
```

---

## Exemplo

```javascript
const person = {
  name: "Quincy",
  role: "Founder"
};

const prop = "role";
```

Fazendo:

```javascript
person[prop]
```

JavaScript interpreta como:

```javascript
person["role"]
```

Resultado:

```javascript
"Founder"
```

---

# 6. A pergunta que precisamos fazer

Para cada objeto:

```text
"O valor de obj[prop]
é truthy?"
```

Por exemplo:

```javascript
prop = "name";
```

Temos:

```text
obj 1
↓
obj["name"]
↓
"Quincy"
↓
truthy ✅


obj 2
↓
obj["name"]
↓
"Naomi"
↓
truthy ✅


obj 3
↓
obj["name"]
↓
"Camperbot"
↓
truthy ✅
```

Como todos passaram:

```javascript
true
```

---

# 7. Qual método combina com "TODOS"?

Observe a frase do exercício:

> has a truthy value in **all the objects**

A palavra importante é:

```text
ALL
```

Ou seja:

```text
TODOS
```

Existe um método de array feito exatamente para responder:

> Todos os elementos satisfazem essa condição?

Esse método é:

```javascript
every()
```

---

# 8. Relembrando `every()`

Considere:

```javascript
const numbers = [2, 4, 6];
```

Podemos fazer:

```javascript
numbers.every((number) => {
  return number % 2 === 0;
});
```

Processamento:

```text
2 é par? → true
4 é par? → true
6 é par? → true
```

Todos passaram.

Resultado:

```javascript
true
```

---

## Se apenas um falhar

```javascript
const numbers = [2, 4, 5, 6];
```

Agora:

```text
2 → true
4 → true
5 → false ❌
```

O resultado já será:

```javascript
false
```

Não importa que o `6` também passaria.

Para `every()` retornar `true`:

```text
TODOS precisam passar
```

---

# 9. Aplicando ao exercício

Sua estrutura pode começar assim:

```javascript
function truthCheck(collection, prop) {
  return collection.every((obj) => {

    // verificar obj[prop]

  });
}
```

Agora pense:

```text
every está percorrendo os objetos

            ↓

obj = primeiro objeto

obj = segundo objeto

obj = terceiro objeto
```

Para cada um você precisa verificar:

```javascript
obj[prop]
```

como booleano.

---

# 10. Você talvez nem precise de `Boolean()`

JavaScript já interpreta valores em contextos booleanos.

Por exemplo:

```javascript
if ("hello") {
  console.log("entrou");
}
```

funciona porque:

```javascript
"hello"
```

é truthy.

Da mesma maneira, callbacks como os usados por `every()` interpretam o valor retornado como truthy ou falsy.

Então pense na diferença entre:

```javascript
Boolean(obj[prop])
```

e simplesmente:

```javascript
obj[prop]
```

Ambos podem ser úteis para esse problema.

---

# 11. Exemplo completo de raciocínio

Temos:

```javascript
const data = [
  { name: "John", age: 30 },
  { name: "Maria", age: 25 },
  { name: "Bob", age: 40 }
];
```

Chamamos:

```javascript
truthCheck(data, "name");
```

O `every()` percorre:

### Primeiro objeto

```javascript
{ name: "John", age: 30 }
```

Acessamos:

```javascript
obj["name"]
```

Resultado:

```javascript
"John"
```

Truthy:

```text
✅
```

---

### Segundo objeto

```javascript
{ name: "Maria", age: 25 }
```

Temos:

```javascript
"Maria"
```

Truthy:

```text
✅
```

---

### Terceiro objeto

```javascript
{ name: "Bob", age: 40 }
```

Temos:

```javascript
"Bob"
```

Truthy:

```text
✅
```

Todos passaram:

```javascript
true
```

---

# 12. Agora com um valor falsy

Considere:

```javascript
const data = [
  { name: "John" },
  { name: "" },
  { name: "Bob" }
];
```

Chamando:

```javascript
truthCheck(data, "name");
```

Temos:

```text
"John" → truthy ✅

""     → falsy  ❌

"Bob"  → truthy
```

Como encontramos um `falsy`:

```javascript
false
```

---

# 13. E se a propriedade não existir?

Considere:

```javascript
const person = {
  name: "John"
};
```

Se fizermos:

```javascript
person["age"]
```

o resultado será:

```javascript
undefined
```

E:

```javascript
Boolean(undefined)
```

é:

```javascript
false
```

Portanto, se a propriedade não existir em algum objeto, esse objeto naturalmente fará a validação falhar.

---

# 14. Exemplo com propriedade booleana

Considere:

```javascript
const data = [
  { active: true },
  { active: true },
  { active: false }
];
```

Chamando:

```javascript
truthCheck(data, "active");
```

Temos:

```text
true  → truthy ✅
true  → truthy ✅
false → falsy  ❌
```

Resultado:

```javascript
false
```

---

# Fluxo Geral

```text
truthCheck(collection, prop)
            │
            ▼
      collection.every()
            │
            ▼
      pegar um objeto
            │
            ▼
        obj[prop]
            │
            ▼
      valor é truthy?
         ┌──┴──┐
         │     │
        sim   não
         │     │
         ▼     ▼
      continua false
         │
         ▼
todos os objetos passaram?
         │
      ┌──┴──┐
      │     │
     sim   não
      │     │
      ▼     ▼
     true  false
```

---

# Pseudocódigo

```text
função truthCheck recebe collection e prop

    verificar TODOS os objetos
    usando every

        para cada objeto:

            acessar a propriedade
            usando obj[prop]

            verificar se seu valor
            é truthy

    retornar resultado
```

---

# Estrutura sugerida

```javascript
function truthCheck(collection, prop) {
  return collection.every((obj) => {

    // acessar obj[prop]

    // retornar seu valor
    // como condição truthy/falsy

  });
}
```

---

# Exemplos esperados

### Exemplo 1

```javascript
truthCheck(
  [
    { name: "Quincy" },
    { name: "Naomi" },
    { name: "Camperbot" }
  ],
  "name"
);
```

Retorno:

```javascript
true
```

---

### Exemplo 2

```javascript
truthCheck(
  [
    { role: "Founder" },
    { role: "" },
    { role: "Bot" }
  ],
  "role"
);
```

Retorno:

```javascript
false
```

---

### Exemplo 3

```javascript
truthCheck(
  [
    { active: true },
    { active: true },
    { active: true }
  ],
  "active"
);
```

Retorno:

```javascript
true
```

---

### Exemplo 4

```javascript
truthCheck(
  [
    { age: 20 },
    { age: 35 },
    { age: 0 }
  ],
  "age"
);
```

Como:

```javascript
0
```

é falsy:

```javascript
false
```

---

### Exemplo 5

```javascript
truthCheck(
  [
    { name: "John" },
    { age: 20 }
  ],
  "name"
);
```

No segundo objeto:

```javascript
obj["name"]
```

é:

```javascript
undefined
```

Portanto:

```javascript
false
```

---

# Critérios de Aceitação

- [ ] Criar uma função chamada `truthCheck`.
- [ ] Receber um array de objetos.
- [ ] Receber uma string representando uma propriedade.
- [ ] Verificar essa propriedade em todos os objetos.
- [ ] Usar acesso dinâmico com `obj[prop]`.
- [ ] Considerar valores truthy e falsy.
- [ ] Retornar `true` somente se todos os valores forem truthy.
- [ ] Retornar `false` se pelo menos um valor for falsy.
- [ ] Propriedades inexistentes devem naturalmente resultar em falsy.
- [ ] Retornar um boolean.

---

# Conceitos praticados

- Arrays
- Objetos
- Arrays de objetos
- Truthy
- Falsy
- Bracket notation
- Propriedades dinâmicas
- `every()`
- Callbacks
- Higher-order functions
- Conversão booleana
- `Boolean()`
- `return`

---

# Regra Mental

Esse exercício fica muito simples se você associar:

```text
ALL
 ↓
every()
```

Então:

```javascript
truthCheck(collection, "name");
```

pode ser lido mentalmente como:

```text
Para TODO objeto da collection:

    obj["name"]

    é truthy?
```

Visualmente:

```text
collection
    │
    ▼
  every
    │
    ├── obj1[prop] → truthy? ✅
    │
    ├── obj2[prop] → truthy? ✅
    │
    └── obj3[prop] → truthy? ✅
                            │
                            ▼
                           true
```

Mas:

```text
    ├── obj1[prop] → truthy? ✅
    │
    ├── obj2[prop] → truthy? ❌
    │
    └── não importa mais
                            │
                            ▼
                           false
```

A ideia central é:

```text
EVERY = TODOS

todos truthy
    ↓
   true

um falsy
    ↓
   false
```