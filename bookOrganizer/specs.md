# Build a Book Organizer

## Objetivo

Criar um programa em JavaScript que organize livros com base no ano de lançamento.

O exercício trabalha com:

- arrays de objetos;
- funções de callback;
- `filter()`;
- `sort()`;
- comparação entre valores;
- mutação de arrays.

---

## 1. Criar o array `books`

Crie um array chamado:

```javascript
books
```

Ele deve conter pelo menos **três objetos**.

Cada objeto precisa ter:

```javascript
{
  title,
  authorName,
  releaseYear
}
```

---

## Estrutura de cada livro

| Propriedade | Tipo | Descrição |
|---|---|---|
| `title` | `string` | Título do livro |
| `authorName` | `string` | Nome do autor |
| `releaseYear` | `number` | Ano de lançamento |

Exemplo:

```javascript
const books = [
  {
    title: "Book A",
    authorName: "Author A",
    releaseYear: 1940
  },
  {
    title: "Book B",
    authorName: "Author B",
    releaseYear: 1960
  },
  {
    title: "Book C",
    authorName: "Author C",
    releaseYear: 1920
  }
];
```

---

## 2. Criar a função `sortByYear`

Crie uma função chamada:

```javascript
sortByYear(bookA, bookB)
```

Ela será usada como callback do método:

```javascript
sort()
```

---

## Como funciona uma função de comparação

O `sort()` usa o retorno da função para decidir a ordem.

A função deve comparar:

```javascript
bookA.releaseYear
```

com:

```javascript
bookB.releaseYear
```

---

### Se `bookA` for mais antigo

Se:

```javascript
bookA.releaseYear < bookB.releaseYear
```

retorne:

```javascript
-1
```

Isso indica que `bookA` deve ficar antes de `bookB`.

---

### Se `bookA` for mais recente

Se:

```javascript
bookA.releaseYear > bookB.releaseYear
```

retorne:

```javascript
1
```

Isso indica que `bookA` deve ficar depois de `bookB`.

---

### Se os anos forem iguais

Se:

```javascript
bookA.releaseYear === bookB.releaseYear
```

retorne:

```javascript
0
```

Isso significa que não é necessário alterar a ordem relativa entre os dois.

---

## Fluxo da comparação

```text
bookA.releaseYear < bookB.releaseYear ?
            │
       ┌────┴────┐
       │         │
      sim       não
       │         │
       ▼         ▼
      -1      bookA.releaseYear > bookB.releaseYear ?
                    │
               ┌────┴────┐
               │         │
              sim       não
               │         │
               ▼         ▼
               1         0
```

---

## 3. Filtrar livros por ano

Você deve criar um novo array chamado:

```javascript
filteredBooks
```

Ele deve conter apenas livros lançados até um determinado ano.

Por exemplo:

```javascript
1950
```

Então livros com:

```javascript
releaseYear <= 1950
```

devem permanecer.

Livros com:

```javascript
releaseYear > 1950
```

devem ser removidos do resultado.

---

## Exemplo

Entrada:

```javascript
[
  { title: "A", releaseYear: 1930 },
  { title: "B", releaseYear: 1970 },
  { title: "C", releaseYear: 1945 }
]
```

Após o filtro:

```javascript
[
  { title: "A", releaseYear: 1930 },
  { title: "C", releaseYear: 1945 }
]
```

O livro de `1970` não entra.

---

## 4. Salvar em `filteredBooks`

O resultado do filtro deve ser armazenado em:

```javascript
filteredBooks
```

Conceitualmente:

```text
books
  │
  ▼
filter
  │
  ▼
filteredBooks
```

---

## 5. Ordenar `filteredBooks`

Depois de filtrar, você deve ordenar os livros pelo:

```javascript
releaseYear
```

em ordem crescente.

Ou seja:

```text
mais antigo
    ↓
mais recente
```

Exemplo:

```javascript
[
  { releaseYear: 1945 },
  { releaseYear: 1920 },
  { releaseYear: 1930 }
]
```

deve virar:

```javascript
[
  { releaseYear: 1920 },
  { releaseYear: 1930 },
  { releaseYear: 1945 }
]
```

---

## Usando `sortByYear`

A função criada anteriormente deve ser usada no `sort()`.

A ideia é:

```javascript
filteredBooks.sort(sortByYear);
```

A função `sortByYear` será chamada várias vezes pelo JavaScript para comparar dois livros de cada vez.

---

## Importante: `sort()` muta o array

O método:

```javascript
sort()
```

altera o próprio array.

Exemplo:

```javascript
const numbers = [3, 1, 2];

numbers.sort();
```

Depois:

```javascript
numbers
```

já estará alterado.

No exercício isso é aceitável, porque o requisito diz explicitamente que:

```javascript
filteredBooks
```

será mutado.

---

## Fluxo Geral

```text
books
  │
  ▼
filter(...)
  │
  ▼
filteredBooks
  │
  ▼
sort(sortByYear)
  │
  ▼
filteredBooks ordenado
```

---

## Pseudocódigo

```text
criar array books

criar função sortByYear

    se ano de A < ano de B:
        retornar -1

    se ano de A > ano de B:
        retornar 1

    senão:
        retornar 0


criar filteredBooks

    filtrar books
    mantendo apenas livros
    até o ano limite


ordenar filteredBooks
usando sortByYear
```

---

## Estrutura sugerida

```javascript
const books = [
  // pelo menos 3 livros
];

function sortByYear(bookA, bookB) {
  // comparar releaseYear
}

const filteredBooks = books.filter((book) => {
  // condição do ano
});

filteredBooks.sort(sortByYear);
```

---

## Exemplo esperado

Suponha:

```javascript
const books = [
  {
    title: "Book A",
    authorName: "Author A",
    releaseYear: 1940
  },
  {
    title: "Book B",
    authorName: "Author B",
    releaseYear: 1965
  },
  {
    title: "Book C",
    authorName: "Author C",
    releaseYear: 1925
  }
];
```

Filtrando até:

```text
1950
```

restam:

```javascript
[
  {
    title: "Book A",
    releaseYear: 1940
  },
  {
    title: "Book C",
    releaseYear: 1925
  }
]
```

Depois de ordenar:

```javascript
[
  {
    title: "Book C",
    releaseYear: 1925
  },
  {
    title: "Book A",
    releaseYear: 1940
  }
]
```

---

## Critérios de Aceitação

- [ ] Criar um array chamado `books`.
- [ ] `books` ter pelo menos três objetos.
- [ ] Cada objeto possuir `title`.
- [ ] Cada objeto possuir `authorName`.
- [ ] Cada objeto possuir `releaseYear`.
- [ ] `title` ser uma string.
- [ ] `authorName` ser uma string.
- [ ] `releaseYear` ser um número.
- [ ] Criar uma função chamada `sortByYear`.
- [ ] `sortByYear` receber dois livros.
- [ ] Retornar `-1` quando o primeiro ano for menor.
- [ ] Retornar `1` quando o primeiro ano for maior.
- [ ] Retornar `0` quando os anos forem iguais.
- [ ] Criar `filteredBooks`.
- [ ] Filtrar livros posteriores ao ano limite.
- [ ] Ordenar `filteredBooks` por `releaseYear`.
- [ ] A ordem final ser crescente.
- [ ] Utilizar `sortByYear` como callback do `sort()`.

---

## Conceitos praticados

- Arrays
- Objetos
- Arrays de objetos
- Funções
- Callbacks
- `filter()`
- `sort()`
- Comparação de números
- Ordem crescente
- Mutação de arrays
- `return`

---

## Regra Mental

Pense no exercício em duas etapas:

```text
1. FILTRAR
"Quais livros podem ficar?"
```

Depois:

```text
2. ORDENAR
"Em que ordem eles devem aparecer?"
```

E para o `sortByYear`, pense assim:

```text
A é mais antigo que B?
        ↓
       -1

A é mais recente que B?
        ↓
        1

mesmo ano?
        ↓
        0
```