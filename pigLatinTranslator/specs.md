# Especificação — Implement a Pig Latin Translator

## Objetivo

Criar uma função que converta uma palavra em inglês para Pig Latin seguindo regras específicas para vogais e consoantes.

Para este laboratório, as únicas vogais são:

```text
a, e, i, o, u
```

A letra `y` deve ser tratada como consoante.

## Requisitos da função

Criar uma função chamada exatamente:

```js
translatePigLatin
```

A função deve:

- Receber uma única string como argumento.
- Transformar a palavra de acordo com as regras de Pig Latin.
- Retornar a palavra transformada.

Estrutura inicial:

```js
function translatePigLatin(str) {
  // transformação
}
```

## Regras de transformação

### Palavra iniciada por vogal

Se a palavra começar com `a`, `e`, `i`, `o` ou `u`, adicionar `way` ao final.

Exemplo:

```text
algorithm → algorithmway
```

Uma verificação possível é:

```js
/^[aeiou]/.test(str)
```

O circunflexo `^` exige que a vogal esteja no início da string.

### Palavra iniciada por uma consoante

Se a palavra começar com uma consoante:

1. Encontrar a primeira vogal.
2. Remover a consoante inicial.
3. Mover essa consoante para o final.
4. Adicionar `ay`.

Exemplo:

```text
california → aliforniacay
```

### Palavra iniciada por um grupo de consoantes

Se houver várias consoantes antes da primeira vogal, mover todo o grupo para o final e adicionar `ay`.

Exemplo:

```text
glove → oveglay
```

Nesse exemplo:

```text
grupo inicial: gl
restante:      ove
resultado:     ove + gl + ay
```

### Primeira vogal no meio da palavra

A função deve localizar corretamente a primeira vogal, mesmo que ela apareça após várias consoantes.

Exemplo:

```text
schwartz → artzschway
```

### Palavra sem vogais

Se a palavra não possuir `a`, `e`, `i`, `o` ou `u`, manter a palavra como está e adicionar `ay`.

Exemplo:

```text
rhythm → rhythmay
```

## Estratégia sugerida

Usar uma expressão regular para encontrar o grupo de consoantes existente no início da palavra:

```js
/^[^aeiou]+/
```

Essa expressão significa:

- `^`: início da string.
- `[^aeiou]`: qualquer caractere que não seja uma vogal.
- `+`: uma ou mais ocorrências.

Uma implementação possível é:

```js
function translatePigLatin(str) {
  if (/^[aeiou]/.test(str)) {
    return `${str}way`;
  }

  const consonants = str.match(/^[^aeiou]+/);

  if (!consonants || consonants[0].length === str.length) {
    return `${str}ay`;
  }

  const cluster = consonants[0];
  return `${str.slice(cluster.length)}${cluster}ay`;
}
```

## Exemplos de comportamento

| Entrada | Saída esperada |
|---|---|
| `algorithm` | `algorithmway` |
| `eight` | `eightway` |
| `california` | `aliforniacay` |
| `paragraphs` | `aragraphspay` |
| `glove` | `oveglay` |
| `schwartz` | `artzschway` |
| `rhythm` | `rhythmay` |

## Critérios de aceitação

A implementação estará concluída quando:

- Existir uma função chamada `translatePigLatin`.
- A função receber uma string como argumento.
- Palavras iniciadas por vogal receberem `way`.
- A primeira consoante ou o grupo inicial de consoantes for movido para o final.
- Palavras iniciadas por consoantes receberem `ay`.
- A primeira vogal puder ser encontrada no meio da palavra.
- Palavras sem vogais forem mantidas e receberem `ay`.
- A letra `y` não for tratada como vogal.
- A função retornar o resultado.
- Todos os testes automatizados do laboratório forem aprovados.
