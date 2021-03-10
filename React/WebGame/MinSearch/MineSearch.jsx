import React,{useReducer, createContext, useMemo} from 'react';
import Form from './Form';
import Table from './Table';

export const START_GAME = "START_GAME";
export const CODE = {
    OPENED : 0,
    NORMAL : -1,
    QUESTION : -2,
    FLAG : -3,
    QUESTION_MINE : -4,
    FLAG_MINE : -5,
    CLICKED_MINE : -6,
    MINE : -7,
};
// Context를 component에서 사용할 수 있게 export
export const TableContext = createContext({
    tableData : [],
    dispatch: () => {},
});

const initialState = {
    tableData : [],
    timer : 0,
    result : '',
};
// 지뢰 심기
const plantMine = (row, cell, mineNum) => {
    console.log(row, cell, mineNum);
    const candidate = Array(row*cell).fill().map((arr, i) => {
        return i;
    });
    const shuffle = [];
    while(candidate.length > row*cell - mineNum){
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }
    const data = [];
    for(let i = 0; i < row; i++){
        const rowData = [];
        data.push(rowData);
        for(let j = 0; j< cell; j++){
            rowData.push(CODE.NORMAL);
        }
    }

    for(let k = 0; k < shuffle.length; k++){
        const ver = Math.floor(shuffle[k]/cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }

    console.log(data);
    return data;
}

const reducer = (state, action) => {
    switch(action.type) {
        case START_GAME : 
            return{
                ...state,
                tableData: plantMine(action.row, action.cell, action.mineNum)
            }
        default : 
            return state;
    }
};

const MineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // { tableData: state.tableData, dispatch}를 provider의 value로 직접 전달 시 
    // MinSeacrh객체가 rendering될 때마다 { tableData: state.tableData, dispatch} 객체가 새로 생성되고,
    // 객체가 새로 생성될 경우 Provider에 묶인 하위 Component들도 re-rendering이 일어나서 성능을 매우 떨어뜨림
    // useMemo를 이용하여 cache처리를 하여 불필요한 rendering작업을 제어
    const value = useMemo(() => ({ tableData: state.tableData, dispatch}),[state.tableData]);

    // createContext 후 해당 context에 접근할 권한을 줄 component들을 Provider로 묶음
    // value에 접근 가능한 데이터를 명시하여 각 component에서 활용
    return(
        <TableContext.Provider value={value}>
            <Form />
            <div>{state.timer}</div>
            <Table />
            <div>{state.result}</div>
        </TableContext.Provider>
    );
};

export default MineSearch;