# Especificação — Build a Markdown to HTML Converter

## Objetivo

Completar, com JavaScript, uma aplicação que converta construções básicas de Markdown em HTML.

O HTML e o CSS da interface já existem. A função de conversão deve ler o conteúdo digitado, produzir uma string HTML, mostrar o código gerado e renderizar uma prévia em tempo real.

Esta implementação não precisa ser um conversor Markdown completo.

## Elementos utilizados

A aplicação utiliza os seguintes elementos:

| Elemento | Finalidade |
|---|---|
| `#markdown-input` | Receber o Markdown digitado pelo usuário |
| `#html-output` | Exibir o código HTML como texto |
| `#preview` | Renderizar visualmente o HTML convertido |

O arquivo JavaScript deve estar vinculado ao documento HTML.

## Função `convertMarkdown`

Criar uma função chamada exatamente:

```js
convertMarkdown
```

A função deve:

- Não receber parâmetros.
- Ler o valor de `#markdown-input`.
- Utilizar expressões regulares para realizar as conversões.
- Retornar uma string contendo o código HTML convertido.

Estrutura esperada:

```js
function convertMarkdown() {
  const markdown = markdownInput.value;
  // Realizar conversões com expressões regulares.
  return html;
}
```

## Conversões obrigatórias

### Títulos

Converter títulos Markdown dos níveis um, dois e três:

| Markdown | HTML esperado |
|---|---|
| `# heading 1` | `<h1>heading 1</h1>` |
| `## heading 2` | `<h2>heading 2</h2>` |
| `### heading 3` | `<h3>heading 3</h3>` |

Os caracteres `#` devem aparecer no começo da linha. Espaços podem existir antes deles, mas nenhum outro caractere é permitido.

Depois dos caracteres `#`, deve existir um espaço antes do texto do título.

### Texto em negrito

Converter texto envolvido por dois asteriscos ou dois underscores em elementos `strong`:

| Markdown | HTML esperado |
|---|---|
| `**bold text**` | `<strong>bold text</strong>` |
| `__bold text__` | `<strong>bold text</strong>` |

### Texto em itálico

Converter texto envolvido por um asterisco ou um underscore em elementos `em`:

| Markdown | HTML esperado |
|---|---|
| `*italic text*` | `<em>italic text</em>` |
| `_italic text_` | `<em>italic text</em>` |

### Imagens

Converter a sintaxe:

```text
![alt-text](image-source)
```

Para:

```html
<img alt="alt-text" src="image-source">
```

O texto entre colchetes deve se tornar o valor de `alt`, e o conteúdo entre parênteses deve se tornar o valor de `src`.

### Links

Converter a sintaxe:

```text
[link text](URL)
```

Para:

```html
<a href="URL">link text</a>
```

O texto entre colchetes deve ficar entre as tags do elemento `a`, e o conteúdo entre parênteses deve se tornar o valor de `href`.

### Citações

Converter citações iniciadas por `>` seguido de espaço:

| Markdown | HTML esperado |
|---|---|
| `> quote` | `<blockquote>quote</blockquote>` |

O caractere `>` deve aparecer no começo da linha. Espaços podem existir antes dele, mas nenhum outro caractere é permitido.

## Atualização em tempo real

Utilizar o evento `input` em `#markdown-input`.

Sempre que o conteúdo for alterado:

1. Executar `convertMarkdown()`.
2. Mostrar a string retornada dentro de `#html-output` como texto.
3. Renderizar a string retornada dentro de `#preview` como HTML.

Exemplo:

```js
markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  htmlOutput.textContent = html;
  preview.innerHTML = html;
});
```

## Critérios de aceitação

A aplicação estará concluída quando:

- Existir uma função `convertMarkdown` sem parâmetros.
- A função ler o conteúdo de `#markdown-input`.
- A função utilizar expressões regulares.
- A função retornar o HTML convertido como string.
- Títulos `h1`, `h2` e `h3` forem convertidos corretamente.
- Negrito com `**` e `__` for convertido em `strong`.
- Itálico com `*` e `_` for convertido em `em`.
- Imagens forem convertidas em elementos `img` com `alt` e `src`.
- Links forem convertidos em elementos `a` com `href`.
- Citações forem convertidas em elementos `blockquote`.
- `#html-output` exibir o HTML bruto.
- `#preview` renderizar o HTML convertido.
- A atualização ocorrer por meio do evento `input`.
- Todos os testes automatizados do laboratório forem aprovados.
