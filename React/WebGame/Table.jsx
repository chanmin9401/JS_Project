const React = require('react');
const Tr = require('./Tr');

const tableStyle = {
    borderCollapse : "collapse"
}

const Table = () => {
    return(
        <table style={tableStyle}>
            <Tr>{''}</Tr>
        </table>
    );
};

module.exports = Table;