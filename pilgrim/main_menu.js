var main_menu_state = {

  /* Create the menu screen */
  create: function() {
    /* Set the cursor to point to its intial position */
    this.selected_option = 1;
    /* Set style for text */
    var style = { font: '30px Arial', fill: '#ffffff' };
    /* Get width and height of screen */
    var width = game.world.width;
    var height = game.world.height;
    /* Add text to the screen */
    var start_game = this.game.add.text(width * 3/4, (height/2) + 100, 'Start Game', style);
    var how_to_play = this.game.add.text(width * 3/4, (height/2) + 150, 'How To Play', style);
    var settings = this.game.add.text(width * 3/4, (height/2) + 200, 'Settings', style);
    /* Set cursor */
    this.cursor = this.game.add.text((width * 3/4) - 30, (height/2) + 100, '>', style);
    /* Set anchors for all text */
    start_game.anchor.setTo(0, 0.5);
    how_to_play.anchor.setTo(0, 0.5);
    settings.anchor.setTo(0, 0.5);
    this.cursor.anchor.setTo(0, 0.5);
    /* Move cursor when up or down keys are pressed */
    var down_key = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    down_key.onDown.add(this.cursor_down, this);
    var up_key = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    up_key.onDown.add(this.cursor_up, this);
    var w_key = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    w_key.onDown.add(this.cursor_up, this);
    var s_key = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    s_key.onDown.add(this.cursor_down, this);
    /* Call this.select when pressing the spacebar */
    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space_key.onDown.add(this.select, this);
  },

  /* Open currently selected option */
  select: function() {
    switch(this.selected_option) {
      case 1:
        this.game.state.start('play');
        break;
      case 2:
        this.game.state.start('how_to_menu');
        break;
      case 3:
        this.game.state.start('settings_menu');
        break;
    }
  },

  /* Move menu cursor down */
  cursor_down: function() {
    if(this.selected_option < 3) {
      this.cursor.y += 50;
      this.selected_option += 1;
    }
  },
  
  /* Move menu cursor up */
  cursor_up: function() {
    if(this.selected_option > 1) {
      this.cursor.y -= 50;
      this.selected_option -= 1;
    }
  }
};
