
let lado1=-5;
let lado2=-5;
let lado3=-5;

alert("Vamos a rectificar si el siguiente triangulo es equilatero")
alert("INICIEMOS")

function triangulo(){

while(lado1<0){

let lado1=Number(prompt("Ingrese la longitud del primer lado"));
let lado2=Number(prompt("Ingrese la longitud del segundo lado"));
let lado3=Number(prompt("Ingrese la longitud del tercer lado"));


if(lado1==lado2 && lado1==lado3){

    alert("Correcto el triangulo es equilatero :)")

    break

} else if (lado1<0 || lado2<0 || lado3<0){

    alert("Valores incorrectos")

}

else{

    alert("El triangulo no es equilatero :c")

    break

}
}}
triangulo();
