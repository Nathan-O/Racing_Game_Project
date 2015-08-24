// OOP Racing Game example boilerplate code

var playerOne;
var playerTwo;
var setOne = 1;
var setTwo = 2;
var i = 1;
var j = 1;

/////////////////////////////////////

var Player = function(name, color) {
  this.name = name;
  this.color = color; //set color with a CSS function that set background color to token div
};


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
                      $(".score1").text(playerOne.name + ": 0");
                      playerOne.token = $(".av1");
                    } else if (player === 2) {
                      $(".nameTwo").text(playerTwo.name);
                      $(".score2").text("0 :" + playerTwo.name)
                      playerTwo.token = $(".av2");
                    }
                  },
  score: function(player) {
            if(player === 1) {
              //pull <h2> element from header <div>, converts to string
              var mkString = $(".score1").text();
              var y = mkString.slice(-1);
                y = parseInt(y);    //convert to Int, add 1
                y = (y + 1);
              $(".score1").text(playerOne.name + ": " + y );  //replace text in <h2> with new Int
                alert(playerOne.name + " Wins!");
            } else if (player === 2) {
              var mkString2 = $(".score2").text();
              var x = mkString2.slice(0);
                x = parseInt(x);        //same as scoreP1
                x = (x + 1);
              $(".score2").text(x + " :" + playerTwo.name);
                alert(playerTwo.name + " Wins!");
            }
          }
};

  //key press moves player tokens
$(window).on('keypress', function(e) {
  if ((e.keyCode === 108) || (e.keyCode === 112)) {  // keys 'l' & 'p'      
    if (i >= 110) {
      $(".road#a" + i.toString()).empty();
      $("#pOneFin").append(playerOne.token);
      playerOne.score(setOne);
    } else{
      $(".road#a" + i.toString()).empty();
      $(".road#a" + (i + 1)).append(playerOne.token);
        i += 1;
    };     
  }; 
});

$(window).on('keypress', function(e) {
  if ((e.keyCode === 97) || (e.keyCode === 119)) {  // keys 'a' & 'w'      
    if (j >= 110) {
      $(".road#b" + j.toString()).empty();
      $("#pTwoFin").append(playerTwo.token);
      playerTwo.score(setTwo);
    } else {
      $(".road#b" + j.toString()).empty();
      $(".road#b" + (j + 1)).append(playerTwo.token);
       j += 1;
    };   
  };   
});

//////////////////////////////////////////////////////////////

$(document).ready(function () {

  $('#submitOne').on("click", function(){
    console.log($('#pOneName').val());
    nameFirst = $('#pOneName').val();
    colorFirst = $('#selectColorOne').val();
    playerOne = new Player(nameFirst, colorFirst);
    playerOne.position(setOne);
    playerOne.setNameToTrack(setOne);
    playerOne.setColor(setOne);
  });

  $('#submitTwo').on("click", function(){
    nameSecond = $("#pTwoName").val();
    colorSecond = $("#selectColorTwo").val();
    playerTwo = new Player (nameSecond, colorSecond);
    playerTwo.position(setTwo);
    playerTwo.setNameToTrack(setTwo);
    playerTwo.setColor(setTwo);
  });

  $("#playGame").on("click", function(){
    $(".playerInfo").hide();
  });

  //button resets peices, keeps score.
  $("#keepGoing").on("click", function keepGoing() {
    for (var k = 0; k < 110; k ++) {
      $(".road#a" + k.toString()).empty();
      $(".road#b" + k.toString()).empty();
    }
    i = 1;
    j = 1;
    $("#pTwoFin").empty();
    $("#pOneFin").empty();

    $(".frstSrt").empty();
    $(".sndSrt").empty();

    $(".frstSrt").append(playerOne.token);
    $(".sndSrt").append(playerTwo.token);   
  });

})


////////////////////////////////////////////////////////

  
/*
///////////////////////////////////////////////

//////// notes



///////////////////////////////////////////////////
*/










