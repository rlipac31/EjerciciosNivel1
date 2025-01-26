
function inicialtextos() {
    asignarTextoElemento('#parrafo1', 'Calcula tu Indice de Masa Corporal');
    asignarTextoElemento('#parrafo2', 'calcule el valor del factorial de un número.');
    asignarTextoElemento('#parrafo3', 'convierta un valor en dólares, y devuelva el valor equivalente en soles');
    asignarTextoElemento('#parrafo4', 'área y el perímetro de una sala circular, utilizando el radio brindado por el usuario');
    asignarTextoElemento('#parrafo5', 'muestre en pantalla la tabla de multiplicar de un número dado por el usuario.');
}
function asignarTextoElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);//captura el tipoo de elemento que le pasamoms como parametro
    elementoHTML.innerHTML = texto;//insertamos el texto que pasamos como parametro en la funcion
    return;
}
//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su
//  altura en metros y peso en kilogramos, que se recibirán como parámetros.
function valorIMC(peso, altura) {
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    let resultado = peso / (altura * altura);

    //  console.log(` tu IMC es: ${resultado}`);
    asignarTextoElemento('#parrafo1', ` Tu indice de maasa corporal es ${resultado.toFixed(2)}`)
}
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numeroF) {
    numeroF = document.getElementById('numeroF').value;
    console.log(numeroF);
    contador = 0;
    let factorial = numeroF;
    while (contador < numeroF - 1) {
        contador++;
        factorial = factorial * (numeroF - contador);
        asignarTextoElemento('#parrafo2', ` el factorial de ${numeroF} es ${factorial}`)
        // console.log(`contadorr ${contador} factorialll => ${factorial}`)

    }
    return;
}

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function textoInput(resultadoConvercion) {
    document.getElementById('resultado').value = resultadoConvercion;
}
function convertirMoneda(valor) {
    valor = document.getElementById('dolar').value;
    let resultadoConvercion = valor * 3.74;
    asignarTextoElemento('#parrafo3', ` El resultado de  ${resultadoConvercion.toFixed(2)} soles`)
    textoInput(resultadoConvercion.toFixed(2))
}
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
//  utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
const pi = 3.14;
function calcularAreaPerimetro(radio) {
    radio = document.getElementById('area').value;
    let area = pi * (radio * radio);
    let perimetro = 2 * pi * radio;
    console.log(` el area  de  la sala es ${area} M2, y su perimetro es ${perimetro.toFixed(2)} mts`);
    asignarTextoElemento('#parrafo4', ` el area  de  la sala es ${area} M2, y su perimetro es ${perimetro.toFixed(2)} mts`)
}
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(nunTabla) {
    limpiarTabla();
    nunTabla = parseInt(document.getElementById('nunTabla').value);
    asignarTextoElemento('#parrafo5', `la tabla de ${nunTabla} es: `);
    if (!Number.isInteger(nunTabla)) {
        let numeroNOvalido = document.getElementById('nunTabla').value;
        asignarTextoElemento('#parrafo5', ` ${numeroNOvalido} no es un numero: `);
        console.log('no  es numero....');

    } else if (nunTabla < 0 || nunTabla > 12) {
        asignarTextoElemento('#parrafo5', ` ${nunTabla} no es un numero valido inserte solo del 1 al 12: `);
        console.log('no  es numero valido');
    } else {

        console.log('multiplicando');
        let contador = 1;
        while (contador <= 12) {
            let numeroMulti = nunTabla * contador;
            //  console.log(`contador ${contador}, multi ${numeroMulti}`);
            let parrafo = document.createElement('p');//creamos el elemento
            parrafo.setAttribute("class", "parrafo");
            let textoParrafo = document.createTextNode(`${nunTabla} x ${contador} = ${numeroMulti}`);//creamos el texto
            //agregar nondo
            let elementoPadre = document.querySelector('.padre');//capturamos el elemeento padre
            elementoPadre.appendChild(parrafo);//insertamos el elemento en dentro del elemento padre
            parrafo.appendChild(textoParrafo);// 
            contador++;
        }
    }
    document.getElementById("nunTabla").value = "";//esetea el input despues de imprimir la tabla 
}
function limpiarTabla() {
    let tablaMultiplicar = document.getElementById("padre");//capturando el elemennto padre
    //  tablaMultiplicar.innerHTML= ''; limpinaod hijos pasando un cadena vacia al padre
    while (tablaMultiplicar.firstChild) {// remueve los hijos simpre cuando haya un primer elemento(funcion removeChild)
        tablaMultiplicar.removeChild(tablaMultiplicar.firstChild);
    }
}

inicialtextos();//llamando texxtos iniciales para toodos los ejercicios
