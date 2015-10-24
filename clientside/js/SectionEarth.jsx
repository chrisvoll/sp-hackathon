var React = require('react');
var Section = require('./Section.jsx');
var InterfaceStore = require('./stores/InterfaceStore');

var SectionEarth = React.createClass({
  propTypes: {
    interface: React.PropTypes.object
  },

  componentDidUpdate(prevProps) {
    if (!this.refs.input) {
      return;
    }

    if (this.props.interface.active === 'earth' && prevProps.interface.active !== 'earth') {
      this.refs.input.getDOMNode().focus();
    }

    if (this.props.interface.error === 'earth' && prevProps.interface.error !== 'earth') {
      this.refs.input.getDOMNode().select();
    }
  },

  isActive() {
    return this.props.interface.active === 'earth';
  },

  verify() {
    if (this.props.interface.sections.earth.input === 'earth') {
      return true;
    } else {
      InterfaceStore.setError('earth');
      return false;
    }
  },

  setComplete(value) {
    InterfaceStore.setComplete('earth', value);
  },

  handleChange(e) {
    InterfaceStore.setInput('earth', this.refs.input.getDOMNode().value);
  },

  handleKeyDown(e) {
    if (e.keyCode === 13 && this.verify()) {
      this.setComplete(true);
    }
  },

  render() {
    return <Section type="earth" bar={true} up={false} interface={this.props.interface}>
      <div className="section__contents__header">
        Inet hdbtiwxcv xcid iwxh qdm id egdrtts.
      </div>
      <div className={'section__contents__input' + (this.props.interface.error === 'earth' ? ' section__contents__input--error' : '')}>
        <input
          type="text"
          value={this.props.interface.sections.earth.input}
          ref="input"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange} />
      </div>
    </Section>;
  }
});

module.exports = SectionEarth;
