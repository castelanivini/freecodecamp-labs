# Especificação - Missing Letter Finder

## Objetivo

Criar uma função em JavaScript que receba uma sequência de letras em **ordem alfabética** e identifique se existe alguma letra faltando nessa sequência.

Caso exista uma letra ausente, a função deve retorná-la.

Caso a sequência esteja completa, a função deve retornar `undefined`.

---

# Requisitos Funcionais

## 1. Criar a Função

* [ ] Criar uma função chamada `fearNotLetter`.

### Parâmetros

| Parâmetro | Tipo     | Descrição                               |
| --------- | -------- | --------------------------------------- |
| `str`     | `string` | Sequência de letras em ordem alfabética |

### Estrutura

```javascript
function fearNotLetter(str) {
  // lógica
}
```

---

## 2. Receber uma Sequência Alfabética

A função deve receber uma string contendo letras consecutivas em ordem alfabética.

### Exemplo

```javascript
fearNotLetter("abce");
```

A sequência esperada seria:

```text
a → b → c → d → e
```

Porém, a string recebida possui:

```text
a → b → c → e
```

Portanto, está faltando:

```text
d
```

---

## 3. Encontrar a Letra Ausente

A função deve:

* [ ] Percorrer os caracteres da string.
* [ ] Comparar cada letra com a próxima.
* [ ] Identificar quando houver um salto na sequência alfabética.
* [ ] Retornar a letra que deveria existir entre elas.

### Exemplo

Entrada:

```javascript
fearNotLetter("stvwx");
```

Sequência:

```text
s → t → v → w → x
```

Entre `t` e `v` deveria existir:

```text
u
```

Retorno:

```text
u
```

---

# Dica: Códigos de Caracteres

Uma forma de resolver o problema é utilizar os códigos numéricos dos caracteres.

JavaScript possui:

```javascript
charCodeAt()
```

Esse método retorna o código Unicode de um caractere.

Por exemplo:

```javascript
"a".charCodeAt(0); // 97
"b".charCodeAt(0); // 98
"c".charCodeAt(0); // 99
```

Letras consecutivas possuem códigos consecutivos:

```text
a = 97
b = 98
c = 99
d = 100
e = 101
```

---

## Comparando Duas Letras

Se duas letras forem consecutivas, a diferença entre seus códigos será `1`.

Exemplo:

```text
c = 99
d = 100

100 - 99 = 1
```

Porém:

```text
c = 99
e = 101

101 - 99 = 2
```

Isso indica que existe uma letra faltando entre `c` e `e`.

---

## Convertendo um Código para Letra

Para realizar o caminho inverso, JavaScript fornece:

```javascript
String.fromCharCode()
```

Exemplo:

```javascript
String.fromCharCode(100);
```

Retorno:

```text
d
```

---

# 4. Sequência Completa

Se nenhuma letra estiver faltando:

* [ ] A função deve retornar `undefined`.

### Exemplo

```javascript
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
```

Retorno:

```javascript
undefined
```

> Uma função JavaScript retorna `undefined` automaticamente quando chega ao final sem executar nenhum `return` com valor.

---

# Fluxo Esperado

```text
Receber str
    │
    ▼
Percorrer as letras
    │
    ▼
Comparar letra atual
com próxima letra
    │
    ▼
A diferença é maior que 1?
    │
 ┌──┴───┐
 │      │
Sim    Não
 │      │
 ▼      ▼
Encontrar   Continuar
código da   percorrendo
letra
faltante
 │
 ▼
Converter código
para caractere
 │
 ▼
Retornar letra

Se terminar o loop
sem encontrar diferença
        │
        ▼
   return undefined
```

---

# Exemplos Esperados

| Entrada                                       | Retorno     |
| --------------------------------------------- | ----------- |
| `fearNotLetter("abce")`                       | `"d"`       |
| `fearNotLetter("abcdefghjklmno")`             | `"i"`       |
| `fearNotLetter("stvwx")`                      | `"u"`       |
| `fearNotLetter("bcdf")`                       | `"e"`       |
| `fearNotLetter("abcdefghijklmnopqrstuvwxyz")` | `undefined` |

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] A função `fearNotLetter` existir.
* [ ] A função receber uma `string`.
* [ ] A string representar letras em ordem alfabética.
* [ ] A função percorrer a sequência.
* [ ] A função detectar um salto entre duas letras.
* [ ] A letra ausente for identificada corretamente.
* [ ] A função retornar a letra ausente.
* [ ] A função retornar `undefined` quando nenhuma letra estiver faltando.

---

# Conceitos Praticados

* Funções
* Strings
* Índices
* Loops
* Comparação entre caracteres
* `charCodeAt()`
* `String.fromCharCode()`
* Códigos Unicode
* `return`
* `undefined`
