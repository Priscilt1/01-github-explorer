const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//variaveis ambientes
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    // se (?) tiver em modo de desevolvimento, (:) senão é produção
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //SourceMaps - O mesmo codigo da aplicação para conseguir debugar
    //com o path, permite que caminhe ate o aquivo sem colocar a barra, usando o dirname (diretorio), evitando o conflito entre barras
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //arquivo principal
    output: { //arquivo de saida que sera mandando para o bundle
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }, 
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: { //automatização/servidor
        contentBase: path.resolve(__dirname, 'public') //avisando o conteudo estatico
    },
    plugins: [ //Injetando de forma automatizada o html com o script
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: { //configurações de importação de arquivos
        rules: [ //regras
            {
                test: /\.jsx$/, //para indentificar se é o arquivo js ou não pela a extensão
                exclude: /node_modules/, //para o node nao importar para o browser o arquivo jsx. (ja que é responsabilidade do react)
                use: 'babel-loader', //integração do babel e da webpack, convertendo o arquivo para que o browser entenda
            },
            {
                test: /\.css$/, //configuração para ler css
                exclude: /node_modules/, 
                use: ['style-loader', 'css-loader'], 
            }
        ]
    }
}