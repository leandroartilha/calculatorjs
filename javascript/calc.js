function insert(num){
    var numero = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('res').innerHTML = '';
}

function apagar(){
    var resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){

    var resultado = document.getElementById('res').innerHTML;
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado);
    }
    else{
        window.alert('Insira valores para calcular!')
    }
}