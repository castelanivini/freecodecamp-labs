# Especificação — Debug a Random Background Color Changer

## Objetivo

Corrigir uma aplicação que altera aleatoriamente a cor de fundo da página. O projeto contém erros de sintaxe, referência, seleção de elementos e manipulação de eventos que precisam ser resolvidos para que todos os testes sejam aprovados.

## Requisitos

### Array de cores

- Corrigir os erros de sintaxe existentes no array `darkColorsArr`.
- O array deve conter as cores escuras utilizadas pela aplicação.

### Índice aleatório

Corrigir a função `getRandomIndex` para que:

- Utilize o objeto global `Math` com a capitalização correta.
- Gere um índice aleatório baseado no tamanho de `darkColorsArr`.
- Arredonde o resultado para baixo com `Math.floor()`.
- Retorne um número inteiro válido para acessar um item do array.

Exemplo da lógica esperada:

```js
const randomIndex = Math.floor(Math.random() * darkColorsArr.length);
```

### Seleção do `body`

- Atualizar a variável `body` para selecionar corretamente o elemento `<body>`.
- Utilizar o nome correto do método de seleção para eliminar o `TypeError` relacionado.

Exemplo:

```js
const body = document.querySelector("body");
```

### Seleção da mensagem de cor

Corrigir `bgHexCodeSpanElement` para selecionar o elemento cujo ID é:

```text
bg-hex-code
```

Exemplo:

```js
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
```

### Alteração da cor de fundo

Dentro da função `changeBackgroundColor`:

- Obter um índice aleatório por meio de `getRandomIndex()`.
- Usar esse índice para selecionar uma cor de `darkColorsArr`.
- Armazenar a cor selecionada na variável `color`.
- Aplicar a cor ao fundo da página.
- Exibir o valor da cor no elemento `#bg-hex-code`.

Exemplo da seleção da cor:

```js
const color = darkColorsArr[getRandomIndex()];
```

### Seleção do botão

- Abrir o arquivo `index.html` e identificar o ID correto do botão.
- Atualizar a variável `btn` para selecionar esse botão.
- O botão esperado pelo laboratório possui o ID `btn`.

Exemplo:

```js
const btn = document.querySelector("#btn");
```

### Evento de clique

Adicionar um listener de clique ao botão, passando uma referência à função `changeBackgroundColor`.

Correto:

```js
btn.addEventListener("click", changeBackgroundColor);
```

Não executar a função durante o registro do evento:

```js
// Incorreto
btn.addEventListener("click", changeBackgroundColor());
```

## Comportamento esperado

Sempre que o usuário clicar no botão `#btn`:

1. Um índice aleatório inteiro deve ser gerado.
2. Uma cor correspondente deve ser obtida de `darkColorsArr`.
3. O fundo da página deve mudar para essa cor.
4. O elemento `#bg-hex-code` deve exibir o código da cor selecionada.

## Critérios de aceitação

A aplicação estará concluída quando:

- `darkColorsArr` não possuir erros de sintaxe.
- Nenhum `ReferenceError` relacionado ao objeto `Math` for lançado.
- O índice aleatório for arredondado para baixo.
- O elemento `body` for selecionado corretamente.
- `bgHexCodeSpanElement` apontar para `#bg-hex-code`.
- `color` receber uma cor aleatória de `darkColorsArr`.
- `btn` apontar para o botão `#btn`.
- O listener receber a referência de `changeBackgroundColor`.
- Cada clique no botão alterar o fundo para uma das cores do array.
- Todos os testes automatizados do laboratório forem aprovados.
