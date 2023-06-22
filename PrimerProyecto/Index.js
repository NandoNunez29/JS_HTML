

let nombre= "";//prompt ("Digite Nombre");
//console.log("Mi nombre es:" + nombre);
let numero1=0;
let numero2, numero3, numero4, numero5, numero6, numero7, numero8;
let suma, resta, multiplicacion, division;

function devuelveElnombreMasImput(value){
    console.log(nombre);
    console.log(value);
}

function SumarNumeros(){
    suma = parseInt(numero1)+ parseInt(numero2);
    alert("La suma de ambos numeros es: " +suma);
}

function RestarNumeros(){
    resta = parseInt(numero3)+ parseInt(numero4);
    console.log("La resta de ambos numeros es: "+resta);

}

function MultiplicarNumeros(){
    multiplicacion = parseInt(numero5)* parseInt(numero6);
    console.log("El producto de ambos numeros es: "+multiplicacion);

}

function DividirNumeros(){
    division = parseFloat(numero7)/ parseFloat(numero8);
    console.log("El cociente de la division es: "+division);

}