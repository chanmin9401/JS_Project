const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    
    const [word, setWord] = useState('박찬민');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === inputValue[0]){
            setWord(inputValue);
            setResult('딩동댕');
        }else{
            setResult('땡!');
        }
        setInputValue('');
        inputRef.current.focus();
    };

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref = {inputRef} value = {inputValue} onChange = {onChangeInput}/>
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );

}

module.exports = WordRelay;