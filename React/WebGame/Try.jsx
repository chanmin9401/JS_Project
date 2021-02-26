const { Component } = require('react');
const React = require('React');

class Try extends Component {
    render(){
        return (
            <li key = {this.props.value.try + this.props.index}>
                <div>{this.props.value.try}</div>
                <div>{this.props.value.result}</div>
            </li>
        );
    };
}

module.exports = Try;