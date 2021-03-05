const { PureComponent, memo } = require('react');
const React = require('React');

// // PureComponent를 extends하면 불필요한 Rendering을 줄일 수 있다.
// // Component를 extends한 상태로 사용하고 싶을 경우 
// // shouldComponentUpdate라는 함수를 이용하여 다시 rendering할 경우를 직접 제어도 가능
// class Try extends PureComponent {
//     /*
//         shouldComponentUpdate(nextProps, nextState, nextContext){
//             ... add Logic
//         }
//     */
//     render(){
//         const {tryInfo} = this.props;
//         return (
//             <li key = {tryInfo.value.try + tryInfo.index}>
//                 <div>{tryInfo.value.try}</div>
//                 <div>{tryInfo.value.result}</div>
//             </li>
//         );
//     };
// }

// module.exports = Try;

// hooks는 PureComponent과 shouldComponentUpdate를 활용 못함
// memo라는 것을 import하여 component를 감싸주면 PureComponent와 동일한 기능을 사용할 수 있음
const Try = memo(({ tryInfo }) => {
    return(
        <li key = {tryInfo.value.try + tryInfo.index}>
            <div>{tryInfo.value.try}</div>
            <div>{tryInfo.value.result}</div>
        </li>
    )
});

export default Try;