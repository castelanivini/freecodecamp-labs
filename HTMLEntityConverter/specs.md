# Especificação - HTML Entity Converter

## Objetivo

Criar uma função em JavaScript que receba uma string e substitua alguns caracteres especiais por suas entidades HTML correspondentes.

---

# 1. Criar a Função

Criar uma função chamada:

```javascript
convertHTML(str)
```

Ela deve receber uma string como argumento.

### Estrutura

```javascript
function convertHTML(str) {
  // lógica
}
```

---

# 2. Caracteres que Devem Ser Convertidos

A função deve converter exatamente estes caracteres:

| Caractere | Entidade HTML |
| --------- | ------------- |
| `&`       | `&amp;`       |
| `<`       | `&lt;`        |
| `>`       | `&gt;`        |
| `"`       | `&quot;`      |
| `'`       | `&apos;`      |

---

# 3. Exemplo Básico

Entrada:

```javascript
convertHTML("Dolce & Gabbana");
```

O caractere:

```text
&
```

deve virar:

```text
&amp;
```

Resultado:

```text
Dolce &amp; Gabbana
```

---

# 4. Mais de um Caractere Especial

Entrada:

```javascript
convertHTML("<div>");
```

Processamento:

```text
< → &lt;
> → &gt;
```

Resultado:

```text
&lt;div&gt;
```

---

# 5. Aspas

Entrada:

```javascript
convertHTML('She said "hello"');
```

As aspas duplas devem virar:

```text
&quot;
```

Resultado:

```text
She said &quot;hello&quot;
```

---

# 6. Apóstrofo

Entrada:

```javascript
convertHTML("It's nice");
```

O caractere:

```text
'
```

deve virar:

```text
&apos;
```

Resultado:

```text
It&apos;s nice
```

---

# 7. Criar uma Tabela de Conversão

Como existem apenas cinco possibilidades, uma abordagem interessante é utilizar um objeto.

Conceitualmente:

```javascript
const entities = {
  "&": "...",
  "<": "...",
  ">": "...",
  '"': "...",
  "'": "..."
};
```

Esse objeto pode funcionar como uma tabela de consulta.

Por exemplo:

```javascript
entities["&"]
```

deve fornecer:

```text
&amp;
```

E:

```javascript
entities["<"]
```

deve fornecer:

```text
&lt;
```

---

# 8. Percorrer a String

Você pode percorrer cada caractere da string:

```javascript
for (let char of str) {
  // analisar char
}
```

Por exemplo, para:

```text
A&B
```

o loop recebe:

```text
A
&
B
```

---

# 9. Construir uma Nova String

Como o requisito pede uma **nova string**, você pode começar com:

```javascript
let result = "";
```

Depois, para cada caractere:

```text
caractere possui entidade?
        │
   ┌────┴────┐
   │         │
  sim       não
   │         │
   ▼         ▼
adicionar   adicionar
entidade    caractere
```

---

# Exemplo Passo a Passo

Entrada:

```javascript
convertHTML("A&B");
```

Inicialmente:

```text
result = ""
```

Primeiro caractere:

```text
A
```

Não precisa conversão:

```text
result = "A"
```

Segundo:

```text
&
```

Possui entidade:

```text
&amp;
```

Então:

```text
result = "A&amp;"
```

Terceiro:

```text
B
```

Resultado:

```text
result = "A&amp;B"
```

---

# 10. Preservar os Outros Caracteres

Caracteres que não aparecem na tabela devem permanecer inalterados.

Exemplo:

```javascript
convertHTML("Hello World");
```

Retorno:

```text
Hello World
```

Nada precisa ser modificado.

---

# Exemplo com Vários Caracteres

Entrada:

```javascript
convertHTML('<a href="test">Tom & Jerry</a>');
```

Conversões:

```text
< → &lt;
> → &gt;
" → &quot;
& → &amp;
```

Resultado esperado:

```text
&lt;a href=&quot;test&quot;&gt;Tom &amp; Jerry&lt;/a&gt;
```

---

# Fluxo Esperado

```text
Receber str
    │
    ▼
Criar result = ""
    │
    ▼
Percorrer cada caractere
    │
    ▼
É &, <, >, " ou ' ?
     │
 ┌───┴───┐
 │       │
sim     não
 │       │
 ▼       ▼
pegar   manter
entidade caractere
 │       │
 └───┬───┘
     ▼
adicionar em result
     │
     ▼
próximo caractere
     │
     ▼
return result
```

---

# Pseudocódigo

```text
função convertHTML recebe str

    criar tabela de entidades

    criar result vazio

    para cada caractere de str:

        se caractere existir na tabela:
            adicionar entidade em result
        senão:
            adicionar caractere original

    retornar result
```

---

# Possível Esqueleto

```javascript
function convertHTML(str) {
  const entities = {
    // completar
  };

  let result = "";

  for (let char of str) {
    // verificar se char possui conversão

    // adicionar ao resultado
  }

  return result;
}
```

---

# Casos de Teste

```javascript
convertHTML("Dolce & Gabbana");
```

Esperado:

```text
Dolce &amp; Gabbana
```

---

```javascript
convertHTML("Hamburgers < Pizza < Tacos");
```

Esperado:

```text
Hamburgers &lt; Pizza &lt; Tacos
```

---

```javascript
convertHTML("Sixty > twelve");
```

Esperado:

```text
Sixty &gt; twelve
```

---

```javascript
convertHTML('Stuff in "quotation marks"');
```

Esperado:

```text
Stuff in &quot;quotation marks&quot;
```

---

```javascript
convertHTML("Schindler's List");
```

Esperado:

```text
Schindler&apos;s List
```

---

# Critérios de Aceitação

* [ ] A função `convertHTML` existir.
* [ ] A função receber uma string.
* [ ] `&` ser convertido para `&amp;`.
* [ ] `<` ser convertido para `&lt;`.
* [ ] `>` ser convertido para `&gt;`.
* [ ] `"` ser convertido para `&quot;`.
* [ ] `'` ser convertido para `&apos;`.
* [ ] Caracteres comuns permanecerem inalterados.
* [ ] A função retornar uma nova string.
* [ ] Todas as ocorrências dos caracteres especiais serem convertidas.

---

# Conceitos Praticados

* Funções
* Strings
* Objetos
* Tabelas de consulta
* Loops
* `for...of`
* Acesso por chave
* Condicionais
* Concatenação
* `return`

## Regra Mental

Pense no problema como uma tradução caractere por caractere:

```text
&
↓
&amp;

<
↓
&lt;

>
↓
&gt;
```

Para cada caractere:

```text
"Existe uma tradução para ele?"

SIM → usa a entidade
NÃO → mantém o caractere original
```

Um objeto funciona muito bem como tabela para esse tipo de problema.
