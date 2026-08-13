# Build a Favorite Icon Toggler

## Objetivo

Criar uma pequena interface em HTML, CSS e JavaScript com uma lista de itens favoritos.

Cada item deve possuir um botão com um ícone de coração.

Ao clicar no botão:

- o coração vazio deve virar preenchido;
- o botão deve receber a classe `filled`;
- ao clicar novamente, o coração deve voltar ao estado vazio;
- a classe `filled` deve ser removida.

O exercício trabalha principalmente com:

- eventos de clique;
- seleção de elementos no DOM;
- `classList.toggle()`;
- alteração de conteúdo;
- HTML entities;
- manipulação de classes com JavaScript.

---

## 1. Criar a lista

Crie uma lista não ordenada:

```html
<ul>
</ul>
```

Ela deve possuir a classe:

```html
item-list
```

Estrutura:

```html
<ul class="item-list">
  ...
</ul>
```

---

## 2. Criar três itens

A lista deve possuir exatamente três elementos:

```html
<li>
```

Cada item deve conter:

1. o nome do item;
2. um botão de favorito.

Exemplo conceitual:

```html
<li>
  Item name
  <button>...</button>
</li>
```

---

## 3. Criar os botões

Cada botão deve possuir a classe:

```html
favorite-icon
```

Exemplo:

```html
<button class="favorite-icon">
  ...
</button>
```

Os três itens precisam possuir seu próprio botão.

---

## 4. Coração inicial

Inicialmente, cada botão deve possuir um coração vazio.

A entidade HTML exigida é:

```html
&#9825;
```

Ela representa:

```text
♡
```

Então cada botão começa assim:

```html
<button class="favorite-icon">&#9825;</button>
```

---

## 5. Entendendo as duas entidades

O exercício utiliza dois símbolos.

### Coração vazio

```html
&#9825;
```

Visualmente:

```text
♡
```

---

### Coração preenchido

```html
&#10084;
```

Visualmente:

```text
❤
```

O JavaScript deve alternar entre esses dois estados.

---

## 6. Criar a classe `.filled`

No CSS, crie uma classe:

```css
.filled {
  /* estilos */
}
```

Ela deve alterar alguma propriedade visual do botão quando ele estiver favoritado.

Por exemplo, você pode alterar:

```text
cor
tamanho
fundo
borda
```

Não é necessário copiar o estilo do projeto de exemplo.

---

## 7. Selecionar os botões no JavaScript

Você precisa selecionar todos os elementos com:

```css
.favorite-icon
```

Como existem vários botões, pense em um método que permita selecionar **todos** os elementos que correspondem ao seletor.

Conceitualmente:

```javascript
const buttons = /* selecionar todos os .favorite-icon */;
```

Depois você precisará percorrer essa coleção.

---

## 8. Adicionar evento de clique

Para cada botão:

```text
button
```

adicione um evento:

```text
click
```

Conceitualmente:

```javascript
button.addEventListener("click", () => {
  // alterar botão clicado
});
```

---

## 9. Trabalhar apenas com o botão clicado

Esse detalhe é importante.

Se clicar no segundo coração:

```text
Item 1 ♡
Item 2 ♡ ← clique
Item 3 ♡
```

apenas ele deve mudar:

```text
Item 1 ♡
Item 2 ❤
Item 3 ♡
```

Os outros botões não devem ser alterados.

---

## 10. Alternar a classe `filled`

Quando o botão for clicado:

```text
se NÃO possui filled
        ↓
adicionar filled
```

Se já possui:

```text
filled
  ↓
remover filled
```

Um método muito útil para isso é:

```javascript
classList.toggle()
```

Exemplo conceitual:

```javascript
button.classList.toggle("filled");
```

O `toggle()` faz:

```text
classe existe?
   │
┌──┴──┐
│     │
sim   não
│     │
▼     ▼
remove adiciona
```

---

## 11. Alterar o coração

Além da classe, o conteúdo do botão também precisa mudar.

Estados:

```text
SEM filled
↓
♡
```

e:

```text
COM filled
↓
❤
```

Você precisa descobrir o estado atual do botão e alterar seu símbolo.

---

## 12. Verificar se a classe existe

Você pode verificar se um elemento possui uma classe usando:

```javascript
classList.contains()
```

Exemplo:

```javascript
button.classList.contains("filled");
```

Retorna:

```javascript
true
```

ou:

```javascript
false
```

---

## 13. Fluxo do clique

Ao clicar:

```text
button
  │
  ▼
toggle("filled")
  │
  ▼
button possui filled?
   ┌────┴────┐
   │         │
  sim       não
   │         │
   ▼         ▼
mostrar ❤   mostrar ♡
```

---

## 14. Alterando o conteúdo do botão

Você pode alterar o conteúdo textual do botão usando propriedades como:

```javascript
textContent
```

Por exemplo:

```javascript
button.textContent = "❤";
```

ou:

```javascript
button.textContent = "♡";
```

O importante é que o estado final corresponda às entidades exigidas pelo exercício.

---

## 15. Exemplo de comportamento

Estado inicial:

```text
Book ♡
Game ♡
Movie ♡
```

Clique no segundo botão:

```text
Book ♡
Game ❤
Movie ♡
```

Clique novamente:

```text
Book ♡
Game ♡
Movie ♡
```

---

## 16. Estrutura HTML sugerida

```html
<ul class="item-list">
  <li>
    Item 1
    <button class="favorite-icon">&#9825;</button>
  </li>

  <li>
    Item 2
    <button class="favorite-icon">&#9825;</button>
  </li>

  <li>
    Item 3
    <button class="favorite-icon">&#9825;</button>
  </li>
</ul>
```

Lembre-se de adicionar:

```html
<script src="script.js"></script>
```

antes do fechamento do:

```html
</body>
```

---

## 17. Estrutura CSS sugerida

```css
.favorite-icon {
  /* estilo inicial */
}

.filled {
  /* estilo quando favoritado */
}
```

---

## 18. Estrutura JavaScript sugerida

```javascript
const favoriteButtons = /* selecionar todos os botões */;

for (const button of favoriteButtons) {

  button.addEventListener("click", () => {

    // alternar classe filled

    // verificar estado atual

    // alterar coração

  });

}
```

---

## Pseudocódigo

```text
selecionar todos os botões favorite-icon

para cada botão:

    adicionar evento click

        alternar classe filled

        verificar:
        botão possui filled?

        se sim:
            mostrar coração preenchido

        se não:
            mostrar coração vazio
```

---

## Exemplo esperado

HTML inicial:

```html
<button class="favorite-icon">&#9825;</button>
```

Visual:

```text
♡
```

Depois do clique:

```html
<button class="favorite-icon filled">
```

Visual:

```text
❤
```

Depois de outro clique:

```html
<button class="favorite-icon">
```

Visual:

```text
♡
```

---

## Critérios de Aceitação

- [ ] Criar uma `<ul>`.
- [ ] A `<ul>` possuir a classe `item-list`.
- [ ] Criar exatamente três `<li>`.
- [ ] Cada `<li>` possuir um nome de item.
- [ ] Cada `<li>` possuir um `<button>`.
- [ ] Cada botão possuir a classe `favorite-icon`.
- [ ] O coração inicial ser `&#9825;`.
- [ ] Criar uma classe CSS `.filled`.
- [ ] `.filled` alterar alguma propriedade visual.
- [ ] Adicionar eventos de clique aos botões.
- [ ] Alterar apenas o botão clicado.
- [ ] Adicionar `filled` quando ainda não existir.
- [ ] Remover `filled` quando já existir.
- [ ] Alternar entre `♡` e `❤`.
- [ ] O coração preenchido corresponder a `&#10084;`.
- [ ] Vincular corretamente o arquivo JavaScript ao HTML.

---

## Conceitos praticados

- HTML
- CSS
- JavaScript
- DOM
- `querySelectorAll()`
- `addEventListener()`
- Eventos de clique
- `classList`
- `classList.toggle()`
- `classList.contains()`
- `textContent`
- Loops
- HTML entities
- Manipulação de estado visual

---

## Regra Mental

Pense no botão como tendo apenas dois estados:

```text
ESTADO 1
↓
♡
sem classe filled
```

```text
ESTADO 2
↓
❤
com classe filled
```

Cada clique simplesmente troca:

```text
♡ → ❤ → ♡ → ❤ → ♡
```

E, ao mesmo tempo:

```text
sem filled
    ↓
com filled
    ↓
sem filled
```

A ideia central é:

```text
CLICOU
   ↓
toggle da classe
   ↓
olhar o estado atual
   ↓
escolher o símbolo correto
```