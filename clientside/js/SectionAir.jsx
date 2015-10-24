var React = require('react');
var Section = require('./Section.jsx');
var InterfaceStore = require('./stores/InterfaceStore');

var SectionAir = React.createClass({
  propTypes: {
    interface: React.PropTypes.object
  },

  componentDidUpdate(prevProps) {
    if (!this.refs.input) {
      return;
    }

    if (this.props.interface.active === 'air' && prevProps.interface.active !== 'air') {
      this.refs.input.getDOMNode().focus();
    }

    if (this.props.interface.error === 'air' && prevProps.interface.error !== 'air') {
      this.refs.input.getDOMNode().select();
    }
  },

  isActive() {
    return this.props.interface.active === 'air';
  },

  verify() {
    if (this.props.interface.sections.air.input === 'air') {
      return true;
    } else {
      InterfaceStore.setError('air');
      return false;
    }
  },

  setComplete(value) {
    InterfaceStore.setComplete('air', value);
  },

  handleChange(e) {
    InterfaceStore.setInput('air', this.refs.input.getDOMNode().value);
  },

  handleKeyDown(e) {
    if (e.keyCode === 13 && this.verify()) {
      this.setComplete(true);
    }
  },

  render() {
    return <Section type="air" bar={true} up={true} interface={this.props.interface}>
      <div className="section__contents__header">
        Lrg nabgure zrffntr rapelcgrq.
      </div>
      <div className={'section__contents__input' + (this.props.interface.error === 'air' ? ' section__contents__input--error' : '')}>
        <input
          type="text"
          value={this.props.interface.sections.air.input}
          ref="input"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange} />
      </div>
    </Section>;
  }
});

module.exports = SectionAir;
