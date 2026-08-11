# Especificação - Restore a Coherent Narrative

## Objetivo

Criar um conjunto de funções em JavaScript para restaurar uma história a partir de fragmentos corrompidos.

Os fragmentos podem conter:

* posições `undefined`;
* itens fora de ordem;
* IDs duplicados;
* lacunas na sequência.

O objetivo final é:

```text
compactar
   ↓
ordenar
   ↓
remover duplicados
   ↓
preencher lacunas
   ↓
montar a história
```

---

# Estrutura dos Fragmentos

Cada fragmento possui:

```javascript
{
  id: 3,
  text: "and I use Arch btw."
}
```

## Propriedades

| Propriedade | Tipo     | Descrição                        |
| ----------- | -------- | -------------------------------- |
| `id`        | `number` | Posição do fragmento na história |
| `text`      | `string` | Conteúdo textual do fragmento    |

---

# Regra Importante

O array fornecido:

```javascript
shuffledFragments
```

não deve ser modificado diretamente.

Todas as funções devem retornar **novos arrays**.

---

# 1. `compactFragments`

Criar uma função:

```javascript
compactFragments(fragments)
```

## Objetivo

Remover todos os elementos:

```javascript
undefined
```

do array.

---

## Exemplo

Entrada:

```javascript
[
  { id: 3, text: "C" },
  undefined,
  { id: 1, text: "A" },
  undefined,
]
```

Saída:

```javascript
[
  { id: 3, text: "C" },
  { id: 1, text: "A" },
]
```

---

## Logging

Se pelo menos um `undefined` for removido:

* [ ] Exibir uma mensagem no console.
* [ ] A mensagem deve começar exatamente com:

```text
[COMPACTED]
```

Exemplo válido:

```text
[COMPACTED] Removed undefined fragments
```

> O conteúdo depois do prefixo pode depender do exercício, mas o prefixo precisa estar correto.

---

## Regras

* [ ] Não modificar o array original.
* [ ] Retornar um novo array.
* [ ] Manter a ordem dos elementos restantes.

---

# 2. `compactedShuffledFragments`

Criar uma variável:

```javascript
compactedShuffledFragments
```

Ela deve armazenar:

```javascript
compactFragments(shuffledFragments)
```

Fluxo:

```text
shuffledFragments
       │
       ▼
compactFragments()
       │
       ▼
compactedShuffledFragments
```

---

# 3. `sortFragments`

Criar uma função:

```javascript
sortFragments(fragments)
```

## Objetivo

Ordenar os fragmentos pelo `id` em ordem crescente.

Exemplo:

```javascript
[
  { id: 3, text: "C" },
  { id: 1, text: "A" },
  { id: 2, text: "B" },
]
```

Resultado:

```javascript
[
  { id: 1, text: "A" },
  { id: 2, text: "B" },
  { id: 3, text: "C" },
]
```

---

# Restrição Importante

Você **não pode utilizar**:

```javascript
Array.prototype.sort()
```

Ou seja, deverá implementar o algoritmo de ordenação manualmente.

---

# Ordenação Estável

Existe outro requisito importante:

> Fragmentos com o mesmo `id` devem manter sua ordem original.

Considere:

```javascript
[
  { id: 2, text: "first" },
  { id: 1, text: "A" },
  { id: 2, text: "second" },
]
```

Depois da ordenação:

```javascript
[
  { id: 1, text: "A" },
  { id: 2, text: "first" },
  { id: 2, text: "second" },
]
```

Observe que:

```text
"first"
```

continua antes de:

```text
"second"
```

---

# Possíveis Algoritmos

Como `.sort()` não pode ser utilizado, você pode implementar manualmente algoritmos como:

* Bubble Sort
* Insertion Sort

Para este exercício, um algoritmo simples e estável pode ser uma boa escolha.

---

# 4. `sortedFragments`

Criar:

```javascript
sortedFragments
```

e atribuir:

```javascript
sortFragments(compactedShuffledFragments)
```

---

# 5. `dedupeFragments`

Criar uma função:

```javascript
dedupeFragments(fragments)
```

## Objetivo

Remover fragmentos duplicados.

Dois fragmentos são considerados duplicados quando possuem o mesmo:

```javascript
id
```

---

## Regra

Deve ser mantida somente a **primeira ocorrência** de cada `id`.

Exemplo:

```javascript
[
  { id: 1, text: "A" },
  { id: 2, text: "B first" },
  { id: 2, text: "B second" },
  { id: 3, text: "C" },
]
```

Resultado:

```javascript
[
  { id: 1, text: "A" },
  { id: 2, text: "B first" },
  { id: 3, text: "C" },
]
```

---

# Logging de Duplicados

Para cada `id` que tiver duplicados removidos:

* [ ] Registrar uma mensagem no console.
* [ ] A mensagem deve começar com:

```text
[DEDUPED]
```

Exemplo:

```text
[DEDUPED] Removed duplicate id 2
```

---

## Atenção

Se houver:

```javascript
[
  { id: 2 },
  { id: 2 },
  { id: 2 },
]
```

o requisito fala em logar para cada **id deduplicado**, não necessariamente uma vez por elemento removido.

Ou seja, provavelmente faria sentido algo como:

```text
[DEDUPED] id 2
```

uma vez para aquele ID.

---

# 6. `dedupedFragments`

Criar:

```javascript
dedupedFragments
```

com o resultado de:

```javascript
dedupeFragments(sortedFragments)
```

---

# 7. `fillMissingFragments`

Criar uma função:

```javascript
fillMissingFragments(fragments)
```

## Objetivo

Encontrar lacunas na sequência dos IDs e criar placeholders.

---

# O Que É Uma Lacuna?

Considere:

```javascript
[
  { id: 2, text: "B" },
  { id: 3, text: "C" },
  { id: 5, text: "E" },
]
```

O menor ID é:

```text
2
```

O maior ID é:

```text
5
```

A sequência completa deveria ser:

```text
2, 3, 4, 5
```

Está faltando:

```text
4
```

---

# Placeholder

O fragmento faltante deve ser criado exatamente no formato:

```javascript
{
  id: 4,
  text: "[...]"
}
```

Resultado:

```javascript
[
  { id: 2, text: "B" },
  { id: 3, text: "C" },
  { id: 4, text: "[...]" },
  { id: 5, text: "E" },
]
```

---

# Logging

Para cada placeholder criado:

* [ ] Exibir uma mensagem.
* [ ] A mensagem deve começar com:

```text
[FILLED]
```

Exemplo:

```text
[FILLED] Missing fragment 4
```

Se faltarem:

```text
3
4
7
```

deverão existir três registros começando com:

```text
[FILLED]
```

---

# Limites da Sequência

A função deve preencher apenas lacunas entre:

```text
menor id
```

e:

```text
maior id
```

Exemplo:

```javascript
[
  { id: 5, text: "A" },
  { id: 7, text: "C" },
]
```

Apenas:

```text
6
```

está faltando.

Não é necessário criar:

```text
1
2
3
4
```

---

# 8. `filledFragments`

Criar:

```javascript
filledFragments
```

com:

```javascript
fillMissingFragments(dedupedFragments)
```

---

# 9. `assembleStory`

Criar uma função:

```javascript
assembleStory(fragments)
```

## Objetivo

Juntar todos os textos dos fragmentos em uma única string.

Cada texto deve ser separado por:

```javascript
"\n"
```

---

## Exemplo

Entrada:

```javascript
[
  { id: 1, text: "Once upon a time" },
  { id: 2, text: "there was a programmer" },
  { id: 3, text: "who loved JavaScript." },
]
```

Resultado:

```text
Once upon a time
there was a programmer
who loved JavaScript.
```

String equivalente:

```javascript
"Once upon a time\nthere was a programmer\nwho loved JavaScript."
```

---

# 10. Fluxo Completo

O processamento deve seguir esta ordem:

```text
shuffledFragments
       │
       ▼
compactFragments()
       │
       ▼
compactedShuffledFragments
       │
       ▼
sortFragments()
       │
       ▼
sortedFragments
       │
       ▼
dedupeFragments()
       │
       ▼
dedupedFragments
       │
       ▼
fillMissingFragments()
       │
       ▼
filledFragments
       │
       ▼
assembleStory()
       │
       ▼
história completa
       │
       ▼
console.log()
```

---

# Exemplo Conceitual Completo

Entrada:

```javascript
[
  { id: 4, text: "D" },
  undefined,
  { id: 2, text: "B" },
  { id: 2, text: "B duplicate" },
  { id: 1, text: "A" },
]
```

---

## Após `compactFragments`

```javascript
[
  { id: 4, text: "D" },
  { id: 2, text: "B" },
  { id: 2, text: "B duplicate" },
  { id: 1, text: "A" },
]
```

---

## Após `sortFragments`

```javascript
[
  { id: 1, text: "A" },
  { id: 2, text: "B" },
  { id: 2, text: "B duplicate" },
  { id: 4, text: "D" },
]
```

---

## Após `dedupeFragments`

```javascript
[
  { id: 1, text: "A" },
  { id: 2, text: "B" },
  { id: 4, text: "D" },
]
```

---

## Após `fillMissingFragments`

```javascript
[
  { id: 1, text: "A" },
  { id: 2, text: "B" },
  { id: 3, text: "[...]" },
  { id: 4, text: "D" },
]
```

---

## Após `assembleStory`

```text
A
B
[...]
D
```

---

# Imutabilidade

Todas estas funções devem evitar mutar o array recebido:

```javascript
compactFragments()
sortFragments()
dedupeFragments()
fillMissingFragments()
assembleStory()
```

Isso significa que operações destrutivas devem ser utilizadas apenas em cópias.

---

## Exemplo

Evite modificar diretamente:

```javascript
fragments.splice(...);
```

Prefira trabalhar sobre um novo array:

```javascript
const copy = fragments.slice();
```

ou criar novos arrays durante o processamento.

---

# Critérios de Aceitação

* [ ] `shuffledFragments` permanecer inalterado.
* [ ] `compactFragments` existir.
* [ ] `undefined` ser removido.
* [ ] `[COMPACTED]` ser logado quando necessário.
* [ ] `compactedShuffledFragments` existir.
* [ ] `sortFragments` existir.
* [ ] `.sort()` não ser utilizado.
* [ ] Os fragmentos serem ordenados pelo `id`.
* [ ] A ordenação ser estável.
* [ ] `sortedFragments` existir.
* [ ] `dedupeFragments` existir.
* [ ] Apenas a primeira ocorrência de cada ID permanecer.
* [ ] `[DEDUPED]` ser registrado para IDs duplicados.
* [ ] `dedupedFragments` existir.
* [ ] `fillMissingFragments` existir.
* [ ] Lacunas entre menor e maior ID serem preenchidas.
* [ ] Placeholders utilizarem `text: "[...]"`.
* [ ] `[FILLED]` ser registrado para cada placeholder.
* [ ] `filledFragments` existir.
* [ ] `assembleStory` existir.
* [ ] Os textos serem separados por `\n`.
* [ ] A história final ser exibida no console.
* [ ] Nenhuma função alterar o array que recebeu.

---

# Conceitos Praticados

* Arrays
* Objetos
* Arrays de objetos
* Loops
* Ordenação manual
* Bubble Sort / Insertion Sort
* Ordenação estável
* Remoção de duplicados
* Detecção de lacunas
* `undefined`
* Imutabilidade
* Cópia de arrays
* `push()`
* `join()`
* `console.log()`
* Composição de funções

## Regra Mental

Pense nesse exercício como um **pipeline de limpeza de dados**:

```text
dados quebrados
     ↓
remove vazios
     ↓
coloca em ordem
     ↓
remove repetidos
     ↓
preenche buracos
     ↓
transforma em texto
```

Cada função deve ter uma única responsabilidade e devolver um novo resultado para a próxima etapa.
