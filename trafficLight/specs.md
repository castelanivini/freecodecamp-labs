# Especificação - Traffic Light Sequencer

## Objetivo

Criar um programa em JavaScript que simule ciclos configuráveis de um semáforo.

O programa deve percorrer diferentes fases (`green`, `yellow`, `red`), respeitar a quantidade máxima de ciclos informada e interromper a execução quando houver uma falha.

Também deve identificar configurações inválidas e registrar mensagens específicas no console.

> **Importante:** não adicionar `console.log()` extras, pois isso pode fazer os testes falharem.

---

# Estrutura da Configuração

Cada configuração é representada por um objeto contendo:

| Propriedade | Tipo      | Descrição                                                   |
| ----------- | --------- | ----------------------------------------------------------- |
| `fault`     | `boolean` | Indica se existe uma falha que deve interromper a simulação |
| `phases`    | `Array`   | Lista contendo as fases do semáforo                         |

---

## Exemplo de Configuração

```javascript
const config = {
  fault: false,
  phases: [
    {
      color: "green",
      duration: 30,
    },
    {
      color: "yellow",
      duration: 5,
    },
    {
      color: "red",
      duration: 20,
    },
  ],
};
```

---

# Estrutura de uma Fase

Cada objeto dentro de `phases` deve possuir:

| Propriedade | Tipo     | Descrição                   |
| ----------- | -------- | --------------------------- |
| `color`     | `string` | Cor do semáforo             |
| `duration`  | `number` | Duração da fase em segundos |

---

## Valores de `color`

Os valores esperados são:

```text
green
yellow
red
```

---

## Regra de `duration`

`duration` deve representar um número inteiro positivo.

### Válido

```javascript
duration: 30
```

### Inválido

```javascript
duration: 0
```

```javascript
duration: -5
```

---

# Função Principal

## 1. Criar `runSequence`

* [ ] Criar uma função chamada `runSequence`.
* [ ] A função deve receber dois parâmetros:

| Parâmetro | Tipo     | Descrição                              |
| --------- | -------- | -------------------------------------- |
| `config`  | `object` | Configuração do semáforo               |
| `cycles`  | `number` | Quantidade máxima de ciclos executados |

### Estrutura

```javascript
function runSequence(config, cycles) {
  // lógica
}
```

---

# 2. Executar os Ciclos

A função deve utilizar:

* [ ] `for`

**ou**

* [ ] `while`

para percorrer as fases durante a quantidade de ciclos determinada por `cycles`.

---

## Conceito de Ciclo

Um ciclo completo representa a execução de todas as fases existentes em:

```javascript
config.phases
```

Por exemplo:

```javascript
phases: [
  { color: "green", duration: 30 },
  { color: "yellow", duration: 5 },
  { color: "red", duration: 20 },
]
```

Com:

```javascript
cycles = 2
```

A sequência será:

```text
green
yellow
red

green
yellow
red
```

---

# Regras da Simulação

## 3. Configuração sem Fases

Se:

```javascript
config.phases.length === 0
```

A função deve:

* [ ] Exibir exatamente:

```text
No phases found
```

* [ ] Encerrar imediatamente a função.

Isso significa que nenhuma outra fase deve ser processada.

---

## 4. Configuração com Falha

Se:

```javascript
config.fault === true
```

A função deve:

* [ ] Exibir:

```text
Faulted phase!
```

* [ ] Interromper a simulação imediatamente.
* [ ] Não continuar processando os próximos ciclos ou fases.

---

# 5. Fase Inválida

Se uma fase possuir:

```javascript
duration <= 0
```

A função deve exibir:

```text
Invalid phase detected
```

### Exemplo

```javascript
{
  color: "yellow",
  duration: 0,
}
```

Saída:

```text
Invalid phase detected
```

---

# 6. Fase Válida

Se:

```javascript
duration > 0
```

A função deve exibir:

```text
Switching to [color] for [duration] s
```

Substituindo os valores pelos dados da fase.

---

## Exemplo

Para:

```javascript
{
  color: "green",
  duration: 30,
}
```

A saída deve ser:

```text
Switching to green for 30 s
```

---

Outro exemplo:

```javascript
{
  color: "yellow",
  duration: 5,
}
```

Saída:

```text
Switching to yellow for 5 s
```

---

# Fluxo Esperado

A lógica geral pode ser pensada desta forma:

```text
runSequence(config, cycles)
│
├── phases está vazio?
│   │
│   └── Sim
│       ├── Log "No phases found"
│       └── Return
│
└── Iniciar ciclos
    │
    └── Percorrer cada fase
        │
        ├── fault === true?
        │   │
        │   └── Sim
        │       ├── Log "Faulted phase!"
        │       └── Encerrar execução
        │
        ├── duration <= 0?
        │   │
        │   └── Sim
        │       └── Log "Invalid phase detected"
        │
        └── Caso contrário
            └── Log:
                "Switching to [color] for [duration] s"
```

---

# Exemplo de Execução

Considere:

```javascript
const config = {
  fault: false,
  phases: [
    {
      color: "green",
      duration: 30,
    },
    {
      color: "yellow",
      duration: 5,
    },
    {
      color: "red",
      duration: 20,
    },
  ],
};
```

Executando:

```javascript
runSequence(config, 1);
```

Saída esperada:

```text
Switching to green for 30 s
Switching to yellow for 5 s
Switching to red for 20 s
```

---

# Exemplo com Múltiplos Ciclos

```javascript
runSequence(config, 2);
```

Saída esperada:

```text
Switching to green for 30 s
Switching to yellow for 5 s
Switching to red for 20 s
Switching to green for 30 s
Switching to yellow for 5 s
Switching to red for 20 s
```

---

# Exemplo sem Fases

```javascript
const config = {
  fault: false,
  phases: [],
};
```

Executando:

```javascript
runSequence(config, 3);
```

Saída:

```text
No phases found
```

A função deve encerrar imediatamente.

---

# Exemplo com Fase Inválida

```javascript
const config = {
  fault: false,
  phases: [
    {
      color: "green",
      duration: 20,
    },
    {
      color: "yellow",
      duration: 0,
    },
    {
      color: "red",
      duration: 10,
    },
  ],
};
```

Possível saída:

```text
Switching to green for 20 s
Invalid phase detected
Switching to red for 10 s
```

---

# Exemplo com Falha

```javascript
const config = {
  fault: true,
  phases: [
    {
      color: "green",
      duration: 30,
    },
    {
      color: "yellow",
      duration: 5,
    },
  ],
};
```

Ao detectar a falha, a execução deve ser interrompida:

```text
Faulted phase!
```

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] A função `runSequence` existir.
* [ ] A função receber `config` e `cycles`.
* [ ] Um `for` ou `while` for utilizado.
* [ ] As fases forem percorridas durante a quantidade solicitada de ciclos.
* [ ] `"No phases found"` for exibido quando `phases` estiver vazio.
* [ ] A função encerrar imediatamente quando não houver fases.
* [ ] `"Faulted phase!"` for exibido quando `fault === true`.
* [ ] A simulação for interrompida ao detectar uma falha.
* [ ] `"Invalid phase detected"` for exibido quando `duration <= 0`.
* [ ] Fases válidas exibirem `"Switching to [color] for [duration] s"`.
* [ ] Os valores reais de `color` e `duration` forem utilizados nas mensagens.
* [ ] Nenhum `console.log()` adicional for criado.

---

# Conceitos Praticados

* Objetos
* Arrays de objetos
* Funções
* Parâmetros
* Loops (`for` / `while`)
* Loops aninhados
* Estruturas condicionais
* `break`
* `return`
* Validação de dados
* Template literals
* `console.log()`
