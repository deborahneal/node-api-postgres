// npm i express pg
// npm install --save cors

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const db = require('./queries');



app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API'})
})
app.get('/movies', db.getMovies)
app.get('/movies/:id', db.getMoviesById)
app.post('/movies', db.createMovies)
app.put('/movies/:id', db.updateMovies)
app.delete('/movies/:id', db.deleteMovies)

app.listen(port, () => {
    console.log(`App running on port ${port}. `)
})


