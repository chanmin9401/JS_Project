# JS_Project

* Project for studying about JavaScript and React

## VanillaJs Project

***

## React Project

### To init node module
1. npm init 
2. npm i react react-dom
3. npm i -D [moduleName]

### Simple projects

+ 구구단 게임
> class와 hooks를 이용하여 구구단 게임을 구현</br></br>
> class 방식의 component 생성 시 this와 state에 대한 주의</br></br>
> rendering 영역에서 onChange, onClick과 같은 event 제어 시 </br>
```
onchange = (e) => {
    this.setState({inputValue : e.target.value});
}
```
> 위와 같이 화살표 함수를 사용해야 해당 class를 this로 참조 가능</br></br>
> hooks는 class와 다르게 state를 각각 선언하며, 선언과 동시에 state setting 함수까지 선언</br></br>
> 기존 javascript의 class에 익숙한 경우 state의 최초 선언이 번거롭게 느껴질 수 있으나,
> 각각의 state를 handling할 경우에는 hooks가 좀더 간결한 코드작성이 가능(취향 차이)
</br>
</br>

+ 끝말잇기
> create-react-app을 이해하기 위해 react, babel, webpack을 npm을 이용하여 직접 설정</br></br>
```
npm init
npm i react react-dom
npm i -D [moduleName]   -- 기존에 작성된 package.json이 있다면 새로 생성한 폴더에 파일을 올려서 활용
```
> webpack을 활용하므로 package.json의 scripts 영역에 command(임의의 이름)와 webpack 실행 명령어를 선언</br></br>
```
"dependencies": {
  "react": "^17.0.1",
  "react-dom": "^17.0.1"
},
"devDependencies": {
  "@babel/core": "^7.12.16",
  "@babel/plugin-proposal-class-properties": "^7.12.13",
  "@babel/preset-env": "^7.12.16",
  "@babel/preset-react": "^7.12.13",
  "@pmmmwh/react-refresh-webpack-plugin": "^0.4.3",
  "babel-loader": "^8.2.2",
  "react-refresh": "^0.9.0",
  "webpack": "^5.21.2",
  "webpack-cli": "^4.5.0",
  "webpack-dev-server": "^3.11.2"
}
```
> 모듈 설치 시 package.json에 표기되는 module 목록 예시</br></br>
```
"scripts": {
  "dev": "webpack serve --env development"
}
```
> 위와 같이 설정 시 npm run dev 명령어를 통해 webpack과 server를 실행 가능</br></br>
#### webpack.config.js
##### KeyProperties - entry, module, plugins, output
+ entry</br>
```
resolve : {
    extensions: ['.js', '.jsx', '.css']
},
entry : {
    app:['./client']
}
```
> entry는 webpack이 병합작업에 필요로하는 script 파일의 목록을 선언</br></br>
> 확장자를 매번 입력하는 것이 번거로운 경우 resolve를 선언하여 확장자를 관리</br></br>
+ module</br>
```
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
```
> babel관련 모듈을 설치 후 presets, plugins의 options를 선언하여 활용 가능</br></br>
+ plugins</br>
> Hot Reloading과 같은 개발에 필요한 plugin 적용 시 optional하게 명시하여 사용</br></br>
+ output</br>
```
output: {
    path : path.join(__dirname, 'dist'),
    filename : 'app.js'
}
```
> entry에 명시된 항목들을 모아서 module에 선언된 규칙을 거쳐 output의 [output.path/output.filename]에 하나의 script로 병합</br></br>
