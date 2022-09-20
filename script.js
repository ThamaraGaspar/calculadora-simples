const insert = (num) =>{
const numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + num;
}

const clean = () => {
    document.getElementById('resultado').innerHTML = '';
}

const back = () => {
   const resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

const calcular = () => {
    const resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado) 

    }
 }

