# JS_Project

* Project for studying about JavaScript and React

## VanillaJs Project

+ JS Module 실습
> ES6의 Module 시스템을 다루어보기 위한 프로젝트</br></br>
> package.json 파일로 설정을 한다면 'type : module'을 선언한 후 Module 활용</br></br>
> 혹은,</br>
```html
    <script type="module" src="Module_comp.js"></script>
```
> 위와 같이 html에 선언한 script tag에 type="module"로 선언 가능</br></br>
> import * from './Module.js'로 하나의 모듈 파일을 가져오는 경우,</br></br>
> 로컬환경에서는 CORS error가 발생할 수 있다.</br></br>

+ CORS error?
> 서로 다른 출처로부터 리소스가 공유될 경우 웹 페이지에서 보안상의 이유로 리소스의 로드를 제한하는 현상</br></br>
> Local 환경에서 하나의 html을 열고, script를 호출하는 경우,</br></br>
> script들이 동일한 폴더하에 존재하므로 CORS error가 발생하지 않지만,</br></br>
> ES6 Module을 사용하려고 하면 브라우저가 import하려는 module의 출처를 알 수 없다고 판단하여 CORS error를 발생</br></br>
> 이를 해결 하기 위해 npm http-server를 활용하면 실습에 용이</br></br>
```
npm http-server -g  --글로벌 선언을 하여 어디서나 사용할 수 있게
npx http-server  --  해당 프로젝트에 들어가서 서버를 기동
```
> 위 과정을 거치면</br></br>
http://127.0.0.1:8080
> 위의 주소로 현재 프로젝트의 소스를 접근할 수 있음</br></br>
> 위 과정을 거쳐서 실행하면 CORS error없이 Module과 관련된 실습이 가능</br></br>
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
```javascript
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
```javascript
output: {
    path : path.join(__dirname, 'dist'),
    filename : 'app.js'
}
```
> entry에 명시된 항목들을 모아서 module에 선언된 규칙을 거쳐 output의 [output.path/output.filename]에 하나의 script로 병합</br></br>


+ Import VS. Require?!
> import, export는 react에서 주로 사용, Require는 node에서 주로 사용</br>
> babel이 import, export와 require를 호환시켜주는 역할을 수행</br>
> webpack.config.js같은 node가 실행하는 설정파일에서는 import를 사용할 경우 에러가 발생</br></br>
> 
+ 숫자야구
> Map을 이용하여 리스트를 반복문으로 생성가능</br>
```javascript
<ul>
    {[
        {key : '1', value : '사과'},
        {key : '2', value : '귤'},
        {key : '3', value : '배'}
    ].map((item) => {
        return(
            <li>{item.key}. {item.value}</li>
        );
    })}
</ul>
```
> 이때 li 태그에 key속성을 unique ID로 부여하지 않으면 경고메세지가 출력</br>
> React는 각각의 컴포넌트들을 key로 구분하므로 가능한 key속성을 부여하는것이 바람직</br></br>
+ Props
> 부모가 자식 컴포넌트를 import하여 사용할 때 props라는 형태로 parameter를 보내줄 수 있다.</br>
> 이때 부모의 parameter를 자식의 자식에게 전달하거나 자식의 자식의 자식의... 등 점점 깊어지는 경우 굉장히 복잡해짐</br>
> 이를 위해 Redux나 React Context를 활용하여 global state를 관리하는 것이 개발, 유지 보수에 용이</br></br>

+ state의 array객체 조작 시 유의사항
> React가 state의 변화를 감지하는 시점에 render()를 다시 실행</br>
```javascript
state = {
    array : []
}
this.setState({
    array.push(1)
})
```
> 위와 같이 현재 state의 참조값이 변하지 않은 상태에서 push()를 통해 값을 넣으면</br>
> 기존 state의 array에도 1이 추가된 상태가 되므로 React가 변화를 감지하지 못하여 render()를 실행하지 않음</br>
```javascript
state = {
    array : []
}
this.setState({
    array : [...this.state.array,1]
})
```
> 따라서 위와 같이 새로운 배열을 만들어서 참조하게 한 후 React가 변화를 감지할 수 있도록 수정해야함</br></br>

+ Rendering 제어
> component의 state가 변경되는 이벤트가 발생될때마다 render()를 호출하게 되어 성능저하의 원인이 될 수 있음</br></br>
> 이때 class 방식의 경우 shouldComponentUpdate라는 React함수를 활용하여 불필요한 rendering을 제어 가능
```javascript
    shouldComponentUpdate(nextProps, nextState, nextContext){
        ... add Logic
    }
```
> s.C.U 함수에 이전 state와 이벤트가 일어난 현재시점의 state가 다른 경우에만 render()를 호출하도록 로직을 추가하면 불필요한 rendering을 제어 가능 </br></br>
+ PureComponent, memo
> 굳이 s.C.U 함수를 선언하여 세세한 제어가 필요하지 않은 경우, PureComponent를 활용해도 동일하게 동작
```javascript
    import { Component } from 'react'
    class Try extends Component {       -- 이걸
    
    import { PureComponent } from 'react'
    class Try extends PureComponent {   -- 이렇게
```
> 이렇게 변경하면 세세한 rendering 제어 로직을 구현할 수는 없지만, 따로 명시하지 않아도 state간 변경점을 탐지하여 rendering을 자동으로 제어</br></br>
> hooks의 경우 
```javascript
    import { memo } from 'react'
    const Try = memo(() => {
           ...
    });
```
> react의 memo를 import해서 사용하면 PureComponent와 유사한 기능을 제공</br></br>

+ ReactLifeCycle
> Class로 구현된 React Component는 다음과 같은 LifeCycle을 갖는다.</br></br>
> **Constructor ->Render -> Ref -> componentDidMount 
    -> (setState/ props 변경 시 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
    -> componentWillUnmount -> 소멸**</br></br>
> 이때, 각각의 단계에서 사용가능한 함수들이 있다.
```javascript
// 최초 rendering이 성공적으로 실행이 되면 호출되는 함수, 비동기 요청을 수행
    componentDidMount(){
        this.interval = setInterval(change, 100);
    }
    // rerendering 후 event처리
    componentDidUpdate(){

    }
    // 컴포넌트가 제거되기 직전 호출되는 함수, 실행중인 비동기 요청을 해제
    componentWillUnmount(){
        clearInterval(this.interval);
    }
```
> 이를 React Hooks로 변환하여 구현시, useEffect를 사용해야한다.
```javascript
    useEffect(() => {   // componentDidMount, componentDidUpdate의 역할 수행
        ...
        return () => { // componentWillUnmount의 역할 수행
            ...
        }
    }, [state1]);
```
> 둘의 차이점은 **변화 인지의 관점**에 있다.</br></br>
> Class기반의 변화 인지는 Mount완료 여부와 State의 변화를 감지하여 이루어지며, callBack함수의 종류는 다음과 같다.</br></br>
> **componentDidMount** - 최초로 해당 component가 rendering되어 mount되는 시점에 호출되는 함수</br></br>
> **componentDidUpdate** - 해당 Class의 state가 변하면 이를 감지하여 state의 변화 이후 처리를 위해 호출되는 함수</br></br>
> **componentWillUnmount** - 해당 컴포넌트가 unMount되기 직전에 호출되는 함수</br></br>
> React Hooks기반의 변화 인지는 state의 변화를 감지하여 이루어지며, react의 useEffect를 통해 callBack로직이 수행된다.</br></br>
> useEffect의 로직은 componentDidMount, componentDidUpdate의 역할 수행하고, return 되는 함수의 로직은 componentWillUnmount의 역할 수행</br></br>
> useEffect는 callBack함수 뿐만 아니라 배열을 두번째 인자로 받는데,
```javascript
    useEffect(() => {
        ...
    }, [state1]);           // state1의 변화만을 추적, componentDidUpdate기능과 유사
    
    useEffect(() => {
        ...
    }, [state2,state3]);    // state2와 state3의 변화를 동시에 추적, componentDidUpdate기능과 유사
    
    useEffect(() => {
        ...
    }, []);    // 인자가 없는 경우 최초 rendering될때 한번만 수행, componentDidMount기능과 유사
```
> 두번째 인자로 전달받은 state에 대한 전담 추적장치로 활용한다.
