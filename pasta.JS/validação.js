


const formulario = document.getElementById('formulario')
const modelo = document.querySelector('#modelo');
const numero = document.querySelector('#numero');
const anofab = document.querySelector('#anofab');
const reteste = document.querySelector('#reteste');
const selo = document.querySelector('#Selo');
const nomraFab = document.querySelector('#normafabricante');
const tipo = document.querySelector('#tipo');
const capacidade = document.querySelector('#Capacidade');


formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if (modelo.value === "") {
        alert("O campo MODELO(Fabricante) não foi preenchido, se você continuar os dados serão inseridos, mas o campo modelo ficara vazio.");
        return;
    }

    if (numero.value === "") {
        alert("O campo NUMERO não foi preenchido, se você continuar os dados serão inseridos, mas o campo numero ficara vazio.");
        return;
    }

    if (anofab.value === "") {
        alert("O campo ANO DE FAB não foi preenchido, se você continuar os dados serão inseridos, mas o campo Ano de Fab ficara vazio.");
        return;
    }

    if (reteste.value === "") {
        alert("O campo RETESTE não foi preenchido, se você continuar os dados serão inseridos, mas o campo Reteste ficara vazio.");
        return;
    }


    if (selo.value === "") {
        alert("O campo SELO  não foi preenchido, se você continuar os dados serão inseridos, mas o campo Selo ficara vazio.");
        return;
    }

    if (nomraFab.value === "") {
        alert("O campo NORMA DE FAB não foi preenchido, se você continuar os dados serão inseridos, mas o campo Norma de Fab ficara vazio.");
        return;
    }

    if (tipo.value === "") {
        alert("O campo TIPO não foi preenchido, se você continuar os dados serão inseridos, mas o campo Tipo ficara vazio.");
        return;
    }

    if (capacidade.value === "") {
        alert("O campo CAPACIDADE não foi preenchido, se você continuar os dados serão inseridos, mas o campo capacidade ficara vazio.");
        return;
    }


    formulario.submit();
    return;
});

