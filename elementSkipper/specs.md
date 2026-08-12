# Implement an Element Skipper

## Objetivo

Criar uma função que percorra um array e descarte elementos do início até encontrar o primeiro elemento que passe em uma função de teste.

A partir desse elemento, todo o restante do array deve ser retornado.

---

## Requisitos

### 1. Criar a função

Crie uma função chamada:

```javascript
dropElements(arr, func)
```

A função recebe:

- `arr`: array que será percorrido.
- `func`: função usada para testar cada elemento.

---

### 2. Percorrer o array

Percorra os elementos do array em ordem.

Para cada elemento, execute:

```javascript
func(element)
```

A função `func` retornará:

```text
true
```

ou:

```text
false
```

---

### 3. Encontrar o primeiro elemento válido

Você deve ignorar os elementos enquanto:

```javascript
func(element)
```

retornar:

```text
false
```

Quando encontrar o primeiro elemento que retornar:

```text
true
```

pare de descartar elementos.

---

## Exemplo

Entrada:

```javascript
dropElements(
  [1, 1, 1, 2, 1, 1, 1],
  n => n === 2
);
```

Processamento:

```text
1 → false → descarta

1 → false → descarta

1 → false → descarta

2 → true → encontrou
```

A partir desse ponto, todo o restante deve permanecer:

```javascript
[2, 1, 1, 1]
```

---

## Importante

O objetivo **não é filtrar o array inteiro**.

Por exemplo:

```javascript
dropElements(
  [1, 2, 3, 1, 0],
  n => n >= 3
);
```

O primeiro elemento que passa no teste é:

```text
3
```

Então o retorno deve ser:

```javascript
[3, 1, 0]
```

Mesmo que:

```text
1
0
```

não passem no teste.

Depois que o primeiro elemento válido for encontrado, todos os elementos seguintes permanecem.

---

## `slice()`

O método:

```javascript
slice()
```

pode ajudar a retornar uma parte do array.

Exemplo:

```javascript
const arr = [10, 20, 30, 40];

arr.slice(2);
```

Retorna:

```javascript
[30, 40]
```

Portanto, se você descobrir o índice do primeiro elemento válido, pode usar esse índice para obter o restante do array.

---

## Caso nenhum elemento passe no teste

Entrada:

```javascript
dropElements(
  [1, 2, 3],
  n => n > 10
);
```

Processamento:

```text
1 → false
2 → false
3 → false
```

Nenhum elemento passou.

Retorno:

```javascript
[]
```

---

## Pseudocódigo

```text
função dropElements recebe arr e func

    percorrer cada elemento do array

        executar func passando o elemento atual

        se retornar true:

            retornar o array
            começando no índice atual

    se terminar o loop:

        retornar []
```

---

## Estrutura sugerida

```javascript
function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {

    // testar arr[i] usando func

    // se passar no teste:
    // retornar o array a partir de i
  }

  // nenhum elemento passou
}
```

---

## Exemplos esperados

### Exemplo 1

```javascript
dropElements([1, 2, 3, 4], n => n >= 3);
```

Retorno:

```javascript
[3, 4]
```

---

### Exemplo 2

```javascript
dropElements([0, 1, 0, 1], n => n === 1);
```

Retorno:

```javascript
[1, 0, 1]
```

---

### Exemplo 3

```javascript
dropElements([1, 2, 3], n => n > 10);
```

Retorno:

```javascript
[]
```

---

### Exemplo 4

```javascript
dropElements([5, 1, 2], n => n > 3);
```

Retorno:

```javascript
[5, 1, 2]
```

---

## Critérios de Aceitação

- [ ] Criar uma função chamada `dropElements`.
- [ ] A função deve receber `arr` e `func`.
- [ ] Percorrer os elementos do array em ordem.
- [ ] Executar `func` para cada elemento.
- [ ] Descartar elementos enquanto `func` retornar `false`.
- [ ] Parar no primeiro elemento onde `func` retornar `true`.
- [ ] Manter o elemento que passou no teste.
- [ ] Manter todos os elementos posteriores.
- [ ] Retornar um novo array com os elementos restantes.
- [ ] Retornar `[]` caso nenhum elemento passe no teste.

---

## Conceitos praticados

- Arrays
- Funções
- Callback functions
- Loops
- Condicionais
- Índices
- `slice()`
- `return`

---

## Regra Mental

Pense no exercício como:

```text
"Até onde eu preciso descartar?"
```

e não:

```text
"Quais elementos passam no teste?"
```

Exemplo:

```text
[1, 1, 1, 2, 1, 1]
          ↑
          |
    primeiro true
```

Tudo antes dele é descartado:

```text
[1, 1, 1, 2, 1, 1]
 └─────┘
 descarta
```

E tudo a partir dele permanece:

```text
[2, 1, 1]
```