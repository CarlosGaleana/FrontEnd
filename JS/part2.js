const cuadrado = function(x){
    return x*x;
}
console.log(cuadrado(12));

const ruido = function(){
    console.log("kataplum¡");
}
ruido();

const exponencial = function(base,exponente){
    let resultado = 1;
    for(let i = 0; i < exponente; i++){
        resultado *=exponente;
    }
    return resultado;
}
console.log(exponencial(2,10));

console.log(sumar(2,2));
function sumar(x,y){
    return x+y;
}

const restar = (a, b) => {
    return a-b;
}
console.log(restar(40,8));

function saludar(quien){
    console.log("Hola" + quien);
}
saludar("Explorer");
console.log("Bye");

//Excepciones
function promptDirection(question){
    let result = prompt(question);
    if(result.toLowerCase()=="left") return "L";
    if(result.toLowerCase()=="right") return "R";
    throw new Error("Dirección invalida: " + result);
}
function look(){
    if(promptDirection("which way?")=="L"){
        return "una casa";
    }else{
        return "2 osos hambrientos";
    }
}
try{
    console.log("Mira a",look());
}catch(error){
    console.log("Hubo un error:" + error);
}

//Asíncrono
