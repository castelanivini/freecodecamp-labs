# Implement a Range-Based LCM Calculator

## Objetivo

Criar uma função que receba dois números e encontre o **menor múltiplo comum** entre:

- os dois números recebidos;
- todos os números inteiros existentes entre eles.

A função deve funcionar mesmo quando os números forem passados fora de ordem.

O exercício trabalha principalmente com:

- loops;
- ranges;
- múltiplos;
- operador `%`;
- mínimo e máximo;
- lógica de busca.

---

## 1. Criar a função

Crie uma função chamada:

```javascript
smallestCommons(arr)
```

Ela recebe um array contendo dois números:

```javascript
smallestCommons([1, 5]);
```

ou:

```javascript
smallestCommons([5, 1]);
```

Os dois casos devem produzir o mesmo resultado.

---

# 2. O que é LCM?

LCM significa:

```text
Least Common Multiple
```

Em português:

```text
Mínimo Múltiplo Comum
```

ou simplesmente:

```text
MMC
```

Considere os números:

```text
2 e 3
```

Múltiplos de `2`:

```text
2, 4, 6, 8, 10, 12...
```

Múltiplos de `3`:

```text
3, 6, 9, 12, 15...
```

O primeiro número presente nas duas sequências é:

```text
6
```

Portanto:

```text
MMC de 2 e 3 = 6
```

---

# 3. Mas este exercício vai além

O exercício não quer apenas o MMC dos dois números recebidos.

Se receber:

```javascript
[1, 5]
```

você precisa considerar:

```text
1
2
3
4
5
```

Então queremos encontrar o menor número que seja divisível por:

```text
1, 2, 3, 4 e 5
```

---

## Testando

Vamos testar:

```text
20
```

Temos:

```text
20 % 1 = 0 ✅
20 % 2 = 0 ✅
20 % 3 = 2 ❌
```

Já falhou.

Agora:

```text
60
```

```text
60 % 1 = 0 ✅
60 % 2 = 0 ✅
60 % 3 = 0 ✅
60 % 4 = 0 ✅
60 % 5 = 0 ✅
```

Então:

```javascript
smallestCommons([1, 5]);
```

deve retornar:

```javascript
60
```

---

# 4. Primeiro problema: descobrir o range

A entrada pode ser:

```javascript
[1, 5]
```

mas também:

```javascript
[5, 1]
```

Portanto, antes de começar, você precisa descobrir:

```text
qual é o menor número?
```

e:

```text
qual é o maior número?
```

Por exemplo:

```javascript
[5, 1]
```

deve ser interpretado como:

```text
min = 1
max = 5
```

---

## Você pode pensar em

```javascript
Math.min(...)
```

e:

```javascript
Math.max(...)
```

para descobrir esses limites.

---

# 5. Construindo mentalmente o intervalo

Se:

```text
min = 2
max = 5
```

o intervalo é:

```text
2, 3, 4, 5
```

Você não necessariamente precisa criar um array contendo esses números.

Pode simplesmente percorrer:

```text
de min até max
```

com um loop.

---

# 6. Como saber se um número é divisível?

O operador:

```javascript
%
```

retorna o resto da divisão.

Por exemplo:

```javascript
12 % 3
```

retorna:

```javascript
0
```

Portanto:

```javascript
12 % 3 === 0
```

significa:

> 12 é divisível por 3.

---

## Outro exemplo

```javascript
12 % 5
```

retorna:

```javascript
2
```

Então:

```javascript
12 % 5 === 0
```

é:

```javascript
false
```

---

# 7. A pergunta central do exercício

Para cada candidato a MMC, você precisa perguntar:

> Esse número é divisível por TODOS os números do intervalo?

Por exemplo:

```text
range:

2, 3, 4
```

Candidato:

```text
12
```

Teste:

```text
12 % 2 === 0
      ↓
      ✅

12 % 3 === 0
      ↓
      ✅

12 % 4 === 0
      ↓
      ✅
```

Todos passaram.

Então `12` é um múltiplo comum.

---

# 8. Por que precisamos do MENOR?

Não basta encontrar qualquer número divisível por todos.

Por exemplo, para:

```text
2, 3, 4
```

temos:

```text
12
24
36
48
60
...
```

Todos são divisíveis por:

```text
2, 3 e 4
```

Mas queremos o:

```text
MENOR
```

Portanto:

```text
12
```

---

# 9. Uma abordagem possível: procurar candidatos

Você pode começar com um número candidato e continuar aumentando até encontrar um que seja divisível por todo o intervalo.

Conceitualmente:

```text
candidato
   ↓
testar contra todo o range
   ↓
todos dividiram exatamente?
   │
 ┌─┴─┐
 │   │
sim não
 │   │
 ▼   ▼
achou tentar próximo
```

---

# 10. Não precisa testar qualquer número

Imagine:

```text
range = 3 até 5
```

Ou seja:

```text
3, 4, 5
```

O resultado obrigatoriamente precisa ser múltiplo de:

```text
5
```

Então não faria muito sentido testar:

```text
6
7
8
9
```

porque nenhum deles é divisível por `5`.

Você pode avançar utilizando algum número relacionado ao maior valor do intervalo.

Por exemplo:

```text
5
10
15
20
25
30
35
40
...
```

Isso já elimina vários candidatos impossíveis.

---

# 11. Verificando todo o intervalo

Suponha:

```text
min = 3
max = 5
```

E candidato:

```text
20
```

Você pode percorrer:

```text
3 → 4 → 5
```

Testando:

```text
20 % 3
```

Já falha:

```text
2
```

Então não existe motivo para continuar testando `4` e `5`.

Você pode abandonar esse candidato imediatamente.

---

# 12. Usando uma variável de controle

Uma estratégia possível é começar assumindo:

```javascript
let isCommon = true;
```

E então testar o candidato.

Se algum número não dividir exatamente:

```javascript
isCommon = false;
```

e interromper o loop.

Conceitualmente:

```text
isCommon = true

testar candidato

    número 1 divide?
        sim

    número 2 divide?
        sim

    número 3 divide?
        NÃO
          ↓
    isCommon = false
          ↓
        break
```

Depois:

```text
isCommon === true?
        ↓
      achamos
```

---

# 13. Exemplo completo

Considere:

```javascript
smallestCommons([2, 4]);
```

Range:

```text
2, 3, 4
```

Queremos o menor número divisível pelos três.

---

### Candidato `4`

```text
4 % 2 = 0 ✅

4 % 3 = 1 ❌
```

Falhou.

---

### Próximo candidato possível

```text
8
```

```text
8 % 2 = 0 ✅

8 % 3 = 2 ❌
```

Falhou.

---

### Próximo

```text
12
```

```text
12 % 2 = 0 ✅
12 % 3 = 0 ✅
12 % 4 = 0 ✅
```

Todos passaram.

Resultado:

```javascript
12
```

---

# 14. Entrada invertida

Considere:

```javascript
smallestCommons([4, 2]);
```

Primeiro descubra:

```text
min = 2
max = 4
```

Então o problema continua sendo:

```text
2, 3, 4
```

Portanto:

```javascript
smallestCommons([2, 4]);
```

e:

```javascript
smallestCommons([4, 2]);
```

devem retornar o mesmo resultado:

```javascript
12
```

---

# Fluxo Geral

```text
receber [a, b]
      │
      ▼
descobrir min e max
      │
      ▼
definir um candidato
      │
      ▼
┌─────────────────────┐
│ testar candidato    │
│ contra TODO o range │
└──────────┬──────────┘
           │
           ▼
   todos são divisores?
       ┌───┴───┐
       │       │
      sim     não
       │       │
       ▼       ▼
    retornar   aumentar
   candidato   candidato
                  │
                  └───────┐
                          │
                          ▼
                    testar novamente
```

---

# Pseudocódigo

```text
função smallestCommons recebe arr

    descobrir menor número

    descobrir maior número

    definir candidato


    enquanto ainda estiver procurando:

        assumir que candidato
        é múltiplo comum


        para cada número
        entre min e max:

            se candidato NÃO for
            divisível pelo número:

                marcar candidato
                como inválido

                parar verificação


        se candidato for válido:

            retornar candidato


        aumentar candidato
```

---

# Estrutura sugerida

```javascript
function smallestCommons(arr) {
  const min = // menor valor
  const max = // maior valor

  let candidate = // valor inicial

  while (true) {
    let isCommon = true;

    for (let n = min; n <= max; n++) {

      // candidato é divisível por n?

      // se não:
      // isCommon = false
      // break

    }

    if (isCommon) {
      // encontramos o resultado
    }

    // avançar candidato
  }
}
```

A estrutura acima não entrega todas as condições prontas, mas organiza a lógica necessária para você implementar.

---

# Outra forma de pensar

Esse exercício tem dois loops conceituais.

O primeiro procura:

```text
QUAL número funciona?
```

O segundo verifica:

```text
ESSE número funciona
para todo o intervalo?
```

Visualmente:

```text
CANDIDATO 1
│
├── divisível por 2? ✅
├── divisível por 3? ❌
│
└── descarta


CANDIDATO 2
│
├── divisível por 2? ✅
├── divisível por 3? ✅
├── divisível por 4? ✅
│
└── ACHOU
```

---

# Exemplos esperados

### Exemplo 1

```javascript
smallestCommons([1, 5]);
```

Range:

```text
1, 2, 3, 4, 5
```

Retorno:

```javascript
60
```

---

### Exemplo 2

```javascript
smallestCommons([5, 1]);
```

Mesmo range:

```text
1, 2, 3, 4, 5
```

Retorno:

```javascript
60
```

---

### Exemplo 3

```javascript
smallestCommons([2, 4]);
```

Range:

```text
2, 3, 4
```

Retorno:

```javascript
12
```

---

### Exemplo 4

```javascript
smallestCommons([3, 5]);
```

Range:

```text
3, 4, 5
```

Retorno:

```javascript
60
```

Porque:

```text
60 % 3 === 0
60 % 4 === 0
60 % 5 === 0
```

---

# Critérios de Aceitação

- [ ] Criar uma função chamada `smallestCommons`.
- [ ] Receber um array contendo dois números.
- [ ] Descobrir o menor valor da entrada.
- [ ] Descobrir o maior valor da entrada.
- [ ] Considerar todos os números entre `min` e `max`.
- [ ] Encontrar um número divisível por todos eles.
- [ ] Retornar o menor número que satisfaz essa condição.
- [ ] Funcionar quando a entrada estiver em ordem crescente.
- [ ] Funcionar quando a entrada estiver em ordem decrescente.
- [ ] Retornar um número.

---

# Conceitos praticados

- Loops
- Loops aninhados
- `while`
- `for`
- `break`
- Operador `%`
- Divisibilidade
- `Math.min()`
- `Math.max()`
- Variáveis de controle
- Ranges
- MMC / LCM
- Busca de candidatos

---

# Regra Mental

Não pense inicialmente em uma fórmula complicada de MMC.

Pense no problema como:

```text
"Preciso encontrar o primeiro número
que TODOS os números do intervalo
conseguem dividir sem deixar resto."
```

Para:

```javascript
[2, 4]
```

transforme mentalmente em:

```text
RANGE
↓
2, 3, 4
```

Depois:

```text
CANDIDATO
    ↓
   12

12 % 2 === 0  ✅
12 % 3 === 0  ✅
12 % 4 === 0  ✅

        ↓

TODOS passaram

        ↓

resultado = 12
```

A estrutura mental principal é:

```text
FORA:
"qual candidato estou testando?"

DENTRO:
"ele é divisível por TODOS
os números do intervalo?"
```

Ou resumidamente:

```text
procurar candidato
        ↓
testar contra o range
        ↓
todos passaram?
        ↓
     ACHOU
```