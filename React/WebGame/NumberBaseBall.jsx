const { Component } = require('react');
const React = require('React');
const Try = require('./Try');

function getNumbers(){  //4개의 숫자를 겹치지 않게 임의로 생성
    const candidate = [1,2,3,4,5,6,7,8,9,0];
    const array = [];
    
    for (let i = 0; i<4; i++){
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    
    return array;
}
// 숫자야구 게임
class NumberBaseBall extends Component{
    state = {
        result : '',
        inputValue : '',
        answer : getNumbers(),
        trial : [],
    };
    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.inputValue === this.state.answer.join('')){
            this.setState({
                result : '홈런!',
                trial : [...this.state.trial, {try : this.state.value, result : '홈런!'}],
            });
        }else{
            const answerArray = this.state.inputValue.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            
            if(this.state.trial.length >= 9){
                this.setState({
                    result : `10번 이상 실패! 답은 ${this.state.answer.join(',')}였습니다!`,
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    inputValue : '',
                    answer : getNumbers(),
                    trial : [],
                });
            }else{
                for(let i = 0; i<4; i++){
                    if(answerArray[i] === this.state.answer[i]){
                        strike++;
                    }else if(this.state.answer.includes(answerArray[i])){
                        ball++
                    }
                }
                this.setState({
                    trial : [...this.state.trial, {try : this.state.inputValue, result : `${strike} 스트라이크! ${ball} 볼!`}],
                    inputValue : ''
                });
            }
        }
    };
    onChangeInput = (e) => {
        e.preventDefault();
        this.setState({
            inputValue : e.target.value
        });
    };

    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.inputValue} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.trial.length}</div>
                <ul>
                    {this.state.trial.map((t, i) => {
                        return(
                            <Try value ={t} index = {i}/>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseBall;