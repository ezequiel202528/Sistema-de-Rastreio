
function AbrirModalVendedor(){

    const modal = document.getElementById('janela-modal-vendedor');
    modal.classList.add('abrir') //adiciona uma classe dinamicamente no documento


    modal.addEventListener('click' , (e) => {

        if (e.target.id == 'fechar' || e.target.id == 'janela-modal-vendedor') {
            modal.classList.remove('abrir') //Remove uma classe dinamicamente no documento
        }
    })


   
}

function AbrirModalCliente(){

    const modalCliente = document.getElementById('janela-modal-cliente');
    modalCliente.classList.add('abrir') //adiciona uma classe dinamicamente no documento


    modalCliente.addEventListener('click' , (e) => {

        if (e.target.id == 'fechar' || e.target.id == 'janela-modal-cliente') {
            modalCliente.classList.remove('abrir') //Remove uma classe dinamicamente no documento
        }
    })


   
}









