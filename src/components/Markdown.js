var React = require('react');
var PropTypes = React.PropTypes;
// require('../sass/components/markdown.scss');

function Markdown (props) {
  return (
    <textarea
      className={props.className}
      onChange={props.onChangeText}
      placeholder='Enter Text'
      type='text'
      value={props.inputText}
    ></textarea>
  );
};

Markdown.propTypes = {
  className: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
};

module.exports = Markdown;