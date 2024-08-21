const express = require ('express')
const app = express()

const loginRoutine = require ('./src/routes/loginRoute')
app.use(loginRoutine)

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.listen(3000, function(){
    console.log('App rodando na porta 3000')
})
/*const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configuração do Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração da View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rotas
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
*/