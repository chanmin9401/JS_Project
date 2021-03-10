// npm으로 설치한 react, react-dom 모듈을 불러와서 사용
import React from 'react';
import ReactDOM from 'react-dom';

import WebGame from './WebGame';

ReactDOM.render(<WebGame />, document.querySelector('#root'));