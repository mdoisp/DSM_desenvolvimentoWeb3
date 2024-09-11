const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoute = require('./routes/userRoutes');
const moongoose = require('mongoose');

let url = 'mongodb://localhost:27017/DW3'
let mongodb = process.env.MONGODB_URI || url;
moongoose.connect(mongodb);
moongoose.Promise = global.Promise;
let db = moongoose.connection;
db.on('error', console.error.bind(console, "Erro ao conectar á base de dados do MongoDB"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.listen(3000, () => {
    console.log('Server rodando em http://localhost:3000/user')
});
app.use(userRoute);