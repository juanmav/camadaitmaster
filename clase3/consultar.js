// import fetch from 'node-fetch';
var fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(function (personas) {

        var primera = personas.find(function (p) {
            return p.id === 8;
        });

        console.log(primera);

    });