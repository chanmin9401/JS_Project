const React = require('react');
const { useState, useRef, useEffect } = React;

const rspCoords = {
    ROCK : '0',
    SCISSORS :'-142px',
    PAPER : '-284px'
};
const scores = {
    SCISSORS : 1,
    ROCK :0,
    PAPER : -1
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v){
        return v[1] === imgCoord;
    })[0];
};

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.ROCK);
    const [score , setScore] = useState(0);
    const interval = useRef();

    // useEffect의 두번째 인자배열에 아무것도 없는 경우 componentDidMount처럼 최초 한번만 동작
    // 변화를 감지할 인자가 들어있는 경우, componentDidUpdate처럼 동작할 수 있다.
    useEffect(() => {   // componentDidMount, componentDidUpdate의 역할 수행
        interval.current = setInterval(changeHand,100);
        return () => { // componentWillUnmount의 역할 수행
            clearInterval(interval.current);
        }
    }, [imgCoord]);

    const changeHand = () => {
        if(imgCoord === rspCoords.ROCK){
            setImgCoord(rspCoords.SCISSORS);
        }else if(imgCoord === rspCoords.SCISSORS){
            setImgCoord(rspCoords.PAPER);
        }else if(imgCoord === rspCoords.PAPER){
            setImgCoord(rspCoords.ROCK);
        }
    }

    const onclickBtn = (CHOICE) => () => {
        clearInterval(interval.current);
        const myScore = scores[CHOICE];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0){
            setResult('비겼습니다!');
        }else if([-1, 2].includes(diff)){
            setResult('이겼습니다!');
            setScore((prevScore) => prevScore + 1 );
        }else{
            setResult('졌습니다..');
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand,100);    
        }, 2000);
        
    }
    return(
        <>
        <div id="computer" className="computer" style = {{ background : `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
            <button id="scissor" className="btn" onClick={onclickBtn('SCISSORS')}>가위</button>
            <button id="rock" className="btn" onClick={onclickBtn('ROCK')}>바위</button>
            <button id="paper" className="btn" onClick={onclickBtn('PAPER')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
    </>
    );
}

module.exports = RSP;