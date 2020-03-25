const express = require('express');

const app = express();

app.get('/', (request, response) => response.json({
    evento: 'Semana Omnistack',
    aluno: 'Róger Araújo',
}));

app.listen(3333);