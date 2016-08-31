var React = require('react');
var ReactDOM = require('react-dom');
var Markdown = require('../components/Markdown');
var Preview = require('../components/Preview');
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true
});

var App = React.createClass( {
  getInitialState: function() {
    return {
      inputText: '',
      outputText: { __html: ''}
    };
  },
  handleChangeText: function(event) {
    this.setState({
        markdownText: event.target.value,
        outputText: { __html: marked(event.target.value)}
      }
    );
  },
  render: function() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <Markdown inputText={this.state.inputText} onChangeText={this.handleChangeText} />
        <Preview outputText={this.state.outputText} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);