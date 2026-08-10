# Especificação - Email Masker

## Objetivo

Criar um programa em JavaScript capaz de mascarar o nome de usuário de um endereço de e-mail, preservando apenas o primeiro e o último caractere antes do `@` e mantendo o domínio original.

**Exemplo:**

```text
Entrada:
myEmail@email.com

Saída:
m*****l@email.com
```

---

## Requisitos Funcionais

### 1. Criar a Função

- [ ] Criar uma função chamada `maskEmail`.
- [ ] A função deve receber um parâmetro chamado `email`.

---

### 2. Mascarar o E-mail

Dentro da função:

- [ ] Separar a parte do usuário da parte do domínio.
- [ ] Manter:
  - o primeiro caractere do usuário;
  - o último caractere do usuário.
- [ ] Substituir todos os caracteres intermediários por `*`.
- [ ] Concatenar novamente o domínio original.
- [ ] Retornar o e-mail mascarado.

> **Dica:** métodos como `slice()`, `repeat()`, `indexOf()` e `replace()` podem ser utilizados para resolver o problema.

---

### 3. Criar um E-mail

Fora da função:

- [ ] Criar uma variável chamada `email`.
- [ ] Armazenar um endereço de e-mail válido.

---

### 4. Executar a Função

- [ ] Chamar `maskEmail(email)`.
- [ ] Exibir o resultado utilizando `console.log()`.

---

# Exemplos Esperados

| Entrada | Saída |
|----------|-------|
| `apple.pie@example.com` | `a*******e@example.com` |
| `freecodecamp@example.com` | `f**********p@example.com` |
| `info@test.dev` | `i**o@test.dev` |
| `user@domain.org` | `u**r@domain.org` |

---

# Critérios de Aceitação

O programa será considerado concluído quando:

- [ ] A função `maskEmail` existir.
- [ ] A função receber um e-mail como parâmetro.
- [ ] Apenas o primeiro e o último caractere do usuário forem preservados.
- [ ] Todos os caracteres intermediários forem substituídos por `*`.
- [ ] O domínio permanecer inalterado.
- [ ] A função retornar o e-mail mascarado.
- [ ] Uma variável `email` for criada.
- [ ] O resultado for exibido no console.

---

# Conceitos Praticados

- Funções
- Parâmetros
- Retorno de valores (`return`)
- Strings
- Manipulação de texto
- `slice()`
- `repeat()`
- `indexOf()`
- Concatenação de strings
- `console.log()`