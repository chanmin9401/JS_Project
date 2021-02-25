const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name : 'word-relay-setting',
    mode : 'development', // 실서비스 : production
    devtool : 'eval',   // 실서비스 : hidden-source-map

    resolve : {
        extensions: ['.js', '.jsx', '.css']
    },
    // entry와 output이 핵심
    // entry의 app목록을 합쳐서 output의 app.js파일로 생성
    entry : {
        app:['./client'],
    },

    module: {
        rules : [{
            test : /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets:[
                    ['@babel/preset-env',{
                        targets : {
                            browsers : ['> 1% in KR']    // preset을 적용할 브라우저의 종류를 정의할 수 있다.
                        }
                    }],
                    '@babel/preset-react'],   // plugin들의 모음이 preset
                plugins:[
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel'
                ]
            }
        },{
            test : /\.css$/,
            use: ['style-loader', 'css-loader'],
        }],
    },
    plugins : [
        new RefreshWebpackPlugin()
    ],
    output: {
        path : path.join(__dirname, 'dist'),
        filename : 'app.js'
    },

    devServer:{
        publicPath : '/dist',
        hot : true
    }
};