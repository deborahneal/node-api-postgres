console.log('hit');
let url = 'http://localhost:3000/people';
let container = document.querySelector('.container');
let create = document.querySelector('.create');
let firstNameCreate = document.querySelector('.firstNameCreate');
let lastNameCreate = document.querySelector('.lastNameCreate');
let idUpdate = document.querySelector('.idUpdate')
let firstNameUpdate = document.querySelector('.firstNameUpdate');
let lastNameUpdate = document.querySelector('.lastNameUpdate');
let update = document.querySelector('.update')
let del = document.querySelector('.delete')
let deleteId = document.querySelector('.deleteId')

create.addEventListener('click', addPerson);
update.addEventListener('click', updatePerson);
del.addEventListener('click', removeLast)


function addPerson(){
    
    let name = {
        first: firstNameCreate.value,
        last: lastNameCreate.value,
    }
    fetch(`${url}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(name)

    })
    .then(res => console.log(res))
    .then(res => res.json())
    .catch(e => console.log(e))

    updatePage()

}   

function updatePerson(){
    //event.preventDefault()
    let name = {
        first: firstNameUpdate.value,
        last: lastNameUpdate.value
    }
    fetch(`${url}/${idUpdate.value}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
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
            //allIds.push(element.id)
            console.log(element);

            let person = document.createElement('h1');

            person.innerHTML = `${element.first} ${element.last}`
            container.prepend(person);
        }
    })

}   
updatePage();