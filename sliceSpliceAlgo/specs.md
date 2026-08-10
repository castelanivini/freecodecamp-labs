# Especificação - Slice and Splice Algorithm

## Objetivo

Criar uma função em JavaScript que combine dois arrays.

Os elementos do **primeiro array** devem ser inseridos dentro do **segundo array**, começando em um índice específico.

Ao final:

* o novo array combinado deve ser retornado;
* os dois arrays originais devem permanecer inalterados.

---

# Exemplo Principal

Considere:

```javascript id="ryz4n6"
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

frankenSplice(arr1, arr2, 1);
```

Queremos inserir:

```javascript id="yyr1rp"
[1, 2, 3]
```

dentro de:

```javascript id="6svq49"
[4, 5, 6]
```

começando no índice:

```text id="vchsvq"
1
```

Resultado esperado:

```javascript id="mdh6zg"
[4, 1, 2, 3, 5, 6]
```

---

# Entendendo o Índice

O segundo array:

```javascript id="x8ubtr"
[4, 5, 6]
```

possui os índices:

```text id="h8i0qv"
valor:   4   5   6
índice:  0   1   2
```

Se a inserção começar no índice `1`:

```text id="9byu2o"
[4, 5, 6]
    ↑
 índice 1
```

Os elementos do primeiro array entram **antes do elemento que atualmente ocupa essa posição**:

```text id="l7igaa"
Antes:

[4, 5, 6]
    ↑


Inserir:

[1, 2, 3]


Depois:

[4, 1, 2, 3, 5, 6]
```

---

# Requisitos Funcionais

## 1. Criar a Função

* [ ] Criar uma função chamada `frankenSplice`.
* [ ] A função deve receber três parâmetros.

### Estrutura

```javascript id="gwkpx4"
function frankenSplice(arr1, arr2, index) {
  // lógica
}
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                        |
| --------- | -------- | -------------------------------- |
| `arr1`    | `Array`  | Elementos que serão inseridos    |
| `arr2`    | `Array`  | Array que servirá como base      |
| `index`   | `number` | Posição onde a inserção começará |

---

# 2. Preservar os Arrays Originais

Este é um dos requisitos mais importantes do exercício.

Depois da função executar:

```javascript id="qqlcvy"
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

frankenSplice(arr1, arr2, 1);
```

`arr1` deve continuar:

```javascript id="zt2iwr"
[1, 2, 3]
```

E `arr2` deve continuar:

```javascript id="gkg2xi"
[4, 5, 6]
```

Ou seja, você **não deve modificar diretamente os arrays recebidos**.

---

# 3. Criar uma Cópia

Como o segundo array não pode ser alterado, uma estratégia é criar uma cópia dele.

Conceitualmente:

```text id="5fdy6k"
arr2
 │
 │ criar cópia
 ▼
novoArray
```

Agora:

```text id="g8o93q"
arr2
[4, 5, 6]

novoArray
[4, 5, 6]
```

Os dois possuem inicialmente os mesmos valores, mas são arrays diferentes.

---

## `slice()` pode ajudar

Uma forma de copiar um array é:

```javascript id="mffh3x"
const copy = arr2.slice();
```

Quando `slice()` é utilizado sem argumentos, ele cria uma cópia rasa do array.

Então:

```javascript id="imlh6j"
const arr2 = [4, 5, 6];
const copy = arr2.slice();
```

Temos:

```text id="ofrdyc"
arr2  → [4, 5, 6]

copy  → [4, 5, 6]
```

Agora alterações estruturais em `copy` não alteram `arr2`.

---

# `slice()` vs `splice()`

Esse exercício é interessante porque trabalha com dois métodos com nomes muito parecidos:

```text id="f3m17p"
slice
splice
```

Mas eles possuem comportamentos bem diferentes.

---

## `slice()`

`slice()` normalmente é utilizado para **extrair/copiar partes de um array sem modificar o original**.

Exemplo:

```javascript id="d3wwry"
const numbers = [10, 20, 30, 40];

const result = numbers.slice(1, 3);
```

Resultado:

```javascript id="dmtflq"
[20, 30]
```

O original continua:

```javascript id="cxrgcg"
[10, 20, 30, 40]
```

Regra mental:

```text id="bzm0c8"
slice
  ↓
"corta uma cópia"
  ↓
não altera o array original
```

---

## `splice()`

`splice()` modifica o array no qual é executado.

Ele pode:

* remover elementos;
* adicionar elementos;
* substituir elementos.

Exemplo:

```javascript id="3gg4vo"
const numbers = [10, 20, 30];

numbers.splice(1, 0, 99);
```

Agora:

```javascript id="2n3srz"
numbers
```

é:

```javascript id="bwpddx"
[10, 99, 20, 30]
```

Regra mental:

```text id="44a83z"
splice
  ↓
"cirurgia no próprio array"
  ↓
modifica o array
```

---

# Por Que Podemos Usar `splice()` Neste Exercício?

O requisito diz que:

> Os arrays de entrada não podem ser modificados.

Isso não significa que você nunca possa usar `splice()`.

Você pode:

```text id="cwx8ms"
arr2 original
     │
     │ slice()
     ▼
   cópia
     │
     │ splice()
     ▼
cópia modificada
```

O que você não deve fazer é:

```javascript id="dqqs6z"
arr2.splice(...);
```

porque isso alteraria o array original.

---

# 4. Inserir os Elementos

Depois de criar a cópia do segundo array, os elementos de `arr1` devem ser inseridos nela começando em `index`.

Considere:

```javascript id="r9f3ut"
arr1 = [1, 2, 3]

copy = [4, 5, 6]

index = 1
```

Queremos:

```text id="r5u58e"
copy

[4, 5, 6]
    ↑
    1
```

Inserindo os elementos:

```text id="7w55nr"
[4, 1, 2, 3, 5, 6]
```

---

# Entendendo `splice()`

A estrutura básica é:

```javascript id="j2pnzx"
array.splice(start, deleteCount, item1, item2, ...);
```

Onde:

| Argumento     | Significado                       |
| ------------- | --------------------------------- |
| `start`       | Índice onde a alteração começa    |
| `deleteCount` | Quantos elementos serão removidos |
| `item1...`    | Elementos que serão inseridos     |

Se queremos **somente inserir**, não queremos remover elementos.

Então o `deleteCount` deve representar:

```text id="m5cm3e"
remover 0 elementos
```

---

# Desafio Importante: Inserir Todo `arr1`

Suponha:

```javascript id="ynq80s"
arr1 = [1, 2, 3];
```

Você não quer inserir isso como **um único array**:

```javascript id="ef2tw9"
[4, [1, 2, 3], 5, 6]
```

O resultado correto é:

```javascript id="lnwhn0"
[4, 1, 2, 3, 5, 6]
```

Portanto, os elementos precisam ser inseridos individualmente.

O **spread operator** pode ser útil:

```javascript id="j5kufg"
...arr1
```

Conceitualmente:

```javascript id="2qckwi"
const arr1 = [1, 2, 3];
```

Quando utilizado como argumentos:

```text id="2pt4hh"
...arr1
```

pode ser pensado como:

```text id="9cimct"
1, 2, 3
```

---

# Visualizando o Problema

Entrada:

```javascript id="ogj91e"
arr1 = [1, 2, 3]

arr2 = [4, 5, 6]

index = 1
```

### Passo 1 — Copiar `arr2`

```text id="49x87j"
arr2
[4, 5, 6]

      │
      │ copiar
      ▼

copy
[4, 5, 6]
```

### Passo 2 — Encontrar o índice

```text id="bbunpb"
copy:

[4, 5, 6]
 0  1  2
    ↑
```

### Passo 3 — Inserir `arr1`

```text id="ps8tf5"
        ↓
[4,     5, 6]

     [1, 2, 3]

        ↓

[4, 1, 2, 3, 5, 6]
```

### Passo 4 — Retornar a cópia

```javascript id="dy0dnv"
return copy;
```

---

# Outro Exemplo

```javascript id="en5l9r"
frankenSplice(
  ["claw", "tentacle"],
  ["head", "shoulders", "knees", "toes"],
  2
);
```

Temos:

```text id="prr83w"
arr1:

["claw", "tentacle"]


arr2:

["head", "shoulders", "knees", "toes"]
                         ↑
                       index 2
```

Inserindo:

```javascript id="7f39gz"
[
  "head",
  "shoulders",
  "claw",
  "tentacle",
  "knees",
  "toes"
]
```

---

# Inserção no Início

Se:

```javascript id="a5zfjr"
index = 0
```

Exemplo:

```javascript id="h44itd"
frankenSplice(
  [1, 2],
  [3, 4],
  0
);
```

Resultado:

```javascript id="oqqm8a"
[1, 2, 3, 4]
```

Visualmente:

```text id="80fs0r"
[3, 4]
 ↑
index 0

inserir [1, 2]

↓

[1, 2, 3, 4]
```

---

# Inserção no Final

Se o índice apontar para o final:

```javascript id="3v7bop"
frankenSplice(
  [3, 4],
  [1, 2],
  2
);
```

Resultado:

```javascript id="x60xpm"
[1, 2, 3, 4]
```

---

# Fluxo Esperado

```text id="hdd5rf"
Receber arr1, arr2 e index
          │
          ▼
Criar cópia de arr2
          │
          ▼
Encontrar posição index
          │
          ▼
Inserir elementos de arr1
na cópia
          │
          ▼
Retornar cópia modificada
          │
          ▼
arr1 e arr2 continuam intactos
```

---

# Pseudocódigo

```text id="59onwi"
função recebe arr1, arr2 e index

    criar uma cópia de arr2

    inserir todos os elementos
    de arr1 na cópia
    começando em index

    não remover nenhum elemento

    retornar a cópia
```

---

# Critérios de Aceitação

* [ ] A função `frankenSplice` existir.
* [ ] A função receber dois arrays e um índice.
* [ ] Os elementos de `arr1` serem inseridos em `arr2`.
* [ ] A inserção começar exatamente no índice informado.
* [ ] A ordem dos elementos de `arr1` ser preservada.
* [ ] A ordem dos elementos de `arr2` ser preservada.
* [ ] Nenhum elemento de `arr2` ser removido.
* [ ] `arr1` permanecer inalterado.
* [ ] `arr2` permanecer inalterado.
* [ ] Um novo array ser retornado.

---

# Conceitos Praticados

* Arrays
* Funções
* Parâmetros
* Índices
* Imutabilidade
* Referências
* Cópia de arrays
* `slice()`
* `splice()`
* Spread operator (`...`)
* `return`

## Regra Mental

Não confunda:

```text id="rkwz24"
slice()
   │
   └── pega/copia
       sem alterar o original


splice()
   │
   └── altera
       o próprio array
```

Para este exercício, a ideia central é:

```text id="zg24pw"
NÃO mexer no arr2
        ↓
criar uma cópia
        ↓
mexer na cópia
        ↓
retornar a cópia
```
