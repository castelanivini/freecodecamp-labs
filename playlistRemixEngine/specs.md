# Build a Playlist Remix Engine

## Objetivo

Criar um programa que receba várias playlists enviadas por ouvintes e produza uma única programação final de músicas.

O processamento deve acontecer em etapas:

```text
playlists
   ↓
achatar listas
   ↓
pontuar músicas
   ↓
remover duplicadas
   ↓
limitar artistas
   ↓
montar programação final
```

Cada função deve cuidar de uma responsabilidade específica.

---

## Estrutura das músicas

Cada música possui propriedades como:

```javascript
{
  trackId: "t1",
  artist: "Artist A",
  title: "Song A",
  votes: 12,
  bpm: 118
}
```

Depois de algumas etapas, novas propriedades serão adicionadas, como:

```javascript
source
score
```

---

## 1. `flattenPlaylists`

Crie uma função chamada:

```javascript
flattenPlaylists(playlists)
```

Ela deve receber um array de playlists.

Cada playlist também é um array de músicas:

```javascript
[
  [
    { trackId: "a", artist: "X", title: "Song 1", votes: 5, bpm: 120 },
    { trackId: "b", artist: "Y", title: "Song 2", votes: 3, bpm: 125 }
  ],
  [
    { trackId: "c", artist: "Z", title: "Song 3", votes: 8, bpm: 110 }
  ]
]
```

---

### Entrada inválida

Se `playlists` não for um array:

```javascript
flattenPlaylists("invalid")
```

deve retornar:

```javascript
[]
```

Você pode verificar isso com:

```javascript
Array.isArray(...)
```

---

### Resultado esperado

A função deve transformar todos os subarrays em um único array.

Além das propriedades originais, cada música deve ganhar:

```javascript
source
```

O valor de `source` deve ser:

```javascript
[playlistIndex, trackIndex]
```

---

### Exemplo

Entrada:

```javascript
[
  [
    { trackId: "a", artist: "X", title: "One", votes: 5, bpm: 120 },
    { trackId: "b", artist: "Y", title: "Two", votes: 3, bpm: 125 }
  ],
  [
    { trackId: "c", artist: "Z", title: "Three", votes: 8, bpm: 110 }
  ]
]
```

Resultado:

```javascript
[
  {
    trackId: "a",
    artist: "X",
    title: "One",
    votes: 5,
    bpm: 120,
    source: [0, 0]
  },
  {
    trackId: "b",
    artist: "Y",
    title: "Two",
    votes: 3,
    bpm: 125,
    source: [0, 1]
  },
  {
    trackId: "c",
    artist: "Z",
    title: "Three",
    votes: 8,
    bpm: 110,
    source: [1, 0]
  }
]
```

---

## 2. `scoreTracks`

Crie uma função:

```javascript
scoreTracks(tracks)
```

Ela recebe o resultado de:

```javascript
flattenPlaylists()
```

e deve retornar um novo array onde cada música possui uma propriedade adicional:

```javascript
score
```

---

### Fórmula

O score deve ser calculado usando:

```javascript
votes * 10 - Math.abs(bpm - 120)
```

---

### Exemplo

Música:

```javascript
{
  trackId: "a",
  votes: 8,
  bpm: 125
}
```

Cálculo:

```text
votes * 10
8 * 10
= 80
```

Diferença do BPM para `120`:

```text
125 - 120
= 5
```

Usando:

```javascript
Math.abs(125 - 120)
```

temos:

```text
5
```

Logo:

```text
80 - 5 = 75
```

Então:

```javascript
score = 75
```

---

### Outro exemplo

```javascript
{
  votes: 10,
  bpm: 110
}
```

Cálculo:

```text
10 * 10 = 100

Math.abs(110 - 120)
= Math.abs(-10)
= 10

100 - 10
= 90
```

Resultado:

```javascript
score: 90
```

---

## 3. `dedupeTracks`

Crie uma função:

```javascript
dedupeTracks(tracks)
```

Ela deve remover músicas duplicadas com base em:

```javascript
trackId
```

---

### Regra

Se várias músicas possuírem o mesmo `trackId`, mantenha somente a primeira ocorrência.

Exemplo:

```javascript
[
  { trackId: "a" },
  { trackId: "b" },
  { trackId: "a" },
  { trackId: "c" }
]
```

Resultado:

```javascript
[
  { trackId: "a" },
  { trackId: "b" },
  { trackId: "c" }
]
```

A segunda ocorrência de:

```javascript
"a"
```

deve ser ignorada.

---

### Regra Mental

Pense:

```text
já vi esse trackId?
      │
  ┌───┴───┐
  │       │
 não     sim
  │       │
  ▼       ▼
adiciona ignora
```

Um `Set` pode ser útil para guardar os IDs já encontrados.

---

## 4. `enforceArtistQuota`

Crie uma função:

```javascript
enforceArtistQuota(tracks, maxPerArtist)
```

Ela recebe:

- um array de músicas;
- o número máximo de vezes que um artista pode aparecer.

---

### Exemplo

Entrada:

```javascript
[
  { trackId: "a", artist: "X" },
  { trackId: "b", artist: "X" },
  { trackId: "c", artist: "Y" },
  { trackId: "d", artist: "X" }
]
```

Com:

```javascript
maxPerArtist = 2
```

O artista `"X"` aparece três vezes.

Mas só podem permanecer as duas primeiras.

Resultado:

```javascript
[
  { trackId: "a", artist: "X" },
  { trackId: "b", artist: "X" },
  { trackId: "c", artist: "Y" }
]
```

---

### Como pensar

Você precisa controlar quantas vezes cada artista já apareceu.

Conceitualmente:

```text
X → 0
Y → 0
```

Ao processar:

```text
track a → X
X = 1 → mantém

track b → X
X = 2 → mantém

track c → Y
Y = 1 → mantém

track d → X
X já chegou em 2 → ignora
```

---

### Estrutura útil

Um objeto pode servir como contador:

```javascript
{
  X: 2,
  Y: 1
}
```

ou:

```javascript
{
  "Artist A": 2,
  "Artist B": 1
}
```

---

## 5. `buildSchedule`

Crie uma função:

```javascript
buildSchedule(tracks)
```

Ela deve transformar as músicas em uma programação final.

Cada item deve possuir apenas:

```javascript
{
  slot,
  trackId
}
```

---

### `slot`

`slot` representa a posição da música na programação.

A contagem deve começar em:

```text
1
```

e não em:

```text
0
```

---

### Exemplo

Entrada:

```javascript
[
  { trackId: "a" },
  { trackId: "b" },
  { trackId: "c" }
]
```

Resultado:

```javascript
[
  { slot: 1, trackId: "a" },
  { slot: 2, trackId: "b" },
  { slot: 3, trackId: "c" }
]
```

---

## 6. `remixPlaylist`

Crie uma função:

```javascript
remixPlaylist(playlists, maxPerArtist)
```

Essa função deve juntar todas as etapas anteriores.

Ela deve executar as funções exatamente nesta ordem:

```text
flattenPlaylists
      ↓
scoreTracks
      ↓
dedupeTracks
      ↓
enforceArtistQuota
      ↓
buildSchedule
```

---

### Fluxo esperado

```javascript
playlists
```

passa por:

```javascript
flattenPlaylists(playlists)
```

Resultado passa por:

```javascript
scoreTracks(...)
```

Depois:

```javascript
dedupeTracks(...)
```

Depois:

```javascript
enforceArtistQuota(..., maxPerArtist)
```

Por fim:

```javascript
buildSchedule(...)
```

---

## Exemplo conceitual

Entrada:

```javascript
const playlists = [
  [
    {
      trackId: "a",
      artist: "X",
      title: "One",
      votes: 10,
      bpm: 120
    },
    {
      trackId: "b",
      artist: "X",
      title: "Two",
      votes: 8,
      bpm: 125
    }
  ],
  [
    {
      trackId: "a",
      artist: "X",
      title: "Duplicate",
      votes: 20,
      bpm: 120
    },
    {
      trackId: "c",
      artist: "Y",
      title: "Three",
      votes: 9,
      bpm: 118
    }
  ]
];
```

Primeiro:

```text
flattenPlaylists
```

gera:

```text
a
b
a
c
```

Depois:

```text
scoreTracks
```

adiciona score a todos.

Depois:

```text
dedupeTracks
```

remove o segundo `"a"`:

```text
a
b
c
```

Depois, considerando:

```javascript
maxPerArtist = 1
```

temos:

```text
a → artista X → mantém
b → artista X → limite atingido → remove
c → artista Y → mantém
```

Restam:

```text
a
c
```

Finalmente:

```javascript
buildSchedule
```

gera:

```javascript
[
  { slot: 1, trackId: "a" },
  { slot: 2, trackId: "c" }
]
```

---

## Estrutura sugerida

```javascript
function flattenPlaylists(playlists) {
  // ...
}

function scoreTracks(tracks) {
  // ...
}

function dedupeTracks(tracks) {
  // ...
}

function enforceArtistQuota(tracks, maxPerArtist) {
  // ...
}

function buildSchedule(tracks) {
  // ...
}

function remixPlaylist(playlists, maxPerArtist) {
  // chamar as funções na ordem correta
}
```

---

## Pseudocódigo Geral

```text
flattenPlaylists:

    se playlists não for array:
        retornar []

    criar resultado vazio

    para cada playlist:

        para cada música:

            criar novo objeto
            com dados originais

            adicionar source:
                [playlistIndex, trackIndex]

            adicionar ao resultado

    retornar resultado
```

```text
scoreTracks:

    criar novo array

    para cada música:

        calcular score

        criar novo objeto
        contendo dados anteriores + score

    retornar resultado
```

```text
dedupeTracks:

    criar resultado vazio

    guardar trackIds já encontrados

    para cada música:

        se trackId ainda não apareceu:
            adicionar música
            registrar trackId

    retornar resultado
```

```text
enforceArtistQuota:

    criar resultado vazio

    criar contador por artista

    para cada música:

        verificar quantas vezes
        o artista já apareceu

        se ainda estiver abaixo do limite:
            adicionar música
            aumentar contador

    retornar resultado
```

```text
buildSchedule:

    criar resultado vazio

    para cada música:

        criar:
        {
          slot: posição + 1,
          trackId: música.trackId
        }

    retornar resultado
```

```text
remixPlaylist:

    executar flattenPlaylists

    executar scoreTracks

    executar dedupeTracks

    executar enforceArtistQuota

    executar buildSchedule

    retornar resultado final
```

---

## Critérios de Aceitação

- [ ] Criar `flattenPlaylists`.
- [ ] `flattenPlaylists` retornar `[]` quando a entrada não for array.
- [ ] Todas as playlists serem achatadas em um único array.
- [ ] Cada música receber `source`.
- [ ] `source` possuir `[playlistIndex, trackIndex]`.
- [ ] Criar `scoreTracks`.
- [ ] Cada música receber a propriedade `score`.
- [ ] O cálculo usar `votes * 10 - Math.abs(bpm - 120)`.
- [ ] Criar `dedupeTracks`.
- [ ] Duplicados serem identificados por `trackId`.
- [ ] Somente a primeira ocorrência ser mantida.
- [ ] Criar `enforceArtistQuota`.
- [ ] Nenhum artista ultrapassar `maxPerArtist`.
- [ ] As primeiras ocorrências dos artistas serem preservadas.
- [ ] Criar `buildSchedule`.
- [ ] Cada item possuir apenas `slot` e `trackId`.
- [ ] `slot` começar em `1`.
- [ ] Criar `remixPlaylist`.
- [ ] `remixPlaylist` chamar todas as funções na ordem correta.
- [ ] O resultado final ser um array de `{ slot, trackId }`.

---

## Conceitos praticados

- Arrays
- Arrays multidimensionais
- Objetos
- Objetos dentro de arrays
- Loops
- Loops aninhados
- Funções
- Composição de funções
- `Array.isArray()`
- Spread operator
- `Math.abs()`
- `Set`
- Contadores
- Remoção de duplicados
- Agrupamento por propriedade
- Índices
- Imutabilidade
- `return`

---

## Regra Mental

Pense nesse exercício como uma esteira de processamento:

```text
Várias playlists
      ↓
transformar em uma lista única
      ↓
calcular informações extras
      ↓
remover músicas repetidas
      ↓
impedir excesso do mesmo artista
      ↓
numerar a ordem final
```

Ou de forma resumida:

```text
FLATTEN
   ↓
SCORE
   ↓
DEDUPE
   ↓
QUOTA
   ↓
SCHEDULE
```

Cada função recebe o resultado da anterior e entrega dados prontos para a próxima etapa.