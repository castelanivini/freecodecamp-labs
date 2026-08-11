# Especificação - Title Case Converter

## Objetivo

Criar uma função em JavaScript que transforme uma frase em **Title Case**.

Title Case significa que:

* a primeira letra de cada palavra deve ficar maiúscula;
* todas as outras letras da palavra devem ficar minúsculas.

---

# Exemplo

Entrada:

```javascript
"javaScript is fun"
```

Resultado:

```javascript
"Javascript Is Fun"
```

Observe:

```text
javaScript
↓
Javascript

is
↓
Is

fun
↓
Fun
```

---

# 1. Criar a Função

Criar uma função chamada:

```javascript
titleCase(str)
```

### Estrutura

```javascript
function titleCase(str) {
  // lógica
}
```

## Parâmetro

| Parâmetro | Tipo     | Descrição                 |
| --------- | -------- | ------------------------- |
| `str`     | `string` | Frase que será convertida |

---

# 2. Separar a Frase em Palavras

Considere:

```javascript
"I like to code"
```

Você precisa trabalhar individualmente com:

```text
"I"
"like"
"to"
"code"
```

Um método que pode ajudar é:

```javascript
split()
```

Por exemplo:

```javascript
str.split(" ")
```

transforma uma string em um array de palavras.

Conceitualmente:

```text
"I like to code"

       ↓ split(" ")

["I", "like", "to", "code"]
```

---

# 3. Normalizar Cada Palavra

Antes de colocar a primeira letra em maiúscula, é importante transformar a palavra inteira em minúscula.

Por exemplo:

```text
jAvASCrIPT
```

deve primeiro virar:

```text
javascript
```

Método útil:

```javascript
toLowerCase()
```

Isso evita resultados incorretos como:

```text
JAvASCrIPT
```

O esperado é:

```text
Javascript
```

---

# 4. Capitalizar a Primeira Letra

Depois de transformar a palavra em minúscula, você precisa separar mentalmente:

```text
javascript
│└─────────┐
│          │
j       avascript
↑
primeira letra
```

A primeira letra pode ser acessada por:

```javascript
word[0]
```

E transformada em maiúscula com:

```javascript
toUpperCase()
```

Conceitualmente:

```text
javascript
↓
j + avascript
↓
J + avascript
↓
Javascript
```

---

# 5. Pegar o Restante da Palavra

Você precisa preservar tudo depois da primeira letra.

Por exemplo:

```text
javascript
 ↑
 índice 1 em diante
```

Um método que pode ajudar:

```javascript
slice()
```

Por exemplo:

```javascript
word.slice(1)
```

representa:

```text
javascript
 ↓
avascript
```

Então a ideia para cada palavra é:

```text
primeira letra maiúscula
          +
restante da palavra minúscula
```

---

# 6. Percorrer Todas as Palavras

Você pode usar um loop.

Por exemplo:

```javascript
const words = str.split(" ");
```

Depois pensar:

```text
para cada palavra:

    transformar em minúscula

    pegar primeira letra

    transformar primeira letra em maiúscula

    pegar restante

    juntar as duas partes
```

---

# 7. Construir o Resultado

Considere:

```javascript
"I like to code"
```

Depois do processamento:

```text
"I"
"Like"
"To"
"Code"
```

Agora precisamos reconstruir:

```text
"I Like To Code"
```

Você pode:

* construir uma nova string manualmente; ou
* guardar as palavras transformadas em um novo array.

---

# Estratégia com Novo Array

Conceitualmente:

```javascript
const result = [];
```

A cada palavra:

```text
"I"
↓
["I"]

"Like"
↓
["I", "Like"]

"To"
↓
["I", "Like", "To"]

"Code"
↓
["I", "Like", "To", "Code"]
```

Depois será necessário transformar isso novamente em uma string.

Um método útil é:

```javascript
join()
```

Por exemplo:

```javascript
["I", "Like", "To", "Code"].join(" ")
```

Resultado:

```javascript
"I Like To Code"
```

---

# Fluxo Completo

```text
"I like to CODE"
        │
        ▼
     split(" ")
        │
        ▼
["I", "like", "to", "CODE"]
        │
        ▼
   percorrer palavras
        │
        ▼
     toLowerCase()
        │
        ▼
["i", "like", "to", "code"]
        │
        ▼
capitalizar primeira letra
        │
        ▼
["I", "Like", "To", "Code"]
        │
        ▼
      join(" ")
        │
        ▼
"I Like To Code"
```

---

# Exemplo 1

Entrada:

```javascript
titleCase("I like to code");
```

Processamento:

```text
I     → I
like  → Like
to    → To
code  → Code
```

Retorno:

```javascript
"I Like To Code"
```

---

# Exemplo 2

Entrada:

```javascript
titleCase("javaScript is fun");
```

É importante notar o `S` maiúsculo:

```text
javaScript
```

Você não quer simplesmente transformar o primeiro caractere:

```text
JavaScript ❌
```

O exercício pede que **o restante fique minúsculo**.

Primeiro:

```text
javaScript
↓
javascript
```

Depois:

```text
javascript
↓
Javascript
```

Resultado final:

```javascript
"Javascript Is Fun"
```

---

# Exemplo 3

Entrada:

```javascript
titleCase("hELLO wORLD");
```

Processamento:

```text
hELLO
↓
hello
↓
Hello
```

```text
wORLD
↓
world
↓
World
```

Resultado:

```javascript
"Hello World"
```

---

# Pseudocódigo

```text
função titleCase recebe str

    separar str em palavras

    criar resultado vazio

    para cada palavra:

        transformar palavra em minúscula

        transformar primeira letra em maiúscula

        pegar restante da palavra

        juntar primeira letra + restante

        adicionar palavra ao resultado

    juntar palavras usando espaço

    retornar resultado
```

---

# Métodos que Podem Ajudar

```javascript
split()
```

Transforma:

```text
"hello world"
```

em:

```javascript
["hello", "world"]
```

---

```javascript
toLowerCase()
```

Transforma:

```text
"JaVaScRiPt"
```

em:

```text
"javascript"
```

---

```javascript
toUpperCase()
```

Transforma:

```text
"j"
```

em:

```text
"J"
```

---

```javascript
slice()
```

Pode pegar o restante da palavra:

```javascript
"javascript".slice(1)
```

Resultado:

```text
"avascript"
```

---

```javascript
join(" ")
```

Transforma:

```javascript
["Javascript", "Is", "Fun"]
```

em:

```text
"Javascript Is Fun"
```

---

# Critérios de Aceitação

* [ ] A função `titleCase` existir.
* [ ] A função receber uma string.
* [ ] Cada palavra ser processada.
* [ ] A primeira letra de cada palavra ficar maiúscula.
* [ ] Todas as outras letras ficarem minúsculas.
* [ ] Os espaços entre as palavras serem preservados conforme esperado pelo exercício.
* [ ] A função retornar uma string.
* [ ] `"I like to code"` retornar `"I Like To Code"`.
* [ ] `"javaScript is fun"` retornar `"Javascript Is Fun"`.

---

# Conceitos Praticados

* Strings
* Arrays
* Funções
* Loops
* Índices
* `split()`
* `slice()`
* `join()`
* `toLowerCase()`
* `toUpperCase()`
* Concatenação
* `return`

## Regra Mental

Para **cada palavra**, pense em três passos:

```text
"jAvASCrIPT"

      ↓ 1. tudo minúsculo

"javascript"

      ↓ 2. separar

"j" + "avascript"

      ↓ 3. primeira maiúscula

"J" + "avascript"

      ↓

"Javascript"
```

Depois é só repetir o processo para todas as palavras e juntá-las novamente com espaços.
