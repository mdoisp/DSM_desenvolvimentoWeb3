const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const cadastroRoutes = require('./routes/cadastro');
const adminRoutes = require('./routes/admin');
app.use('/', cadastroRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log('Aplicação rodando em http://localhost:3000');
    console.log('Documentação disponível em: http://localhost:3000/docs');
});
