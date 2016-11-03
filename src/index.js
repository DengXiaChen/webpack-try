let css = require('./style.css');
let React = require('react');
let ReactDOM = require('react-dom');


let Hello = React.createClass({
    render: function render() {
        return <div>Hello{this.props.name}</div>;
    }
});
ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('AppRoot')
);