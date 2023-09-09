const offset=0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    /*SOLICITAR REQUISIÇÃO DE API "TUDO CERTO" */
    .then(function(response){
    console.log(response)
    })
    /*SOLICITAR REQUISIÇÃO DE API "CASO ALGO DEE ERRADO" */
    .catch(function(error){
        console.log(error)
    })
    /*SOLICITAR REQUISIÇÃO DE API "INDENPEDENTE SE DE CERTO OU ERRADO MOSTRE QUE A REQUISIÇÃO FOI CONCLUIDA" */
    .finally(function(){
        console.log("Requisição concluida!")
    })

