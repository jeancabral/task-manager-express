const express = require('express');

//create an express application 
const app = express();

//enable json
app.use(express.json());

// projects
var projects = [];


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
  res.send('wip');
});

/**
 * A rota deve deletar o projeto com o id presente nos parâmetros da rota;
 */
app.get('/projects', function(req, res) {
  res.send('wip');
});

/**
 * A rota deve alterar apenas o título do projeto com o id presente nos 
 * parâmetros da rota;
 */
app.put('/projects/:id', function(req, res) {
  res.send('wip');
});

/**
 * A rota deve deletar o projeto com o id presente nos parâmetros da rota;
 */
app.delete('/projects/:id', function(req, res) {
  res.send('wip');
});

/**
 * A rota deve receber um campo title e armazenar uma nova tarefa no array 
 * de tarefas de um projeto específico escolhido através do id presente nos 
 * parâmetros da rota;
 */
app.post('/projects/:id/tasks', function(req, res) {
  res.send('wip');
});



//add a port listen
app.listen(3000, function () {
  console.log('🤖  Hello! the task manager app listening on port 3000!');
});
