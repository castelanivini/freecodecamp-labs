# Especificação - Quiz Game

## Objetivo

Criar um jogo de perguntas e respostas em JavaScript.

O programa deve armazenar perguntas em um array, selecionar uma pergunta aleatoriamente, escolher uma resposta aleatória para o computador e verificar se a resposta escolhida está correta.

---

# Estrutura das Perguntas

## 1. Array de Perguntas

* [ ] Criar um array chamado `questions`.
* [ ] O array deve conter pelo menos **cinco objetos**.

```javascript
const questions = [];
```

---

## 2. Estrutura de Cada Pergunta

Cada objeto do array `questions` deve possuir as seguintes propriedades:

| Propriedade | Tipo            | Descrição                     |
| ----------- | --------------- | ----------------------------- |
| `category`  | `string`        | Categoria da pergunta         |
| `question`  | `string`        | Texto da pergunta             |
| `choices`   | `Array<string>` | Três alternativas de resposta |
| `answer`    | `string`        | Resposta correta              |

---

## Exemplo de Objeto

```javascript
{
  category: "Geography",
  question: "What is the capital of Brazil?",
  choices: ["São Paulo", "Brasília", "Rio de Janeiro"],
  answer: "Brasília",
}
```

---

# Regras das Propriedades

## 3. Categoria

A propriedade `category` deve:

* [ ] Existir em todos os objetos.
* [ ] Possuir um valor do tipo `string`.
* [ ] Representar a categoria da pergunta.

### Exemplos

```javascript
category: "Geography"
category: "Science"
category: "History"
category: "Technology"
category: "Sports"
```

---

## 4. Pergunta

A propriedade `question` deve:

* [ ] Existir em todos os objetos.
* [ ] Possuir um valor do tipo `string`.
* [ ] Representar o texto da pergunta.

### Exemplo

```javascript
question: "Which planet is known as the Red Planet?"
```

---

## 5. Alternativas

A propriedade `choices` deve:

* [ ] Existir em todos os objetos.
* [ ] Possuir um array como valor.
* [ ] Conter exatamente três alternativas.
* [ ] Conter apenas valores do tipo `string`.

### Exemplo

```javascript
choices: ["Earth", "Mars", "Venus"]
```

---

## 6. Resposta Correta

A propriedade `answer` deve:

* [ ] Existir em todos os objetos.
* [ ] Possuir um valor do tipo `string`.
* [ ] Representar a resposta correta da pergunta.
* [ ] Ter seu valor incluído no array `choices`.

### Exemplo válido

```javascript
{
  choices: ["Earth", "Mars", "Venus"],
  answer: "Mars",
}
```

### Exemplo inválido

```javascript
{
  choices: ["Earth", "Mars", "Venus"],
  answer: "Jupiter",
}
```

O exemplo é inválido porque `"Jupiter"` não está presente no array `choices`.

---

# Exemplo de Array de Perguntas

```javascript
const questions = [
  {
    category: "Geography",
    question: "What is the capital of Brazil?",
    choices: ["São Paulo", "Brasília", "Rio de Janeiro"],
    answer: "Brasília",
  },
  {
    category: "Science",
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus"],
    answer: "Mars",
  },
  {
    category: "Technology",
    question: "Which language runs directly in web browsers?",
    choices: ["JavaScript", "Python", "Java"],
    answer: "JavaScript",
  },
  {
    category: "History",
    question: "Which civilization built the pyramids of Giza?",
    choices: ["Romans", "Egyptians", "Greeks"],
    answer: "Egyptians",
  },
  {
    category: "Sports",
    question: "How many players does a soccer team have on the field?",
    choices: ["9", "11", "12"],
    answer: "11",
  },
];
```

---

# Funções

## 7. Selecionar uma Pergunta Aleatória

Criar uma função chamada `getRandomQuestion`.

### Parâmetro

| Parâmetro   | Tipo    | Descrição                               |
| ----------- | ------- | --------------------------------------- |
| `questions` | `Array` | Array contendo os objetos das perguntas |

### Comportamento

A função deve:

* [ ] Receber um array de perguntas.
* [ ] Gerar um índice aleatório válido.
* [ ] Retornar um objeto de pergunta aleatório do array.

### Exemplo de chamada

```javascript
const selectedQuestion = getRandomQuestion(questions);
```

### Retorno esperado

```javascript
{
  category: "Science",
  question: "Which planet is known as the Red Planet?",
  choices: ["Earth", "Mars", "Venus"],
  answer: "Mars",
}
```

> O objeto retornado poderá variar a cada execução.

---

## 8. Selecionar uma Alternativa Aleatória

Criar uma função chamada `getRandomComputerChoice`.

### Parâmetro

| Parâmetro | Tipo            | Descrição                                |
| --------- | --------------- | ---------------------------------------- |
| `choices` | `Array<string>` | Alternativas disponíveis para a pergunta |

### Comportamento

A função deve:

* [ ] Receber o array de alternativas.
* [ ] Selecionar aleatoriamente uma das alternativas.
* [ ] Retornar a alternativa escolhida.

### Exemplo de chamada

```javascript
const computerChoice = getRandomComputerChoice(
  selectedQuestion.choices
);
```

### Possíveis retornos

```javascript
"Earth"
```

```javascript
"Mars"
```

```javascript
"Venus"
```

---

## 9. Verificar o Resultado

Criar uma função chamada `getResults`.

### Parâmetros

| Parâmetro        | Tipo     | Descrição                             |
| ---------------- | -------- | ------------------------------------- |
| `question`       | `object` | Objeto da pergunta selecionada        |
| `computerChoice` | `string` | Alternativa escolhida pelo computador |

---

## Resposta Correta

Se a alternativa escolhida pelo computador for igual à propriedade `answer` da pergunta, retornar:

```text
The computer's choice is correct!
```

### Condição

```javascript
computerChoice === question.answer
```

---

## Resposta Incorreta

Se a alternativa escolhida estiver incorreta, retornar:

```text
The computer's choice is wrong. The correct answer is: <correct-answer>
```

O campo `<correct-answer>` deve ser substituído pela resposta correta da pergunta.

### Exemplo

```text
The computer's choice is wrong. The correct answer is: Mars
```

---

# Fluxo do Programa

O funcionamento esperado pode seguir esta ordem:

```text
1. Criar o array de perguntas
2. Selecionar uma pergunta aleatória
3. Selecionar uma alternativa aleatória
4. Comparar a alternativa com a resposta correta
5. Retornar o resultado
```

### Exemplo de uso

```javascript
const randomQuestion = getRandomQuestion(questions);

const computerChoice = getRandomComputerChoice(
  randomQuestion.choices
);

const result = getResults(randomQuestion, computerChoice);

console.log(result);
```

---

# Exemplos de Resultado

## Alternativa correta

```javascript
const question = {
  category: "Science",
  question: "Which planet is known as the Red Planet?",
  choices: ["Earth", "Mars", "Venus"],
  answer: "Mars",
};

getResults(question, "Mars");
```

Retorno:

```text
The computer's choice is correct!
```

---

## Alternativa incorreta

```javascript
const question = {
  category: "Science",
  question: "Which planet is known as the Red Planet?",
  choices: ["Earth", "Mars", "Venus"],
  answer: "Mars",
};

getResults(question, "Earth");
```

Retorno:

```text
The computer's choice is wrong. The correct answer is: Mars
```

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] O array `questions` existir.
* [ ] O array possuir pelo menos cinco objetos.
* [ ] Todos os objetos possuírem `category`.
* [ ] Todos os objetos possuírem `question`.
* [ ] Todos os objetos possuírem `choices`.
* [ ] Todos os objetos possuírem `answer`.
* [ ] `category` for uma string.
* [ ] `question` for uma string.
* [ ] `choices` for um array com três strings.
* [ ] `answer` for uma string.
* [ ] A resposta correta estiver presente em `choices`.
* [ ] A função `getRandomQuestion` existir.
* [ ] `getRandomQuestion` retornar uma pergunta aleatória.
* [ ] A função `getRandomComputerChoice` existir.
* [ ] `getRandomComputerChoice` retornar uma alternativa aleatória.
* [ ] A função `getResults` existir.
* [ ] `getResults` receber a pergunta e a escolha do computador.
* [ ] A mensagem correta for retornada quando a resposta estiver certa.
* [ ] A resposta correta for exibida quando a escolha estiver errada.

---

# Conceitos Praticados

* Arrays
* Objetos
* Arrays de objetos
* Propriedades de objetos
* Funções
* Parâmetros
* Retorno de valores
* Acesso a propriedades
* Comparação de strings
* Estruturas condicionais
* `Math.random()`
* `Math.floor()`
* Template literals
