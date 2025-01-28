
const path = require('path')
const miniCssExtractingPlugin = require('mini-css-extract-plugin')

module.exports = {
    devServer : {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    entry: {
        ContagemProducao: './pastaJS/ContagemProducao.js',
        index:            './pastaJS/index.js',
        JanelaModal:      './pastaJS/JanelaModal.js',
        Menu:             './pastaJS/Menu.js',
        remocao:          './pastaJS/remocao.js',
        Reteste:          './pastaJS/Reteste.js',
        validacao:        './pastaJS/validação.js',      
    },
    mode: 'production',
    module:{
        rules: [{
            test: /\.css$/,
            use: [miniCssExtractingPlugin.loader, 'css-loader']
        },{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    output: {
        filename: '[name].min.js'
    },
    plugins: [
        new miniCssExtractingPlugin()
    ]
}