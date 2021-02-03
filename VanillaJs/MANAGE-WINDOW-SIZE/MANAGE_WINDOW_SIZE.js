let resizeWindow = function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
}

let body = document.getElementsByTagName('body')[0];
body.onresize = resizeWindow;

for(let i = 0; i<10; i++){
    setTimeout(function(){
        var j = i;
        console.log(j);
    }, i*1000);
}