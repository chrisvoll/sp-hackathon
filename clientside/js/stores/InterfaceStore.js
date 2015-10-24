var eventemitter2 = require('eventemitter2').EventEmitter2;

var _interface = {
  active: null,
  sections: {
    fire: {
      complete: false
    },
    air: {
      complete: false
    },
    water: {
      complete: false
    },
    earth: {
      complete: false
    }
  }
};

var InterfaceStore = {
  server: new eventemitter2(),

  update() {
    this.server.emit('update', this.getData());
  },

  getData() {
    return _interface;
  },

  set(key, value) {
    _interface[key] = value;
    this.update();
  },

  setActive(value) {
    this.set('active', value);
  }
};

module.exports = InterfaceStore;