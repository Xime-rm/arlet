
let counterAna=0;
let counterDiego=0;
let counterRound=0;

function votantes(){

while(counterRound<=9){

let candidato=prompt("¿Por quien quieres votar? \n 1. Ana Maria Suarez --- 2. Diego Acero");

switch (candidato){

    case "1":{

        counterAna++
        counterRound++

    break    
    } case "2":{

        counterDiego++
        counterRound++

    break    
    }


} alert(`Los votos para Ana Maria Suarez son: ${counterAna} \n Los votos para Diego Acero son: ${counterDiego}`)
} if(counterAna>counterDiego){

    alert(`El candidato ganador es Ana Maria Suarez con ${counterAna} votos :) \n Diego Acero ha perdido,  pero obtuvo ${counterDiego} votos`)


}else if(counterAna==counterDiego){

    alert(`En estas votaciones hubo un empate, ambos candidatos han obtenido ${counterAna} `)


}

else{

    alert(`El candidato ganador es Diego Acero con ${counterDiego} votos :) \n Ana Maria Suarez ha perdido, pero obtuvo ${counterAna} votos`)


}}

votantes();


