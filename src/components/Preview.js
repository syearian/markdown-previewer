var React = require('react');
var PropTypes = React.PropTypes;


function Preview (props) {
  return (
    <div>
      <p>preview</p>
      {props.content}
    </div>
  );
};

Preview.propTypes = {
  content: PropTypes.string.isRequired
};

module.exports = Preview;