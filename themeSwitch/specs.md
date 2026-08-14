# Especificação — Build a Theme Switcher

## Objetivo

Construir uma aplicação de troca de temas. Ao selecionar um tema, a cor de fundo da página deve mudar e uma mensagem correspondente deve ser exibida.

A implementação deve ter estilo próprio e atender a todos os testes do laboratório.

## Requisitos de HTML

### Botão de troca de tema

Criar um elemento `button` com o texto `Switch Theme` e os seguintes atributos:

```html
id="theme-switcher-button"
aria-haspopup="true"
aria-expanded="false"
aria-controls="theme-dropdown"
```

### Menu de temas

Criar um elemento `ul` com os seguintes atributos:

```html
id="theme-dropdown"
role="menu"
aria-labelledby="theme-switcher-button"
hidden
```

O menu deve possuir pelo menos dois elementos `li`.

Cada `li` deve:

- Ter o atributo `role="menuitem"`.
- Exibir o nome de um tema.
- Ter um `id` que comece com `theme-` e termine com o nome do tema em letras minúsculas.

Exemplo:

```html
<li id="theme-light" role="menuitem">Light</li>
<li id="theme-dark" role="menuitem">Dark</li>
```

### Região de status

Criar um elemento com:

```html
aria-live="polite"
```

Esse elemento deve exibir a mensagem associada ao tema selecionado.

## Requisitos de JavaScript

### Lista de temas

Declarar um array chamado `themes`, contendo pelo menos dois objetos. Cada objeto deve possuir:

- `name`: nome do tema, igual ao texto do respectivo `li`.
- `message`: mensagem exibida quando o tema for selecionado.

Exemplo:

```js
const themes = [
  {
    name: "Light",
    message: "Light theme selected."
  },
  {
    name: "Dark",
    message: "Dark theme selected."
  }
];
```

## Comportamento esperado

### Abrir o menu

Quando o usuário clicar em `#theme-switcher-button`:

- Remover o atributo `hidden` de `#theme-dropdown`.
- Alterar `aria-expanded` do botão para `"true"`.

### Fechar o menu

Se o menu já estiver aberto e o usuário clicar novamente no botão:

- Adicionar o atributo `hidden` a `#theme-dropdown`.
- Alterar `aria-expanded` do botão para `"false"`.

### Selecionar um tema

Quando o usuário selecionar um tema:

- Encontrar o objeto correspondente no array `themes`.
- Remover do `body` a classe do tema anterior.
- Adicionar ao `body` a classe `theme-<nome>`, usando o nome do tema em letras minúsculas.
- Atualizar a região `aria-live="polite"` com a mensagem do tema.
- Fechar o menu e restaurar `aria-expanded="false"`.

Exemplo para o tema `Dark`:

```html
<body class="theme-dark">
```

### Trocar para outro tema

Ao selecionar um tema diferente do atual:

- A antiga classe de tema deve ser removida.
- A nova classe deve ser adicionada ao `body`.
- A mensagem de status deve ser atualizada para o novo tema.

## Critérios de aceitação

A aplicação estará concluída quando:

- Todos os elementos e atributos exigidos existirem.
- O menu abrir e fechar corretamente.
- A propriedade `aria-expanded` refletir o estado do menu.
- Cada opção corresponder a um objeto do array `themes`.
- Apenas a classe do tema atual permanecer no `body`.
- A aparência e a mensagem mudarem de acordo com a seleção.
- Todos os testes automatizados do laboratório passarem.
