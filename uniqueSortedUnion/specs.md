# Especificação - Unique Sorted Union

## Objetivo

Criar uma função em JavaScript que receba **dois ou mais arrays** e retorne um novo array contendo apenas valores únicos.

Os valores devem aparecer na mesma ordem em que forem encontrados pela primeira vez.

---

# 1. Criar a Função

Criar uma função chamada:

```javascript
uniteUnique(...)
```

A função deve aceitar dois ou mais arrays como argumentos.

Exemplo:

```javascript
uniteUnique(
  [1, 2, 4],
  [2, 3, 5]
);
```

Retorno esperado:

```javascript
[1, 2, 4, 3, 5]
```

---

# 2. Preservar a Ordem

A ordem importa.

Considere:

```javascript
[1, 2, 4]
```

Depois:

```javascript
[2, 3, 5]
```

O processamento acontece assim:

```text
1 → ainda não existe → adiciona
2 → ainda não existe → adiciona
4 → ainda não existe → adiciona

2 → já existe → ignora
3 → ainda não existe → adiciona
5 → ainda não existe → adiciona
```

Resultado:

```javascript
[1, 2, 4, 3, 5]
```

---

# 3. Aceitar Quantidade Variável de Arrays

A função não deve funcionar apenas com dois arrays.

Ela também deve aceitar:

```javascript
uniteUnique(
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5]
);
```

Resultado:

```javascript
[1, 2, 3, 4, 5]
```

---

# Parâmetros Variáveis

Como a quantidade de argumentos pode variar, um conceito útil é:

```javascript
...args
```

O **rest parameter** permite receber vários argumentos dentro de um array.

Exemplo conceitual:

```javascript
function exemplo(...arrays) {
  console.log(arrays);
}
```

Chamada:

```javascript
exemplo(
  [1, 2],
  [3, 4],
  [5, 6]
);
```

Dentro da função:

```javascript
arrays
```

seria aproximadamente:

```javascript
[
  [1, 2],
  [3, 4],
  [5, 6]
]
```

---

# 4. Percorrer Todos os Arrays

Você precisará percorrer:

```text
array 1
array 2
array 3
...
```

E, dentro de cada array, percorrer seus elementos.

Visualmente:

```text
arrays
│
├── [1, 2, 4]
│     │
│     ├── 1
│     ├── 2
│     └── 4
│
├── [2, 3, 5]
│     │
│     ├── 2
│     ├── 3
│     └── 5
│
└── ...
```

Isso pode ser feito com loops aninhados.

---

# 5. Criar um Array de Resultado

Uma abordagem simples é começar com:

```javascript
const result = [];
```

Depois, para cada valor:

```text
esse valor já existe em result?
        │
   ┌────┴────┐
   │         │
  não       sim
   │         │
   ▼         ▼
adiciona    ignora
```

---

# 6. Verificar Duplicados

Você precisa impedir que um valor já presente seja inserido novamente.

Um método que pode ajudar é:

```javascript
includes()
```

Exemplo:

```javascript
const result = [1, 2, 4];

result.includes(2);
```

Retorno:

```javascript
true
```

Enquanto:

```javascript
result.includes(3);
```

retorna:

```javascript
false
```

---

# Exemplo Passo a Passo

Entrada:

```javascript
uniteUnique(
  [1, 2, 4],
  [2, 3, 5]
);
```

Inicialmente:

```javascript
result = [];
```

Primeiro array:

```text
1
↓
não existe
↓
[1]

2
↓
não existe
↓
[1, 2]

4
↓
não existe
↓
[1, 2, 4]
```

Segundo array:

```text
2
↓
já existe
↓
ignora

3
↓
não existe
↓
[1, 2, 4, 3]

5
↓
não existe
↓
[1, 2, 4, 3, 5]
```

---

# 7. Não Ordenar Numericamente

Apesar do nome do desafio usar "Sorted Union", o requisito não pede para ordenar numericamente.

Por exemplo:

```javascript
uniteUnique(
  [5, 2, 1],
  [3, 2, 4]
);
```

O correto é preservar a ordem de primeira ocorrência:

```javascript
[5, 2, 1, 3, 4]
```

E não:

```javascript
[1, 2, 3, 4, 5]
```

---

# 8. Não Alterar os Arrays Originais

A função deve retornar um novo array.

Os arrays recebidos como argumento devem permanecer iguais.

Exemplo:

```javascript
const a = [1, 2, 3];
const b = [2, 4];

const result = uniteUnique(a, b);
```

Depois:

```javascript
a
```

deve continuar:

```javascript
[1, 2, 3]
```

E:

```javascript
b
```

deve continuar:

```javascript
[2, 4]
```

---

# Exemplos Esperados

### Exemplo 1

```javascript
uniteUnique(
  [1, 2, 4],
  [2, 3, 5]
);
```

Retorno:

```javascript
[1, 2, 4, 3, 5]
```

---

### Exemplo 2

```javascript
uniteUnique(
  [1, 3, 2],
  [5, 2, 1, 4],
  [2, 1]
);
```

Retorno:

```javascript
[1, 3, 2, 5, 4]
```

---

### Exemplo 3

```javascript
uniteUnique(
  [1, 2, 3],
  [5, 2, 1]
);
```

Retorno:

```javascript
[1, 2, 3, 5]
```

---

### Exemplo 4

```javascript
uniteUnique(
  [1, 2, 3],
  [5, 2, 1],
  [2, 1]
);
```

Retorno:

```javascript
[1, 2, 3, 5]
```

---

# Fluxo Esperado

```text
Receber vários arrays
        │
        ▼
Criar result = []
        │
        ▼
Percorrer cada array
        │
        ▼
Percorrer cada valor
        │
        ▼
result já contém o valor?
     ┌──┴───┐
     │      │
    não    sim
     │      │
     ▼      ▼
  adicionar ignorar
     │
     └──────┐
            ▼
      próximo valor
            │
            ▼
      retornar result
```

---

# Pseudocódigo

```text
função uniteUnique recebe vários arrays

    criar result vazio

    para cada array:

        para cada valor:

            se result ainda não contém valor:
                adicionar valor

    retornar result
```

---

# Critérios de Aceitação

* [ ] A função `uniteUnique` existir.
* [ ] A função aceitar dois ou mais arrays.
* [ ] Todos os arrays serem percorridos.
* [ ] Valores duplicados serem ignorados.
* [ ] Apenas a primeira ocorrência ser mantida.
* [ ] A ordem original de descoberta ser preservada.
* [ ] Um novo array ser retornado.
* [ ] Os arrays originais permanecerem inalterados.

---

# Conceitos Praticados

* Funções
* Rest parameters (`...args`)
* Arrays
* Arrays multidimensionais
* Loops
* Loops aninhados
* `includes()`
* `push()`
* Valores únicos
* Preservação de ordem
* Imutabilidade
* `return`

## Regra Mental

Pense assim:

```text
"Percorra tudo na ordem.
Se eu ainda não vi esse valor,
adiciono.
Se já vi,
ignoro."
```

O ponto principal desse exercício não é ordenar, e sim fazer uma **união sem duplicados preservando a ordem da primeira aparição**.
