const { Component } = require('react');
const React = require('React');

const rspCoords = {
    ROCK : '0',
    SCISSORS :'-142px',
    PAPER : '-284px'
}
const scores = {
    SCISSORS : 1,
    ROCK :0,
    PAPER : -1
}

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v){
        return v[1] === imgCoord;
    })[0];
}

class RSP_Class extends Component {
    state = {
        result : '',
        imgCoord : '0',
        score : 0
    };
    interval;
    // class의 경우 : constructor -> render -> ref -> componentDidMount 
    // -> (setState/ props 변경 시 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
    // -> componentWillUnmount -> 소멸

    // 최초 rendering이 성공적으로 실행이 되면 호출되는 함수, 비동기 요청을 수행
    componentDidMount(){
        this.interval = setInterval(this.changeHand, 100);
    }
    // rerendering 후 event처리
    componentDidUpdate(){

    }
    // 컴포넌트가 제거되기 직전 호출되는 함수, 실행중인 비동기 요청을 해제
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    changeHand = () => {
        const {imgCoord} = this.state;
        if(imgCoord === rspCoords.ROCK){
            this.setState({
                imgCoord : rspCoords.SCISSORS
            });
        }else if(imgCoord === rspCoords.SCISSORS){
            this.setState({
                imgCoord : rspCoords.PAPER
            });
        }else if(imgCoord === rspCoords.PAPER){
            this.setState({
                imgCoord : rspCoords.ROCK
            });
        }
    }
    // 고차 함수 패턴
    onclickBtn = (CHOICE) => () => {
        const {imgCoord} = this.state;
        clearInterval(this.interval);
        const myScore = scores[CHOICE];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0){
            this.setState({
                result : '비겼습니다!'
            });
        }else if([-1, 2].includes(diff)){
            this.setState((prevState) => {
                return {
                    result : '이겼습니다!',
                    score : prevState.score + 1
                }
            });
        }else{
            this.setState((prevState) => {
                return {
                    result : '졌습니다..',
                    score : prevState.score - 1
                }
            });
        }
        setTimeout(() => {
            this.interval = setInterval(this.changeHand,100);    
        }, 2000);
        
    }
    render() {
        const { result, score, imgCoord } = this.state;
        return (
            <>
                <div id="computer" className="computer" style = {{ background : `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
                <div>
                    <button id="scissor" className="btn" onClick={this.onclickBtn('SCISSORS')}>가위</button>
                    <button id="rock" className="btn" onClick={this.onclickBtn('ROCK')}>바위</button>
                    <button id="paper" className="btn" onClick={this.onclickBtn('PAPER')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

module.exports = RSP_Class;