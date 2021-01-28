/*

HTML에 태그를 선언하지 않아도 아래의 방법으로 TABLE을 생성하여 Body에 붙일 수 있다.

let BODY = document.body;
let TABLE = document.createElement('table');

for(let i = 0; i<3; i++){
    let TR = document.createElement('tr');
    for(let j = 0; j < 3; j++){
        let TD =document.createElement('td');
        TR.appendChild(TD);
    }
    TABLE.appendChild(TR);
}
BODY.appendChild(TABLE);

*/

let BODY = document.getElementsByTagName('body');
let TABLE = document.getElementById('t3table');
let TR = TABLE.getElementsByTagName('tr');

let TR_LIST = [[],[],[]];
let OX;

let ToggleOX = function(event){
    event.target.innerText = OX;
    TR_LIST[event.target.rowIndex][event.target.columnIndex] = OX;

    if(OX === 'O'){
        OX = 'X';
    }else{
        OX = 'O';
    }
    
}

let CompleteTicTacToe = function(event){
    let X = event.target.rowIndex;
    let Y = event.target.columnIndex;

    let CheckObj = event.target.innerText === 'O' ? 'X' : 'O';
    let completeYn = false;
    
    // X축에 현재 입력한 값과 반대되는 값이 존재하는지 여부를 체크
    if(!TR_LIST[X].includes(CheckObj) && !TR_LIST[X].includes('')){
        completeYn = true;
    }
    
    // Y축에 현재 입력한 값과 반대되는 값이 존재하는지 여부를 체크
    let TR_LIST_Y = [];
    TR_LIST.forEach(TR_OBJ => {
        TR_LIST_Y.push(TR_OBJ[Y]);
    });
    if(!TR_LIST_Y.includes(CheckObj) && !TR_LIST_Y.includes('')){
        completeYn = true;
    }
    // 우하향 대각선
    let TR_LIST_CROSS = [];
    let COL = 0;
    TR_LIST.forEach(TR_OBJ => {
        TR_LIST_CROSS.push(TR_OBJ[COL]);
        COL++;
    });
    if(!TR_LIST_CROSS.includes(CheckObj) && !TR_LIST_CROSS.includes('')){
        completeYn = true;
    }
    // 우상향 대각선
    TR_LIST_CROSS = [];
    COL = 2;
    TR_LIST.forEach(TR_OBJ => {
        TR_LIST_CROSS.push(TR_OBJ[COL]);
        COL--;
    });
    if(!TR_LIST_CROSS.includes(CheckObj) && !TR_LIST_CROSS.includes('')){
        completeYn = true;
    }

    if(completeYn){
        alert(event.target.innerText + "의 승리!");
        init();
    }
}

let init = function(){
    OX = 'O';
    let rowIndex = 0;
    Array.from(TR).forEach(tr => {
        let TD = tr.getElementsByTagName('td');
        let columnIndex = 0;
        
        Array.from(TD).forEach(td  => {
            td.innerText = '';
            td.addEventListener('click', ToggleOX);
            td.addEventListener('click', CompleteTicTacToe);
            
            // td객체 각각에 새로운 Key-Value로 위치 정보를 주입
            td.rowIndex = rowIndex;
            td.columnIndex = columnIndex;
            TR_LIST[rowIndex][columnIndex]  = '';
            columnIndex++;
        });
        rowIndex++;
        columnIndex = 0;
    });
}

init();
