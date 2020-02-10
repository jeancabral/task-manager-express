const express = require('express');

//create an express application 
const app = express();

//enable json
app.use(express.json());

// variables
var projects = [];

//middlewares

/**
 * Recebem o ID do projeto nos parâmetros da URL que verifica se o projeto 
 * com aquele ID existe. Se não existir retorne um erro, caso contrário 
 * permita a requisição continuar normalmente; 
 */

var checkProjectExists = function (req, res, next) {
  const { id } = req.params

  let _project = projects.filter((project) => {
    return project.id === id;
  })

  if (_project.length === 0) {
    return res.status(400).json({error: "Project not exists"})
  }

  next();
}

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
app.post('/projects', function(req, res) {
  let {id, title} = req.body;

  projects.push({id, title, tasks: []})

  return res.json(projects);
});

/**
 * Lista todos projetos e suas tarefas;
 */
app.get('/projects', function(req, res) {
  return res.json(projects);
});

/**
 * Alterar o título do projeto com o id presente nos 
 * parâmetros da rota;
 */
app.put('/projects/:id', checkProjectExists, function(req, res) {
  const id = req.params.id;
  const { title } = req.body;

  let _projects = projects.filter((project) => {
    return project.id === id;
  })

  _projects[0].title = title

  res.send(projects);
});

/**
 * Deleta o projeto com o id presente nos parâmetros da rota;
 */
app.delete('/projects/:id', checkProjectExists, function(req, res) {
  const id = req.params.id;

  let _projects = projects.filter((project) => {
    return project.id != id;
  })

  projects = _projects

  res.send(projects);
});

/**
 * Recebe um campo title e armazenar uma nova tarefa no array 
 * de tarefas de um projeto específico escolhido através do id presente nos 
 * parâmetros da rota;
 */
app.post('/projects/:id/tasks', checkProjectExists, function(req, res) {
  const id = req.params.id;
  const { title } = req.body;

  let _projects = projects.filter((project) => {
    return project.id === id;
  })

  _projects[0].tasks.push(title)

  res.send(projects);
});



//add a port listen
app.listen(3000, function () {
  console.log('🤖  Hello! the task manager app listening on port 3000!');
});
