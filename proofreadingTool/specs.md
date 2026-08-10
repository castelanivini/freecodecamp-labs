# Especificação - Proofreading Tool

## Objetivo

Criar uma ferramenta em JavaScript que analise arrays de palavras para identificar:

* palavras que **não são palíndromos**;
* frases consecutivas que aparecem mais de uma vez;
* resultados combinados para múltiplos textos.

---

# Conceitos

## Palíndromo

Uma palavra é um palíndromo quando pode ser lida da mesma forma da esquerda para a direita e da direita para a esquerda.

### Exemplos

```text
racecar
level
radar
```

Não são palíndromos:

```text
hello
world
javascript
```

A comparação deve ignorar diferenças entre letras maiúsculas e minúsculas.

Por exemplo:

```text
RaceCar
```

deve ser considerado um palíndromo.

---

# 1. Função `isPalindrome`

Criar uma função chamada:

```javascript
isPalindrome(word)
```

## Parâmetro

| Parâmetro | Tipo     | Descrição                  |
| --------- | -------- | -------------------------- |
| `word`    | `string` | Palavra que será analisada |

## Comportamento

A função deve:

* [ ] Receber uma string.
* [ ] Ignorar diferenças entre maiúsculas e minúsculas.
* [ ] Comparar a palavra original com sua versão invertida.
* [ ] Retornar `true` se forem iguais.
* [ ] Retornar `false` caso contrário.

---

## Exemplos

```javascript
isPalindrome("racecar");
```

Retorno:

```javascript
true
```

```javascript
isPalindrome("Level");
```

Retorno:

```javascript
true
```

```javascript
isPalindrome("hello");
```

Retorno:

```javascript
false
```

---

# 2. Função `findPalindromeBreaks`

Criar uma função chamada:

```javascript
findPalindromeBreaks(words)
```

## Parâmetro

| Parâmetro | Tipo            | Descrição         |
| --------- | --------------- | ----------------- |
| `words`   | `Array<string>` | Lista de palavras |

## Comportamento

A função deve:

* [ ] Percorrer todas as palavras.
* [ ] Utilizar a lógica de `isPalindrome`.
* [ ] Identificar quais palavras não são palíndromos.
* [ ] Armazenar os **índices** dessas palavras.
* [ ] Retornar um array contendo os índices encontrados.

---

## Exemplo

Entrada:

```javascript
["level", "hello", "radar", "world"]
```

Análise:

| Índice | Palavra   | Palíndromo? |
| -----: | --------- | :---------: |
|    `0` | `"level"` |      ✅      |
|    `1` | `"hello"` |      ❌      |
|    `2` | `"radar"` |      ✅      |
|    `3` | `"world"` |      ❌      |

Retorno:

```javascript
[1, 3]
```

---

## Array vazio

Se:

```javascript
[]
```

for recebido, retornar:

```javascript
[]
```

---

# 3. Função `findRepeatedPhrases`

Criar uma função chamada:

```javascript
findRepeatedPhrases(words, phraseLength)
```

## Parâmetros

| Parâmetro      | Tipo            | Descrição                            |
| -------------- | --------------- | ------------------------------------ |
| `words`        | `Array<string>` | Lista de palavras                    |
| `phraseLength` | `number`        | Quantidade de palavras em cada frase |

---

# Conceito de Frase

Uma frase é uma sequência de palavras consecutivas.

Considere:

```javascript
["the", "cat", "sat", "the", "cat"]
```

Com:

```javascript
phraseLength = 2
```

As frases possíveis são:

```text
índice 0 → "the cat"
índice 1 → "cat sat"
índice 2 → "sat the"
índice 3 → "the cat"
```

A frase:

```text
"the cat"
```

aparece duas vezes.

Portanto, devem ser retornados os índices:

```javascript
[0, 3]
```

> O índice da primeira ocorrência também deve ser incluído.

---

# Regra de Repetição

A função deve:

* [ ] Criar todas as sequências possíveis de `phraseLength` palavras.
* [ ] Identificar quais sequências aparecem mais de uma vez.
* [ ] Retornar todos os índices onde essas sequências começam.
* [ ] Incluir a primeira ocorrência da frase repetida.

---

# Sequências Sobrepostas

Frases sobrepostas também devem ser consideradas.

### Exemplo

```javascript
["a", "a", "a"]
```

Com:

```javascript
phraseLength = 2
```

Existem:

```text
índice 0 → "a a"
índice 1 → "a a"
```

A frase aparece duas vezes.

Retorno:

```javascript
[0, 1]
```

---

# Mais de uma Frase Repetida

Considere:

```javascript
["a", "b", "a", "b", "c", "a", "b"]
```

Com:

```javascript
phraseLength = 2
```

Temos:

```text
0 → "a b"
1 → "b a"
2 → "a b"
3 → "b c"
4 → "c a"
5 → "a b"
```

A frase `"a b"` aparece nos índices:

```javascript
[0, 2, 5]
```

Todos esses índices devem aparecer no resultado.

---

# Regra de Limite

Se:

```javascript
phraseLength >= words.length
```

a função deve retornar:

```javascript
[]
```

### Exemplos

```javascript
findRepeatedPhrases(["a", "b"], 2);
```

Retorno:

```javascript
[]
```

```javascript
findRepeatedPhrases(["a", "b"], 3);
```

Retorno:

```javascript
[]
```

---

# Fluxo de `findRepeatedPhrases`

```text
Receber words e phraseLength
          │
          ▼
phraseLength >= words.length?
       ┌──┴───┐
       │      │
      Sim    Não
       │      │
       ▼      ▼
 return []   Criar todas
             as frases
                │
                ▼
          Contar ocorrências
                │
                ▼
        Frase aparece > 1?
             ┌──┴───┐
             │      │
            Sim    Não
             │      │
             ▼      ▼
      Guardar índice Ignorar
                │
                ▼
        Retornar índices
```

---

# 4. Função `analyzeTexts`

Criar uma função chamada:

```javascript
analyzeTexts(texts, phraseLength)
```

## Parâmetros

| Parâmetro      | Tipo                   | Descrição                     |
| -------------- | ---------------------- | ----------------------------- |
| `texts`        | `Array<Array<string>>` | Lista contendo vários textos  |
| `phraseLength` | `number`               | Tamanho das frases analisadas |

Cada elemento de `texts` será um array de palavras.

---

## Exemplo

```javascript
const texts = [
  ["level", "hello", "level"],
  ["the", "cat", "sat", "the", "cat"],
];
```

---

## Comportamento

Para cada texto, a função deve:

* [ ] Encontrar os índices de frases repetidas.
* [ ] Encontrar os índices de palavras que não são palíndromos.
* [ ] Criar um objeto contendo:

```javascript
{
  repeatedPhrases,
  palindromeBreaks,
}
```

* [ ] Retornar um array desses objetos.

---

## Estrutura Esperada

```javascript
[
  {
    repeatedPhrases: [...],
    palindromeBreaks: [...],
  },
  {
    repeatedPhrases: [...],
    palindromeBreaks: [...],
  },
]
```

---

# Exemplo Completo

Entrada:

```javascript
const texts = [
  ["level", "hello", "radar"],
  ["the", "cat", "sat", "the", "cat"],
];

analyzeTexts(texts, 2);
```

Para o primeiro texto:

```javascript
["level", "hello", "radar"]
```

`palindromeBreaks`:

```javascript
[1]
```

Como não há frase de 2 palavras repetida:

```javascript
repeatedPhrases: []
```

---

Para o segundo texto:

```javascript
["the", "cat", "sat", "the", "cat"]
```

A frase:

```text
the cat
```

aparece nos índices:

```javascript
[0, 3]
```

Como nenhuma dessas palavras é palíndromo:

```javascript
palindromeBreaks: [0, 1, 2, 3, 4]
```

---

Resultado:

```javascript
[
  {
    repeatedPhrases: [],
    palindromeBreaks: [1],
  },
  {
    repeatedPhrases: [0, 3],
    palindromeBreaks: [0, 1, 2, 3, 4],
  },
]
```

---

# Array de Textos Vazio

Se:

```javascript
texts = [];
```

A função deve retornar:

```javascript
[]
```

---

# Fluxo Geral

```text
texts
 │
 ▼
Percorrer cada texto
 │
 ├───────────────┐
 ▼               ▼
findRepeated   findPalindrome
Phrases()      Breaks()
 │               │
 └───────┬───────┘
         ▼
 Criar objeto:
 {
   repeatedPhrases,
   palindromeBreaks
 }
         │
         ▼
Adicionar ao resultado
         │
         ▼
Retornar array
```

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] A função `isPalindrome` existir.
* [ ] `isPalindrome` ignorar maiúsculas e minúsculas.
* [ ] `isPalindrome` retornar `true` para palíndromos.
* [ ] `isPalindrome` retornar `false` para palavras comuns.
* [ ] A função `findPalindromeBreaks` existir.
* [ ] `findPalindromeBreaks` retornar índices de palavras não palíndromas.
* [ ] `findPalindromeBreaks([])` retornar `[]`.
* [ ] A função `findRepeatedPhrases` existir.
* [ ] Ela receber `words` e `phraseLength`.
* [ ] Frases consecutivas forem corretamente analisadas.
* [ ] Apenas frases que aparecem mais de uma vez forem consideradas.
* [ ] A primeira ocorrência também for incluída.
* [ ] Sequências sobrepostas forem consideradas.
* [ ] `phraseLength >= words.length` retornar `[]`.
* [ ] A função `analyzeTexts` existir.
* [ ] Ela processar todos os arrays existentes em `texts`.
* [ ] Cada resultado possuir `repeatedPhrases`.
* [ ] Cada resultado possuir `palindromeBreaks`.
* [ ] `analyzeTexts([], phraseLength)` retornar `[]`.

---

# Conceitos Praticados

* Funções
* Arrays
* Arrays multidimensionais
* Strings
* Objetos
* Loops
* Índices
* `slice()`
* `join()`
* `toLowerCase()`
* Inversão de strings
* Comparação de valores
* Contagem de ocorrências
* Sequências sobrepostas
* Objetos como estruturas de agrupamento
* Composição de funções
* `push()`
* `return`
