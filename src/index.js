const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

//create an express application
const app = express();

const port = process.env.PORT || 5000;

//enable json
app.use(express.json());
app.use(cors());

// variables
var projects = [];

//middlewares

/**
 * Recebem o ID do projeto nos parâmetros da URL que verifica se o projeto
 * com aquele ID existe. Se não existir retorne um erro, caso contrário
 * permita a requisição continuar normalmente;
 */

var checkProjectExists = function (req, res, next) {
  const { id } = req.params;

  const _project = projects.find((p) => p.id == id);

  if (!_project) {
    return res.status(400).json({ error: "Project not exists" });
  }

  next();
};

/**
 * middleware global chamado em todas requisições que imprime (console.log)
 * uma contagem de quantas requisições foram feitas na aplicação até então;
 */
app.use(function (req, res, next) {
  console.count("Número de requisições");
  next();
});

// routes

/**
 * A rota deve receber id e title dentro do corpo e cadastrar um novo projeto
 * dentro de um array no seguinte formato:
 *
 * {
 *   id: "1",
 *   title: "Novo projeto",
 *   tasks: []
 * };
 *
 * Certifique-se de enviar tanto o ID quanto o título do projeto
 * no formato string com aspas duplas.
 */

app.get("/", function (req, res) {
  return res.send(
    `Mais informações acesse: <a href='https://github.com/jeancabral/task-manager-express'>https://github.com/jeancabral/task-manager-express</a>`
  );
});

app.post("/projects", function (req, res) {
  let { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is blank" });
  }

  const _project = { id: uuid(), title, tasks: [] };

  projects.push(_project);

  return res.json(_project);
});

/**
 * Lista todos projetos e suas tarefas;
 */
app.get("/projects", function (req, res) {
  return res.json(projects);
});

/**
 * Alterar o título do projeto com o id presente nos
 * parâmetros da rota;
 */
app.put("/projects/:id", checkProjectExists, function (req, res) {
  const { id } = req.params;
  const { title } = req.body;

  const _projects = projects.find((p) => p.id == id);

  _projects.title = title;

  return res.json(_projects);
});

/**
 * Deleta o projeto com o id presente nos parâmetros da rota;
 */
app.delete("/projects/:id", checkProjectExists, function (req, res) {
  const id = req.params.id;

  const _projectIndex = projects.findIndex((p) => p.id == id);

  projects.splice(_projectIndex, 1);

  return res.send();
});

/**
 * Recebe um campo title e armazenar uma nova tarefa no array
 * de tarefas de um projeto específico escolhido através do id presente nos
 * parâmetros da rota;
 */
app.post("/projects/:id/tasks", checkProjectExists, function (req, res) {
  const id = req.params.id;
  const { title } = req.body;

  const _project = projects.find((p) => p.id == id);

  _project.tasks.push(title);

  return res.json(_project);
});

//add a port listen
app.listen(port, function () {
  console.log(`🤖  Hello! The task manager app is listening on port ${port}!`);
});
