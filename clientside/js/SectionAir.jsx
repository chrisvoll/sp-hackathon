var React = require('react');
var Section = require('./Section.jsx');

var SectionAir = React.createClass({
  propTypes: {
    interface: React.PropTypes.object
  },

  render() {
    return <Section type="air" bar={true} up={true} interface={this.props.interface}>
      air
    </Section>;
  }
});

module.exports = SectionAir;
