const {} = require('./style')

import React,{useState} from 'react';
import WordRelay from './WordRelay';
import GuGudan from './GuGudan';
import NumberBaseBall from './NumberBaseBall';
import RSP from './RSP';
import MS from './MinSearch/MineSearch';

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
        }else if(tabCd === 'MS'){
            setTabCode('MS');
        }
    }

    return (
        <>
        <div className='exp'>게임이름을 클릭하면 게임이 변경됩니다.</div>
        <div className='tab' onClick={() => onClickTab('WR')}>끝말잇기</div>
        <div className='tab'onClick={() => onClickTab('GG')}>구구단</div>
        <div className='tab'onClick={() => onClickTab('NBB')}>숫자야구</div>
        <div className='tab'onClick={() => onClickTab('RSP')}>가위바위보</div>
        <div className='tab'onClick={() => onClickTab('MS')}>지뢰찾기</div>
            {tabCode === 'WordRelay' && <WordRelay />}
            {tabCode === 'GuGudan' && <GuGudan />}
            {tabCode === 'NumberBaseBall' && <NumberBaseBall />}
            {tabCode === 'RSP' && <RSP />}
            {tabCode === 'MS' && <MS />}
        </>
    );
}

export default WebGame;