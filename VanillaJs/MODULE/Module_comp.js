/*
 모듈 시스템을 활용한 실습
 Module_comp : 모듈 파일들을 import하여 관리하는 script
 Module1, Module2 : 임의의 모듈 파일 생성 후 각각의 기능을 export하는 script
 Component기반의 라이브러리와 서비스가 유행하므로 기능별로 모듈을 세분화는 것이 바람직
 */

import {module1Event} from './Module1.js';
import {module2Event_1,module2Event_2} from './Module2.js';

let init = function(){
    let button_module1 = document.getElementById('linkToModule1');
    button_module1.addEventListener('click', module1Event);
    
    let button_module2 = document.getElementById('linkToModule2');
    button_module2.addEventListener('click', module2Event_1);

    let sum = module2Event_2(1,2);
    console.log(sum);
}

init();