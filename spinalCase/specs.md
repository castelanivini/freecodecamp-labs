# Especificação — Implement a Spinal Case Converter

## Objetivo

Criar uma função que converta uma string para o formato **spinal case**.

Em spinal case:

- Todas as letras ficam minúsculas.
- As palavras são separadas por hífens.

Exemplo:

```text
this-is-spinal-tap
```

## Requisitos

### Nome da função

Criar uma função chamada exatamente:

```js
spinalCase
```

### Parâmetro

A função deve receber um único argumento: a string que será convertida.

```js
function spinalCase(str) {
  // conversão
}
```

### Retorno

A função deve retornar a string no formato spinal case.

Exemplo obrigatório:

```js
spinalCase("ProductLanding page");
// "product-landing-page"
```

## Transformações necessárias

A função deve ser capaz de:

1. Identificar a separação entre uma letra minúscula e uma letra maiúscula.
2. Tratar espaços, underscores e outros separadores entre palavras.
3. Substituir os separadores por um único hífen.
4. Converter todas as letras para minúsculas.
5. Retornar o resultado final.

## Estratégia sugerida

Primeiro, adicionar uma separação entre palavras escritas em camel case:

```js
str.replace(/([a-z])([A-Z])/g, "$1 $2");
```

Depois, substituir espaços e underscores por hífens:

```js
.replace(/[\s_]+/g, "-")
```

Por fim, converter o resultado para letras minúsculas:

```js
.toLowerCase()
```

Uma implementação possível é:

```js
function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}
```

## Exemplos de comportamento

| Entrada | Saída esperada |
|---|---|
| `ProductLanding page` | `product-landing-page` |
| `This Is Spinal Tap` | `this-is-spinal-tap` |
| `thisIsSpinalTap` | `this-is-spinal-tap` |
| `The_Andy_Griffith_Show` | `the-andy-griffith-show` |
| `Teletubbies say Eh-oh` | `teletubbies-say-eh-oh` |

## Critérios de aceitação

A implementação estará concluída quando:

- Existir uma função chamada `spinalCase`.
- A função receber exatamente uma string como argumento principal.
- Todas as palavras do resultado estiverem em letras minúsculas.
- As palavras estiverem separadas por hífens.
- Espaços e underscores forem convertidos corretamente.
- Palavras em camel case forem separadas corretamente.
- A função retornar o resultado em vez de apenas exibi-lo no console.
- Todos os testes automatizados do laboratório forem aprovados.
