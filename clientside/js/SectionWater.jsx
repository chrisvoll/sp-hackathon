var React = require('react');
var Section = require('./Section.jsx');

var SectionWater = React.createClass({
  propTypes: {
    interface: React.PropTypes.object
  },

  render() {
    return <Section type="water" bar={false} up={false} interface={this.props.interface}>
      water
    </Section>;
  }
});

module.exports = SectionWater;
