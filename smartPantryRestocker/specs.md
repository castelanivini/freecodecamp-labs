# Especificação - Smart Pantry Restocker

## Objetivo

Criar um programa em JavaScript para processar uma entrega de itens de despensa, decidir o que fazer com cada item e organizar as ações por zona de armazenamento.

O exercício trabalha com:

* arrays;
* objetos;
* loops;
* condicionais;
* parsing de strings;
* cópia profunda de dados.

---

# Estrutura dos Dados

A variável `rawData` contém strings separadas por `|`.

Formato:

```text
sku|name|qty|expires|zone
```

A propriedade `zone` é opcional.

### Exemplo

```javascript
const rawData = [
  "A1|Rice|5|2026-10-10|pantry",
  "B2|Milk|2|2026-08-15|fridge",
  "C3|Beans|0|2026-12-01",
];
```

---

# Estrutura Esperada de um Item

Após o processamento, cada item deve ter o formato:

```javascript
{
  sku: "A1",
  name: "Rice",
  qty: 5,
  expires: "2026-10-10",
  zone: "pantry",
}
```

---

# 1. Função `parseShipment`

Criar uma função chamada:

```javascript
parseShipment(rawData)
```

## Parâmetro

| Parâmetro | Tipo            | Descrição                            |
| --------- | --------------- | ------------------------------------ |
| `rawData` | `Array<string>` | Lista com os itens brutos da entrega |

## Comportamento

A função deve:

* [ ] Percorrer todas as strings do array.
* [ ] Separar cada string pelo caractere `|`.
* [ ] Criar um objeto com as propriedades:

```javascript
{
  sku,
  name,
  qty,
  expires,
  zone,
}
```

* [ ] Converter `qty` para `number`.
* [ ] Usar `"general"` como valor padrão de `zone` quando ele não for informado.
* [ ] Ignorar itens com `sku` duplicado dentro da própria entrega.
* [ ] Retornar um array de objetos processados.

---

## Exemplo

Entrada:

```javascript
[
  "A1|Rice|5|2026-10-10|pantry",
  "B2|Milk|2|2026-08-15|fridge",
  "A1|Rice|10|2026-11-10|pantry",
  "C3|Beans|4|2026-12-01"
]
```

Saída esperada:

```javascript
[
  {
    sku: "A1",
    name: "Rice",
    qty: 5,
    expires: "2026-10-10",
    zone: "pantry",
  },
  {
    sku: "B2",
    name: "Milk",
    qty: 2,
    expires: "2026-08-15",
    zone: "fridge",
  },
  {
    sku: "C3",
    name: "Beans",
    qty: 4,
    expires: "2026-12-01",
    zone: "general",
  },
]
```

> O segundo item com `sku: "A1"` deve ser ignorado.

---

# 2. Função `planRestock`

Criar uma função chamada:

```javascript
planRestock(pantry, shipment)
```

## Parâmetros

| Parâmetro  | Tipo            | Descrição                       |
| ---------- | --------------- | ------------------------------- |
| `pantry`   | `Array<object>` | Itens já existentes na despensa |
| `shipment` | `Array<object>` | Itens recebidos na entrega      |

## Retorno

A função deve retornar um array de ações com o formato:

```javascript
{
  type: "restock",
  item: {...},
}
```

Os valores possíveis para `type` são:

```text
restock
discard
donate
```

---

# Regras de Decisão

## Regra 1 - Descartar

Se:

```javascript
item.qty <= 0
```

A ação deve ser:

```text
discard
```

Essa regra tem prioridade sobre todas as outras.

Mesmo que o item já exista na despensa, ele deve ser descartado.

---

## Regra 2 - Repor Estoque

Se:

```javascript
item.qty > 0
```

e o `sku` do item já existir em `pantry`:

```text
restock
```

---

## Regra 3 - Doar

Se:

```javascript
item.qty > 0
```

e o `sku` não existir na despensa:

```text
donate
```

---

# Fluxo da Decisão

```text
Receber item
    │
    ▼
qty <= 0?
 ┌──┴───┐
 │      │
Sim    Não
 │      │
 ▼      ▼
discard SKU existe
        no pantry?
        ┌──┴───┐
        │      │
       Sim    Não
        │      │
        ▼      ▼
     restock  donate
```

---

# Exemplo

Despensa atual:

```javascript
const pantry = [
  {
    sku: "A1",
    name: "Rice",
    qty: 2,
    expires: "2026-09-01",
    zone: "pantry",
  },
];
```

Entrega:

```javascript
const shipment = [
  {
    sku: "A1",
    name: "Rice",
    qty: 5,
    expires: "2026-10-10",
    zone: "pantry",
  },
  {
    sku: "B2",
    name: "Milk",
    qty: 3,
    expires: "2026-08-15",
    zone: "fridge",
  },
  {
    sku: "C3",
    name: "Beans",
    qty: 0,
    expires: "2026-12-01",
    zone: "general",
  },
];
```

Resultado:

```javascript
[
  {
    type: "restock",
    item: shipment[0],
  },
  {
    type: "donate",
    item: shipment[1],
  },
  {
    type: "discard",
    item: shipment[2],
  },
]
```

---

# 3. Função `groupByZone`

Criar uma função chamada:

```javascript
groupByZone(actions)
```

## Parâmetro

| Parâmetro | Tipo            |
| --------- | --------------- |
| `actions` | `Array<object>` |

## Comportamento

A função deve:

* [ ] Percorrer todas as ações.
* [ ] Ler o valor de `action.item.zone`.
* [ ] Criar uma propriedade no objeto de resultado para cada zona encontrada.
* [ ] Adicionar a ação ao array correspondente àquela zona.
* [ ] Retornar o objeto agrupado.

---

## Exemplo

Entrada:

```javascript
[
  {
    type: "restock",
    item: {
      sku: "A1",
      zone: "pantry",
    },
  },
  {
    type: "donate",
    item: {
      sku: "B2",
      zone: "fridge",
    },
  },
  {
    type: "discard",
    item: {
      sku: "C3",
      zone: "pantry",
    },
  },
]
```

Saída:

```javascript
{
  pantry: [
    {
      type: "restock",
      item: {
        sku: "A1",
        zone: "pantry",
      },
    },
    {
      type: "discard",
      item: {
        sku: "C3",
        zone: "pantry",
      },
    },
  ],

  fridge: [
    {
      type: "donate",
      item: {
        sku: "B2",
        zone: "fridge",
      },
    },
  ],
}
```

---

# 4. Função `clonePantry`

Criar uma função chamada:

```javascript
clonePantry(pantry)
```

## Objetivo

Criar uma **cópia profunda** da despensa.

Isso significa que:

* [ ] O array retornado deve ser diferente do array original.
* [ ] Cada objeto dentro do novo array também deve ser um novo objeto.
* [ ] Alterar a cópia não pode modificar o objeto original.

---

## Exemplo

```javascript
const original = [
  {
    sku: "A1",
    qty: 5,
  },
];

const copy = clonePantry(original);
```

Depois:

```javascript
copy[0].qty = 100;
```

O original deve continuar:

```javascript
original[0].qty === 5;
```

E não:

```javascript
original[0].qty === 100;
```

---

# Cópia Rasa vs Cópia Profunda

Isso:

```javascript
const copy = [...pantry];
```

cria um novo array, mas mantém referências para os mesmos objetos internos.

Portanto, sozinho, não atende ao requisito de deep copy.

O objetivo é obter algo equivalente a:

```text
Array original
 ├── objeto A
 └── objeto B

Array cópia
 ├── novo objeto A
 └── novo objeto B
```

---

# 5. Utilizar Todas as Funções

Ao final, todas as funções devem ser utilizadas juntas.

O fluxo esperado é:

```text
rawData
   │
   ▼
parseShipment()
   │
   ▼
shipment
   │
   │
pantry ──► clonePantry()
              │
              ▼
         pantryCopy
              │
              ▼
     planRestock(pantryCopy, shipment)
              │
              ▼
           actions
              │
              ▼
       groupByZone(actions)
              │
              ▼
        groupedResult
              │
              ▼
        console.log()
```

---

# Exemplo de Integração

```javascript
const shipment = parseShipment(rawData);

const pantryCopy = clonePantry(pantry);

const actions = planRestock(pantryCopy, shipment);

const groupedResult = groupByZone(actions);

console.log(groupedResult);
```

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] A função `parseShipment` existir.
* [ ] `parseShipment` receber um array de strings.
* [ ] Cada string for transformada em um objeto.
* [ ] `qty` for convertido para número.
* [ ] `zone` assumir `"general"` quando não existir.
* [ ] SKUs duplicados forem ignorados.
* [ ] A função `planRestock` existir.
* [ ] Itens com `qty <= 0` gerarem ação `"discard"`.
* [ ] Itens existentes na despensa gerarem `"restock"`.
* [ ] Itens novos gerarem `"donate"`.
* [ ] A função `groupByZone` existir.
* [ ] As ações forem agrupadas pela propriedade `zone`.
* [ ] A função `clonePantry` existir.
* [ ] O clone possuir um novo array e novos objetos.
* [ ] Alterações na cópia não modificarem a despensa original.
* [ ] Todas as funções forem utilizadas em conjunto.
* [ ] O resultado final agrupado for exibido no console.

---

# Conceitos Praticados

* Arrays
* Objetos
* Arrays de objetos
* `split()`
* Conversão para `number`
* Valores padrão
* Identificação de duplicados
* `find()`
* `some()`
* `includes()`
* `Set`
* Loops
* Condicionais
* `push()`
* Propriedades dinâmicas
* Agrupamento de dados
* Spread operator (`...`)
* Cópia profunda
* Referência de objetos
* `console.log()`
