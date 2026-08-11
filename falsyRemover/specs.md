# Especificação - Falsy Remover

## Objetivo

Criar uma função em JavaScript que receba um array e retorne um **novo array contendo apenas valores truthy**.

Todos os valores **falsy** devem ser removidos.

---

# Valores Falsy em JavaScript

Os principais valores falsy são:

```javascript
false
null
0
""
undefined
NaN
```

Quando convertidos para booleano, todos resultam em:

```javascript
false
```

---

# 1. Criar a Função

Criar uma função chamada:

```javascript
bouncer(arr)
```

Estrutura:

```javascript
function bouncer(arr) {
  // lógica
}
```

## Parâmetro

| Parâmetro | Tipo    | Descrição                                   |
| --------- | ------- | ------------------------------------------- |
| `arr`     | `Array` | Array que terá seus valores falsy removidos |

---

# 2. Retornar um Novo Array

A função deve retornar um **novo array**.

Exemplo:

```javascript
bouncer([7, "ate", "", false, 9]);
```

Resultado esperado:

```javascript
[7, "ate", 9]
```

Porque:

```text
7       → truthy  → mantém
"ate"   → truthy  → mantém
""      → falsy   → remove
false   → falsy   → remove
9       → truthy  → mantém
```

---

# 3. Não Alterar o Array Original

Considere:

```javascript
const original = [1, null, 2, false, 3];

const result = bouncer(original);
```

Depois da execução:

```javascript
original
```

deve continuar:

```javascript
[1, null, 2, false, 3]
```

Enquanto:

```javascript
result
```

deve ser:

```javascript
[1, 2, 3]
```

Portanto, evite remover elementos diretamente do array recebido com operações como `splice()`.

---

# 4. Entendendo Truthy e Falsy

JavaScript consegue converter qualquer valor para `boolean`.

Você pode testar isso utilizando:

```javascript
Boolean(valor)
```

Exemplos:

```javascript
Boolean(false);      // false
Boolean(null);       // false
Boolean(0);          // false
Boolean("");         // false
Boolean(undefined);  // false
Boolean(NaN);        // false
```

Já:

```javascript
Boolean(1);          // true
Boolean(-5);         // true
Boolean("hello");    // true
Boolean([]);         // true
Boolean({});         // true
```

---

# Cuidado com `"false"`

Existe diferença entre:

```javascript
false
```

e:

```javascript
"false"
```

O primeiro é:

```javascript
Boolean(false); // false
```

Mas uma string não vazia é truthy:

```javascript
Boolean("false"); // true
```

Portanto:

```javascript
bouncer([false, "false"]);
```

deve manter:

```javascript
["false"]
```

---

# Cuidado com `"0"`

Da mesma forma:

```javascript
0
```

é falsy:

```javascript
Boolean(0); // false
```

Mas:

```javascript
"0"
```

é uma string não vazia e, portanto, truthy:

```javascript
Boolean("0"); // true
```

---

# Estratégia com Loop

Uma estratégia é criar um novo array:

```javascript
const result = [];
```

Depois percorrer os elementos:

```text
para cada elemento
        ↓
converter/verificar como booleano
        ↓
é truthy?
   ┌────┴────┐
  sim       não
   │          │
   ▼          ▼
adiciona     ignora
```

Por exemplo:

```javascript
[7, "ate", "", false, 9]
```

Processamento:

```text
result = []

7
↓
truthy
↓
[7]

"ate"
↓
truthy
↓
[7, "ate"]

""
↓
falsy
↓
ignora

false
↓
falsy
↓
ignora

9
↓
truthy
↓
[7, "ate", 9]
```

---

# Uma Característica Importante do `if`

Você não é obrigado a escrever:

```javascript
if (Boolean(value) === true) {
  // ...
}
```

Isso porque o próprio `if` já verifica a truthiness do valor.

Conceitualmente:

```javascript
if (value) {
  // executa somente se value for truthy
}
```

Por exemplo:

```javascript
if (0) {
  // não executa
}
```

Mas:

```javascript
if ("hello") {
  // executa
}
```

---

# Estratégia com `filter()`

Este exercício também combina muito bem com:

```javascript
filter()
```

O `filter()` cria um **novo array** contendo apenas os elementos para os quais a função de teste retorna um valor truthy.

Conceitualmente:

```text
array original
     │
     ▼
   filter
     │
     ├── mantém truthy
     ├── remove falsy
     └── cria novo array
```

O hint do exercício:

> Try converting each value to a Boolean.

é uma pista importante para pensar na combinação entre:

```javascript
filter()
```

e:

```javascript
Boolean
```

Tente chegar nessa versão sozinho depois de fazer primeiro com um `for`.

---

# Exemplos Esperados

### Exemplo 1

```javascript
bouncer([7, "ate", "", false, 9]);
```

Retorno:

```javascript
[7, "ate", 9]
```

---

### Exemplo 2

```javascript
bouncer(["a", "b", "c"]);
```

Retorno:

```javascript
["a", "b", "c"]
```

Nada é removido porque todos são truthy.

---

### Exemplo 3

```javascript
bouncer([false, null, 0, NaN, undefined, ""]);
```

Retorno:

```javascript
[]
```

---

### Exemplo 4

```javascript
bouncer([null, NaN, 1, 2, undefined]);
```

Retorno:

```javascript
[1, 2]
```

---

# Pseudocódigo

```text
função bouncer recebe arr

    criar novo array

    para cada valor de arr:

        verificar valor como booleano

        se for truthy:
            adicionar ao novo array

    retornar novo array
```

---

# Fluxo Esperado

```text
Receber arr
    │
    ▼
Criar result = []
    │
    ▼
Pegar próximo valor
    │
    ▼
Boolean(valor)
    │
    ▼
 truthy?
 ┌──┴───┐
 │      │
sim    não
 │      │
 ▼      ▼
push   ignora
 │      │
 └──┬───┘
    ▼
próximo valor
    │
    ▼
retornar result
```

---

# Critérios de Aceitação

* [ ] A função `bouncer` existir.
* [ ] A função receber um array.
* [ ] Um novo array ser retornado.
* [ ] `false` ser removido.
* [ ] `null` ser removido.
* [ ] `0` ser removido.
* [ ] `""` ser removido.
* [ ] `undefined` ser removido.
* [ ] `NaN` ser removido.
* [ ] Valores truthy serem preservados.
* [ ] A ordem dos elementos ser preservada.
* [ ] O array original permanecer inalterado.

---

# Conceitos Praticados

* Arrays
* Funções
* Loops
* Booleanos
* Truthy e falsy
* Conversão de tipos
* `Boolean()`
* `if`
* `push()`
* `filter()`
* Imutabilidade
* `return`

## Regra Mental

Em vez de decorar várias comparações:

```javascript
value !== false
value !== null
value !== 0
value !== ""
// ...
```

pense:

```text
        value
          ↓
   "Esse valor seria
    true ou false
    dentro de um if?"
          ↓
    ┌─────┴─────┐
  truthy       falsy
    │             │
  mantém        remove
```

Esse exercício é principalmente sobre entender que JavaScript já possui uma noção nativa de **truthiness**, então você não precisa verificar cada valor falsy individualmente.
