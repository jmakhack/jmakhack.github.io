var game = new Phaser.Game(1000, 563, Phaser.AUTO, 'game_div');
game.state.add('load', load_state);
game.state.add('main_menu', main_menu_state);
game.state.add('how_to_menu', how_to_menu_state);
game.state.add('settings_menu', settings_menu_state);
game.state.add('play', play_state);
game.state.start('load');