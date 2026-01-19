Automação de Testes E2E - SauceDemo

Este projeto contém a automação da jornada de usuário no e-commerce SauceDemo, focando nos principais cenários de uso, como autenticação e checkout. O framework utilizado foi Cypress com a arquitetura Page Object Model (POM) para garantir um código limpo e de fácil manutenção.
-----
Cenários de Teste (BDD)
Os testes foram desenhados seguindo a sintaxe Gherkin, garantindo que as regras de negócio sejam respeitadas:

Feature: Autenticação de Usuários

    Cenário 1: Login realizado com sucesso
    Dado que acesso a página de login
    Quando insiro o usuário standard_user
    E a senha secret_sauce
    Então devo ser redirecionado para a página de produtos.

    Cenário 2: Tentativa de acesso com usuário bloqueado
    Dado que acesso a página de login
    Quando insiro o usuário locked_out_user
    E a senha secret_sauce
    Então devo ver uma mensagem de alerta sobre o bloqueio
    E devo permanecer na página de login.

    Cenário 3: Tentativa de acesso com credenciais inválidas
    Dado que acesso a página de login
    Quando insiro o usuário standard_user
    E a senha wrong_sauce que está incorreta
    Então me acesso à home page deve ser bloqueado com um aviso de credenciais inválidas.


Tecnologias e Padrões Utilizados
    Framework: Cypress
    Linguagem: JavaScript
    Padrão de Projeto: Page Object Model (POM)
    Versionamento: Git & GitHub

Estrutura de Pastas

    ├── cypress/
    │   ├── e2e/              # Arquivos de teste (.cy.js)
    │   ├── support/          
    │   │   ├── pages/        # Implementação do Page Object Model
    │   │   └── commands.js   # Comandos customizados
    └── cypress.config.js     # Configurações globais do framework

Como executar os testes
1. Clone este repositório:

        git clone https://github.com/AlanaOlive/automacao-cypress

2. Instale as dependências:
    
        npm install

3. Abra o Cypress (Modo Iterativo):

        npx cypress open

4. Execute em modo Headless (Terminal):

        npx cypress run