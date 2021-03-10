const path = require('path')

module.exports = {
    //com o path, permite que caminhe ate o aquivo sem colocar a barra, usando o dirname (diretorio), evitando o conflito entre barras
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo principal
    output: { //arquivo de saida que sera mandando para o bundle
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }, 
    resolve : {
        extensions: ['.js', '.jsx'],
    },
    module: { //configurações de importação de arquivos
        rules: [ //regras
            {
                test: /\.jsx$/, //para indentificar se é o arquivo js ou não pela a extensão
                exclude: /node_modules/, //para o node nao importar para o browser o arquivo jsx. (ja que é responsabilidade do react)
                use: 'babel-loader', //integração do babel e da webpack, convertendo o arquivo para que o browser entenda
            }
        ]
    }
}