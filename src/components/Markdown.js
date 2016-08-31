var React = require('react');
var PropTypes = React.PropTypes;

function Markdown (props) {
  return (
    <textarea
      onChange={props.onChangeText}
      placeholder='Enter Text'
      type='text'
      value={props.value}
    ></textarea>
  );
};

Markdown.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
};

module.exports = Markdown;