const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');   

module.exports = (env, argv) => {
    
    let isProduction = process.env.NODE_ENV === 'production';
    //isProduction = true;
    
    return {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: './src/index.js',
        output: {
            filename: 'js/FancyProductDesigner.js',
            path: path.resolve(__dirname, 'test'),
            publicPath: '',
        },
        watchOptions: {
            ignored: ['/data/uploads/**/', '/node_modules/', '/dist/**'],
        },
        devServer: {
            https: true,  
            static:  [
                {
                    directory: path.join(__dirname, 'dist'),
                    publicPath: '/dist',
                },
                { 
                    directory: path.join(__dirname, 'tests'),
                    publicPath: '/',
                },
                { 
                    directory: path.join(__dirname, 'data'),
                    publicPath: '/data',
                },                
            ]     
        },
        module: {
           rules:[
                {
                    test: /\.less$/,
                    use:[
                        "style-loader", 
                        "css-loader",
                        "less-loader"
                    ]
                },
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
           ]
        },
        plugins: []
    }
    
};