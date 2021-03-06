const React = require('react');
const { useState } = React;
const WordRelay = require('./WordRelay');
const GuGudan = require('./GuGudan');
const NumberBaseBall = require('./NumberBaseBall');
const RSP = require('./RSP');
const {} = require('./style')

const WebGame = () => {
    const [tabCode, setTabCode] = useState('WordRelay');

    function onClickTab(tab){
        const tabCd = tab;
        if(tabCd === 'WR'){
            setTabCode('WordRelay');
        }else if(tabCd === 'GG'){
            setTabCode('GuGudan');
        }else if(tabCd === 'NBB'){
            setTabCode('NumberBaseBall');
        }else if(tabCd === 'RSP'){
            setTabCode('RSP');
        }
    }

    return (
        <>
        <div className='exp'>게임이름을 클릭하면 게임이 변경됩니다.</div>
        <div className='tab' onClick={() => onClickTab('WR')}>끝말잇기</div>
        <div className='tab'onClick={() => onClickTab('GG')}>구구단</div>
        <div className='tab'onClick={() => onClickTab('NBB')}>숫자야구</div>
        <div className='tab'onClick={() => onClickTab('RSP')}>가위바위보</div>
            {tabCode === 'WordRelay' && <WordRelay />}
            {tabCode === 'GuGudan' && <GuGudan />}
            {tabCode === 'NumberBaseBall' && <NumberBaseBall />}
            {tabCode === 'RSP' && <RSP />}
        </>
    );
}

module.exports = WebGame;