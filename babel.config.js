module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            // para nao precisar importar o react
            runtime: 'automatic'
        }]
    ]
}