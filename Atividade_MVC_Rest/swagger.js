const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'API de Cadastro',
        description: 'Documentação da API de Cadastro',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/cadastro.js', './routes/admin.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app.js');
});
