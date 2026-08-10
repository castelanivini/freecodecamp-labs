# Especificação - String Inverter

## Objetivo

Criar uma função em JavaScript que receba uma string e retorne seus caracteres na **ordem inversa**.

Por exemplo:

```text
hello
```

deve se tornar:

```text
olleh
```

---

# Requisitos Funcionais

## 1. Criar a Função

* [ ] Criar uma função chamada `reverseString`.
* [ ] A função deve receber uma string como argumento.

### Estrutura

```javascript
function reverseString(str) {
  // lógica
}
```

### Parâmetro

| Parâmetro | Tipo     | Descrição                 |
| --------- | -------- | ------------------------- |
| `str`     | `string` | String que será invertida |

---

# 2. Inverter a String

A função deve:

* [ ] Percorrer ou manipular os caracteres da string.
* [ ] Colocar os caracteres na ordem inversa.
* [ ] Manter todos os caracteres da string original.

### Exemplo

Entrada:

```javascript
"hello"
```

Posições:

```text
Original:

h  e  l  l  o
0  1  2  3  4

Invertida:

o  l  l  e  h
4  3  2  1  0
```

Resultado:

```javascript
"olleh"
```

---

# 3. Retornar o Resultado

A função deve retornar a nova string invertida.

Exemplo:

```javascript
reverseString("hello");
```

Retorno:

```javascript
"olleh"
```

> O objetivo é **retornar** o resultado com `return`, e não apenas exibi-lo usando `console.log()`.

---

# Possíveis Estratégias

Existem diferentes maneiras de resolver o problema.

## Estratégia 1 - Loop

Você pode criar uma string vazia:

```javascript
let reversed = "";
```

E percorrer a string original do último caractere até o primeiro.

Visualmente:

```text
"hello"

começar aqui
        ↓
h e l l o
        4
      3
    2
  1
0

resultado sendo construído:

""
 ↓
"o"
 ↓
"ol"
 ↓
"oll"
 ↓
"olle"
 ↓
"olleh"
```

---

## Estratégia 2 - Métodos de Array

Strings não possuem diretamente um método `.reverse()`.

Porém, arrays possuem.

Então outra estratégia possível é pensar no fluxo:

```text
String
  ↓
transformar em Array
  ↓
inverter Array
  ↓
transformar novamente em String
```

Métodos que podem ser úteis:

```javascript
split()
reverse()
join()
```

---

# Exemplos Esperados

| Entrada                                 | Retorno                  |
| --------------------------------------- | ------------------------ |
| `reverseString("hello")`                | `"olleh"`                |
| `reverseString("Howdy")`                | `"ydwoH"`                |
| `reverseString("Greetings from Earth")` | `"htraE morf sgniteerG"` |
| `reverseString("JavaScript")`           | `"tpircSavaJ"`           |
| `reverseString("a")`                    | `"a"`                    |
| `reverseString("")`                     | `""`                     |

---

# Fluxo Esperado

```text
Receber str
    │
    ▼
Inverter a ordem
dos caracteres
    │
    ▼
Construir nova string
    │
    ▼
Retornar resultado
```

---

# Critérios de Aceitação

O exercício estará concluído quando:

* [ ] A função `reverseString` existir.
* [ ] A função receber uma string como argumento.
* [ ] Todos os caracteres forem mantidos.
* [ ] A ordem dos caracteres for invertida.
* [ ] A função retornar uma string.
* [ ] `"hello"` retornar `"olleh"`.
* [ ] Strings com espaços também forem invertidas corretamente.

---

# Conceitos Praticados

* Funções
* Parâmetros
* Strings
* Índices
* Loops
* Concatenação
* `split()`
* `reverse()`
* `join()`
* `return`
