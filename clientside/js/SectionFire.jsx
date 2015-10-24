var React = require('react');
var Section = require('./Section.jsx');

var SectionFire = React.createClass({
  propTypes: {
    interface: React.PropTypes.object
  },

  render() {
    return <Section type="fire" bar={false} up={true} interface={this.props.interface}>
      fire
    </Section>;
  }
});

module.exports = SectionFire;
