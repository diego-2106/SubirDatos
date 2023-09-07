const API_URL = "https://jsonplaceholder.typicode.com/users"; //Guardo la url en una variable

//Evento al boton
const boton = document.querySelector('.btn');
boton.addEventListener('click', () => {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const fecha = document.querySelector('#fecha').value;

    data.nombre = nombre;
    data.apellido = apellido;
    data.fecha = fecha;
});

//Creo el objeto datos
const data = {
    nombre: ' ',
    apellido: ' ',
    fecha: ' '
};



const promise = {
    method: 'POST',// Metodo Post para enviar
    Headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) //convierto a string con stringify
};


fetch(API_URL, promise)
    .then(response => {
        if (!response.ok) {
            throw new Error('Hubo un fallo en el envio');
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta del server', data);
    })
    .catch(error => {

        console.error('Error', error);
    })