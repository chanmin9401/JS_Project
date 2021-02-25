// npm으로 설치한 react, react-dom 모듈을 불러와서 사용
const React = require('react');
const ReactDom = require('react-dom');

const WebGame = require('./WebGame');

ReactDom.render(<WebGame />, document.querySelector('#root'));