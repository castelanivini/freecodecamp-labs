# Especificação - Cargo Manifest Validator

## Objetivo

Criar um programa em JavaScript para normalizar e validar manifestos de carga.

Um manifesto de carga é um documento que contém informações sobre mercadorias transportadas, como identificador do contêiner, destino, peso, unidade de medida e indicação de material perigoso.

---

## Estrutura do Manifesto

Cada manifesto deve ser representado por um objeto JavaScript com as seguintes propriedades:

| Propriedade   | Tipo      | Descrição                                          |
| ------------- | --------- | -------------------------------------------------- |
| `containerId` | `number`  | Número inteiro positivo que identifica o contêiner |
| `destination` | `string`  | Destino da carga                                   |
| `weight`      | `number`  | Peso da carga                                      |
| `unit`        | `string`  | Unidade utilizada para representar o peso          |
| `hazmat`      | `boolean` | Indica se a carga contém material perigoso         |

---

## Exemplo de Manifesto

```javascript
const manifest = {
  containerId: 1024,
  destination: "São Paulo",
  weight: 2500,
  unit: "kg",
  hazmat: false,
};
```

---

# Regras de Validação

## 1. Identificador do Contêiner

A propriedade `containerId` deve:

* [ ] Existir no objeto.
* [ ] Ser do tipo `number`.
* [ ] Ser um número inteiro.
* [ ] Ser maior que `0`.

### Valores válidos

```javascript
containerId: 1
containerId: 500
containerId: 1024
```

### Valores inválidos

```javascript
containerId: 0
containerId: -10
containerId: 5.5
containerId: "1024"
```

---

## 2. Destino

A propriedade `destination` deve:

* [ ] Existir no objeto.
* [ ] Ser do tipo `string`.
* [ ] Ter os espaços no início e no final removidos.
* [ ] Permanecer com pelo menos um caractere depois da normalização.

### Valores válidos

```javascript
destination: "São Paulo"
destination: "New York"
destination: "  London  "
```

O último valor deve ser normalizado para:

```javascript
destination: "London"
```

### Valores inválidos

```javascript
destination: ""
destination: "   "
destination: null
destination: 123
```

---

## 3. Peso

A propriedade `weight` deve:

* [ ] Existir no objeto.
* [ ] Ser do tipo `number`.
* [ ] Ser maior que `0`.

### Valores válidos

```javascript
weight: 50
weight: 250.5
weight: 1000
```

### Valores inválidos

```javascript
weight: 0
weight: -20
weight: "500"
weight: null
```

---

## 4. Unidade de Peso

A propriedade `unit` deve:

* [ ] Existir no objeto.
* [ ] Ser do tipo `string`.
* [ ] Possuir um dos valores permitidos.

### Valores permitidos

```text
kg
lb
```

| Unidade | Significado |
| ------- | ----------- |
| `kg`    | Quilogramas |
| `lb`    | Libras      |

### Valores inválidos

```javascript
unit: "g"
unit: "tons"
unit: "KG"
unit: ""
unit: null
```

---

## 5. Material Perigoso

A propriedade `hazmat` deve:

* [ ] Existir no objeto.
* [ ] Ser obrigatoriamente do tipo `boolean`.

### Valores válidos

```javascript
hazmat: true
hazmat: false
```

### Valores inválidos

```javascript
hazmat: "true"
hazmat: 1
hazmat: 0
hazmat: null
```

---

# Normalização

Antes de validar o manifesto, alguns campos podem ser normalizados.

## Destino

Remover espaços existentes no início e no final:

```javascript
destination.trim()
```

Exemplo:

```javascript
"  Rio de Janeiro  "
```

Resultado:

```javascript
"Rio de Janeiro"
```

---

## Unidade

Caso previsto pelos requisitos do exercício, a unidade pode ser convertida para letras minúsculas:

```javascript
unit.toLowerCase()
```

Exemplo:

```javascript
"KG"
```

Resultado:

```javascript
"kg"
```

> A conversão da unidade deve ser aplicada somente se estiver prevista nos testes do exercício.

---

# Exemplo de Manifesto Válido

```javascript
const validManifest = {
  containerId: 123,
  destination: "Santos",
  weight: 850.5,
  unit: "kg",
  hazmat: false,
};
```

---

# Exemplos de Manifestos Inválidos

## Identificador inválido

```javascript
const invalidManifest = {
  containerId: -1,
  destination: "Santos",
  weight: 850.5,
  unit: "kg",
  hazmat: false,
};
```

---

## Destino vazio

```javascript
const invalidManifest = {
  containerId: 123,
  destination: "   ",
  weight: 850.5,
  unit: "kg",
  hazmat: false,
};
```

---

## Peso inválido

```javascript
const invalidManifest = {
  containerId: 123,
  destination: "Santos",
  weight: 0,
  unit: "kg",
  hazmat: false,
};
```

---

## Unidade inválida

```javascript
const invalidManifest = {
  containerId: 123,
  destination: "Santos",
  weight: 850.5,
  unit: "tons",
  hazmat: false,
};
```

---

## `hazmat` inválido

```javascript
const invalidManifest = {
  containerId: 123,
  destination: "Santos",
  weight: 850.5,
  unit: "kg",
  hazmat: "false",
};
```

---

# Critérios de Aceitação

O programa será considerado concluído quando:

* [ ] O manifesto for representado por um objeto.
* [ ] `containerId` for validado como um número inteiro positivo.
* [ ] `destination` for validado como uma string não vazia.
* [ ] Os espaços externos de `destination` forem removidos.
* [ ] `weight` for validado como um número positivo.
* [ ] `unit` aceitar apenas `"kg"` ou `"lb"`.
* [ ] `hazmat` aceitar apenas valores booleanos.
* [ ] Manifestos válidos forem aceitos.
* [ ] Manifestos com propriedades inválidas forem rejeitados.
* [ ] A normalização não alterar indevidamente os dados válidos.

---

# Conceitos Praticados

* Objetos JavaScript
* Propriedades de objetos
* Tipos primitivos
* Validação de dados
* Normalização de strings
* `typeof`
* `Number.isInteger()`
* `trim()`
* `toLowerCase()`
* Operadores lógicos
* Estruturas condicionais
* Valores booleanos
