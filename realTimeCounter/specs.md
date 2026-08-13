# Build a Real Time Counter

## Objetivo

Criar um contador de caracteres em tempo real para um campo:

```html
<textarea>
```

O contador deve:

- mostrar quantos caracteres foram digitados;
- atualizar enquanto o usuário digita;
- impedir que o texto ultrapasse `50` caracteres;
- exibir o contador em vermelho quando atingir o limite.

O exercício trabalha principalmente com:

- eventos de input;
- manipulação do DOM;
- `textarea`;
- `.value`;
- `.length`;
- `slice()`;
- alteração de texto;
- alteração de estilos com JavaScript.

---

## 1. Criar o `textarea`

Crie um elemento:

```html
<textarea>
```

com o id:

```html
text-input
```

Exemplo:

```html
<textarea id="text-input"></textarea>
```

---

## 2. Criar o contador

Crie um elemento:

```html
<p>
```

com o id:

```html
char-count
```

Ele deve começar com o texto:

```text
Character Count: 0/50
```

Exemplo:

```html
<p id="char-count">Character Count: 0/50</p>
```

---

## 3. Selecionar os elementos no JavaScript

Você precisará selecionar:

```javascript
#text-input
```

e:

```javascript
#char-count
```

Conceitualmente:

```javascript
const textInput = /* selecionar textarea */;
const charCount = /* selecionar contador */;
```

---

## 4. Escutar alterações no `textarea`

O contador precisa atualizar enquanto o usuário digita.

Um evento muito adequado para isso é:

```javascript
input
```

Exemplo conceitual:

```javascript
textInput.addEventListener("input", () => {
  // lógica
});
```

O evento `input` acontece sempre que o valor do campo muda.

---

## 5. Descobrir quantos caracteres existem

O conteúdo digitado no `textarea` pode ser acessado com:

```javascript
textInput.value
```

Por exemplo:

```javascript
textInput.value
```

poderia ser:

```text
hello coder
```

Para descobrir a quantidade de caracteres:

```javascript
textInput.value.length
```

---

## 6. Espaços também contam

Considere:

```text
hello coder
```

Temos:

```text
hello
↓
5 caracteres

espaço
↓
1 caractere

coder
↓
5 caracteres
```

Total:

```text
5 + 1 + 5 = 11
```

Então:

```text
Character Count: 11/50
```

---

## 7. Atualizar o texto do contador

O conteúdo de:

```html
<p id="char-count">
```

deve mudar de acordo com a quantidade digitada.

Por exemplo:

```text
Character Count: 0/50
```

depois:

```text
Character Count: 5/50
```

depois:

```text
Character Count: 11/50
```

Você pode alterar o texto usando:

```javascript
textContent
```

---

## 8. Exemplo com `hello coder`

Se:

```javascript
textInput.value
```

for:

```text
hello coder
```

então:

```javascript
textInput.value.length
```

será:

```text
11
```

O contador deve mostrar:

```text
Character Count: 11/50
```

---

## 9. Exemplo com `i am a programmer`

Entrada:

```text
i am a programmer
```

Quantidade:

```text
17
```

Resultado:

```text
Character Count: 17/50
```

---

## 10. Limite máximo

O usuário não pode inserir mais de:

```text
50 caracteres
```

Importante:

O exercício pede uma solução em JavaScript.

Então não utilize apenas:

```html
maxlength="50"
```

O controle deve ser feito manualmente pelo JavaScript.

---

## 11. Como limitar o texto

Se:

```javascript
textInput.value.length
```

for maior que:

```text
50
```

você precisa cortar o conteúdo.

Um método útil é:

```javascript
slice()
```

Exemplo:

```javascript
const text = "abcdef";
```

Fazendo:

```javascript
text.slice(0, 3);
```

temos:

```text
abc
```

No exercício, você pode pensar:

```text
pegar apenas os caracteres
do índice 0 até o limite 50
```

---

## 12. Fluxo do limite

Imagine:

```text
usuário digitou 52 caracteres
```

Então:

```text
length = 52
```

Como:

```text
52 > 50
```

você deve:

```text
cortar texto
↓
manter apenas 50 caracteres
```

Depois:

```text
length = 50
```

---

## 13. Não deixar o contador passar de 50

O contador nunca deve mostrar:

```text
Character Count: 51/50
```

ou:

```text
Character Count: 52/50
```

O valor máximo deve ser:

```text
Character Count: 50/50
```

---

## 14. Alterar a cor ao atingir o limite

Quando o contador chegar exatamente a:

```text
50
```

o texto deve aparecer em:

```text
red
```

Você pode alterar:

```javascript
charCount.style.color
```

---

## 15. Voltar à cor normal

Se o usuário apagar caracteres e o total voltar para:

```text
49
```

por exemplo, a cor não deve continuar vermelha.

Então você precisa ter dois estados:

```text
length === 50
↓
red
```

e:

```text
length < 50
↓
cor normal
```

---

## 16. Exemplo de comportamento

Inicialmente:

```text
textarea:
""

contador:
Character Count: 0/50
```

Usuário digita:

```text
hello
```

Resultado:

```text
Character Count: 5/50
```

Usuário continua:

```text
hello world
```

Resultado:

```text
Character Count: 11/50
```

---

## 17. Quando chegar em 50

Entrada:

```text
I am learning a new language and it is called c++.
```

Quantidade:

```text
50
```

Resultado:

```text
Character Count: 50/50
```

Cor:

```text
red
```

---

## 18. Tentativa de ultrapassar

Imagine que o usuário já possui:

```text
50 caracteres
```

e tenta digitar:

```text
ABC
```

O JavaScript deve cortar o excesso.

Então o valor final continua possuindo:

```text
50 caracteres
```

E o contador continua:

```text
Character Count: 50/50
```

---

## Fluxo Geral

```text
usuário digita
      │
      ▼
evento input
      │
      ▼
pegar textInput.value
      │
      ▼
length > 50?
   ┌──┴───┐
   │      │
  sim    não
   │      │
   ▼      │
cortar    │
para 50   │
   │      │
   └──┬───┘
      ▼
calcular length
      │
      ▼
atualizar contador
      │
      ▼
length === 50?
   ┌──┴───┐
   │      │
  sim    não
   │      │
   ▼      ▼
 red    normal
```

---

## Pseudocódigo

```text
selecionar textarea

selecionar contador


adicionar evento input ao textarea

    pegar valor atual

    se tamanho for maior que 50:

        cortar valor
        mantendo apenas 50 caracteres

        atualizar textarea


    calcular tamanho atual


    atualizar contador:

        Character Count: X/50


    se tamanho for igual a 50:

        deixar texto vermelho

    senão:

        voltar para cor normal
```

---

## Estrutura HTML sugerida

```html
<textarea id="text-input"></textarea>

<p id="char-count">
  Character Count: 0/50
</p>

<script src="script.js"></script>
```

Também lembre de vincular seu CSS:

```html
<link rel="stylesheet" href="styles.css">
```

---

## Estrutura JavaScript sugerida

```javascript
const textInput = /* selecionar textarea */;
const charCount = /* selecionar contador */;

textInput.addEventListener("input", () => {

  // verificar se passou de 50

  // cortar excesso

  // calcular tamanho

  // atualizar contador

  // controlar cor
});
```

---

## Exemplos esperados

### Exemplo 1

Entrada:

```text
hello coder
```

Resultado:

```text
Character Count: 11/50
```

---

### Exemplo 2

Entrada:

```text
i am a programmer
```

Resultado:

```text
Character Count: 17/50
```

---

### Exemplo 3

Entrada:

```text
hello world
```

Resultado:

```text
Character Count: 11/50
```

---

### Exemplo 4

Entrada:

```text
I am learning a new language and it is called c++.
```

Resultado:

```text
Character Count: 50/50
```

Cor:

```text
red
```

---

## Critérios de Aceitação

- [ ] Criar um `textarea`.
- [ ] O `textarea` possuir `id="text-input"`.
- [ ] Criar um elemento `p`.
- [ ] O `p` possuir `id="char-count"`.
- [ ] O texto inicial ser `Character Count: 0/50`.
- [ ] O contador atualizar em tempo real.
- [ ] Espaços serem contabilizados.
- [ ] `hello coder` resultar em `11/50`.
- [ ] `i am a programmer` resultar em `17/50`.
- [ ] `hello world` resultar em `11/50`.
- [ ] O usuário não conseguir manter mais de 50 caracteres.
- [ ] O excesso ser removido via JavaScript.
- [ ] Não depender do atributo `maxlength`.
- [ ] O contador nunca ultrapassar `50/50`.
- [ ] Quando atingir 50 caracteres, o texto ficar vermelho.
- [ ] Ao voltar para menos de 50 caracteres, a cor deixar de ser vermelha.
- [ ] Vincular o arquivo JavaScript.
- [ ] Vincular o arquivo CSS.

---

## Conceitos praticados

- HTML
- CSS
- JavaScript
- DOM
- `querySelector()`
- Eventos
- `input`
- `.value`
- `.length`
- `slice()`
- `textContent`
- Template literals
- `style.color`
- Condicionais
- Manipulação de strings
- Limitação de input

---

## Regra Mental

Pense no exercício em três responsabilidades:

```text
1. CONTAR
   ↓
value.length
```

```text
2. LIMITAR
   ↓
passou de 50?
corta com slice
```

```text
3. AVISAR
   ↓
chegou em 50?
fica vermelho
```

Visualmente:

```text
DIGITOU
   ↓
quantos caracteres?
   ↓
passou de 50?
   ↓
se sim → corta
   ↓
atualiza contador
   ↓
chegou em 50?
   ↓
vermelho
```

A ideia principal é:

```text
INPUT
  ↓
VALIDAR
  ↓
CORRIGIR
  ↓
ATUALIZAR INTERFACE
```