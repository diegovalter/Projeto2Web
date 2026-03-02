# 🚀 Playwright Native - Full E2E Checkout Flow

Este projeto demonstra uma automação de ponta a ponta (End-to-End) de um fluxo real de compra no **Advantage Online Shopping**. Ao contrário de testes isolados, este script valida toda a jornada do usuário: desde a vitrine até a confirmação do pagamento e geração do número do pedido.

---

## 📋 Jornada Automatizada (E2E)

O script executa e valida as seguintes etapas críticas:

1. **Navegação e Seleção:** Identificação do card de Laptops e escolha de produto específico por ID de imagem.
2. **Carrinho em Camadas:** Validação do *pop-up* de checkout rápido e transição para a área segura.
3. **Checkout Logado:** Realização de login dinâmico dentro do fluxo de `Order Payment`.
4. **Processo de Shipping:** Validação de detalhes de entrega e avanço de etapas.
5. **Pagamento e Confirmação:** Escolha do método de pagamento (MasterCredit), validação do sumário de valores e verificação da mensagem final de sucesso: *"Thank you for buying with Advantage"*.

---

## 🛠️ Tecnologias e Técnicas

* **Playwright Test Runner (@playwright/test)** — Execução nativa com foco em performance.
* **Locators Semânticos:** Uso de `getByRole`, `getByText` e filtros de `locator('..')` para navegar na árvore do DOM de forma resiliente.
* **Auto-Wait Avançado:** Validações de URL com Regex e timeouts customizados para lidar com o processamento de pagamentos da API.
* **Asserções de Negócio:** Verificação de QTY (quantidade) e Total Price no sumário final.

---

## 🏗️ Diferenciais deste Projeto

* **Fluxo Sem Interrupções:** Diferente de testes unitários, este projeto foca na **experiência do usuário (UX)** completa.
* **Validação de Sucesso Real:** O teste só é considerado "passado" se o número do pedido (`orderNumberLabel`) for gerado e exibido na tela.
* **Regex para URLs:** Uso de expressões regulares nas validações de `toHaveURL` para suportar parâmetros dinâmicos de navegação.

---

## 📂 Estrutura Simplificada

```text
├── tests/
│   └── compra.spec.js     # Script completo do fluxo de compra
├── playwright.config.js   # Configurações de base e navegadores
└── package.json           # Scripts de execução

```

---

## 🚀 Como Executar

1. **Instalar dependências:**
```bash
npm install

```


2. **Executar o teste (Modo Headless):**
```bash
npx playwright test

```


3. **Executar com interface (UI Mode):**
```bash
npx playwright test --ui

```
