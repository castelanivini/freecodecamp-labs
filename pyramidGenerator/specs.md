# Especificação - Pyramid Generator

## Objetivo

Criar uma função em JavaScript que gere uma pirâmide de caracteres.

A função deve permitir:

* escolher o caractere utilizado;
* definir a quantidade de linhas;
* escolher se a pirâmide ficará com a ponta para cima ou para baixo.

---

# Função Principal

## 1. Criar a Função

* [ ] Criar uma função chamada `pyramid`.
* [ ] A função deve receber três argumentos.

### Estrutura

```javascript
function pyramid(pattern, rows, inverted) {
  // lógica
}
```

---

# Parâmetros

| Parâmetro  | Tipo      | Descrição                                    |
| ---------- | --------- | -------------------------------------------- |
| `pattern`  | `string`  | Caractere utilizado para desenhar a pirâmide |
| `rows`     | `number`  | Quantidade de linhas da pirâmide             |
| `inverted` | `boolean` | Define a orientação da pirâmide              |

---

# 2. Caractere da Pirâmide

O primeiro argumento deve ser uma string representando o caractere que será repetido.

Exemplos:

```javascript
"*"
"#"
"o"
```

---

# 3. Número de Linhas

O segundo argumento deve ser um número inteiro que representa a quantidade de linhas.

Por exemplo:

```javascript
rows = 4;
```

significa que a pirâmide terá:

```text
4 linhas
```

---

# 4. Orientação da Pirâmide

O terceiro argumento deve ser um valor booleano.

## `false`

Quando:

```javascript
inverted === false
```

a pirâmide deve possuir a ponta voltada para cima.

Exemplo:

```text
   *
  ***
 *****
*******
```

---

## `true`

Quando:

```javascript
inverted === true
```

a pirâmide deve possuir a ponta voltada para baixo.

Exemplo:

```text
*******
 *****
  ***
   *
```

---

# 5. Quantidade de Caracteres por Linha

A primeira linha da ponta deve possuir:

```text
1 caractere
```

Cada nova linha deve possuir:

```text
+2 caracteres
```

Então a sequência será:

```text
1
3
5
7
9
...
```

Para `4` linhas:

| Linha | Caracteres |
| ----: | ---------: |
|     1 |          1 |
|     2 |          3 |
|     3 |          5 |
|     4 |          7 |

---

# Fórmula da Quantidade de Caracteres

Para uma linha baseada em índice começando em `0`:

```text
0 → 1
1 → 3
2 → 5
3 → 7
```

Uma forma de pensar é:

```text
quantidade = 2 * linha + 1
```

Exemplo:

```text
linha = 2

2 * 2 + 1
= 5
```

---

# 6. Espaços à Esquerda

Cada linha deve receber espaços **antes** dos caracteres para manter a pirâmide centralizada.

Não devem existir espaços no final da linha.

Para:

```text
rows = 4
```

temos:

```text
linha 1 → 3 espaços + 1 caractere
linha 2 → 2 espaços + 3 caracteres
linha 3 → 1 espaço  + 5 caracteres
linha 4 → 0 espaços + 7 caracteres
```

Visualmente:

```text
   *
  ***
 *****
*******
```

---

# Quantidade de Espaços

Na pirâmide normal:

```text
rows = 4
```

os espaços seguem:

```text
3
2
1
0
```

Ou seja, diminuem conforme a quantidade de caracteres aumenta.

---

# 7. Pirâmide Normal

Exemplo:

```javascript
pyramid("*", 4, false);
```

A string retornada deve representar:

```text
   *
  ***
 *****
*******
```

A ponta possui:

```text
*
```

e a base possui:

```text
*******
```

---

# 8. Pirâmide Invertida

Exemplo:

```javascript
pyramid("*", 4, true);
```

Resultado:

```text
*******
 *****
  ***
   *
```

Nesse caso:

```text
7 caracteres
5 caracteres
3 caracteres
1 caractere
```

Enquanto os espaços seguem:

```text
0
1
2
3
```

---

# 9. Sem Espaços no Final

Cada linha pode possuir espaços **antes** dos caracteres:

```text
   ***
```

Mas não deve possuir espaços depois:

```text
   ***   
      ↑
   incorreto
```

O correto é:

```text
   ***
```

Isso é importante porque os testes normalmente fazem comparação exata de strings.

---

# 10. Quebras de Linha

A string final deve:

* [ ] começar com `\n`;
* [ ] possuir `\n` entre todas as linhas;
* [ ] terminar com `\n`.

Isso significa que a estrutura deve ser:

```text
\n
linha 1
\n
linha 2
\n
linha 3
\n
```

Por exemplo, uma pirâmide de 3 linhas deve corresponder conceitualmente a:

```javascript
"\n  *\n ***\n*****\n"
```

Visualmente:

```text

  *
 ***
*****

```

---

# Atenção à Primeira Quebra de Linha

O resultado **não** deve começar diretamente pelo primeiro caractere.

Incorreto:

```javascript
"  *\n ***\n*****\n"
```

Correto:

```javascript
"\n  *\n ***\n*****\n"
```

---

# Atenção à Última Quebra de Linha

O resultado também deve terminar com:

```text
\n
```

Incorreto:

```javascript
"\n  *\n ***\n*****"
```

Correto:

```javascript
"\n  *\n ***\n*****\n"
```

---

# Exemplo Completo

Entrada:

```javascript
pyramid("#", 3, false);
```

Resultado esperado:

```text

  #
 ###
#####

```

Representação da string:

```javascript
"\n  #\n ###\n#####\n"
```

---

# Exemplo Invertido

Entrada:

```javascript
pyramid("#", 3, true);
```

Resultado visual:

```text

#####
 ###
  #

```

Representação:

```javascript
"\n#####\n ###\n  #\n"
```

---

# Como Pensar na Construção de Cada Linha

Cada linha possui duas partes:

```text
espaços + caracteres
```

Por exemplo:

```text
  *****
↑ ↑
│ └── caracteres
│
└── espaços
```

Conceitualmente:

```javascript
linha = espaços + caracteres;
```

Métodos como:

```javascript
" ".repeat(...)
pattern.repeat(...)
```

podem ajudar.

---

# Estratégia para Pirâmide Normal

Para cada linha:

```text
linha 0
spaces   = 3
patterns = 1

linha 1
spaces   = 2
patterns = 3

linha 2
spaces   = 1
patterns = 5

linha 3
spaces   = 0
patterns = 7
```

Então:

```text
espaços diminuem
caracteres aumentam
```

---

# Estratégia para Pirâmide Invertida

Você pode pensar na mesma sequência, mas percorrida ao contrário:

```text
linha correspondente a 3
↓
7 caracteres

linha correspondente a 2
↓
5 caracteres

linha correspondente a 1
↓
3 caracteres

linha correspondente a 0
↓
1 caractere
```

Isso evita criar duas lógicas completamente diferentes.

---

# Fluxo Geral

```text
Receber pattern, rows e inverted
              │
              ▼
Criar string resultado começando com "\n"
              │
              ▼
Percorrer quantidade de linhas
              │
              ▼
Descobrir linha atual
de acordo com inverted
              │
              ▼
Calcular espaços
              │
              ▼
Calcular quantidade
de caracteres
              │
              ▼
Adicionar:
espaços + caracteres + "\n"
              │
              ▼
Próxima linha
              │
              ▼
Retornar resultado
```

---

# Exemplos Esperados

### Pirâmide de 2 linhas

```javascript
pyramid("*", 2, false);
```

Resultado:

```text

 *
***

```

---

### Pirâmide de 2 linhas invertida

```javascript
pyramid("*", 2, true);
```

Resultado:

```text

***
 *

```

---

### Pirâmide de 4 linhas

```javascript
pyramid("o", 4, false);
```

Resultado:

```text

   o
  ooo
 ooooo
ooooooo

```

---

# Critérios de Aceitação

O exercício estará concluído quando:

* [ ] A função `pyramid` existir.
* [ ] A função receber três argumentos.
* [ ] O primeiro argumento for utilizado como padrão da pirâmide.
* [ ] O segundo argumento determinar a quantidade de linhas.
* [ ] O terceiro argumento controlar a orientação.
* [ ] `false` gerar uma pirâmide com a ponta para cima.
* [ ] `true` gerar uma pirâmide com a ponta para baixo.
* [ ] A linha da ponta possuir apenas um caractere.
* [ ] Cada linha seguinte diferir em dois caracteres.
* [ ] Todas as linhas estiverem centralizadas.
* [ ] Os espaços existirem apenas no início das linhas.
* [ ] Não existirem espaços no final das linhas.
* [ ] O resultado começar com `\n`.
* [ ] O resultado terminar com `\n`.
* [ ] A função retornar uma string.

---

# Conceitos Praticados

* Funções
* Parâmetros
* Booleanos
* Strings
* Loops
* Condicionais
* Operadores aritméticos
* Acumuladores
* `.repeat()`
* Quebra de linha (`\n`)
* Template strings
* `return`

## Regra Mental

Para uma pirâmide normal:

```text
espaços:     rows - linha - 1
caracteres:  2 * linha + 1
```

Visualmente:

```text
linha 0 → espaços 3 → *
linha 1 → espaços 2 → ***
linha 2 → espaços 1 → *****
linha 3 → espaços 0 → *******
```

E para inverter, você pode pensar em **usar os mesmos cálculos, mas percorrendo as linhas na ordem contrária**.
