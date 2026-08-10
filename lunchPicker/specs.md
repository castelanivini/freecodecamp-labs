# Especificação - Lunch Picker Program

## Objetivo

Criar um programa em JavaScript para gerenciar um cardápio de almoços. O programa deve permitir adicionar e remover itens do menu, exibir o cardápio atual e selecionar um almoço aleatoriamente.

---

## Requisitos Funcionais

### 1. Criar o Cardápio

- [ ] Criar uma variável chamada `lunches`.
- [ ] Inicializá-la com um array vazio (`[]`).

---

## 2. Adicionar Item ao Final

Criar uma função chamada `addLunchToEnd`.

### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `lunches` | `Array` | Cardápio |
| `lunchItem` | `string` | Item a ser adicionado |

### Comportamento

- [ ] Adicionar `lunchItem` ao final do array.
- [ ] Exibir no console:

```text
[Lunch Item] added to the end of the lunch menu.
```

- [ ] Retornar o array atualizado.

---

## 3. Adicionar Item ao Início

Criar uma função chamada `addLunchToStart`.

### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `lunches` | `Array` | Cardápio |
| `lunchItem` | `string` | Item a ser adicionado |

### Comportamento

- [ ] Adicionar `lunchItem` ao início do array.
- [ ] Exibir no console:

```text
[Lunch Item] added to the start of the lunch menu.
```

- [ ] Retornar o array atualizado.

---

## 4. Remover Último Item

Criar uma função chamada `removeLastLunch`.

### Parâmetros

| Parâmetro | Tipo |
|-----------|------|
| `lunches` | `Array` |

### Comportamento

Se houver itens no array:

- [ ] Remover o último elemento.
- [ ] Exibir:

```text
[Lunch Item] removed from the end of the lunch menu.
```

Caso contrário:

- [ ] Exibir:

```text
No lunches to remove.
```

- [ ] Retornar o array atualizado.

---

## 5. Remover Primeiro Item

Criar uma função chamada `removeFirstLunch`.

### Parâmetros

| Parâmetro | Tipo |
|-----------|------|
| `lunches` | `Array` |

### Comportamento

Se houver itens:

- [ ] Remover o primeiro elemento.
- [ ] Exibir:

```text
[Lunch Item] removed from the start of the lunch menu.
```

Caso contrário:

- [ ] Exibir:

```text
No lunches to remove.
```

- [ ] Retornar o array atualizado.

---

## 6. Sortear um Almoço

Criar uma função chamada `getRandomLunch`.

### Parâmetros

| Parâmetro | Tipo |
|-----------|------|
| `lunches` | `Array` |

### Comportamento

Se houver itens:

- [ ] Selecionar um item aleatório do array.
- [ ] Exibir:

```text
Randomly selected lunch: [Lunch Item]
```

Caso contrário:

- [ ] Exibir:

```text
No lunches available.
```

---

## 7. Exibir o Cardápio

Criar uma função chamada `showLunchMenu`.

### Parâmetros

| Parâmetro | Tipo |
|-----------|------|
| `lunches` | `Array` |

### Comportamento

Se houver itens:

- [ ] Exibir todos os itens do array separados por vírgula.

Formato:

```text
Menu items: Pizza, Pasta, Salad
```

Caso contrário:

- [ ] Exibir:

```text
The menu is empty.
```

---

# Exemplos Esperados

| Operação | Saída |
|----------|-------|
| `addLunchToEnd(["Pizza"], "Burger")` | `Burger added to the end of the lunch menu.` |
| `addLunchToStart(["Pizza"], "Salad")` | `Salad added to the start of the lunch menu.` |
| `removeLastLunch(["Pizza", "Burger"])` | `Burger removed from the end of the lunch menu.` |
| `removeFirstLunch(["Pizza", "Burger"])` | `Pizza removed from the start of the lunch menu.` |
| `getRandomLunch(["Pizza", "Burger", "Salad"])` | `Randomly selected lunch: Burger` *(ou qualquer outro item)* |
| `showLunchMenu(["Pizza", "Burger"])` | `Menu items: Pizza, Burger` |
| `showLunchMenu([])` | `The menu is empty.` |

---

# Critérios de Aceitação

O programa será considerado concluído quando:

- [ ] A variável `lunches` existir e iniciar vazia.
- [ ] A função `addLunchToEnd` adicionar corretamente um item ao final.
- [ ] A função `addLunchToStart` adicionar corretamente um item ao início.
- [ ] A função `removeLastLunch` remover corretamente o último item.
- [ ] A função `removeFirstLunch` remover corretamente o primeiro item.
- [ ] As funções de remoção tratarem arrays vazios adequadamente.
- [ ] A função `getRandomLunch` selecionar um item aleatório quando houver itens.
- [ ] A função `getRandomLunch` informar quando o cardápio estiver vazio.
- [ ] A função `showLunchMenu` listar corretamente os itens do menu.
- [ ] A função `showLunchMenu` informar quando o menu estiver vazio.

---

# Conceitos Praticados

- Arrays
- `push()`
- `pop()`
- `unshift()`
- `shift()`
- `join()`
- `Math.random()`
- `Math.floor()`
- Funções
- Parâmetros
- Condicionais (`if` / `else`)
- `console.log()`
- `return`