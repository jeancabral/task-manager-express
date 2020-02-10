<h1 align="center">
  Gerenciador de Projetos e Tarefas com [Express](https://expressjs.com/pt-br/).
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jeancabral/task-manager-express?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/jeancabral/task-manager-express/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jeancabral/task-manager-express?style=social">
  </a>
  
</p>

### Demonstração

[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge&style=flat)](https://heroku-badge.herokuapp.com/projects.html)

[Demo em https://projetct-task-manager-express.herokuapp.com](https://projetct-task-manager-express.herokuapp.com)

### Rotas

- `POST /projects`: Cadastra um novo projeto

- `GET /projects`: Retorna todos os projetos

- `PUT /projects/:id`: Altera o título do projeto com o `id` presente nos parâmetros da rota.

- `DELETE /projects/:id`: Deleta o projeto associado ao `id` presente nos parâmetros da rota.

- `POST /projects/:id/tasks`: Adiciona uma nova tarefa no projeto escolhido via `id`; 

### Middlewares

- Middleware que checa se o projeto existe;

- Mddleware Global que dá log no número de requisições

## Licença

Esse projeto está sob a licença MIT.