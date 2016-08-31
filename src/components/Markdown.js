var React = require('react');

require('components/markdown');

var Markdown = React.createClass( {
  render: function() {
    return (
      <textfield
        className=""
        onChange={props.onChangeText}
        placeholder='Enter Text'
        type='text'
        value={props.value}
      ></textfield>
    )	
  }
});

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
};

module.exports('Markdown');