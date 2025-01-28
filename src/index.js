
// 01 função



function Add(modelo, numero, anofab, reteste, selo, norma, tipo, capacidade, nivel) {
    var tb = document.getElementById("cads");
    var qtdelinhas = tb.length;
    var linha = tb.insertRow(qtdelinhas);

    var cellModelo = linha.insertCell(0);
    var cellNumero = linha.insertCell(1);
    var cellAnoFab = linha.insertCell(2);
    var cellReteste = linha.insertCell(3);
    var cellSelo = linha.insertCell(4);
    var cellNorma = linha.insertCell(5);
    var cellTipo = linha.insertCell(6);
    var cellCapacidade = linha.insertCell(7);
    var cellNivel = linha.insertCell(8);
    

    cellModelo.innerText = modelo;
    cellNumero.innerText = numero;
    cellAnoFab.innerText = anofab;
    cellReteste.innerText = reteste;
    cellSelo.innerText = selo;
    cellNorma.innerText = norma;
    cellTipo.innerText = tipo;
    cellCapacidade.innerText = capacidade;
    cellNivel.innerText = nivel;

   

  




    // Responsavel em identificar o casco pelo seu numero
    const BotaoDePesquisa = document.getElementById('botao-lupa-pesquisa-de-selo'); // ID do botão de pesquisar numero do cilindro.
    const InputdePesquisaCilindro = document.getElementById('destino-extintor');// ID do input de Pesquisa do numero do casco.


    BotaoDePesquisa.addEventListener('click', () => {


        let expressao = InputdePesquisaCilindro.value


        if (expressao === numero) {     // numero esta ligado ao numero do casco digitado dentro do input e guardado dentro da tabela.

            cellNumero.style.color = '#ff0011'  //  cor da letra
            cellNumero.style.background = '#FFFFFF' // cor de fundo da celula
            cellSelo.style.color = '#ff0011'  //  cor da letra
            cellSelo.style.background = '#FFFFFF' // cor de fundo da celula

        }
    })
    // Responsavel em identificar o casco pelo seu numero



    //Responsavel em desfazer a pesquisa de Casco
    const BotaoSetaDesfazerPesquisaDeCasco = document.getElementById('botao-seta-pesquisa-de-selo')

    BotaoSetaDesfazerPesquisaDeCasco.addEventListener('click', ()=>{

            cellReteste.style.color = '#FFFFFF'
            cellReteste.style.background = '#121213'
         

    });
    //Responsavel em desfazer a pesquisa de Casco

    const BotaoDeAdicao = document.getElementById('botao-adicao'); // ID do botão de Adicionar Extintor na Tabela.
    //    const UltimoReteste = document.getElementById('reteste');// ID do input do ultimo reteste.


    // Responsavel em identificar se o reteste foi marcado irregularmente a 5 anos ou ano atual
    BotaoDeAdicao.addEventListener('click', () => {

        let expressao = reteste

        const AnoAtual = 2024

        if (expressao > AnoAtual) {

            cellReteste.style.background = '#FFFFFF'
            cellReteste.style.color = '#000000'

        }
    })
    // Responsavel em identificar se o reteste foi marcado irregularmente a 5 anos ou ano atual




    // Swal de Error
    var ret = document.querySelector(".reteste").value;
    
        if (ret <= 2019) {
            Swal.fire({
                title: 'Error!',
                text: 'Atenção Reteste menor do que previsto! (5 Anos).',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
        }
    
    
    
    
   

    // Swal de Exclamação
    if (ret > 2024) {
        Swal.fire({
            title: 'Error!',
            text: 'Atenção Reteste maior do que o ano atual.',
            icon: 'question',
            confirmButtonText: 'Fechar'
        })
    }

    // Estamos trabalhando neste envento para adição do numero do selo

    // ID do Botão de Incmrento do Selo     
    // const BotaoSelo = document.getElementById('botao-Selo-incremento');

    // // ID do valor adicionado dentro do input de Selo    

    //     BotaoSelo.addEventListener('click', ()=>{

    //         // Obter o valor Real

    //         let ValorAtual = parseInt(document.getElementById('selo').value);

    //         ValorAtual +=  1;

    //     // Adicionar o valor Real com a Adição Através od incremento
    // document.getElementById('selo').value = ValorAtual

    // })   

  
}


















