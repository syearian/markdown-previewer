var React = require('react');
var PropTypes = React.PropTypes;

function Preview (props) {
  return (
    <div>
      <p>preview</p>
      <div dangerouslySetInnerHTML={props.outputText} ></div>
    </div>
  );
};

Preview.propTypes = {
  outputText: PropTypes.object.isRequired
};

module.exports = Preview;