const React = require('react');
const { useState, useRef } = React;

const GuGudan = () => {
    // hooks에서는 각각의 state를 하나하나의 변수로 담아서 취급
    // hooks에서 state를 하나의 객체 형태로 사용할 경우 setState라는 구문안에 항상 모든 state value들이 선언되어야하므로 귀찮아짐
    const [firstNum, setFirst] = React.useState(Math.ceil(Math.random()*9));
    const [secondNum, setSecond] = React.useState(Math.ceil(Math.random()*9));
    const [inputValue, setInputValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(parseInt(inputValue) === firstNum * secondNum){
            setResult('정답 : ' + inputValue);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setInputValue('');
        }else{
            setResult('땡!');
            setInputValue('');
        }

        inputRef.current.focus();
    };

    return(
        <>
            <div>{firstNum} X {secondNum} ?</div>
                <input ref={inputRef} type="number" value = {inputValue} onChange ={onChangeInput}/>
                <button onClick={onSubmit}>입력</button>
            <div>{result}</div>
        </>
    );
}


module.exports = GuGudan;