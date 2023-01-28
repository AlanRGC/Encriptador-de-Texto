const textoInicial = document.querySelector(".textoInicial");
const textoResultado = document.querySelector(".textoResultado");
const btnCopiar = document.querySelector(".btnCopiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(textoInicial.value);
    textoResultado.value = textoEncriptado;
    textoInicial.value = "";
    btnCopiar.style.visibility = "visible";
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoInicial.value);
    textoResultado.value = textoEncriptado;
    textoInicial.value = "";
}

function btnCopy(){
    textoResultado.select();
    document.execCommand('copy');
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);                    
        }        
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);                    
        }        
    }
    return stringDesencriptada;
}