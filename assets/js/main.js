const offset=0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
/*SOLICITAR REQUISIÇÃO DE API "TUDO CERTO" */
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))

    /*SOLICITAR REQUISIÇÃO DE API "CASO ALGO DEE ERRADO" */
    .catch((error) => console.error(error))