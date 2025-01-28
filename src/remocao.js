




const BotaoRemocaoDeCasco = document.getElementById('exclusão')

BotaoRemocaoDeCasco.addEventListener('click' , (modelo, numero, anofab, reteste, selo, norma, tipo, capacidade, nivel) =>{

   

   
    
   
});

function remover(modelo, numero, anofab, reteste, selo, norma, tipo, capacidade, nivel) {
    var tb = document.getElementById("cads");
    var qtdelinhas = tb.length;
    var linha = qtdelinhas;

    
    var cellNumero = linha.removeChild(1);
    var cellAnoFab = linha.removeChild(2);
    var cellReteste = linha.removeChild(3);
    var cellSelo = linha.removeChild(4);
    var cellNorma = linha.removeChild(5);
    var cellTipo = linha.removeChild(6);
    var cellCapacidade = linha.removeChild(7);
    var cellNivel = linha.removeChild(8);
    

    
    cellNumero = numero.value;
    cellAnoFab = anofab.value;
    cellReteste = reteste.value;
    cellSelo = selo.value;
    cellNorma = norma.value;
    cellTipo = tipo.value;
    cellCapacidade = capacidade.value;
    cellNivel = nivel.value;
}