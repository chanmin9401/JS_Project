const path = require('path');

module.exports = {
    name : 'word-relay-setting',
    mode : 'development', // 실서비스 : production
    devtool : 'eval',

    resolve : {
        extensions: ['.js', '.jsx']
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
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties']
            }
        }],
    },

    output: {
        path : path.join(__dirname, 'dist'),
        filename : 'app.js'
    }
};