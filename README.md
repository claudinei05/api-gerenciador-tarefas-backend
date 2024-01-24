# GerenciadorTarefas Api

Repositório back-end da aplicação GerenciadorTarefas

---

### Contextualização do projeto

O GerenciadorTarefas é uma sistema de Gestão de listas de fazer.

- Nele, os usuarios poderão cadastrar organizar Compromissos diários .

---

### Orientações Para rodar o projeto

1º Inicializar as instalação de bibliotecas e configuração

  npm install

2º Variáveis de conexão com o banco de dados

    - Criar arquivo .env com as Variáveis citadas abaixo

          PORT=
          DB_USER=
          DB_PASS=
          DB_HOST=
          DB_NAME=

3º Criação e rodagem das migration

    - Criar Migration: npm run migration:generate -- src/app/shared/database/migrations/NomeMigration

    - Rodar Migration: npm run migration:run
4º Rodar Projeto

  npm run dev

---
### Caminhos e rotas

1º Criar conta

- http://localhost:3333/user/createaccount

2º Login

- http://localhost:3333/user/login

3º Criar Tarefas

- http://localhost:3333/user/:userId/tanks
  OBS: Substitua o parâmetro userId pelo ID do usuário

4º Alterar (Atualizar) tarefas

- http://localhost:3333/user/:userId/tanks/idTank
  OBS: Substitua o parâmetro userId pelo ID do usuário e o campo idTank pelo ID da tarefa

5º Listar tarefas de usuário

- http://localhost:3333/user/:userId/tanks
  OBS: Substitua o parâmetro userId pelo ID do usuário

6º Deletar tarefa

- http://localhost:3333/user/:userId/tanks/idTank
  OBS: Substitua o parâmetro userId pelo ID do usuário e o campo idTank pelo ID da tarefa

---
- Usecases: Um arquivo para cada caso de uso
- Controller: Um único arquivo contendo todos os métodos da feature
- Repository: Um único arquivo contendo todos os métodos da feature
