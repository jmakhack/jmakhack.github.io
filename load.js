var load_state = {
  preload: function() {
    this.game.stage.backgroundColor = '#000000';
  },

  create: function() {
    this.game.state.start('menu');
  }
};
