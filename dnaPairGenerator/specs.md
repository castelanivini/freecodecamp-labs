# Especificação - DNA Pair Generator

## Objetivo

Criar uma função em JavaScript que receba uma string representando uma sequência de DNA e retorne os pares correspondentes de cada base.

No DNA, as bases seguem estas regras:

| Base  | Par   |
| ----- | ----- |
| `"A"` | `"T"` |
| `"T"` | `"A"` |
| `"C"` | `"G"` |
| `"G"` | `"C"` |

---

# 1. Criar a Função

Criar uma função chamada:

```javascript
pairElement(str)
```

Ela deve receber uma string de qualquer tamanho.

Exemplo:

```javascript
pairElement("ATCG");
```

---

# 2. Retorno Esperado

A função deve retornar um **array bidimensional**.

Para:

```javascript
"ATCG"
```

o resultado deve ser:

```javascript
[
  ["A", "T"],
  ["T", "A"],
  ["C", "G"],
  ["G", "C"]
]
```

---

# O Que É um Array Bidimensional?

É simplesmente um array contendo outros arrays:

```javascript
[
  ["A", "T"],
  ["T", "A"]
]
```

Nesse caso:

```javascript
result[0]
```

é:

```javascript
["A", "T"]
```

E:

```javascript
result[1]
```

é:

```javascript
["T", "A"]
```

---

# 3. Regras dos Pares

Você possui apenas quatro possibilidades:

```text
A → T
T → A
C → G
G → C
```

Por exemplo:

```javascript
pairElement("A");
```

deve retornar:

```javascript
[
  ["A", "T"]
]
```

---

Para:

```javascript
pairElement("G");
```

deve retornar:

```javascript
[
  ["G", "C"]
]
```

---

# 4. Percorrer a String

Considere:

```javascript
const str = "ATCG";
```

Uma string pode ser percorrida como uma sequência de caracteres:

```text
A T C G
│ │ │ │
0 1 2 3
```

Você pode utilizar um loop:

```javascript
for (let char of str) {
  // char será cada base
}
```

As iterações seriam:

```text
1ª → "A"
2ª → "T"
3ª → "C"
4ª → "G"
```

---

# 5. Descobrir o Par

Para cada `char`, você precisa descobrir qual é sua base complementar.

Conceitualmente:

```text
char = "A"
     ↓
pair = "T"
```

Depois criar:

```javascript
["A", "T"]
```

---

Se:

```text
char = "C"
```

então:

```text
pair = "G"
```

e você cria:

```javascript
["C", "G"]
```

---

# 6. Criar um Array de Resultado

Você pode começar com:

```javascript
const result = [];
```

Depois adicionar cada par.

Por exemplo:

```text
result = []

"A"
↓
["A", "T"]
↓
result = [
  ["A", "T"]
]
```

Próxima base:

```text
"T"
↓
["T", "A"]
↓
result = [
  ["A", "T"],
  ["T", "A"]
]
```

E assim por diante.

---

# 7. Como Representar as Regras?

Uma opção seria usar condicionais:

```text
se for A → T
se for T → A
se for C → G
se for G → C
```

Mas existe uma abordagem interessante usando um **objeto como tabela de consulta**.

Por exemplo, conceitualmente:

```javascript
const pairs = {
  A: "...",
  T: "...",
  C: "...",
  G: "..."
};
```

Então, em vez de perguntar:

```text
"Se for A faça isso,
se for T faça aquilo..."
```

você poderia simplesmente consultar:

```javascript
pairs[char]
```

---

# Pensando no Objeto

Se tivermos:

```javascript
const example = {
  dog: "🐶",
  cat: "🐱"
};
```

podemos fazer:

```javascript
example["dog"];
```

e receber:

```text
🐶
```

A mesma ideia pode ser aplicada ao DNA:

```text
pairs["A"]
      ↓
     "T"
```

```text
pairs["C"]
      ↓
     "G"
```

Isso evita vários `if/else`.

---

# 8. Montando Cada Par

Depois de descobrir:

```javascript
char
```

e:

```javascript
pairs[char]
```

você precisa construir:

```javascript
[char, pairs[char]]
```

Por exemplo:

```text
char = "A"

pairs[char] = "T"

       ↓

["A", "T"]
```

Esse pequeno array deve ser adicionado ao array principal.

---

# Exemplo Passo a Passo

Entrada:

```javascript
pairElement("GCG");
```

Inicialmente:

```javascript
result = [];
```

---

## Primeira iteração

```text
char = "G"
```

Par:

```text
G → C
```

Criamos:

```javascript
["G", "C"]
```

Resultado:

```javascript
[
  ["G", "C"]
]
```

---

## Segunda iteração

```text
char = "C"
```

Par:

```text
C → G
```

Resultado:

```javascript
[
  ["G", "C"],
  ["C", "G"]
]
```

---

## Terceira iteração

```text
char = "G"
```

Par:

```text
G → C
```

Resultado final:

```javascript
[
  ["G", "C"],
  ["C", "G"],
  ["G", "C"]
]
```

---

# Fluxo Geral

```text
Receber string
     │
     ▼
Criar result = []
     │
     ▼
Percorrer cada caractere
     │
     ▼
Descobrir base complementar
     │
     ▼
Criar:
[base, complemento]
     │
     ▼
Adicionar em result
     │
     ▼
Existem mais caracteres?
   ┌────┴────┐
   │         │
  sim       não
   │         │
   └─────────┤
             ▼
       return result
```

---

# Pseudocódigo

```text
função pairElement recebe str

    criar tabela com os pares:
        A corresponde a T
        T corresponde a A
        C corresponde a G
        G corresponde a C

    criar result vazio

    para cada caractere de str:

        descobrir o par desse caractere

        criar:
            [caractere, par]

        adicionar ao result

    retornar result
```

---

# Esqueleto

Você pode partir de algo parecido com:

```javascript
function pairElement(str) {
  const pairs = {
    // completar
  };

  const result = [];

  for (let char of str) {
    // descobrir o par

    // adicionar [char, par]
  }

  return result;
}
```

---

# Casos de Teste

### Um caractere

```javascript
pairElement("A");
```

Esperado:

```javascript
[
  ["A", "T"]
]
```

---

### Dois caracteres

```javascript
pairElement("AT");
```

Esperado:

```javascript
[
  ["A", "T"],
  ["T", "A"]
]
```

---

### Sequência completa

```javascript
pairElement("ATCG");
```

Esperado:

```javascript
[
  ["A", "T"],
  ["T", "A"],
  ["C", "G"],
  ["G", "C"]
]
```

---

### Repetições

```javascript
pairElement("AAA");
```

Esperado:

```javascript
[
  ["A", "T"],
  ["A", "T"],
  ["A", "T"]
]
```

Cada caractere deve gerar seu próprio par, mesmo que existam bases repetidas.

---

# Critérios de Aceitação

* [ ] A função `pairElement` existir.
* [ ] A função receber uma string.
* [ ] A função aceitar strings de diferentes tamanhos.
* [ ] `"A"` ser pareado com `"T"`.
* [ ] `"T"` ser pareado com `"A"`.
* [ ] `"C"` ser pareado com `"G"`.
* [ ] `"G"` ser pareado com `"C"`.
* [ ] Cada caractere gerar um array com dois elementos.
* [ ] O primeiro elemento ser a base original.
* [ ] O segundo elemento ser sua base complementar.
* [ ] Todos os pares serem armazenados em um array principal.
* [ ] A função retornar um array bidimensional.

---

# Conceitos Praticados

* Funções
* Strings
* Arrays
* Arrays bidimensionais
* Objetos
* Acesso por propriedade
* Loops
* `for...of`
* `push()`
* `return`

## Regra Mental

Você pode pensar no exercício como uma tradução:

```text
A → T
T → A
C → G
G → C
```

Para cada letra:

```text
"ATCG"
  ↓

A → ["A", "T"]
T → ["T", "A"]
C → ["C", "G"]
G → ["G", "C"]

  ↓

[
  ["A", "T"],
  ["T", "A"],
  ["C", "G"],
  ["G", "C"]
]
```

A parte mais interessante deste desafio é perceber que um objeto pode funcionar como uma pequena **tabela de consulta**:

```javascript
pairs[char]
```

em vez de precisar criar um `if/else` diferente para cada base.
