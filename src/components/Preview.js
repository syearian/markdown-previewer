var React = require('react');
var PropTypes = React.PropTypes;
// require('../sass/components/markdown.scss');

function Preview (props) {
  return (
    <div>
      <div dangerouslySetInnerHTML={props.outputText} ></div>
    </div>
  );
};

Preview.propTypes = {
  outputText: PropTypes.object.isRequired
};

module.exports = Preview;