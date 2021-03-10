const React = require('react');

const tdStyle = {
    border : "1px solid black",
    width : "40px",
    height: "40px",
    textAlign: "center"
}
const Td = () => {
    return(
        <td style={tdStyle}>{''}</td>
    );
};

module.exports = Td;