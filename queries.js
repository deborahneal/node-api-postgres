
const Pool = require('pg').Pool;
const pool = new Pool({
    
    user: 'postgres',
    host: 'localhost',
    database: 'movies',
    password: '   ',
    port: 5432,
})
const getMovies = (request, response) => {

    pool.query('SELECT * FROM movies ORDER BY id ASC', (error, results) => {

        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getMoviesById = (request, response) => {
   
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM movies WHERE id = $1', [id], (error, results) => {

        if (error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}
const createMovies = (request, response) => {

    const {title, leadactor, poster, director, writer, year } = request.body;

    pool.query('INSERT INTO movies (title, leadactor, poster, director, writer, year) VALUES ($1, $2, $3, $4, $5, $6)', [title, leadactor, poster, director, writer, year], (error, results) => {

        if (error) {
            throw error;
        }
        response.status(201).send(`Movies added: ${title}, ${leadactor}, ${poster}, ${director}, ${writer}, ${year}`)
    })
}
const updateMovies = (request, response) => {

    const id = parseInt(request.params.id);
    const { title, leadactor, poster, director, writer, year } = request.body;

    pool.query(
        'UPDATE movies SET title = $1, leadactor = $2, poster = $3, director = $4, writer = $5, year =6  WHERE id = $7',
        [title, leadactor, poster, director, writer, year, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Movies modified with ID: ${id}`)
        }
    )
}
const deleteMovies = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM movies WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Movies deleted with ID: ${id}`)
    })
  }
module.exports = {
    
    getMovies,
    getMoviesById,
    createMovies,
    deleteMovies,
    updateMovies,
}

