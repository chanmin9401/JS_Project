let NUM_LIST = new Array(45).fill().map((NUM, IDX) => {
    return IDX+1;
});

// 1 ~ 45의 숫자를 shuffle 후 앞이나 뒤에서 추출
let SHUFFLED_NUM_LIST = [];
while(NUM_LIST.length > 0){
    let POP_NUM = Math.floor(Math.random() * NUM_LIST.length);
    SHUFFLED_NUM_LIST.push(NUM_LIST.splice(POP_NUM,1)[0]);
}

let WINNING_NUM = SHUFFLED_NUM_LIST.slice(0,6).sort((a,b) => {return a-b;});
let BONUS_NUM = SHUFFLED_NUM_LIST[SHUFFLED_NUM_LIST.length-1];

let WINNING_RESULT = document.getElementById('WINNING_RESULT');
let DELAY_TIME = 0;
for( let i = 0; i<WINNING_NUM.length; i++){
    setTimeout(function callBack(){
        let WINNING_BALL = document.createElement('div');
        WINNING_BALL.textContent = WINNING_NUM[i];
        
        WINNING_BALL.style.display = 'inline-block';
        WINNING_BALL.style.textAlign = 'center';
        WINNING_BALL.style.border = '1px solid black';
        WINNING_BALL.style.borderRadius = '10px';
        WINNING_BALL.style.marginRight = '5px';
        WINNING_BALL.style.width = '20px';
        WINNING_BALL.style.height = '20px';
        
        WINNING_RESULT.appendChild(WINNING_BALL);
    }, DELAY_TIME);
    DELAY_TIME += 1000;
}

setTimeout(function callBack(){
    let BONUS_BALL = document.createElement('div');
    BONUS_BALL.textContent = BONUS_NUM;
    BONUS_BALL.style.textAlign = 'center';
    BONUS_BALL.style.border = '1px solid black';
    BONUS_BALL.style.borderRadius = '10px';
    BONUS_BALL.style.width = '20px';
    BONUS_BALL.style.height = '20px';

    WINNING_RESULT.appendChild(BONUS_BALL);
}, DELAY_TIME);

