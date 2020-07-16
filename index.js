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
app.get('/people', db.getPeople)
app.get('/people/:id', db.getPeopleById)
app.post('/people', db.createPeople)
app.put('/people/:id', db.updatePeople)
app.delete('/people/:id', db.deletePeople)

app.listen(port, () => {
    console.log(`App running on port ${port}. `)
})


