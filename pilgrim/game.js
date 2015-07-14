var game = new Phaser.Game(1000, 563, Phaser.AUTO, 'game_div');
game.state.add('load', load_state);
game.state.add('menu', menu_state);
game.state.start('load');
