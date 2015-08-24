// OOP Racing Game example boilerplate code

/*
$(document).ready(function(){
  var playerOne = new Player(nameFirst, colorFirst);

});
*/

/////////////////////////////////////////////////////////////
//// test
/*
var nameFirst;
var nameSecond;
var colorFirst;
var colorSecond;

function dotFade() {
  for (var i = 0; i < 60; i++) {
    $("#red").fadeIn(1000).fadeOut(1000).fadeIn(1000);
    $("#orange").fadeIn(500).fadeOut(500).fadeIn(500);
    $("#blue").fadeIn(1200).fadeOut(1200).fadeIn(1200);
    $("#yellow").fadeIn(750).fadeOut(750).fadeIn(750);
    $("#green").fadeIn(900).fadeOut(900).fadeIn(900);
    $("#pink").fadeIn(2000).fadeOut(2000).fadeIn(2000)
  }
};    //to add more flashing dots
//$("#div_id").fadeIn(1000).fadeOut(1000).fadeIn(1000)

function makeNewPosition(){
    var nX = Math.floor((Math.random() * 1000) + 1);
    var nY = Math.floor((Math.random() * 1000) + 1);
    return [nX,nY];     
};

function animateDiv(){
    var gotoTeal = makeNewPosition();
    var gotoPink = makeNewPosition();
      var oldq = $('.bounce').offset();

      $('.bounce#teal').animate({ top: gotoTeal[0], left: gotoTeal[1] }, 1000, function(){
        animateDiv();        
      });

    $('.bounce#deeppink').animate({ top: gotoPink[0], left: gotoPink[1] }, 1500, function(){
        animateDiv();        
      });
        // ^^ repeat syntax with new ID to add more
          // also add a new goto variable for instances
    
};

$(document).ready(function() {
  $('#submitOne').on("click", function(){
    alert("Click");
    console.log($('#pOneName').val());
    nameFirst = $('#pOneName').val();
    colorFirst = $('#selectColorOne').val();
    //return nameFirst;
    playerOne = new Player(nameFirst, colorFirst);
    //return playerOne;
  });

  $('#submitTwo').on("click", function(){
    alert("Click");
    nameSecond = $("#pTwoName").val();
    colorSecond = $("#selectColorTwo").val();
  }); 
  
  dotFade();
  animateDiv();
})*/
$(document).ready(function () {
  $('#submitOne').on("click", function(){
    alert("Click");
    console.log($('#pOneName').val());
    nameFirst = $('#pOneName').val();
    colorFirst = $('#selectColorOne').val();
    playerOne = new Player(nameFirst, colorFirst);
    playerOne.position(setOne);
    playerOne.setNameToTrack(setOne);
    playerOne.setColor(setOne);
  });

  $('#submitTwo').on("click", function(){
    alert("Click");
    nameSecond = $("#pTwoName").val();
    colorSecond = $("#selectColorTwo").val();
    playerTwo = new Player (nameSecond, colorSecond);
    playerTwo.position(setTwo);
    playerTwo.setNameToTrack(setTwo);
    playerTwo.setColor(setTwo);
  });

  $("#testtest").on("click", function(){
    $(".test").hide();
  });

})


////////////////////////////////////////////////////////
var playerOne;
var playerTwo;

var Player = function(name, color) {
  this.name = name;
  this.color = color; //set color with a CSS function that set background color to token div
};

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
  setColor: function(player){
              if (player === 1) {
                console.log(playerOne.color); //test class
                $(".av1").addClass(playerOne.color);
              } else if (player === 2) {
                console.log(playerTwo.color);
                $(".av2").addClass(playerTwo.color);
              };
            },
  setNameToTrack: function(player){
    if (player === 1) {
      $(".nameOne").text(playerOne.name);
    } else if (player === 2) {
      $(".nameTwo").text(playerTwo.name);
    }
  }
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










