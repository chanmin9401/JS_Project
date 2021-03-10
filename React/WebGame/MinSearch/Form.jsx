import React,{useState, useCallback, useContext} from 'react';
import { TableContext,START_GAME } from './MineSearch';

const Form = () => {
    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mineNum, setMinNum] = useState(20);
    const { dispatch } = useContext(TableContext);
    
    // useCallback으로 함수를 감싸는 것은 습관화 하는 것이 좋음
    // 불필요한 Rendering 제어
    const onChangeRow = useCallback((e) => {
        setRow(e.target.value);
    }, []);
    const onChangeCell = useCallback((e) => {
        setCell(e.target.value);
    },[]);
    const onChangeMineNum = useCallback((e) => {
        setMinNum(e.target.value);
    },[]);

    const onClickBtn = useCallback(()=>{
        dispatch({type : START_GAME, row, cell, mineNum});
    },[row, cell, mineNum]);

    return(
        <>
            <div>
                <input type ="number" placeholder="세로" value={row} onChange={onChangeRow} />
                <input type ="number" placeholder="가로" value={cell} onChange={onChangeCell} />
                <input type ="number" placeholder="지뢰 개수" value={mineNum} onChange={onChangeMineNum} />
                <button onClick={onClickBtn}>시작</button>
            </div>
        </>
    );
};

export default Form;