# Especificação - Chunky Monkey Algorithm

## Objetivo

Criar uma função em JavaScript que divida um array em vários **subarrays** de tamanho fixo.

A função deve receber um array e um número que representa o tamanho máximo de cada grupo, retornando um **array bidimensional** (array de arrays).

---

# Requisitos Funcionais

## 1. Criar a Função

* [ ] Criar uma função chamada `chunkArrayInGroups`.

### Parâmetros

| Parâmetro | Tipo     | Descrição                                    |
| --------- | -------- | -------------------------------------------- |
| `arr`     | `Array`  | Array que será dividido                      |
| `size`    | `number` | Quantidade máxima de elementos em cada grupo |

### Estrutura

```javascript id="mjlwm6"
function chunkArrayInGroups(arr, size) {
  // lógica
}
```

---

## 2. Dividir o Array

A função deve:

* [ ] Percorrer todos os elementos do array.
* [ ] Agrupar os elementos em subarrays.
* [ ] Cada subarray deve conter **no máximo** `size` elementos.

---

## 3. Último Grupo

Caso o número de elementos do array **não seja múltiplo** de `size`:

* [ ] O último grupo deverá conter apenas os elementos restantes.

### Exemplo

Entrada:

```javascript id="l6sxfz"
[1, 2, 3, 4, 5]
```

Tamanho:

```javascript id="k3e2vd"
2
```

Resultado:

```javascript id="48ajv7"
[
  [1, 2],
  [3, 4],
  [5]
]
```

---

## 4. Retornar um Array Bidimensional

Ao final da execução:

* [ ] Retornar um array contendo todos os grupos criados.

---

# Fluxo Esperado

```text id="ubkw0r"
Receber arr e size
        │
        ▼
Criar um array vazio para o resultado
        │
        ▼
Percorrer o array em passos de "size"
        │
        ▼
Extrair um grupo
        │
        ▼
Adicionar o grupo ao resultado
        │
        ▼
Retornar o array de grupos
```

---

# Exemplos Esperados

### Exemplo 1

Entrada:

```javascript id="ql4q6v"
chunkArrayInGroups(["a", "b", "c", "d"], 2)
```

Retorno:

```javascript id="w0msi5"
[
  ["a", "b"],
  ["c", "d"]
]
```

---

### Exemplo 2

Entrada:

```javascript id="z0gkm4"
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
```

Retorno:

```javascript id="phh3mc"
[
  [0, 1, 2],
  [3, 4, 5]
]
```

---

### Exemplo 3

Entrada:

```javascript id="k8llhv"
chunkArrayInGroups([0, 1, 2, 3, 4], 2)
```

Retorno:

```javascript id="89agka"
[
  [0, 1],
  [2, 3],
  [4]
]
```

---

### Exemplo 4

Entrada:

```javascript id="7drt2v"
chunkArrayInGroups([1, 2, 3], 1)
```

Retorno:

```javascript id="i6hckk"
[
  [1],
  [2],
  [3]
]
```

---

### Exemplo 5

Entrada:

```javascript id="e9u33q"
chunkArrayInGroups([1, 2, 3], 5)
```

Retorno:

```javascript id="qwvspm"
[
  [1, 2, 3]
]
```

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] A função `chunkArrayInGroups` existir.
* [ ] A função receber um array e um número como parâmetros.
* [ ] O array for dividido em grupos de tamanho `size`.
* [ ] Cada grupo possuir no máximo `size` elementos.
* [ ] O último grupo conter apenas os elementos restantes, quando necessário.
* [ ] A função retornar um array bidimensional.
* [ ] Todos os elementos do array original estiverem presentes no resultado, mantendo a ordem.

---

# Conceitos Praticados

* Funções
* Arrays
* Arrays bidimensionais
* Estruturas de repetição (`for`, `while`)
* Método `slice()`
* Método `push()`
* Manipulação de índices
* `return`
