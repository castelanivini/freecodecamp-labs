# Especificação - Mad Libs Story Generator

## Objetivo

Criar um programa em JavaScript que gera duas histórias diferentes utilizando variáveis e template literals.

---

## Requisitos Funcionais

### 1. Declaração de Variáveis

Criar as seguintes variáveis utilizando `let`:

| Variável | Descrição |
|----------|-----------|
| `adjective` | Um adjetivo |
| `noun` | Um substantivo |
| `verb` | Um verbo |
| `place` | Um lugar |
| `adjective2` | Um segundo adjetivo |
| `noun2` | Um segundo substantivo |

- [X] Todas as variáveis devem receber valores do tipo **string**.

---

### 2. Primeira História

- [X] Declarar uma variável chamada `firstStory`.
- [X] Utilizar o seguinte modelo para montar a história:

```text
Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].
```

- [X] Substituir os campos entre colchetes pelos valores das variáveis.
- [X] Armazenar o resultado em `firstStory`.

---

### 3. Exibição da Primeira História

Exibir no console:

```text
First story: [firstStory]
```

---

### 4. Atualização das Variáveis

- [ ] Atribuir novos valores para as variáveis:

| Variável |
|----------|
| `adjective` |
| `noun` |
| `verb` |
| `place` |
| `adjective2` |
| `noun2` |

Os novos valores devem ser diferentes dos utilizados anteriormente.

---

### 5. Segunda História

- [ ] Declarar uma variável chamada `secondStory`.
- [ ] Utilizar exatamente o mesmo modelo da primeira história.
- [ ] Substituir os campos pelos novos valores das variáveis.
- [ ] Armazenar o resultado em `secondStory`.

---

### 6. Exibição da Segunda História

Exibir no console:

```text
Second story: [secondStory]
```

---

# Template da História

```text
Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb].
```

---

# Critérios de Aceitação

O programa será considerado concluído quando:

- [ ] As seis variáveis forem declaradas utilizando `let`.
- [ ] Todas as variáveis receberem valores do tipo `string`.
- [ ] A variável `firstStory` for criada.
- [ ] A primeira história seguir exatamente o template fornecido.
- [ ] A primeira história for exibida no console.
- [ ] Os valores das variáveis forem atualizados.
- [ ] A variável `secondStory` for criada.
- [ ] A segunda história utilizar o mesmo template.
- [ ] A segunda história for exibida no console.
- [ ] As duas histórias apresentarem conteúdos diferentes devido à alteração das variáveis.

---

# Conceitos Praticados

- Declaração de variáveis com `let`
- Strings
- Template literals
- Reatribuição de variáveis
- Interpolação de strings
- `console.log()`
```