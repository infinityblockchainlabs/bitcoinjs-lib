let _enableBCH = false;

module.exports = {
  enableBCH: enable => {
    if (enable) {
      _enableBCH = true;
    } else {
      _enableBCH = false;
    }
  },
  isBCH: () => _enableBCH
};
