# Especificação - Odd Fibonacci Sum Calculator

## Objetivo

Criar uma função em JavaScript que calcule a soma de todos os números **ímpares** da sequência de Fibonacci que sejam menores ou iguais ao número informado.

---

# 1. Criar a Função

Criar uma função chamada:

```javascript
sumFibs(num)
```

## Parâmetro

| Parâmetro | Tipo     | Descrição                              |
| --------- | -------- | -------------------------------------- |
| `num`     | `number` | Limite máximo considerado na sequência |

---

# 2. Entendendo a Sequência de Fibonacci

A sequência começa com:

```text
0, 1
```

Cada próximo número é a soma dos dois anteriores.

Então:

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
```

A regra é:

```text
próximo = anterior + atual
```

Exemplo:

```text
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
```

---

# 3. Considerar Apenas Valores Até `num`

Se:

```javascript
sumFibs(10)
```

você deve considerar apenas:

```text
0, 1, 1, 2, 3, 5, 8
```

O próximo valor seria:

```text
13
```

Mas:

```text
13 > 10
```

Então ele não entra na análise.

---

# 4. Somar Apenas os Ímpares

Da sequência:

```text
0, 1, 1, 2, 3, 5, 8
```

os números ímpares são:

```text
1, 1, 3, 5
```

Então:

```text
1 + 1 + 3 + 5 = 10
```

Logo:

```javascript
sumFibs(10);
```

deve retornar:

```javascript
10
```

---

# Como Identificar um Número Ímpar?

Um número é ímpar quando o resto da divisão por `2` é diferente de zero.

Exemplo:

```javascript
5 % 2
```

Resultado:

```text
1
```

Portanto:

```javascript
5 % 2 !== 0
```

é:

```javascript
true
```

Já:

```javascript
8 % 2 !== 0
```

é:

```javascript
false
```

---

# 5. Gerar Fibonacci Sem Criar um Array

Você não precisa necessariamente armazenar toda a sequência.

Pode trabalhar com duas variáveis:

```text
previous
current
```

Inicialmente:

```text
previous = 0
current = 1
```

Para encontrar o próximo:

```text
next = previous + current
```

Depois você desloca os valores:

```text
previous = current
current = next
```

---

# Exemplo Passo a Passo

Começo:

```text
previous = 0
current  = 1
```

Próximo:

```text
next = 0 + 1
next = 1
```

Atualiza:

```text
previous = 1
current  = 1
```

Próximo:

```text
next = 1 + 1
next = 2
```

Atualiza:

```text
previous = 1
current  = 2
```

Próximo:

```text
next = 1 + 2
next = 3
```

E assim por diante.

---

# 6. Criar um Acumulador

Você também precisa guardar a soma dos valores ímpares.

Comece com:

```javascript
let sum = 0;
```

Para cada Fibonacci:

```text
é ímpar?
   │
 ┌─┴─┐
 │   │
sim não
 │   │
 ▼   ▼
somar ignorar
```

---

# Exemplo Completo com `10`

Sequência válida:

```text
0, 1, 1, 2, 3, 5, 8
```

Processamento:

```text
0 → par   → soma = 0
1 → ímpar → soma = 1
1 → ímpar → soma = 2
2 → par   → soma = 2
3 → ímpar → soma = 5
5 → ímpar → soma = 10
8 → par   → soma = 10
```

Resultado:

```text
10
```

---

# 7. Atenção aos Dois `1`

A sequência começa com:

```text
0, 1, 1, 2...
```

Existem dois valores `1`.

Como ambos pertencem à sequência e são ímpares, ambos devem entrar na soma.

Por exemplo:

```javascript
sumFibs(1);
```

deve considerar:

```text
0, 1, 1
```

Então:

```text
1 + 1 = 2
```

---

# Fluxo Esperado

```text
Receber num
    │
    ▼
previous = 0
current = 1
sum = 0
    │
    ▼
current <= num?
 ┌──┴───┐
 │      │
sim    não
 │      │
 ▼      ▼
current é   retornar
ímpar?      sum
 │
 ├── sim → adicionar em sum
 │
 └── não → ignorar
 │
 ▼
calcular próximo Fibonacci
 │
 ▼
atualizar previous/current
 │
 └──────── voltar ao loop
```

---

# Pseudocódigo

```text
função sumFibs recebe num

    criar previous
    criar current
    criar sum

    enquanto o número atual
    estiver dentro do limite:

        se o número atual for ímpar:
            adicionar em sum

        calcular próximo Fibonacci

        atualizar previous e current

    retornar sum
```

---

# Possível Esqueleto

```javascript
function sumFibs(num) {
  let previous = 0;
  let current = 1;
  let sum = 0;

  while (/* condição */) {
    // verificar se current é ímpar

    // calcular próximo

    // atualizar previous e current
  }

  return sum;
}
```

---

# Exemplos Esperados

### Exemplo 1

```javascript
sumFibs(10);
```

Fibonacci:

```text
0, 1, 1, 2, 3, 5, 8
```

Ímpares:

```text
1, 1, 3, 5
```

Retorno:

```javascript
10
```

---

### Exemplo 2

```javascript
sumFibs(4);
```

Fibonacci:

```text
0, 1, 1, 2, 3
```

Ímpares:

```text
1, 1, 3
```

Retorno:

```javascript
5
```

---

### Exemplo 3

```javascript
sumFibs(1);
```

Fibonacci válido:

```text
0, 1, 1
```

Retorno:

```javascript
2
```

---

# Critérios de Aceitação

* [ ] A função `sumFibs` existir.
* [ ] A função receber um número.
* [ ] A sequência começar em `0` e `1`.
* [ ] Cada novo Fibonacci ser calculado a partir dos dois anteriores.
* [ ] Apenas valores menores ou iguais a `num` serem considerados.
* [ ] Apenas números ímpares serem adicionados.
* [ ] Os dois valores iniciais `1` serem considerados.
* [ ] A função retornar a soma final.

---

# Conceitos Praticados

* Funções
* Loops
* `while`
* Acumuladores
* Sequência de Fibonacci
* Operador módulo `%`
* Números pares e ímpares
* Atualização de variáveis
* `return`

## Regra Mental

Você precisa controlar três coisas:

```text
previous + current → next
```

e, antes de avançar:

```text
current é ímpar?
    ↓
   soma
```

Depois:

```text
previous = current
current = next
```

E repete até ultrapassar o limite.
