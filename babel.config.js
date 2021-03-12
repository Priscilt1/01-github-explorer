module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', {
            // para nao precisar importar o react
            runtime: 'automatic'
        }]
    ]
}