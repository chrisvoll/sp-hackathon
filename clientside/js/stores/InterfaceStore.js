var eventemitter2 = require('eventemitter2').EventEmitter2;

var _interface = {
  active: null,
  error: null,
  sections: {
    fire: {
      complete: false,
      input: null
    },
    air: {
      complete: false,
      input: null
    },
    water: {
      complete: false,
      input: null
    },
    earth: {
      complete: false,
      input: null
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

  setQuietly(key, value) {
    _interface[key] = value;
  },

  setSection(type, key, value) {
    _interface.sections[type][key] = value;
    this.update();
  },

  setActive(value) {
    this.set('active', value);
  },

  setError(value) {
    this.set('error', value);
  },

  setInput(type, value) {
    this.setSection(type, 'input', value);
  },

  setComplete(type, value) {
    this.setQuietly('error', null);
    this.setSection(type, 'complete', value);
  }
};

module.exports = InterfaceStore;