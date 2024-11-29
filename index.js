const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const PORT = 3000;

const app = express();
const server = createServer(app);

// Se configura para que acepte datos tipo JSON o de formularios
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// El directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.sendFile(join(__dirname, 'views/index.html'));
});

app.get('/inicio', (request, response) => {
    response.sendFile(join(__dirname, 'views/inicio.html'));
});

app.get('/form', (request, response) => {
    response.sendFile(join(__dirname, 'views/form.html'));
});

app.get('/score-general', (request, response) => {
    response.sendFile(join(__dirname, 'views/score-general.html'));
});

app.get('/score', (request, response) => {
    response.sendFile(join(__dirname, 'views/index.html'));
});

server.listen(PORT, () => {
    console.log(`server running at https://localhost:${PORT}`)
})