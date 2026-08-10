# Especificação - Mutations Algorithm

## Objetivo

Criar uma função em JavaScript que verifique se a primeira palavra de um array contém **todas as letras** da segunda palavra, desconsiderando diferenças entre letras maiúsculas e minúsculas.

A função deve retornar um valor booleano indicando se a condição foi atendida.

---

# Requisitos Funcionais

## 1. Criar a Função

* [ ] Criar uma função chamada `mutation`.

### Parâmetros

A função deve receber um único parâmetro:

| Parâmetro | Tipo            | Descrição                   |
| --------- | --------------- | --------------------------- |
| `arr`     | `Array<string>` | Array contendo duas strings |

### Estrutura

```javascript id="x2w2m7"
function mutation(arr) {
  // lógica
}
```

---

## 2. Estrutura do Array

O array recebido deve possuir:

| Índice | Conteúdo                                     |
| -----: | -------------------------------------------- |
|    `0` | Palavra principal                            |
|    `1` | Palavra que será utilizada para a comparação |

### Exemplo

```javascript id="a6szn0"
["hello", "Hello"]
```

Neste caso:

* `"hello"` será analisada;
* `"Hello"` fornecerá as letras que precisam existir na primeira palavra.

---

## 3. Ignorar Letras Maiúsculas e Minúsculas

Antes da comparação:

* [ ] Converter ambas as strings para o mesmo formato (maiúsculas ou minúsculas).

Exemplo:

```text id="wlr4gr"
Hello
```

e

```text id="9pv3mw"
hello
```

devem ser considerados iguais.

> **Dica:** utilize `toLowerCase()` ou `toUpperCase()`.

---

## 4. Comparar as Letras

A função deve verificar se **todas** as letras da segunda string aparecem na primeira.

### Exemplo

```javascript id="ibadw4"
mutation(["hello", "Hello"])
```

Comparação:

```text id="4m5hsv"
hello
hello
```

Resultado:

```text id="t8n6yf"
true
```

---

Outro exemplo:

```javascript id="5t7k91"
mutation(["Alien", "line"])
```

Comparação:

```text id="ztuypd"
alien
line
```

Todas as letras:

```text id="xwz6bw"
l
i
n
e
```

estão presentes em:

```text id="npwlcr"
alien
```

Resultado:

```text id="uofms7"
true
```

---

Exemplo negativo:

```javascript id="6jlwmc"
mutation(["hello", "hey"])
```

A letra:

```text id="ol2g0t"
y
```

não existe em:

```text id="r4fk4q"
hello
```

Resultado:

```text id="lj1hdz"
false
```

---

## 5. Retornar o Resultado

A função deve:

* [ ] Retornar `true` quando todas as letras da segunda string estiverem presentes na primeira.
* [ ] Retornar `false` caso alguma letra esteja ausente.

---

# Fluxo Esperado

```text id="kw5rmy"
Receber o array
        │
        ▼
Separar as duas strings
        │
        ▼
Converter ambas para minúsculas
        │
        ▼
Percorrer cada letra da segunda string
        │
        ▼
A letra existe na primeira?
        │
    ┌───┴────┐
    │        │
   Não      Sim
    │        │
Retorna   Continua
 false      │
             ▼
      Todas verificadas?
             │
             ▼
        Retorna true
```

---

# Exemplos Esperados

| Entrada                        | Retorno |
| ------------------------------ | :-----: |
| `mutation(["hello", "Hello"])` |  `true` |
| `mutation(["hello", "hey"])`   | `false` |
| `mutation(["Alien", "line"])`  |  `true` |
| `mutation(["Mary", "Army"])`   |  `true` |
| `mutation(["floor", "for"])`   |  `true` |
| `mutation(["hello", "neo"])`   | `false` |

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] A função `mutation` existir.
* [ ] A função receber um array como parâmetro.
* [ ] O array possuir duas strings.
* [ ] A comparação ignorar diferenças entre maiúsculas e minúsculas.
* [ ] Todas as letras da segunda string forem verificadas.
* [ ] A função retornar `true` quando todas as letras estiverem presentes.
* [ ] A função retornar `false` quando pelo menos uma letra estiver ausente.

---

# Conceitos Praticados

* Funções
* Arrays
* Strings
* Método `toLowerCase()`
* Estruturas de repetição (`for`, `for...of`)
* Método `includes()`
* Comparação de caracteres
* Valores booleanos (`true` e `false`)
* `return`
