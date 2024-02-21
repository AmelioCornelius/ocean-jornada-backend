const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello, World')
})

app.get('/oi', function (req, res) {
  res.send('Olá, mundo!')
})

//Lista de personagens
const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']
//

//Read all -> [GET] /item
app.get('/item', function (req, res) {
  //Envio a lista inteira como resposta HTTP
  res.send(lista)
})

//Read By ID -> [GET /item/:id]
app.get('/item/:id', function (req, res) {
  //Acesso o ID no parâmetro de rota
  const id = req.params.id

  //Acesso item na lista baseado no ID recebido
  const item = lista[id]

  //Envio o item obtido como resposta HTTP
  res.send(item)
})
//Sinalização que o corpo da requisição está em JSON
app.use(express.json())

//Create -> [POST] /item
app.post('/item', function (req, res) {
  //Extrair o corpo da requisição
  const body = req.body

  //Pega-se o nome (string) que foi enviado dentro do corpo
  const item = body.name

  //Coloca-se o nome dentro da lista de itens
  lista.push(item)

  //Envio da resposta de sucesso 
  res.send('Item adicionado com sucesso!')
})

app.listen(3000)