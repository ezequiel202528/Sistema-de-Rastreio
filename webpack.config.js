
const path = require('path')
const miniCssExtractingPlugin = require('mini-css-extract-plugin')

module.exports = {
    devServer : {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    entry: {
        ContagemProducao: './src/ContagemProducao.js',
        index:            './src/index.js',
        JanelaModal:      './src/JanelaModal.js',
        Menu:             './src/Menu.js',
        remocao:          './src/remocao.js',
        Reteste:          './src/Reteste.js',
        validacao:        './src/validação.js',      
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