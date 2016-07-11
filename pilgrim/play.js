var play_state = {

  /* Create the gameplay portion of the game */
  create: function() {
  	/* Set the cursor to point to its intial position */
    this.selected_option = 1;
    /* Set style for text */
    var style = { font: '30px Arial', fill: '#ffffff' };
    /* Get width and height of screen */
    var width = game.world.width;
    var height = game.world.height;
    /* Add text to the screen */
    var welcome = this.game.add.text(width/2, height/2, 'This is where the game will begin.', style);
    var back = this.game.add.text(width * 3/4, (height/2) + 200, 'Back', style);
    /* Set cursor */
    this.cursor = this.game.add.text((width * 3/4) - 30, (height/2) + 200, '>', style);
    /* Set anchors for all text */
    welcome.anchor.setTo(0.5, 0.5);
    back.anchor.setTo(0, 0.5);
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
        this.game.state.start('main_menu');
        break;
    }
  },

  /* Move menu cursor down */
  cursor_down: function() {
    if(this.selected_option < 1) {
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