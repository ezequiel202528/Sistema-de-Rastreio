
// Responsavel em fazer o menu aparecer e desaperecer

//  Cadastro de Vendedor
//  Cadastro de Cliente
//  Fechar ordem de S.

let Botmenu = document.querySelector('#imagem-menu');
let menu = document.querySelector('.opcoes');


Botmenu.addEventListener('click', () => {

    if (menu.style.display === 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }

    if (menu.style.display === 'none') {
        return Botmenu.style.display = 'block'
    }
})
// Responsavel em fazer o menu aparecer e desaperecer
