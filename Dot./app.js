// OOP Racing Game example boilerplate code


/*$(document).ready(function(){

});*/

function Player() {}/*function(name, color) {
  this.name = name,
  this.color = color, //set color with a CSS function that set background color to token div
};*/

var setOne = 1;
var setTwo = 2;
Player.prototype = {
  position: function(player){
              console.log("Set player");  // playerOne.position(setOne); - to set first player token
              var player = player;        // playerTwo.position(setTwo); - to set second player token
              console.log(player);
              var playerOneTemplate = _.template($('#playerOne-template').html());
              var playerTwoTemplate = _.template($('#playerTwo-template').html());
            
              if (player === 1) {
                var playerOneHtml = playerOneTemplate(player);
                $("#playerOne-placeholder").append(playerOneHtml);
              } else if (player === 2) {
                var playerTwoHtml = playerTwoTemplate(player);
                $("#playerTwo-placeholder").append(playerTwoHtml);
              }
            },
  //next
  //next
  //next
  //next
};

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...

  //Do the same for a player 2
  //this.player2 = ...

  //Create the track
  //this.track = ...
}

// `Game.prototype.init` kicks off a new game 
//    with a board and two players
Game.prototype.init = function() {
  //
};

// A starter Player constructor.
/*function Player(name, color ) {
  this.name = name,
  this.color = color,
  //this.position = ...,

};*/



/////////////////////test player
/*var playerOne = {
  name : "Nathan",
  color : "red",
  //token: <div></div>
  //setPosition = 
}

var playerTwo = {
  name: "Cheyenne",
  color: "pink",
}*/
///////////////////////////////////



// Remember: prototypes are shared functions 
//   between all game instances
/*Player.prototype.move = function() {
  //update player's position
};*/


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may 
  //   have below, such as a reset option
};

// Start the game!
/*var game = new Game();
game.init();*/

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

//$('#playerOne-placeholder').html("<div class='playerOne'><p class='playerOne'>" + playerOne.name + "</p></div>");

/*set name - underscore
set color - $().css
set position - l*/

// A starter Player constructor.
/*

#playerOne-placeholder').html("<div class='playerOne'><p class='playerOne'>" + playerOne.name + "</p></div>");

////////////////////////////////////////
function Shoe() = {
    this.laces = true;
    this.color = “blue”; 
}


Shoe.prototype = {
   tie : function () {
       console.log(“i’m tying my shoes”);
   },
  untie: function(){
       console.log(“I just untied my shoes”);
   }
} (edited)


these are two separate entities: the Object definition and the Object prototype

and yet you can still do


var nike = new Shoe();


nike.tie(); (edited)

*/










