const textoNombre= document.querySelector("#nombre");
const textoDecimal= document.querySelector("#decimal");
const textoOctal= document.querySelector("#octal");
const textoBinario= document.querySelector("#binario");
const textoHexadecimal= document.querySelector("#hexadecimal");
const btnLimpiar=document.querySelector(".formulario__boton");

textoNombre.addEventListener('keyup', () => {
    const arregloDecimal=convertToDecimal();
    textoDecimal.value=arregloDecimal;
    textoOctal.value=convertToOctal(arregloDecimal);
    textoBinario.value=convertToBinario(arregloDecimal);
    textoHexadecimal.value=convertToHexadecimal(arregloDecimal);
});

btnLimpiar.addEventListener('click', ()=> {
    textoNombre.value="";
    textoDecimal.value="";
    textoOctal.value="";
    textoBinario.value="";
    textoHexadecimal.value="";
    infoIngresada=""
});

function convertToDecimal() {
    let asciiResult =[];
    const texto=textoNombre.value;
    
    for (let i = 0; i < texto.length; i++) {
        // Obtiene el codigo ASCII del carácter        
        asciiResult[i]= texto.charCodeAt(i);
    } 
    return asciiResult;
}

function convertToOctal(arregloNumeros) {
    const octal=arregloNumeros.map(numero => numero.toString(8));
    
    return octal;
}
function convertToBinario(arregloNumeros) {
    const binario=arregloNumeros.map(numero => numero.toString(2));
     
    return binario;
}
function convertToHexadecimal(arregloNumeros) {
    const hexa=arregloNumeros.map(numero => numero.toString(16));
    
    return hexa;
}
