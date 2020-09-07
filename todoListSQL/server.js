const express = require ('express')
const con = require ('./dao/connection')
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded({extended: true})); /*parametro de rota.*/
app.use(bodyParser.json()); /*parametro de rota.*/


const routes = require('./src/routes/usuarioRoutes.js') /*rotasusuarios/

routes(app)

app.route('/')
    .get((req, res) => {
        res.send('API todoList funcionando')
    }) 

app.route('/')
    .get((req, res) => {
        res.send('API todoList funcionando')
    }) /*dados da requisição e resposta*/
 /*dados da requisição e resposta*/
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

 app.get('/fabiana', async (req, res) => {;

    try {
      await  con.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
   

    res.send('Fabiana')
  })

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })


