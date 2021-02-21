(function () {

    "use strict"
    function obtenerTipo(i) {
        var result = ''
        for (var j = 0; j < pokemons[i].type.length; j++) {
            if (j === 0) {
                result = result + pokemons[i].type[j]
            } else {
                result = result + ', ' + pokemons[i].type[j]
            }
        }
        return result;
    }

    var container = document.querySelector(".container")
    // var buscador = document.getElementById("buscador")
    // var caja = document.getElementById("caja")

   

    for (var i = 1; i <= pokemons.length; i++) {
        var card = document.createElement('section')
        card.classList.add('card')
        card.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png" alt="1">'
            + '<h6>Nombre: ' + pokemons[i - 1].name.english + '</h6>'
            + '<h6>Tipo: ' + obtenerTipo(i) + '<BR>'
            + 'HP: ' + pokemons[i - 1].base.HP + '</h6>'
        container.appendChild(card)
    }
    
    // buscador.addEventListener('click', function (){

    //     container.innerHTML = ''
        
    //     for (var i = 0; i < 5; i++) {
    //         alert(caja.value+','+pokemons[i].id);
    //         if (caja.value == pokemons[i].id){

    //             var card = document.createElement('section')
    //             card.classList.add('card')
    //             card.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (i+1) + '.png" alt="1">'
    //                 + '<h6>Nombre: ' + pokemons[i].name.english + '</h6>'
    //                 + '<h6>Tipo: ' + obtenerTipo(i) + '<BR>'
    //                 + 'HP: ' + pokemons[i].base.HP + '</h6>'
    //             container.appendChild(card)
    //         }else{

    //         }
    //     }
    // })


})()