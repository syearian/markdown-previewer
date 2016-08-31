var React = require('react');
var ReactDOM = require('react-dom');
var Markdown = require('../components/Markdown');
var Preview = require('../components/Preview');

var App = React.createClass( {
  getInitialState: function() {
    return {
      value: ''
    };
  },
  handleChangeText: function(event) {
    this.setState({
        value: event.target.value
      }
    );
  },
  render: function() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <Markdown value={this.state.value} onChangeText={this.handleChangeText} />
        <Preview content={this.state.value} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);