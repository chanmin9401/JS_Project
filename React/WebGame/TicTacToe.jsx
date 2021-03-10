const React = require('react');
const { useState, useCallback, useReducer } = React;
const Table = require('./Table');

const initialState = {
    winner : '',
    turn : 'O',
    tableData : new Array(3).fill(new Array(3).fill(''))
};

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_WINNER':
            return {
                ...state,
                winner:action.winner
            };
    }
}

const TTT = () => {
    const[state, dispatch] = useReducer(reducer, initialState);
    
    const onClickTable = useCallback(() => {
        dispatch({
            type: 'SET_WINNER', winner : 'O'
        });
    }, []);
    return (
        <>
            <Table />
            {state.winner && <div>{state.winner} 님의 승리!</div>}
        </>
    );
};

module.exports = TTT;