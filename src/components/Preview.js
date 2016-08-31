var React = require('react');

require('components/preview');

var Preview = React.createClass( {
  render: function() {
    return (
      <div>
        {props.content}
      </div>
    )	
  }
});

Preview.propTypes = {
  content: PropTypes.string.isRequired
}

module.exports('Preview');