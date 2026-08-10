# Especificação - Record Collection

## Objetivo

Criar uma função em JavaScript para atualizar uma coleção de álbuns musicais.

A coleção é representada por um objeto. Cada propriedade desse objeto representa um álbum e utiliza um `id` único como chave.

Cada álbum também é um objeto e pode conter propriedades como:

* `albumTitle`
* `artist`
* `tracks`

Nem todos os álbuns possuem todas as propriedades preenchidas.

---

# Estrutura da Coleção

## Exemplo

```javascript
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};
```

---

# Função Principal

Criar uma função chamada `updateRecords`.

## Parâmetros

A função deve receber quatro parâmetros:

| Parâmetro | Tipo     | Descrição                                  |
| --------- | -------- | ------------------------------------------ |
| `records` | `object` | Objeto contendo todos os álbuns            |
| `id`      | `number` | Identificador do álbum que será atualizado |
| `prop`    | `string` | Nome da propriedade que será alterada      |
| `value`   | `string` | Novo valor utilizado na atualização        |

### Estrutura esperada

```javascript
function updateRecords(records, id, prop, value) {
  // lógica da atualização
}
```

---

# Regras de Atualização

## 1. Retornar a Coleção Completa

* [ ] A função deve sempre retornar o objeto `records` completo.
* [ ] O retorno não deve ser apenas o álbum alterado.
* [ ] O retorno não deve ser apenas a propriedade modificada.

```javascript
return records;
```

---

## 2. Remover uma Propriedade

Se `value` for uma string vazia:

```javascript
value === ""
```

A função deve:

* [ ] Remover a propriedade indicada por `prop` do álbum identificado por `id`.
* [ ] Utilizar o operador `delete`.

### Exemplo

Antes:

```javascript
records[2548] = {
  albumTitle: "Slippery When Wet",
  artist: "Bon Jovi",
};
```

Chamada:

```javascript
updateRecords(records, 2548, "artist", "");
```

Depois:

```javascript
records[2548] = {
  albumTitle: "Slippery When Wet",
};
```

---

## 3. Atualizar uma Propriedade Comum

Se:

```javascript
prop !== "tracks"
```

E:

```javascript
value !== ""
```

A função deve:

* [ ] Criar ou atualizar a propriedade indicada por `prop`.
* [ ] Atribuir `value` diretamente à propriedade.

### Exemplo

```javascript
updateRecords(records, 5439, "artist", "ABBA");
```

Resultado no álbum:

```javascript
{
  albumTitle: "ABBA Gold",
  artist: "ABBA",
}
```

---

## 4. Criar o Array de Faixas

Se:

```javascript
prop === "tracks"
```

E:

```javascript
value !== ""
```

Mas o álbum ainda não possuir a propriedade `tracks`, a função deve:

* [ ] Criar a propriedade `tracks`.
* [ ] Inicializá-la como um array vazio.
* [ ] Adicionar `value` ao array.

### Exemplo

Antes:

```javascript
records[5439] = {
  albumTitle: "ABBA Gold",
};
```

Chamada:

```javascript
updateRecords(records, 5439, "tracks", "Dancing Queen");
```

Depois:

```javascript
records[5439] = {
  albumTitle: "ABBA Gold",
  tracks: ["Dancing Queen"],
};
```

---

## 5. Adicionar uma Faixa Existente

Se:

```javascript
prop === "tracks"
```

E:

```javascript
value !== ""
```

E o álbum já possuir um array `tracks`, a função deve:

* [ ] Adicionar `value` ao final do array.
* [ ] Preservar as faixas já existentes.
* [ ] Utilizar `push()`.

### Exemplo

Antes:

```javascript
records[2468] = {
  albumTitle: "1999",
  tracks: ["1999"],
};
```

Chamada:

```javascript
updateRecords(records, 2468, "tracks", "Little Red Corvette");
```

Depois:

```javascript
records[2468] = {
  albumTitle: "1999",
  tracks: ["1999", "Little Red Corvette"],
};
```

---

# Ordem Recomendada das Condições

A lógica pode ser organizada na seguinte ordem:

```text
1. Se value estiver vazio:
   remover a propriedade.

2. Senão, se prop for "tracks":
   criar o array, caso ele não exista;
   adicionar value ao final.

3. Senão:
   atribuir value à propriedade.

4. Retornar records.
```

---

# Fluxo da Função

```text
value é uma string vazia?
│
├── Sim
│   └── Remover records[id][prop]
│
└── Não
    │
    ├── prop é "tracks"?
    │   │
    │   ├── Sim
    │   │   ├── tracks não existe?
    │   │   │   └── Criar array vazio
    │   │   └── Adicionar value ao final
    │   │
    │   └── Não
    │       └── Atribuir value à propriedade
    │
    └── Retornar records
```

---

# Exemplos de Uso

## Remover uma propriedade

```javascript
updateRecords(recordCollection, 2548, "artist", "");
```

---

## Adicionar ou atualizar um artista

```javascript
updateRecords(recordCollection, 5439, "artist", "ABBA");
```

---

## Criar um array de faixas

```javascript
updateRecords(recordCollection, 5439, "tracks", "Mamma Mia");
```

---

## Adicionar uma faixa ao final

```javascript
updateRecords(
  recordCollection,
  2468,
  "tracks",
  "Little Red Corvette"
);
```

---

# Observação Importante

A função não deve acessar diretamente a variável `recordCollection`.

## Incorreto

```javascript
function updateRecords(records, id, prop, value) {
  recordCollection[id][prop] = value;
}
```

## Correto

```javascript
function updateRecords(records, id, prop, value) {
  records[id][prop] = value;
}
```

Os testes utilizam uma cópia da coleção original. Por isso, toda a lógica deve utilizar exclusivamente o parâmetro `records`.

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] A função `updateRecords` existir.
* [ ] A função receber `records`, `id`, `prop` e `value`.
* [ ] A função sempre retornar o objeto `records`.
* [ ] Uma propriedade for removida quando `value === ""`.
* [ ] Propriedades diferentes de `tracks` receberem diretamente o novo valor.
* [ ] `tracks` for criado como array quando ainda não existir.
* [ ] O primeiro valor de `tracks` for adicionado ao array recém-criado.
* [ ] Novas faixas forem adicionadas ao final do array existente.
* [ ] As faixas anteriores forem preservadas.
* [ ] A função não acessar diretamente `recordCollection`.
* [ ] Toda a lógica utilizar apenas o parâmetro `records`.

---

# Conceitos Praticados

* Objetos JavaScript
* Objetos aninhados
* Notação de colchetes
* Propriedades dinâmicas
* Arrays dentro de objetos
* `push()`
* Operador `delete`
* Condicionais
* Parâmetros de função
* Mutação de objetos
* Retorno de valores
