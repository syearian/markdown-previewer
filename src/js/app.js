var React = require('react');
var ReactDOM = require('react-dom');
var Markdown = require('./Markdown.js');
var Preview = require('./Preview.js');

var App = React.createClass( {
  render: function() {
    return (
      <div>
        <Markdown />
        <Preview />
      </div>
    )	
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);