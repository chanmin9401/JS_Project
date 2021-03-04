let module2Event_1 = function(){
    console.log('모듈 2 이벤트 입니다.');
}
let module2Event_2 = function(a,b){
    return a+b;
}
export { module2Event_1, module2Event_2 };