# Build a Set of Football Team Cards

## Objetivo

Criar uma interface que exiba informações de um time de futebol e permita filtrar os jogadores pela posição usando um menu dropdown.

O exercício trabalha principalmente com:

- objetos;
- arrays de objetos;
- manipulação do DOM;
- renderização dinâmica;
- eventos de `change`;
- `filter()`;
- template literals;
- condicionais.

---

## 1. Criar o objeto `footballTeam`

Crie um objeto chamado:

```javascript
footballTeam
```

Ele deve possuir exatamente estas propriedades principais:

```javascript
{
  team,
  year,
  headCoach,
  players
}
```

---

## 2. Propriedade `team`

A propriedade:

```javascript
team
```

deve conter o nome do time como string.

Exemplo:

```javascript
team: "Santos FC"
```

---

## 3. Propriedade `year`

A propriedade:

```javascript
year
```

deve conter um número.

Exemplo:

```javascript
year: 2026
```

---

## 4. Propriedade `headCoach`

A propriedade:

```javascript
headCoach
```

deve conter o nome do treinador.

Exemplo:

```javascript
headCoach: "Coach Name"
```

---

## 5. Propriedade `players`

A propriedade:

```javascript
players
```

deve ser um array com pelo menos quatro jogadores.

Exemplo conceitual:

```javascript
players: [
  {},
  {},
  {},
  {}
]
```

---

## 6. Estrutura de cada jogador

Cada jogador deve ser um objeto com:

```javascript
{
  name,
  position,
  isCaptain
}
```

---

## 7. Propriedade `name`

Deve ser uma string.

Exemplo:

```javascript
name: "Player Name"
```

---

## 8. Propriedade `position`

Só pode ter um destes valores:

```text
forward
midfielder
defender
goalkeeper
```

Exemplo:

```javascript
position: "forward"
```

---

## 9. Propriedade `isCaptain`

Deve ser um boolean:

```javascript
true
```

ou:

```javascript
false
```

Pelo menos um jogador deve possuir:

```javascript
isCaptain: true
```

---

## Estrutura sugerida do objeto

```javascript
const footballTeam = {
  team: "Team Name",
  year: 2026,
  headCoach: "Coach Name",

  players: [
    {
      name: "Player A",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Player B",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Player C",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Player D",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};
```

---

## 10. Mostrar dados gerais do time

A página deve possuir elementos com os ids:

```html
#head-coach
#team
#year
```

Você deve preencher esses elementos com os dados presentes em:

```javascript
footballTeam
```

---

## Exemplo conceitual

HTML:

```html
<p id="team"></p>
<p id="year"></p>
<p id="head-coach"></p>
```

JavaScript:

```text
footballTeam.team
      ↓
#team

footballTeam.year
      ↓
#year

footballTeam.headCoach
      ↓
#head-coach
```

---

## 11. Criar a área dos jogadores

A página deve possuir um elemento com:

```html
id="player-cards"
```

Dentro dele, os jogadores serão renderizados dinamicamente.

---

## 12. Estrutura de cada card

Cada jogador deve gerar:

```html
<div class="player-card">
  <h2>Player Name</h2>
  <p>Position: midfielder</p>
</div>
```

---

## Capitão

Se:

```javascript
isCaptain === true
```

o nome deve possuir:

```text
(Captain)
```

Por exemplo:

```html
<h2>(Captain) Player Name</h2>
```

Se não for capitão:

```html
<h2>Player Name</h2>
```

---

## 13. Criar uma função para renderizar os jogadores

Uma boa estratégia é criar uma função responsável apenas por transformar jogadores em HTML.

Conceitualmente:

```javascript
function renderPlayers(players) {
  // gerar cards
}
```

Ela recebe um array:

```javascript
players
```

e coloca os cards dentro de:

```html
#player-cards
```

---

## Fluxo da renderização

```text
players
   ↓
percorrer jogadores
   ↓
criar HTML de cada card
   ↓
juntar cards
   ↓
colocar dentro de #player-cards
```

---

## 14. Nome do capitão

Para cada jogador, pense:

```text
isCaptain?
   │
 ┌─┴─┐
 │   │
sim não
 │   │
 ▼   ▼
adicionar
"(Captain)"
```

Você pode montar isso com:

```javascript
if
```

ou:

```javascript
ternary operator
```

---

## Exemplo conceitual

```javascript
player.isCaptain
  ? "(Captain) ..."
  : "..."
```

---

## 15. Criar o dropdown

Você precisa de um:

```html
<select>
```

com opções para:

```text
All Players
forward
midfielder
defender
goalkeeper
```

Exemplo conceitual:

```html
<select>
  <option value="all">All Players</option>
  <option value="forward">Forward</option>
  <option value="midfielder">Midfielder</option>
  <option value="defender">Defender</option>
  <option value="goalkeeper">Goalkeeper</option>
</select>
```

---

## 16. Escutar mudanças no dropdown

O evento ideal é:

```javascript
change
```

Exemplo:

```javascript
select.addEventListener("change", (event) => {
  // lógica
});
```

O valor selecionado pode ser acessado com:

```javascript
event.target.value
```

---

## 17. Caso `"All Players"`

Se o usuário selecionar:

```text
All Players
```

todos os jogadores devem aparecer.

Então você deve renderizar:

```javascript
footballTeam.players
```

sem filtro.

---

## 18. Caso uma posição seja selecionada

Se o usuário escolher:

```text
forward
```

você deve manter apenas jogadores com:

```javascript
position === "forward"
```

---

## Exemplo

Jogadores:

```javascript
[
  { name: "A", position: "forward" },
  { name: "B", position: "defender" },
  { name: "C", position: "forward" }
]
```

Filtro:

```text
forward
```

Resultado:

```javascript
[
  { name: "A", position: "forward" },
  { name: "C", position: "forward" }
]
```

---

## 19. Usando `filter()`

Uma estratégia natural é:

```javascript
footballTeam.players.filter((player) => {
  // comparar player.position
  // com a opção selecionada
});
```

---

## 20. Depois do filtro

O array filtrado deve ser enviado novamente para a função de renderização.

Conceitualmente:

```text
dropdown
   ↓
selecionar position
   ↓
filter players
   ↓
filteredPlayers
   ↓
renderPlayers(filteredPlayers)
```

---

## Estrutura HTML sugerida

```html
<section>
  <h1 id="team"></h1>

  <p>
    Year:
    <span id="year"></span>
  </p>

  <p>
    Head Coach:
    <span id="head-coach"></span>
  </p>
</section>

<select id="players-filter">
  <option value="all">All Players</option>
  <option value="forward">Forward</option>
  <option value="midfielder">Midfielder</option>
  <option value="defender">Defender</option>
  <option value="goalkeeper">Goalkeeper</option>
</select>

<div id="player-cards"></div>
```

---

## Estrutura JavaScript sugerida

```javascript
const footballTeam = {
  // dados
};

const teamElement = /* selecionar #team */;
const yearElement = /* selecionar #year */;
const coachElement = /* selecionar #head-coach */;
const playerCards = /* selecionar #player-cards */;
const filter = /* selecionar dropdown */;


// preencher dados gerais


function renderPlayers(players) {

  // gerar cards

}


renderPlayers(footballTeam.players);


filter.addEventListener("change", (event) => {

  const selectedPosition = event.target.value;

  // se for all:
  // renderizar todos

  // senão:
  // filtrar por posição
  // renderizar resultado

});
```

---

## Pseudocódigo

```text
criar footballTeam


preencher:

    team
    year
    headCoach


criar função renderPlayers

    limpar player-cards

    para cada jogador:

        criar nome

        se for capitão:
            adicionar "(Captain)"

        criar card

        adicionar card ao HTML


renderizar todos inicialmente


quando dropdown mudar:

    pegar posição selecionada

    se for "all":

        usar todos os jogadores

    senão:

        filtrar jogadores
        pela posição

    renderizar resultado
```

---

## Exemplo esperado

Objeto:

```javascript
players: [
  {
    name: "Player One",
    position: "midfielder",
    isCaptain: true
  },
  {
    name: "Player Two",
    position: "forward",
    isCaptain: false
  }
]
```

HTML:

```html
<div class="player-card">
  <h2>(Captain) Player One</h2>
  <p>Position: midfielder</p>
</div>

<div class="player-card">
  <h2>Player Two</h2>
  <p>Position: forward</p>
</div>
```

---

## Exemplo de filtro

Selecionado:

```text
midfielder
```

Jogadores:

```text
Player One → midfielder ✅
Player Two → forward ❌
Player Three → defender ❌
Player Four → midfielder ✅
```

Resultado:

```text
Player One
Player Four
```

---

## Critérios de Aceitação

- [ ] Criar um objeto `footballTeam`.
- [ ] Criar a propriedade `team`.
- [ ] `team` ser uma string.
- [ ] Criar `year`.
- [ ] `year` ser um número.
- [ ] Criar `headCoach`.
- [ ] `headCoach` ser uma string.
- [ ] Criar `players`.
- [ ] `players` possuir pelo menos quatro objetos.
- [ ] Cada jogador possuir `name`.
- [ ] Cada jogador possuir `position`.
- [ ] Cada jogador possuir `isCaptain`.
- [ ] `position` usar apenas valores permitidos.
- [ ] Pelo menos um jogador ser capitão.
- [ ] Mostrar `team` em `#team`.
- [ ] Mostrar `year` em `#year`.
- [ ] Mostrar `headCoach` em `#head-coach`.
- [ ] Criar cards dentro de `#player-cards`.
- [ ] Cada card possuir `.player-card`.
- [ ] Cada card possuir um `h2`.
- [ ] O capitão possuir `(Captain)` no nome.
- [ ] Cada card possuir um `p`.
- [ ] O `p` mostrar `Position: ...`.
- [ ] O dropdown permitir filtrar por posição.
- [ ] `"All Players"` mostrar todos.
- [ ] `"forward"` mostrar apenas atacantes.
- [ ] `"midfielder"` mostrar apenas meio-campistas.
- [ ] `"defender"` mostrar apenas defensores.
- [ ] `"goalkeeper"` mostrar apenas goleiros.

---

## Conceitos praticados

- Objetos
- Arrays
- Arrays de objetos
- DOM
- `querySelector()`
- `textContent`
- `innerHTML`
- Template literals
- `filter()`
- `map()`
- `join()`
- Eventos
- `change`
- `event.target.value`
- Condicionais
- Operador ternário
- Renderização dinâmica

---

## Regra Mental

Pense no exercício em três blocos.

Primeiro:

```text
DADOS
 ↓
footballTeam
```

Depois:

```text
RENDERIZAÇÃO
     ↓
players → cards HTML
```

Por último:

```text
FILTRO
  ↓
dropdown
  ↓
selecionar posição
  ↓
filter()
  ↓
renderizar novamente
```

A lógica principal é:

```text
footballTeam.players
        ↓
     FILTRAR
        ↓
array de jogadores
        ↓
    RENDERIZAR
        ↓
player-card
```

E para o capitão:

```text
isCaptain === true
        ↓
adicionar "(Captain)"
```

O fluxo completo fica:

```text
DADOS
  ↓
MOSTRAR TIME
  ↓
MOSTRAR JOGADORES
  ↓
USUÁRIO MUDA FILTRO
  ↓
FILTRAR JOGADORES
  ↓
REDESENHAR CARDS
```