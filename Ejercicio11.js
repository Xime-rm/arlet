
let servicio=500;
alert("SISTEMA DE PAGO\n")
let pago=prompt("¿Cual es tu medio de pago?\n1. Monedas --- 2. Billetes")

function pesaElectronica (){

switch (pago){

case "1":{

    let moneda=300;
    while(moneda!==500 && moneda!==1000){

    let moneda=Number(prompt("¿Con que moneda pagarás?\n Moneda de $500 --- Moneda de $1000"));
    if (moneda===500){

        alert("El dinero está completo, no hay devueltas")
        alert("Vuelve pronto")
        break
    }else if(moneda===1000){

        alert(`El servicio cuesta $${servicio}, tu devuelva es de $${moneda-servicio}`)
        alert("Regresa pronto, te esperamos!")
        break
    }else if(moneda!==500 || moneda!==1000){

        alert("Solo se aceptan monedas de $500 y de $1000")
        
    }}
break    
}case "2":{

    let billete=1000;
    while(billete!==2000 && billete!==5000){

    let billete=Number(prompt("¿Con que billete pagarás?\nBillete de $2000 --- Billete de $5000"))
    if (billete===2000){

        alert(`El servicio tiene un valor de ${servicio}, tu devuelva es de $${billete-servicio}`)
        alert("Regresa pronto, te esperamos!")

        break
    }else if(billete===5000){

        alert(`El servicio tiene un valor de ${servicio}, tu devuelva es de ${billete-servicio}`)
        alert("Regresa pronto, te esperamos!")
        break
   
}else if(billete!==2000 || billete!==5000){

    alert("Solo se aceptan billetes de $2000 y de $5000")
    
}

}


}break 
}}

pesaElectronica();
