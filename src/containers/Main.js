var React = require('react');
var ReactDOM = require('react-dom');
require('../sass/main.scss');
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
var initialText = {
  text: " # Remarkable\n# h1 Heading\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n## Horizontal Rules\n\n___\n\n***\n\n***\n\nMarkdown -- awesome\n\n\"Smartypants, double quotes\"\n\n'Smartypants, single quotes'\n\n## Emphasis\n\n**This is bold text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic text_\n\n~~Deleted text~~\n\n## Blockquotes\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n\n## Lists\n\nUnordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ 'title text!')\n\nAutoconverted link https://github.com/nodeca/pica"
}

var App = React.createClass( {
  getInitialState: function() {
    return {
      inputText: initialText.text,
      outputText: { __html: marked(initialText.text)}
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