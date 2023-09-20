
let pizza=7000;
let sandwich=5000;
let ensalada=15000;
let salsa=3000;
let menu = prompt("¿Que deseas pedir del menú? \ 1. Pizza --- 2. Sándwiches --- 3. Ensaladas")

function pizzeria(){

switch (menu){

    case "1":{

        let cantidad=Number(prompt("Cuantas pizzas deseas llevar?"))
        alert(`Serian ${cantidad} pizzas, cada una a ${pizza}`)

        cantidad*=pizza

        let salsas=prompt("¿Desea agregar salsa, por tan solo $3000? \n 1.Si --- 2. No")

        switch (salsas){

            case "1":{

                alert(`Seria un costo total de ${cantidad+salsa}, adicionando el valor de la salsa`)


            break    
            } case "2":{

                alert(`Seria un costo total de ${cantidad}`)

            break    
             }


        }


    break    
    }case "2":{

        let cantidad=Number(prompt("Cuantos sándwiches deseas llevar?"))
        alert(`Serian ${cantidad} sandwiches, cada uno a ${sandwich}`)

        cantidad*=sandwich

        let salsas=prompt("¿Desea agregar salsa, a tan solo $3000? \n 1.Si --- 2. No")

        switch (salsas){

            case "1":{

                alert(`Seria un costo total de ${cantidad+salsa}, adicionando el valor de la salsa`)


            break    
            } case "2":{

                alert(`Seria un costo total de ${cantidad}`)

            break    
             }


        }

        


    break   
    }case "3":{

        let cantidad=Number(prompt("Cuantas ensaladas deseas llevar?"))
        alert(`Serian ${cantidad} ensaladas, cada una a ${ensalada}`)

        cantidad*=ensalada

        let salsas=prompt("¿Desea agregar salsa, a tan solo $3000? \n 1.Si --- 2. No")

        switch (salsas){

            case "1":{

                alert(`Seria un costo total de ${cantidad+salsa}, adicionando el valor de la salsa`)


            break    
            } case "2":{

                alert(`Seria un costo total de ${cantidad}`)

            break    
             }


        }

        


    break    
    }



}}

pizzeria();