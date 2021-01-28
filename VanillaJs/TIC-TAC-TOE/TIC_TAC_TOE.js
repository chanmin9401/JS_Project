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

Array.from(TR).forEach(tr => {
    let TD = tr.getElementsByTagName('td');
    Array.from(TD).forEach(td  => {
        td.innerText = 'O';
    });
});
