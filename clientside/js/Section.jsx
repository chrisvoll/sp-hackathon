var React = require('react/addons');
var InterfaceStore = require('./stores/InterfaceStore');

var Section = React.createClass({
  propTypes: {
    interface: React.PropTypes.object,

    type: React.PropTypes.string,
    up: React.PropTypes.bool,
    bar: React.PropTypes.bool,
    active: React.PropTypes.bool
  },

  setActive() {
    if (!this.isActive()) {
      InterfaceStore.setActive(this.props.type);
    }
  },

  setInactive(e) {
    if (this.isActive()) {
      e.stopPropagation();
      InterfaceStore.setActive(null);
    }
  },

  isActive() {
    return this.props.interface.active === this.props.type;
  },

  getActiveClass() {
    if (this.props.interface.active === null) {
      return '';
    } else if (this.isActive()) {
      return ' section--active';
    } else {
      return ' section--inactive';
    }
  },

  render() {
    return <div className={'section section--' + this.props.type + this.getActiveClass()} onClick={this.setActive}>

      <div className="section__icon-container" onClick={this.setInactive}>
        <div className="section__icon">
          <div className={'section__icon__triangle section__icon__triangle--' + (this.props.up ? 'up' : 'down')}/>

          {this.props.bar &&
            <div className="section__icon__bar"/>
          }
        </div>
      </div>

      <div className="section__contents">
        {this.props.children}
      </div>
    </div>
  }
});

module.exports = Section;
