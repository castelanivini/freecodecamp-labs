# Especificação - Sum All Numbers Algorithm

## Objetivo

Criar uma função em JavaScript que receba um array contendo **dois números** e retorne a soma de todos os números existentes entre eles, incluindo os próprios números.

---

# 1. Criar a Função

Criar uma função chamada:

```javascript
sumAll(arr)
```

Ela receberá um array contendo dois números:

```javascript
sumAll([1, 4]);
```

---

# 2. Entendendo o Problema

Para:

```javascript
sumAll([1, 4]);
```

você precisa somar:

```text
1 + 2 + 3 + 4
```

Resultado:

```text
10
```

Portanto:

```javascript
sumAll([1, 4]); // 10
```

---

# 3. A Ordem Pode Estar Invertida

Este é o detalhe mais importante do exercício.

Você também pode receber:

```javascript
sumAll([4, 1]);
```

O resultado continua sendo:

```text
10
```

Porque você deve descobrir o intervalo:

```text
1 → 2 → 3 → 4
```

independentemente da ordem original.

---

# 4. Encontrar o Menor e o Maior

Antes de fazer a soma, descubra:

```text
menor número
maior número
```

Por exemplo:

```javascript
const arr = [4, 1];
```

Você quer descobrir:

```text
min = 1
max = 4
```

Existem métodos do objeto `Math` que podem ajudar:

```javascript
Math.min()
Math.max()
```

Porém, atenção:

```javascript
Math.min(arr);
```

não funciona como você provavelmente espera, porque `arr` é um array.

Uma possibilidade é trabalhar diretamente com:

```javascript
arr[0]
arr[1]
```

Ou estudar como o operador spread:

```javascript
...
```

pode ser usado para passar os elementos do array separadamente.

---

# 5. Criar um Acumulador

Você precisa guardar a soma conforme percorre os números.

Comece com:

```javascript
let sum = 0;
```

Depois:

```text
sum = 0

+ 1
↓
sum = 1

+ 2
↓
sum = 3

+ 3
↓
sum = 6

+ 4
↓
sum = 10
```

---

# 6. Percorrer o Intervalo

Depois de descobrir:

```text
min = 1
max = 4
```

você precisa de um loop que percorra:

```text
1
2
3
4
```

Observe que o maior número também precisa entrar na soma.

Então pense cuidadosamente na condição:

```javascript
for (let n = min; ???; n++) {
  // ...
}
```

Você precisa decidir entre:

```text
n < max
```

ou:

```text
n <= max
```

Lembre-se:

> Os dois extremos são inclusivos.

---

# Exemplo Passo a Passo

Entrada:

```javascript
sumAll([4, 1]);
```

Primeiro:

```text
[4, 1]
 │  │
 │  └── menor = 1
 └───── maior = 4
```

Depois:

```text
sum = 0
```

Loop:

```text
n = 1
sum = 0 + 1
sum = 1

n = 2
sum = 1 + 2
sum = 3

n = 3
sum = 3 + 3
sum = 6

n = 4
sum = 6 + 4
sum = 10
```

Retorno:

```javascript
10
```

---

# Outro Exemplo

```javascript
sumAll([5, 10]);
```

Você precisa calcular:

```text
5 + 6 + 7 + 8 + 9 + 10
```

Passo a passo:

```text
5
+ 6 = 11
+ 7 = 18
+ 8 = 26
+ 9 = 35
+ 10 = 45
```

Resultado:

```javascript
45
```

---

# Estratégia

Você pode dividir o problema em três etapas:

```text
[4, 1]
   │
   ▼
1. descobrir menor e maior

min = 1
max = 4

   │
   ▼
2. percorrer o intervalo

1 → 2 → 3 → 4

   │
   ▼
3. acumular

1 + 2 + 3 + 4

   │
   ▼

10
```

---

# Pseudocódigo

```text
função sumAll recebe arr

    descobrir menor número

    descobrir maior número

    criar acumulador começando em 0

    para cada número entre menor e maior:
        adicionar número ao acumulador

    retornar acumulador
```

---

# Esqueleto

Uma estrutura para você completar:

```javascript
function sumAll(arr) {
  const min = /* descobrir menor */;
  const max = /* descobrir maior */;

  let sum = 0;

  for (let n = /* ??? */; /* ??? */; n++) {
    // atualizar sum
  }

  return sum;
}
```

---

# Casos de Teste

```javascript
sumAll([1, 4]);
```

Esperado:

```javascript
10
```

---

```javascript
sumAll([4, 1]);
```

Esperado:

```javascript
10
```

---

```javascript
sumAll([5, 10]);
```

Esperado:

```javascript
45
```

---

```javascript
sumAll([10, 5]);
```

Também deve retornar:

```javascript
45
```

---

# Critérios de Aceitação

* [ ] A função `sumAll` existir.
* [ ] A função receber um array de dois números.
* [ ] O menor número ser identificado.
* [ ] O maior número ser identificado.
* [ ] A ordem dos argumentos não afetar o resultado.
* [ ] O menor número entrar na soma.
* [ ] O maior número entrar na soma.
* [ ] Todos os números intermediários entrarem na soma.
* [ ] A função retornar um número.
* [ ] `sumAll([1, 4])` retornar `10`.
* [ ] `sumAll([4, 1])` também retornar `10`.

---

# Conceitos Praticados

* Arrays
* Índices
* Funções
* Loops
* Acumuladores
* `Math.min()`
* `Math.max()`
* Operador spread `...`
* Comparação de números
* `return`

## Regra Mental

Não pense em:

```text
"somar do primeiro número até o segundo"
```

Porque:

```javascript
[4, 1]
```

quebraria essa lógica.

Pense em:

```text
"descobrir o menor e o maior
e somar tudo entre eles"
```

Ou seja:

```text
[4, 1]
   ↓
min = 1
max = 4
   ↓
1 + 2 + 3 + 4
   ↓
10
```
