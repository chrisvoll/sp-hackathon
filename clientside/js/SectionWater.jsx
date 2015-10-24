var React = require('react');
var Section = require('./Section.jsx');
var InterfaceStore = require('./stores/InterfaceStore');

var SectionWater = React.createClass({
  propTypes: {
    interface: React.PropTypes.object
  },

  componentDidUpdate(prevProps) {
    if (!this.refs.input) {
      return;
    }

    if (this.props.interface.active === 'water' && prevProps.interface.active !== 'water') {
      this.refs.input.getDOMNode().focus();
    }

    if (this.props.interface.error === 'water' && prevProps.interface.error !== 'water') {
      this.refs.input.getDOMNode().select();
    }
  },

  isActive() {
    return this.props.interface.active === 'water';
  },

  verify() {
    if (this.props.interface.sections.water.input === 'water') {
      return true;
    } else {
      InterfaceStore.setError('water');
      return false;
    }
  },

  setComplete(value) {
    InterfaceStore.setComplete('water', value);
  },

  handleChange(e) {
    InterfaceStore.setInput('water', this.refs.input.getDOMNode().value);
  },

  handleKeyDown(e) {
    if (e.keyCode === 13 && this.verify()) {
      this.setComplete(true);
    }
  },

  render() {
    return <Section type="water" bar={false} up={false} interface={this.props.interface}>
      <div className="section__contents__header">
        Inet hdbtiwxcv xcid iwxh qdm id egdrtts.
      </div>
      <div className={'section__contents__input' + (this.props.interface.error === 'water' ? ' section__contents__input--error' : '')}>
        <input
          type="text"
          value={this.props.interface.sections.water.input}
          ref="input"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange} />
      </div>
    </Section>;
  }
});

module.exports = SectionWater;
