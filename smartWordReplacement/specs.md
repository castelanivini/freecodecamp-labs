# Especificação — Build a Smart Word Replacement Function

## Objetivo

Criar uma função que encontre uma palavra em uma frase, substitua essa palavra por outra e retorne a nova frase.

A primeira letra da palavra substituta deve seguir a capitalização da primeira letra da palavra original.

Exemplo:

```text
Book + dog → Dog
```

Como `Book` começa com letra maiúscula, `dog` deve ser inserida como `Dog`.

## Requisitos da função

Criar uma função chamada exatamente:

```js
myReplace
```

A função deve receber três argumentos:

1. A frase original.
2. A palavra que será substituída.
3. A nova palavra.

Estrutura esperada:

```js
function myReplace(str, before, after) {
  // lógica da substituição
}
```

## Comportamento esperado

### Palavra original iniciada por maiúscula

Se `before` começar com uma letra maiúscula, a primeira letra de `after` também deve ficar maiúscula.

Exemplo:

```js
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// "He is Sitting on the couch"
```

### Palavra original iniciada por minúscula

Se `before` começar com uma letra minúscula, a primeira letra de `after` também deve ficar minúscula.

Exemplo:

```js
myReplace("Let us go to the store", "store", "Mall");
// "Let us go to the mall"
```

### Retorno

A função deve retornar a frase resultante. Apenas exibir o valor no console não atende ao requisito.

## Identificação da capitalização

Uma forma de verificar se a primeira letra de `before` é maiúscula é:

```js
before[0] === before[0].toUpperCase()
```

## Ajuste da palavra substituta

Para transformar apenas a primeira letra em maiúscula:

```js
after = after[0].toUpperCase() + after.slice(1);
```

Para transformar apenas a primeira letra em minúscula:

```js
after = after[0].toLowerCase() + after.slice(1);
```

## Estratégia sugerida

1. Verificar a primeira letra de `before`.
2. Ajustar a primeira letra de `after` para a mesma capitalização.
3. Substituir `before` por `after` na frase.
4. Retornar a nova frase.

Uma implementação possível é:

```js
function myReplace(str, before, after) {
  const startsWithUppercase =
    before[0] === before[0].toUpperCase();

  if (startsWithUppercase) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}
```

## Exemplos de comportamento

| Frase | Palavra original | Substituta | Resultado esperado |
|---|---|---|---|
| `Let us go to the store` | `store` | `mall` | `Let us go to the mall` |
| `He is Sleeping on the couch` | `Sleeping` | `sitting` | `He is Sitting on the couch` |
| `I think we should look up there` | `up` | `Down` | `I think we should look down there` |
| `This has a spellngi error` | `spellngi` | `spelling` | `This has a spelling error` |
| `His name is Tom` | `Tom` | `john` | `His name is John` |

## Critérios de aceitação

A implementação estará concluída quando:

- Existir uma função chamada `myReplace`.
- A função receber três argumentos.
- A palavra indicada for substituída na frase.
- A primeira letra da nova palavra seguir a capitalização da palavra original.
- Palavras originais iniciadas por maiúscula produzirem substitutas iniciadas por maiúscula.
- Palavras originais iniciadas por minúscula produzirem substitutas iniciadas por minúscula.
- A função retornar a nova frase.
- Todos os testes automatizados do laboratório forem aprovados.
