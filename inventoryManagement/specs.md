# Especificação - Inventory Management Program

## Objetivo

Criar um programa em JavaScript para gerenciar um inventário de produtos.

O sistema deve permitir:

* adicionar produtos;
* atualizar quantidades;
* localizar produtos;
* remover quantidades;
* excluir produtos quando a quantidade chegar a zero.

O inventário será representado por um array de objetos.

---

# 1. Estrutura do Inventário

Criar um array vazio chamado:

```javascript
const inventory = [];
```

Cada produto deverá possuir a estrutura:

```javascript
{
  name: "apple",
  quantity: 10
}
```

## Regras

* [ ] `name` deve ser uma string em letras minúsculas.
* [ ] `quantity` deve ser um número inteiro.

---

# 2. Função `findProductIndex`

Criar uma função chamada:

```javascript
findProductIndex(productName)
```

## Objetivo

Encontrar a posição de um produto dentro de `inventory`.

### Parâmetro

| Parâmetro     | Tipo     | Descrição                 |
| ------------- | -------- | ------------------------- |
| `productName` | `string` | Nome do produto procurado |

---

## Regra de Busca

A busca deve sempre utilizar o nome em letras minúsculas.

Por exemplo:

```javascript
findProductIndex("APPLE");
```

deve procurar por:

```text
apple
```

Assim:

```javascript
"APPLE".toLowerCase()
```

pode ajudar.

---

## Retorno

Se o produto existir:

```javascript
return index;
```

Se não existir:

```javascript
return -1;
```

---

# Exemplo

Inventário:

```javascript
[
  { name: "apple", quantity: 10 },
  { name: "banana", quantity: 5 }
]
```

Chamada:

```javascript
findProductIndex("BANANA");
```

Retorno:

```javascript
1
```

---

# 3. Função `addProduct`

Criar uma função chamada:

```javascript
addProduct(product)
```

## Parâmetro

| Parâmetro | Tipo     |
| --------- | -------- |
| `product` | `object` |

Exemplo:

```javascript
{
  name: "apple",
  quantity: 5
}
```

---

# 4. Produto Já Existe

Antes de adicionar, verificar se o produto já existe usando:

```javascript
findProductIndex(product.name)
```

Se o produto já existir:

* [ ] Não criar outro objeto duplicado.
* [ ] Somar a quantidade recebida à quantidade atual.

Exemplo:

Inventário atual:

```javascript
[
  { name: "apple", quantity: 10 }
]
```

Entrada:

```javascript
addProduct({
  name: "apple",
  quantity: 5
});
```

Resultado:

```javascript
[
  { name: "apple", quantity: 15 }
]
```

---

## Log Esperado

Quando a quantidade for atualizada:

```text
<product-name> quantity updated
```

Exemplo:

```text
apple quantity updated
```

---

# 5. Produto Novo

Se o produto não existir:

* [ ] Adicionar o objeto ao array `inventory`.
* [ ] Garantir que o nome esteja em letras minúsculas.

Resultado conceitual:

```text
produto não existe
        ↓
inventory.push(...)
```

---

## Log Esperado

```text
<product-name> added to inventory
```

Exemplo:

```text
banana added to inventory
```

---

# Fluxo de `addProduct`

```text
Receber product
      │
      ▼
converter nome para lowercase
      │
      ▼
findProductIndex()
      │
      ▼
produto existe?
 ┌────┴────┐
 │         │
sim       não
 │         │
 ▼         ▼
somar     adicionar
quantity  produto
 │         │
 ▼         ▼
log       log
updated   added
```

---

# 6. Função `removeProduct`

Criar uma função chamada:

```javascript
removeProduct(productName, quantity)
```

## Parâmetros

| Parâmetro     | Tipo     | Descrição                    |
| ------------- | -------- | ---------------------------- |
| `productName` | `string` | Nome do produto              |
| `quantity`    | `number` | Quantidade que será removida |

---

# 7. Produto Não Encontrado

Primeiro, localizar o produto:

```javascript
const index = findProductIndex(productName);
```

Se:

```javascript
index === -1
```

o produto não existe.

Nesse caso, exibir:

```text
<product-name> not found
```

Exemplo:

```text
orange not found
```

---

# 8. Quantidade Insuficiente

Se o produto existir, verificar se há quantidade suficiente.

Exemplo:

Inventário:

```javascript
{
  name: "apple",
  quantity: 5
}
```

Tentativa:

```javascript
removeProduct("apple", 8);
```

Como:

```text
8 > 5
```

a remoção não deve acontecer.

---

## Log Esperado

```text
Not enough <product-name> available, remaining pieces: <product-quantity>
```

Exemplo:

```text
Not enough apple available, remaining pieces: 5
```

---

# 9. Remoção Válida

Se houver quantidade suficiente:

```text
quantidade atual >= quantidade solicitada
```

subtrair:

```text
nova quantidade =
quantidade atual - quantidade solicitada
```

Exemplo:

```text
10 - 3 = 7
```

---

## Log Esperado

Depois de uma remoção válida:

```text
Remaining <product-name> pieces: <product-quantity>
```

Exemplo:

```text
Remaining apple pieces: 7
```

---

# 10. Quantidade Chegou a Zero

Se após a subtração:

```javascript
product.quantity === 0
```

o produto deve ser removido completamente do inventário.

Exemplo:

Antes:

```javascript
[
  { name: "apple", quantity: 3 },
  { name: "banana", quantity: 5 }
]
```

Chamada:

```javascript
removeProduct("apple", 3);
```

Depois:

```javascript
[
  { name: "banana", quantity: 5 }
]
```

Você pode usar um método como:

```javascript
splice()
```

para remover o objeto pelo índice.

---

# Ordem da Lógica em `removeProduct`

Uma ordem segura é:

```text
1. localizar produto

2. se não existir:
   log "<name> not found"

3. se existir, verificar quantidade

4. se quantidade solicitada > disponível:
   log "Not enough..."

5. caso contrário:
   subtrair quantidade

6. se quantidade virou 0:
   remover produto do array

7. logar quantidade restante
```

---

# Exemplo Completo

Inventário inicial:

```javascript
const inventory = [];
```

Adicionar:

```javascript
addProduct({
  name: "Apple",
  quantity: 10
});
```

Internamente, o nome deve virar:

```text
apple
```

Inventário:

```javascript
[
  { name: "apple", quantity: 10 }
]
```

Log:

```text
apple added to inventory
```

---

Adicionar novamente:

```javascript
addProduct({
  name: "APPLE",
  quantity: 5
});
```

Resultado:

```javascript
[
  { name: "apple", quantity: 15 }
]
```

Log:

```text
apple quantity updated
```

---

Remover:

```javascript
removeProduct("Apple", 4);
```

Resultado:

```javascript
[
  { name: "apple", quantity: 11 }
]
```

Log:

```text
Remaining apple pieces: 11
```

---

Tentar remover demais:

```javascript
removeProduct("apple", 20);
```

Log:

```text
Not enough apple available, remaining pieces: 11
```

---

Produto inexistente:

```javascript
removeProduct("banana", 2);
```

Log:

```text
banana not found
```

---

# Critérios de Aceitação

* [ ] O array `inventory` existir.
* [ ] `inventory` começar vazio.
* [ ] Os produtos possuírem `name` e `quantity`.
* [ ] Os nomes serem armazenados em lowercase.
* [ ] A função `findProductIndex` existir.
* [ ] A busca ser case-insensitive através de lowercase.
* [ ] O índice correto ser retornado quando o produto existir.
* [ ] `-1` ser retornado quando não existir.
* [ ] A função `addProduct` existir.
* [ ] Produtos existentes terem a quantidade atualizada.
* [ ] Produtos novos serem adicionados.
* [ ] Os logs de `addProduct` seguirem exatamente o formato solicitado.
* [ ] A função `removeProduct` existir.
* [ ] A quantidade ser reduzida corretamente.
* [ ] Produtos com quantidade zero serem removidos.
* [ ] Quantidade insuficiente não alterar o estoque.
* [ ] Produto inexistente gerar o log correto.
* [ ] Nenhum `console.log()` extra ser utilizado.

---

# Conceitos Praticados

* Arrays
* Objetos
* Arrays de objetos
* Funções
* Parâmetros
* Índices
* Loops
* `toLowerCase()`
* `findIndex()`
* Condicionais
* `push()`
* `splice()`
* Atualização de propriedades
* Reutilização de funções
* `console.log()`

## Regra Mental

Pense no programa em três responsabilidades:

```text
findProductIndex
      ↓
"onde está?"


addProduct
      ↓
"adiciono ou somo?"


removeProduct
      ↓
"existe? tem quantidade suficiente?
 subtraio? removo?"
```

A ideia principal é reutilizar `findProductIndex` nas outras funções para evitar repetir a mesma lógica de busca.
