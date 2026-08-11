# Especificação - Password Generator App

## Objetivo

Criar uma função em JavaScript que gere uma senha aleatória com um tamanho definido pelo usuário.

A senha deve ser formada por caracteres escolhidos aleatoriamente a partir de uma string contendo:

* letras maiúsculas;
* letras minúsculas;
* números;
* caracteres especiais.

---

# 1. Criar a Função

Criar uma função chamada:

```javascript
generatePassword(length)
```

## Parâmetro

| Parâmetro | Tipo     | Descrição                         |
| --------- | -------- | --------------------------------- |
| `length`  | `number` | Quantidade de caracteres da senha |

### Estrutura

```javascript
function generatePassword(length) {
  // lógica
}
```

---

# 2. String de Caracteres Permitidos

Utilizar exatamente a seguinte string como fonte de caracteres:

```javascript
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
```

Ela contém:

```text
A-Z
a-z
0-9
!@#$%^&*()
```

Você pode armazená-la em uma variável:

```javascript
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
```

---

# 3. Criar a Senha

Começar com uma string vazia:

```javascript
let password = "";
```

Depois:

* [ ] Repetir o processo `length` vezes.
* [ ] Em cada repetição, selecionar um caractere aleatório.
* [ ] Adicionar esse caractere à senha.

---

# Como Escolher um Caractere Aleatório

Considere:

```javascript
const chars = "ABCDEF";
```

Os índices são:

```text
A B C D E F
0 1 2 3 4 5
```

Você precisa gerar aleatoriamente um índice entre:

```text
0
```

e:

```text
chars.length - 1
```

---

# `Math.random()`

O método:

```javascript
Math.random()
```

gera um número aleatório entre:

```text
0 inclusive
```

e:

```text
1 exclusivo
```

Exemplos possíveis:

```text
0.12
0.573
0.999
0.004
```

---

# Multiplicando pelo Tamanho

Se:

```javascript
chars.length === 72
```

você pode pensar em:

```javascript
Math.random() * chars.length
```

Isso gera algo entre aproximadamente:

```text
0
```

e:

```text
71.999...
```

---

# `Math.floor()`

Como índices precisam ser números inteiros, você pode utilizar:

```javascript
Math.floor()
```

Por exemplo:

```javascript
Math.floor(4.92);
```

Resultado:

```javascript
4
```

Então a ideia para o índice aleatório é:

```text
Math.random()
      ↓
multiplicar por chars.length
      ↓
Math.floor()
      ↓
índice inteiro válido
```

---

# 4. Acessar o Caractere

Depois de gerar um índice:

```javascript
const randomIndex = ...;
```

você pode acessar:

```javascript
chars[randomIndex]
```

Exemplo:

```javascript
chars[3]
```

poderia resultar em:

```text
D
```

---

# 5. Construir a Senha

Cada caractere selecionado deve ser concatenado à senha.

Conceitualmente:

```text
password = ""

caractere aleatório → "K"
password = "K"

caractere aleatório → "7"
password = "K7"

caractere aleatório → "!"
password = "K7!"

...
```

O processo continua até atingir o tamanho solicitado.

---

# 6. Retornar a Senha

Depois de gerar todos os caracteres:

* [ ] Retornar a senha usando `return`.

Exemplo:

```javascript
generatePassword(8);
```

Possível retorno:

```text
aK7!P2#q
```

Como a senha é aleatória, o resultado pode mudar a cada execução.

---

# 7. Criar a Variável `password`

Fora da função:

* [ ] Criar uma variável chamada `password`.
* [ ] Chamar `generatePassword()` passando um número.

Exemplo:

```javascript
const password = generatePassword(12);
```

Nesse caso, a senha deve possuir:

```text
12 caracteres
```

---

# 8. Exibir o Resultado

Exibir uma única string no console no formato:

```text
Generated password: <password>
```

Por exemplo:

```text
Generated password: B7@xP2!mQ9#A
```

A mensagem e a senha devem ser separadas por um espaço.

---

# Fluxo Esperado

```text
Receber length
      │
      ▼
Criar string de caracteres
      │
      ▼
password = ""
      │
      ▼
Repetir length vezes
      │
      ▼
Gerar índice aleatório
      │
      ▼
Pegar chars[index]
      │
      ▼
Adicionar à password
      │
      ▼
Terminou o loop?
   ┌──┴───┐
   │      │
  não    sim
   │      │
   └──────┘
          ▼
    return password
```

---

# Exemplo Passo a Passo

Considere:

```javascript
generatePassword(5);
```

Inicialmente:

```text
password = ""
```

Possíveis caracteres sorteados:

```text
1ª iteração → "A"
2ª iteração → "7"
3ª iteração → "!"
4ª iteração → "x"
5ª iteração → "Q"
```

Resultado:

```text
A7!xQ
```

---

# Exemplos Esperados

### Senha de 4 caracteres

```javascript
generatePassword(4);
```

Possível retorno:

```text
a7@Q
```

---

### Senha de 8 caracteres

```javascript
generatePassword(8);
```

Possível retorno:

```text
P9#kL2!a
```

---

### Senha de 12 caracteres

```javascript
generatePassword(12);
```

Possível retorno:

```text
X2!ab9#Qm7@L
```

---

# Critérios de Aceitação

* [ ] A função `generatePassword` existir.
* [ ] A função receber um parâmetro de tamanho.
* [ ] A string de caracteres permitidos ser utilizada.
* [ ] `Math.random()` ser utilizado.
* [ ] Outro método `Math` apropriado ser utilizado para gerar índices inteiros.
* [ ] A senha possuir exatamente o tamanho solicitado.
* [ ] A função retornar uma string.
* [ ] A variável `password` existir.
* [ ] `password` receber o resultado de `generatePassword()`.
* [ ] O console exibir apenas uma string final.
* [ ] A saída seguir o formato `Generated password: <password>`.

---

# Conceitos Praticados

* Funções
* Parâmetros
* Strings
* Loops
* Índices
* `Math.random()`
* `Math.floor()`
* Concatenação
* `return`
* `console.log()`

## Regra Mental

Pense no algoritmo assim:

```text
"Quero N caracteres"

para cada caractere:
    sortear um índice
    pegar o caractere naquele índice
    adicionar na senha

no final:
    retornar a senha
```
