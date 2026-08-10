# Especificação - First Element Finder

## Objetivo

Criar uma função em JavaScript que percorra um array e retorne o **primeiro elemento que passar em um teste**.

O teste será representado por uma função recebida como argumento.

---

# Exemplo

```javascript
findElement(
  [1, 3, 5, 8],
  num => num % 2 === 0
);
```

A função de teste é:

```javascript
num => num % 2 === 0
```

Ela verifica se determinado número é par.

Analisando:

```text
1 → false
3 → false
5 → false
8 → true
```

Assim que encontramos:

```text
8 → true
```

a busca pode terminar.

Resultado:

```javascript
8
```

---

# Requisitos Funcionais

## 1. Criar a Função

* [ ] Criar uma função chamada `findElement`.
* [ ] A função deve receber dois argumentos.

### Estrutura

```javascript
function findElement(arr, func) {
  // lógica
}
```

### Parâmetros

| Parâmetro | Tipo       | Descrição                                  |
| --------- | ---------- | ------------------------------------------ |
| `arr`     | `Array`    | Array que será pesquisado                  |
| `func`    | `Function` | Função utilizada para testar cada elemento |

---

# 2. Percorrer o Array

A função deve analisar os elementos do array **na ordem em que aparecem**.

Por exemplo:

```javascript
[1, 3, 5, 8, 10]
```

A ordem da análise deve ser:

```text
1
↓
3
↓
5
↓
8
↓
10
```

---

# 3. Executar a Função Recebida

Para cada elemento, você deve chamar `func` passando o elemento atual.

Conceitualmente:

```javascript
func(elemento);
```

Por exemplo, se:

```javascript
func = num => num % 2 === 0;
```

e o elemento atual for:

```javascript
8
```

então:

```javascript
func(8);
```

é equivalente a:

```javascript
8 % 2 === 0;
```

Resultado:

```javascript
true
```

---

# 4. Retornar o Primeiro Elemento Válido

Assim que:

```javascript
func(elemento)
```

resultar em `true`, a função deve retornar aquele elemento imediatamente.

Exemplo:

```text
Array:

[1, 3, 4, 6, 8]

Teste:
número é par?

1 → false
3 → false
4 → true  ← primeiro encontrado
```

Resultado:

```javascript
4
```

Os valores:

```text
6
8
```

não precisam mais ser analisados.

---

# Por Que `return` é Importante Aqui?

Quando JavaScript encontra um `return`, a execução da função termina imediatamente.

Por exemplo:

```javascript
function exemplo() {
  console.log("A");

  return 10;

  console.log("B");
}
```

`"B"` nunca será executado.

Isso é útil neste exercício porque, depois de encontrar o primeiro elemento válido, não existe motivo para continuar procurando.

---

# 5. Nenhum Elemento Encontrado

Considere:

```javascript
findElement(
  [1, 3, 5],
  num => num % 2 === 0
);
```

Análise:

```text
1 → false
3 → false
5 → false
```

Nenhum elemento passou no teste.

Nesse caso, a função deve retornar:

```javascript
undefined
```

---

# `undefined` Automático

Em JavaScript, uma função que termina sem encontrar um `return` com valor retorna automaticamente:

```javascript
undefined
```

Por exemplo:

```javascript
function exemplo() {
  let x = 10;
}

console.log(exemplo());
```

Resultado:

```text
undefined
```

Então, neste desafio, você pode pensar:

```text
Percorri tudo
      ↓
Nenhum elemento passou
      ↓
Fim da função
      ↓
undefined
```

---

# Entendendo a Função como Argumento

Este exercício introduz um conceito muito importante em JavaScript:

> **Funções podem ser passadas como argumentos para outras funções.**

Por exemplo:

```javascript
function isEven(num) {
  return num % 2 === 0;
}
```

Você poderia passar essa função:

```javascript
findElement([1, 3, 8, 10], isEven);
```

Observe que usamos:

```javascript
isEven
```

e não:

```javascript
isEven()
```

Isso porque estamos **passando a função**, e não executando ela naquele momento.

---

# Callback

Nesse contexto, `func` pode ser chamada de **callback function**.

```javascript
findElement(array, func);
                   ↑
                callback
```

`findElement` recebe a função e decide quando executá-la:

```text
findElement
    │
    ├── pega elemento
    │
    ├── chama func(elemento)
    │
    ├── pega próximo
    │
    └── chama func(elemento)
```

---

# Exemplo Passo a Passo

Considere:

```javascript
findElement(
  [1, 3, 5, 8],
  num => num % 2 === 0
);
```

### Primeira iteração

```javascript
func(1);
```

Resultado:

```javascript
false
```

Continua.

### Segunda iteração

```javascript
func(3);
```

Resultado:

```javascript
false
```

Continua.

### Terceira iteração

```javascript
func(5);
```

Resultado:

```javascript
false
```

Continua.

### Quarta iteração

```javascript
func(8);
```

Resultado:

```javascript
true
```

Então:

```text
retornar 8
```

---

# Fluxo Esperado

```text
Receber arr e func
        │
        ▼
Percorrer elementos
        │
        ▼
Executar func(elemento)
        │
        ▼
Resultado é true?
     ┌──┴───┐
     │      │
    Sim    Não
     │      │
     ▼      ▼
 retornar  continuar
 elemento   loop
     │
     ▼
 função termina


Se o loop terminar
sem encontrar:
      │
      ▼
  undefined
```

---

# Exemplos Esperados

### Números pares

```javascript
findElement(
  [1, 3, 5, 8],
  num => num % 2 === 0
);
```

Retorno:

```javascript
8
```

---

### Nenhum número par

```javascript
findElement(
  [1, 3, 5],
  num => num % 2 === 0
);
```

Retorno:

```javascript
undefined
```

---

### Número maior que 10

```javascript
findElement(
  [2, 5, 8, 15, 20],
  num => num > 10
);
```

Análise:

```text
2  → false
5  → false
8  → false
15 → true
```

Retorno:

```javascript
15
```

---

### Strings

A função não precisa funcionar apenas com números.

```javascript
findElement(
  ["cat", "dog", "elephant"],
  word => word.length > 3
);
```

Análise:

```text
"cat"      → false
"dog"      → false
"elephant" → true
```

Retorno:

```javascript
"elephant"
```

---

# Pseudocódigo

```text
função findElement recebe arr e func

    para cada elemento de arr:

        executar func(elemento)

        se o resultado for verdadeiro:
            retornar elemento

    se nenhum elemento passar:
        retornar undefined
```

---

# Critérios de Aceitação

* [ ] A função `findElement` existir.
* [ ] A função receber um array.
* [ ] A função receber outra função como argumento.
* [ ] Os elementos serem analisados na ordem.
* [ ] `func` ser executada para cada elemento analisado.
* [ ] O primeiro elemento cujo teste resultar em `true` ser retornado.
* [ ] A busca parar depois do primeiro elemento encontrado.
* [ ] `undefined` ser retornado caso nenhum elemento passe no teste.

---

# Conceitos Praticados

* Funções
* Arrays
* Loops
* Parâmetros
* Funções como argumentos
* Callbacks
* Arrow functions
* Valores booleanos
* `return`
* `undefined`
* Early return

## Regra Mental

Quando você vir:

```javascript
findElement(arr, func)
```

pense:

```text
"Para cada elemento x:

    func(x) é true?

    SIM → achei, retorna x
    NÃO → tenta o próximo"
```

Esse conceito aparece bastante em JavaScript e é a base de métodos como `find()`, `filter()`, `some()` e vários outros métodos de array.
