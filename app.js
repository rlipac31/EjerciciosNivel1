
function inicialtextos(){
    
    asignarTextoElemento('#parrafo1',  'Calcula tu Indice de Masa Corporal');
    asignarTextoElemento('#parrafo2',  'calcule el valor del factorial de un número.');
    asignarTextoElemento('#parrafo3',  'convierta un valor en dólares, y devuelva el valor equivalente en soles');
    asignarTextoElemento('#parrafo4',  'área y el perímetro de una sala circular, utilizando el radio brindado por el usuario');
    asignarTextoElemento('#parrafo5',  'muestre en pantalla la tabla de multiplicar de un número dado por el usuario.');
}

function asignarTextoElemento(elemento, texto) {
   
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su
//  altura en metros y peso en kilogramos, que se recibirán como parámetros.


function valorIMC(peso, altura){
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    let resultado = peso / (altura * altura);
   
  //  console.log(` tu IMC es: ${resultado}`);
    asignarTextoElemento('#parrafo1', ` Tu indice de maasa corporal es ${resultado.toFixed(2)}`)
}
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numeroF){
    numeroF =  document.getElementById('numeroF').value;
    console.log(numeroF);
    contador = 0;
    let factorial = numeroF;
    while( contador < numeroF-1){
         contador++;
         factorial = factorial * (numeroF - contador);
         asignarTextoElemento('#parrafo2', ` el factorial de ${numeroF} es ${factorial}`)
        // console.log(`contadorr ${contador} factorialll => ${factorial}`)
         
    }
    return;
}

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.


function textoInput(resultadoConvercion){
    document.getElementById('resultado').value = resultadoConvercion ;
}

function convertirMoneda(valor){
    valor =  document.getElementById('dolar').value;
    let resultadoConvercion = valor * 3.74;
    asignarTextoElemento('#parrafo3', ` El resultado de  ${resultadoConvercion.toFixed(2)} soles`)
    textoInput(resultadoConvercion.toFixed(2))

}
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
//  utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

const pi = 3.14;

function calcularAreaPerimetro(radio){
    radio = document.getElementById('area').value;
    let area = pi * (radio * radio);
    let perimetro = 2 * pi * radio
    console.log(` el area  de  la sala es ${area} M2, y su perimetro es ${perimetro.toFixed(2)} mts`);
    asignarTextoElemento('#parrafo4',` el area  de  la sala es ${area} M2, y su perimetro es ${perimetro.toFixed(2)} mts`)

}
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(nunTabla){
  
    nunTabla = document.getElementById('nunTabla').value;
   
/*    let contador = 1;
    while( contador <= 12 ){ 
        let numeroMulti = nunTabla * contador;
        console.log(`contador ${contador}, multi ${numeroMulti}`);
      
        contador ++; 
        asignarTextoElemento('#parrafo5',`  ${nunTabla} x ${contador} = ${numeroMulti}`);

    } */


        let contador = 1;
        while( contador <= 12 ){ 
            let numeroMulti = nunTabla * contador;
            
            console.log(`contador ${contador}, multi ${numeroMulti}`);
            //
           /*  var newDiv = document.createElement("p");
           
                newDiv.setAttribute("id", "p");
                newDiv.setAttribute("class", "parrafo")
            var newContent = document.createTextNode(`  ${nunTabla} x ${contador} = ${numeroMulti}`);
            console.log('=>>> '+ contador);
            newDiv.appendChild(newContent); //añade texto al div creado.
        
            // añade el elemento creado y su contenido al DOM
            var currentDiv = document.getElementById("div1");
            console.log('node => ' +currentDiv)
            document.body.insertBefore(newDiv, newDiv); */


            let parrafo = document.createElement('p');
            parrafo.setAttribute("class", "parrafo")
            let textoParrafo = document.createTextNode(`  ${nunTabla} x ${contador} = ${numeroMulti}`);
            //agregar nondo
            let elementoPadre = document.querySelector('.padre');
            elementoPadre.appendChild(parrafo);
             parrafo.appendChild(textoParrafo);

            //
           
            contador ++; 
           asignarTextoElemento('#parrafo5',` `);
    
        }
   
 
    //  addElement();
}
/* function addElement() {
    // crea un nuevo div
    // y añade contenido
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hola!¿Qué tal?");
    newDiv.appendChild(newContent); //añade texto al div creado.
  
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }
 */

inicialtextos()
