var React = require('react');
var PropTypes = React.PropTypes;
// require('../sass/components/markdown.scss');

function Preview (props) {
  return (
    <div className={props.className} >
      <div dangerouslySetInnerHTML={props.outputText} ></div>
    </div>
  );
};

Preview.propTypes = {
  className: PropTypes.string.isRequired,
  outputText: PropTypes.object.isRequired
};

module.exports = Preview;