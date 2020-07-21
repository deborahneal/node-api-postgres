console.log('hit');
let url = 'http://localhost:3000/movies';
let container = document.querySelector('.container');
let create = document.querySelector('.create');
let titleCreate = document.querySelector('.titleCreate');
let leadactorCreate = document.querySelector('.leadactorCreate');
let posterCreate = document.querySelector('.poster')
let directorCreate = document.querySelector('.director')
let writerCreate = document.querySelector('.writer')
let yearCreate = document.querySelector('.year')
let idUpdate = document.querySelector('.idUpdate')
let titleUpdate = document.querySelector('.titleUpdate');
let leadactorUpdate = document.querySelector('.leadactorUpdate');
let update = document.querySelector('.update')
let del = document.querySelector('.delete')
let deleteId = document.querySelector('.deleteId')

create.addEventListener('click', addMovies);
update.addEventListener('click', updateMovies);
del.addEventListener('click', removeLast)


function addMovies(){
    
    let movie = {
        tilte: titleCreate.value,
        leadactor: leadactorCreate.value,
        poster: poster.Create.value,
        director: director.Create.value,
        writer: writer.Create.value,
        year: year.Create.value
    }
    fetch(`${url}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(movie)

    })
    .then(res => console.log(res))
    .then(res => res.json())
    .catch(e => console.log(e))

    updatePage()

}   

function updateMovies(){
    //event.preventDefault()
    let movie = {
        tilte: titleCreate.value,
        leadactor: leadactorCreate.value,
        poster: poster.Create.value,
        director: director.Create.value,
        writer: writer.Create.value,
        year: year.Create.value
    }
    fetch(`${url}/${idUpdate.value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
    .catch(e => console.log(e))
    //console.log(name, idUpdate.value)

    updatePage();
}

function removeLast(){
    

    fetch(`${url}/${deleteId.value}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .catch(e=>console.log(e))
}

function updatePage(){

    fetch(url)
    .then(res => res.json())
      //.then(res => console.log(res))
    .then(res => {

        for(let i = 0; i < res.length; i++) {
            
            const element = res[i];
            
            console.log(element);
            const body = document.querySelector('body')
            let movieImg = document.createElement('img')
            movieImg.setAttribute('src', element.poster )
            body.appendChild(movieImg);

            let movie = document.createElement('h1');

            movie.innerHTML = `${element.title} ${element.leadactor} ${element.director} ${element.writer} ${element.year}`
            container.prepend(movie);
            movie.appendChild(movieImg)
        }
    })

}   
updatePage();