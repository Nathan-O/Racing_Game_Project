// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...

  //Do the same for a player 2
  //this.player2 = ...

  //Create the track
  //this.track = ...
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  //
};

// A starter Player constructor.
function Player(team) {
  //this.name = ...
  //this.position = ...
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  //update player's position
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
var game = new Game();
game.init();

/*
///////////////////////////////////////////////

//////// notes

  - toggle through class: Make a track that is 
  multiple multipl small divs inside of a longer 
  one. Use class to distinguish as road, and another 
  class to indicate active div. use toggle() to chenge 
  which div has the active class toggled on. This can be 
  done with the following syntax: $('a' + i) and have i 
  iterate therough a loop,




///////////////////////////////////////////////////

*/






















