var React = require('react');
var Section = require('./Section.jsx');

var SectionEarth = React.createClass({
  propTypes: {
    interface: React.PropTypes.object
  },

  render() {
    return <Section type="earth" bar={true} up={false} interface={this.props.interface}>
      earth
    </Section>;
  }
});

module.exports = SectionEarth;
