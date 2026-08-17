# Especificação — Build a Palindrome Checker

## Objetivo

Construir uma aplicação que verifique se uma palavra ou frase é um palíndromo.

Um palíndromo pode ser lido da mesma maneira da esquerda para a direita e da direita para a esquerda. Durante a verificação, diferenças entre letras maiúsculas e minúsculas, espaços, pontuação e símbolos devem ser ignoradas.

## Requisitos de HTML

### Campo de texto

Criar um elemento `input` com o seguinte ID:

```html
id="text-input"
```

### Botão de verificação

Criar um elemento `button` com o seguinte ID:

```html
id="check-btn"
```

### Área de resultado

Criar um elemento `div`, `span` ou `p` com o seguinte ID:

```html
id="result"
```

## Requisitos de JavaScript

### Tratamento de entrada vazia

Quando o usuário clicar em `#check-btn` sem fornecer um valor em `#text-input`, exibir exatamente o seguinte alerta:

```text
Please input a value
```

### Normalização do texto

Antes de verificar se o texto é um palíndromo:

1. Preservar o texto original para exibi-lo no resultado.
2. Remover todos os caracteres que não sejam letras ou números.
3. Converter todas as letras para a mesma capitalização.

Uma forma de normalizar o valor é:

```js
const normalizedText = originalText
  .replace(/[^a-z0-9]/gi, "")
  .toLowerCase();
```

A expressão `[^a-z0-9]` encontra caracteres que não são letras de `a` a `z` nem dígitos de `0` a `9`. A flag `g` aplica a substituição a todas as ocorrências, e a flag `i` ignora diferenças entre maiúsculas e minúsculas.

### Verificação do palíndromo

Comparar o texto normalizado com sua versão invertida.

Exemplo:

```js
const reversedText = normalizedText.split("").reverse().join("");
const isPalindrome = normalizedText === reversedText;
```

### Exibição do resultado

O resultado deve utilizar o texto original, incluindo os espaços, símbolos, pontuação e capitalização fornecidos pelo usuário.

Se for um palíndromo:

```text
<texto original> is a palindrome.
```

Se não for um palíndromo:

```text
<texto original> is not a palindrome.
```

## Casos de teste obrigatórios

| Entrada | Resultado esperado |
|---|---|
| `A` | `A is a palindrome.` |
| `eye` | `eye is a palindrome.` |
| `_eye` | `_eye is a palindrome.` |
| `race car` | `race car is a palindrome.` |
| `not a palindrome` | `not a palindrome is not a palindrome.` |
| `A man, a plan, a canal. Panama` | `A man, a plan, a canal. Panama is a palindrome.` |
| `never odd or even` | `never odd or even is a palindrome.` |
| `nope` | `nope is not a palindrome.` |
| `almostomla` | `almostomla is not a palindrome.` |
| `My age is 0, 0 si ega ym.` | `My age is 0, 0 si ega ym. is a palindrome.` |
| `1 eye for of 1 eye.` | `1 eye for of 1 eye. is not a palindrome.` |
| `0_0 (: /-\\ :) 0-0` | `0_0 (: /-\\ :) 0-0 is a palindrome.` |
| `five|\\_/|four` | `five|\\_/|four is not a palindrome.` |

## Fluxo esperado

Quando o usuário clicar em `#check-btn`:

1. Ler o valor de `#text-input`.
2. Se o valor estiver vazio, exibir o alerta e interromper a função.
3. Guardar o valor original.
4. Criar uma versão normalizada contendo apenas letras e números em uma única capitalização.
5. Inverter o texto normalizado.
6. Comparar as duas versões.
7. Atualizar `#result` com a mensagem correspondente.

## Critérios de aceitação

A aplicação estará concluída quando:

- Os elementos `#text-input`, `#check-btn` e `#result` existirem.
- Uma entrada vazia produzir o alerta exigido.
- Caracteres não alfanuméricos forem ignorados na comparação.
- Diferenças de capitalização forem ignoradas na comparação.
- Números forem preservados durante a normalização.
- O texto original for preservado na mensagem apresentada.
- A mensagem indicar corretamente se a entrada é ou não um palíndromo.
- Todos os casos de teste obrigatórios forem aprovados.
