# Build a Lightbox Viewer

## Objetivo

Criar uma galeria de imagens com efeito de **lightbox**.

Ao clicar em uma miniatura:

- uma camada deve aparecer sobre a página;
- a imagem em tamanho maior deve ser exibida;
- o usuário deve conseguir fechar o lightbox clicando no botão de fechar ou na própria área do lightbox.

O exercício trabalha principalmente com:

- HTML;
- CSS;
- manipulação do DOM;
- eventos de clique;
- alteração dinâmica de `src`;
- alteração de `display`;
- `replace()` em strings.

---

## 1. Criar a galeria

Dentro do `<body>`, crie uma `div` com a classe:

```html
gallery
```

Estrutura:

```html
<div class="gallery">
  ...
</div>
```

---

## 2. Adicionar as três miniaturas

Dentro de:

```html
.gallery
```

adicione três imagens.

Cada uma deve possuir a classe:

```html
gallery-item
```

Use exatamente estes links:

```text
https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg
https://cdn.freecodecamp.org/curriculum/labs/storm-thumbnail.jpg
https://cdn.freecodecamp.org/curriculum/labs/trees-thumbnail.jpg
```

Estrutura conceitual:

```html
<img class="gallery-item" src="..." alt="...">
<img class="gallery-item" src="..." alt="...">
<img class="gallery-item" src="..." alt="...">
```

---

## 3. Criar o lightbox

Ainda dentro do `<body>`, crie uma `div` com a classe:

```html
lightbox
```

Essa `div` será o modal que aparece por cima da página.

Estrutura:

```html
<div class="lightbox">
  ...
</div>
```

---

## 4. Criar o botão de fechar

Dentro de:

```html
.lightbox
```

adicione um botão com o id:

```html
close-btn
```

Você pode usar:

```html
&times;
```

como conteúdo.

Visualmente:

```text
×
```

Exemplo:

```html
<button id="close-btn">&times;</button>
```

---

## 5. Criar a imagem ampliada

Também dentro da `.lightbox`, crie uma imagem com o id:

```html
lightbox-image
```

Exemplo:

```html
<img id="lightbox-image" src="" alt="">
```

Ela começará sem uma imagem específica e receberá seu `src` via JavaScript.

---

## 6. Posicionar o lightbox sobre a página

No CSS, a `.lightbox` deve ter:

```css
position: fixed;
```

Isso permite que ela fique por cima do conteúdo atual da página.

---

## 7. Fazer o lightbox ocupar toda a tela

A `.lightbox` deve ocupar toda a viewport.

Você precisa definir:

```css
width: 100%;
height: 100%;
```

Além disso, ela deve começar no canto superior esquerdo:

```css
top: 0;
left: 0;
```

Conceitualmente:

```text
┌─────────────────────────────┐
│ lightbox                    │
│ ocupa toda a tela           │
│                             │
│         imagem              │
│                             │
└─────────────────────────────┘
```

---

## 8. Esconder o lightbox inicialmente

Quando a página abrir, o lightbox não deve aparecer.

Então:

```css
.lightbox {
  display: none;
}
```

Também defina alguma cor de fundo.

Por exemplo:

```css
background-color: rgba(...);
```

O objetivo é criar uma camada visual sobre a página.

---

## 9. Mostrar o lightbox ao clicar

No JavaScript, selecione todas as imagens:

```css
.gallery-item
```

Como existem três, você precisa trabalhar com uma coleção de elementos.

Depois, para cada imagem, adicione um evento:

```javascript
click
```

Quando uma miniatura for clicada:

```text
lightbox.display
↓
"flex"
```

Ou seja:

```javascript
lightbox.style.display = "flex";
```

---

## 10. Descobrir qual imagem foi clicada

Ao clicar em uma miniatura, você precisa pegar seu:

```javascript
src
```

Por exemplo:

```text
https://cdn.freecodecamp.org/curriculum/labs/storm-thumbnail.jpg
```

O JavaScript deve transformar isso em:

```text
https://cdn.freecodecamp.org/curriculum/labs/storm.jpg
```

---

## 11. Remover `-thumbnail`

O exercício fornece uma regra simples:

```text
thumbnail:
storm-thumbnail.jpg

full size:
storm.jpg
```

Então basta remover:

```text
-thumbnail
```

da string.

Um método útil é:

```javascript
replace()
```

Conceitualmente:

```javascript
image.src.replace("-thumbnail", "")
```

---

## 12. Atualizar `#lightbox-image`

Depois de gerar o endereço da imagem grande, atribua esse valor ao:

```javascript
lightboxImage.src
```

Fluxo:

```text
imagem clicada
      ↓
src da thumbnail
      ↓
remove "-thumbnail"
      ↓
src da imagem full-size
      ↓
atribui em #lightbox-image
```

---

## 13. Exemplo

Imagem clicada:

```text
https://cdn.freecodecamp.org/curriculum/labs/trees-thumbnail.jpg
```

Depois de:

```text
remove "-thumbnail"
```

vira:

```text
https://cdn.freecodecamp.org/curriculum/labs/trees.jpg
```

Esse novo valor deve ser usado em:

```javascript
lightboxImage.src
```

---

## 14. Fechar pelo botão

Quando o usuário clicar em:

```html
#close-btn
```

o lightbox deve voltar para:

```css
display: none;
```

Conceitualmente:

```javascript
closeButton.addEventListener("click", () => {
  // esconder lightbox
});
```

---

## 15. Fechar clicando no próprio lightbox

Além do botão, o usuário também deve conseguir fechar clicando na área do:

```html
.lightbox
```

Então adicione outro evento de:

```javascript
click
```

na própria `.lightbox`.

Ao clicar:

```text
display: flex
↓
display: none
```

---

## 16. Cuidado com propagação de eventos

Esse ponto merece atenção.

O botão:

```html
#close-btn
```

está dentro da:

```html
.lightbox
```

E a imagem ampliada também está dentro dela.

Então eventos de clique podem subir pela árvore do DOM.

Esse comportamento é chamado de:

```text
event bubbling
```

Por exemplo:

```text
clicou no botão
      ↓
evento acontece no botão
      ↓
pode subir para lightbox
```

Nesse exercício, clicar no botão e também acionar o lightbox para fechar não gera grande problema, porque os dois querem fazer a mesma coisa.

Mas é importante conhecer esse comportamento.

---

## 17. Uma melhoria opcional

Se quiser evitar que clicar na imagem ampliada feche o lightbox, você pode verificar:

```javascript
event.target
```

e:

```javascript
event.currentTarget
```

Mas isso não é obrigatório pela especificação.

O requisito diz que clicar no `.lightbox` deve fechá-lo.

---

## Estrutura HTML sugerida

```html
<div class="gallery">
  <img
    class="gallery-item"
    src="https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg"
    alt="Stonehenge"
  >

  <img
    class="gallery-item"
    src="https://cdn.freecodecamp.org/curriculum/labs/storm-thumbnail.jpg"
    alt="Storm"
  >

  <img
    class="gallery-item"
    src="https://cdn.freecodecamp.org/curriculum/labs/trees-thumbnail.jpg"
    alt="Trees"
  >
</div>

<div class="lightbox">
  <button id="close-btn">&times;</button>

  <img id="lightbox-image" src="" alt="">
</div>

<script src="script.js"></script>
```

---

## Estrutura CSS sugerida

```css
.gallery {
  /* layout da galeria */
}

.gallery-item {
  /* estilo das miniaturas */
}

.lightbox {
  position: fixed;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  display: none;

  /* background */
  /* alinhamento */
}

#lightbox-image {
  /* tamanho da imagem ampliada */
}

#close-btn {
  /* estilo do botão */
}
```

---

## Estrutura JavaScript sugerida

```javascript
const galleryItems = /* selecionar todas as .gallery-item */;
const lightbox = /* selecionar .lightbox */;
const lightboxImage = /* selecionar #lightbox-image */;
const closeButton = /* selecionar #close-btn */;

for (const image of galleryItems) {

  image.addEventListener("click", () => {

    // pegar src da imagem clicada

    // remover "-thumbnail"

    // atualizar lightboxImage.src

    // mostrar lightbox

  });

}

closeButton.addEventListener("click", () => {

  // esconder lightbox

});

lightbox.addEventListener("click", () => {

  // esconder lightbox

});
```

---

## Pseudocódigo

```text
selecionar:

    imagens da galeria
    lightbox
    imagem ampliada
    botão de fechar


para cada imagem da galeria:

    adicionar evento click

        pegar src da imagem

        remover "-thumbnail"

        colocar novo src
        na imagem do lightbox

        mostrar lightbox


quando clicar no botão:

    esconder lightbox


quando clicar no lightbox:

    esconder lightbox
```

---

## Fluxo Geral

```text
usuário clica thumbnail
          │
          ▼
pegar src da imagem
          │
          ▼
remover "-thumbnail"
          │
          ▼
atualizar lightbox-image
          │
          ▼
display = "flex"
          │
          ▼
mostrar imagem ampliada
          │
          ▼
usuário clica fechar
ou no lightbox
          │
          ▼
display = "none"
```

---

## Exemplo de transformação de URL

Entrada:

```text
stonehenge-thumbnail.jpg
```

Aplicar:

```text
replace("-thumbnail", "")
```

Resultado:

```text
stonehenge.jpg
```

---

## Critérios de Aceitação

- [ ] Criar uma `div.gallery`.
- [ ] Adicionar três imagens dentro da galeria.
- [ ] Cada imagem possuir a classe `gallery-item`.
- [ ] Utilizar exatamente as três URLs de thumbnail fornecidas.
- [ ] Criar uma `div.lightbox`.
- [ ] Criar `#close-btn` dentro do lightbox.
- [ ] Criar `#lightbox-image` dentro do lightbox.
- [ ] `.lightbox` possuir `position: fixed`.
- [ ] `.lightbox` possuir `width: 100%`.
- [ ] `.lightbox` possuir `height: 100%`.
- [ ] `.lightbox` possuir `top: 0`.
- [ ] `.lightbox` possuir `left: 0`.
- [ ] `.lightbox` possuir uma cor de fundo.
- [ ] `.lightbox` começar com `display: none`.
- [ ] Clicar em uma thumbnail mostrar o lightbox.
- [ ] O `display` ser alterado para `flex`.
- [ ] O `src` da imagem grande ser gerado removendo `-thumbnail`.
- [ ] Clicar em `#close-btn` esconder o lightbox.
- [ ] Clicar em `.lightbox` esconder o lightbox.
- [ ] Vincular corretamente o CSS.
- [ ] Vincular corretamente o JavaScript.

---

## Conceitos praticados

- HTML
- CSS
- JavaScript
- DOM
- `querySelector()`
- `querySelectorAll()`
- Eventos
- `addEventListener()`
- `click`
- `.src`
- `replace()`
- `style.display`
- `position: fixed`
- Modais
- Event bubbling
- Manipulação dinâmica de atributos

---

## Regra Mental

Pense no exercício em três etapas:

```text
1. QUAL IMAGEM?
      ↓
pegar src da thumbnail
```

```text
2. QUAL VERSÃO?
      ↓
remover "-thumbnail"
```

```text
3. MOSTRAR
      ↓
colocar no lightbox
display = flex
```

Para fechar:

```text
CLICOU NO FECHAR
       OU
CLICOU NO LIGHTBOX
        ↓
display = none
```

A lógica principal é:

```text
THUMBNAIL
    ↓
PEGAR URL
    ↓
TRANSFORMAR URL
    ↓
MOSTRAR MODAL
    ↓
FECHAR MODAL
```