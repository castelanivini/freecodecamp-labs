# Especificação — Build a RegEx Sandbox

## Objetivo

Adicionar a lógica JavaScript a uma interface de testes de expressões regulares. O HTML e o CSS já são fornecidos pelo laboratório.

A aplicação deve permitir que o usuário informe uma expressão regular, escolha as flags disponíveis, teste a expressão contra um texto e veja as correspondências destacadas e listadas.

## Elementos e variáveis

Acessar os elementos da página e armazená-los exatamente nas seguintes variáveis:

| Elemento | Variável |
|---|---|
| `#pattern` | `regexPattern` |
| `#test-string` | `stringToTest` |
| `#test-btn` | `testButton` |
| `#result` | `testResult` |
| `#i` | `caseInsensitiveFlag` |
| `#g` | `globalFlag` |

Exemplo:

```js
const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");
```

## Função `getFlags`

Criar uma função chamada `getFlags` que:

- Verifique se o checkbox `#i` está marcado.
- Verifique se o checkbox `#g` está marcado.
- Retorne uma string contendo as flags marcadas.
- Retorne uma string vazia quando nenhuma flag estiver marcada.

Resultados esperados:

| Checkbox `i` | Checkbox `g` | Retorno |
|---|---|---|
| Desmarcado | Desmarcado | `""` |
| Marcado | Desmarcado | `"i"` |
| Desmarcado | Marcado | `"g"` |
| Marcado | Marcado | `"ig"` ou `"gi"` |

Exemplo de implementação:

```js
function getFlags() {
  let flags = "";

  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";

  return flags;
}
```

## Evento do botão

Adicionar um listener de `click` a `testButton`.

Quando o botão for clicado:

1. Obter o padrão informado em `regexPattern`.
2. Obter as flags retornadas por `getFlags()`.
3. Criar uma expressão regular com `new RegExp()`.
4. Testar a expressão contra o conteúdo de `stringToTest`.
5. Destacar as correspondências no texto.
6. Exibir as correspondências em `testResult` ou informar que nenhuma foi encontrada.

## Destaque das correspondências

Quando houver uma correspondência, atualizar o `innerHTML` de `stringToTest` de modo que cada texto encontrado fique dentro de:

```html
<span class="highlight">texto encontrado</span>
```

Exemplo:

```js
stringToTest.innerHTML = originalText.replace(regex, (match) => {
  return `<span class="highlight">${match}</span>`;
});
```

O CSS da classe `highlight` já é fornecido pelo laboratório.

## Resultado do teste

### Quando houver correspondências

Exibir os textos encontrados dentro de `#result`.

Quando houver múltiplas correspondências, separá-las por vírgula e espaço:

```text
match 1, match 2, match 3
```

Um array de correspondências pode ser formatado com:

```js
matches.join(", ")
```

### Quando não houver correspondência

Exibir exatamente:

```text
no match
```

## Observações importantes

- A flag `i` faz a busca ignorar diferenças entre letras maiúsculas e minúsculas.
- A flag `g` permite encontrar todas as correspondências, em vez de apenas a primeira.
- O valor usado para testar a regex deve ser obtido antes de adicionar os elementos `<span>`, evitando testar o HTML gerado em execuções posteriores.
- Se a flag `g` não estiver ativa, somente a primeira correspondência será encontrada e destacada.

## Critérios de aceitação

A aplicação estará concluída quando:

- Todos os elementos forem armazenados nas variáveis exigidas.
- `getFlags()` retornar corretamente as flags selecionadas.
- O clique em `testButton` criar e aplicar a expressão regular.
- Cada correspondência for envolvida por `<span class="highlight">`.
- `#result` exibir o texto correspondente encontrado.
- Múltiplas correspondências forem separadas por `, `.
- `#result` exibir `no match` quando não houver correspondência.
- Todos os testes automatizados do laboratório forem aprovados.
