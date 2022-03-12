var numero1;
numero1 = 4;
var numero2;
numero2 = 4;
console.log("\n*************Variables******************\n");
console.log(numero1);
console.log("Número 1:" + numero1 + "Número 2: " + numero2);

var frase1;
frase1 = 'Ejemplo comillas simples';
var frase2;
frase2 = "Ejemplo comillas dobles";
console.log("\n*************Cadenas******************\n");
console.log(frase1);
console.log("Frase 1:" + frase1 + "Frase 2" + frase2);

console.log("\n*************Condicionales******************\n");
console.log(numero1>numero2);

console.log("\n*************OPERADOR OR******************\n");
console.log(true||flase);

console.log("\n*************OPERADOR AND******************\n");
//console.log(true&&flase);

console.log("\n*************ARREGLOS******************\n");
let listadeNumeros = [2,3,4,5,6,7,8,9];

console.log(listadeNumeros[5]);
listadeNumeros.push(16);
console.log(listadeNumeros);

let listadePalabras = ["Explorer", "Palabra2", "LaunchX"];

let palabra= "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

console.log("\n*************OBJETOS******************\n");
let explorer = {
    nombre: "Nombre",
    email: "asdasda@hotmail.com",
    numReg: 12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Pasteleria", "Taqueria", "Vacunacion"]
}
console.log(explorer);
console.log(explorer.email);//Comentario
/*Comentario de linea */

//Flujo condicional
let number1 = 2;
let number2 = 6;
console.log("\n************if / else*************\n");
if(number1 > number2 && number2 > 5){
    console.log("El numero 1 es mayor que numero 2");
}
else if(number1 = number2 || number1 < 3){
    console.log("Los números son iguales");
}
else{
    console.log("El numero 2 es mayor que el numero 1");
}

//Ciclo condicional
console.log("\n************While*************\n");
let numberDoWhile = 0;
while(numberDoWhile < 20){
    numberDoWhile = numberDoWhile + 2;
    console.log(numberDoWhile);
}

//Ciclo condicional de una iteracion mínima
console.log("\n************Do While*************\n");
numberDoWhile = 0;
do{
    numberDoWhile = numberDoWhile + 2;
    console.log(numberDoWhile);
}while(numberDoWhile < 20);

//Ciclo for con iteración controlada
console.log("\n************For*************\n");
for(let numeroFor = 0; numeroFor <=12; numeroFor = numeroFor +2){
    console.log(numeroFor);
}

//Opciones para evitar anidar condicionales
console.log("\n************Switch*************\n");
switch(prompt("¿Cómo esta el clima?")){
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "soleado":
        console.log("Ponte bloqueador");
        break;
    case "nublado":
        console.log("Tapate bien");
        break;
    default:
        console.log("No se como está el clima");
        break;
}