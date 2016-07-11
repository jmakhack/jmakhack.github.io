var load_state = {
  preload: function() {
    this.game.stage.backgroundColor = '#71b5df';
  },

  create: function() {
    this.game.state.start('main_menu');
  }
};
