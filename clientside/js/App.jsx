var React = require('react');
var InterfaceStore = require('./stores/InterfaceStore');

var SectionFire = require('./SectionFire.jsx');
var SectionAir = require('./SectionAir.jsx');
var SectionWater = require('./SectionWater.jsx');
var SectionEarth = require('./SectionEarth.jsx');

var _ = require('lodash');

var App = React.createClass({
  getInitialState() {
    return {
      interface: InterfaceStore.getData()
    };
  },

  componentDidMount() {
    InterfaceStore.server.on('update', this.updateInterface);
  },

  updateInterface(interfaceAtom) {
    this.setState({ interface: interfaceAtom });
  },

  render() {
    return <div className="app">
      <SectionFire
        interface={this.state.interface} />
      <SectionAir
        interface={this.state.interface} />
      <SectionWater
        interface={this.state.interface} />
      <SectionEarth
        interface={this.state.interface} />
    </div>;
  }
});

module.exports = App;
