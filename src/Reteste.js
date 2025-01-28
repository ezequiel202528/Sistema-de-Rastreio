
// 03 função

// Responsavel em fazer o Reteste ficar vermelho se caso for alimentado menor do que previsto por lei --- 5 anos ---
function RetesteMenorqueAnoAtual() {
        let ret = document.querySelector('.reteste').value
        let td = document.querySelector('.cor-dobackgorund')
        if (ret <= 2019) {
                td.style.background = '#ff0011'
                td.style.color = '#000000'
        }
        else {
                td.style.background = '#FFFFFF'
                td.style.color = '#000000'
        }

}
// Responsavel em fazer o Reteste ficar vermelho se caso for alimentado menor do que previsto por lei --- 5 anos ---


//04 função

// Responsavel em fazer o Reteste ficar amarelo se caso for alimentado maior do que previsto por lei --- 5 anos ---
function RetesteMaiorqueAnoAtual() {
        let ret = document.querySelector('.reteste').value
        let td = document.querySelector('.cor-dobackgorund')
        if (ret > 2024) {
                td.style.background = '#FFFF00'
                td.style.color = '#000000'

        }

}
// Responsavel em fazer o Reteste ficar amarelo se caso for alimentado maior do que previsto por lei --- 5 anos ---