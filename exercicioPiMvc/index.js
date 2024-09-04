const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cadastroRoutes = require('./routes/cadastroRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', cadastroRoutes);

app.get('/', (req, res) => {
    res.render('home', { title: 'StrayCode'});
});

app.post('/submit', (req, res) => {
    const { nome, email } = req.body;
    res.send(`Dados recebidos - Nome: ${nome}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
