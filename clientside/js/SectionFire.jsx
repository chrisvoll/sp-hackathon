var React = require('react');
var Section = require('./Section.jsx');
var InterfaceStore = require('./stores/InterfaceStore');

var SectionFire = React.createClass({
  propTypes: {
    interface: React.PropTypes.object
  },

  componentDidUpdate(prevProps) {
    if (!this.refs.input) {
      return;
    }

    if (this.props.interface.active === 'fire' && prevProps.interface.active !== 'fire') {
      this.refs.input.getDOMNode().focus();
    }

    if (this.props.interface.error === 'fire' && prevProps.interface.error !== 'fire') {
      this.refs.input.getDOMNode().select();
    }
  },

  isActive() {
    return this.props.interface.active === 'fire';
  },

  verify() {
    if (this.props.interface.sections.fire.input === 'fire') {
      return true;
    } else {
      InterfaceStore.setError('fire');
      return false;
    }
  },

  setComplete(value) {
    InterfaceStore.setComplete('fire', value);
  },

  handleChange(e) {
    InterfaceStore.setInput('fire', this.refs.input.getDOMNode().value);
  },

  handleKeyDown(e) {
    if (e.keyCode === 13 && this.verify()) {
      this.setComplete(true);
    }
  },

  render() {
    return <Section type="fire" bar={false} up={true} interface={this.props.interface}>
      <div className="section__contents__header">
        N uvag jbhyq tb va guvf fcbg
      </div>
      <div className={'section__contents__input' + (this.props.interface.error === 'fire' ? ' section__contents__input--error' : '')}>
        <input
          type="text"
          value={this.props.interface.sections.fire.input}
          ref="input"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange} />
      </div>
    </Section>;
  }
});

module.exports = SectionFire;
