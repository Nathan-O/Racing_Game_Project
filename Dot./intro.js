/*
//////////////////////////////////////////////////////////////////

						Dot. (intro)
					  Javascript/jQuery

//////////////////////////////////////////////////////////////////
*/ 



var nameFirst;
var nameSecond;
var colorFirst;
var colorSecond;

function dotFade() {
	for (var i = 0; i < 60; i++) {
		$(".flash.red").fadeIn(1000).fadeOut(1000).fadeIn(1000);
		$(".flash.orange").fadeIn(500).fadeOut(500).fadeIn(500);
		$(".flash.blue").fadeIn(1200).fadeOut(1200).fadeIn(1200);
		$(".flash.yellow").fadeIn(750).fadeOut(750).fadeIn(750);
		$(".flash.green").fadeIn(900).fadeOut(900).fadeIn(900);
		$(".flash.pink").fadeIn(2000).fadeOut(2000).fadeIn(2000)
	}
};		//to add more flashing dots
//$("#div_id").fadeIn(1000).fadeOut(1000).fadeIn(1000)

function makeNewPosition(){
    var nX = Math.floor((Math.random() * 1000) + 1);
    var nY = Math.floor((Math.random() * 1000) + 1);
    return [nX,nY];     
};

function animateDiv(){
		var gotoTeal = makeNewPosition();
		var gotoDeepPink = makeNewPosition();
		var gotoRed = makeNewPosition();
		var gotoOrange = makeNewPosition();
		var gotoYellow = makeNewPosition();
		var gotoPink = makeNewPosition();
		var gotoDarkCyan = makeNewPosition();
		var gotoLime = makeNewPosition();
		var gotoBlue = makeNewPosition();
		var gotoGreen = makeNewPosition();
		var gotoAquaMarine = makeNewPosition();
		var gotoBlueViolet = makeNewPosition();
		var gotoDarkMagenta = makeNewPosition();
		var gotoSkyBlue = makeNewPosition();
		var gotoPurple = makeNewPosition();
	    var oldq = $('.bounce').offset();

	    $('.bounce.teal').animate({ top: gotoTeal[0], left: gotoTeal[1] }, 1000, function(){
	      animateDiv();        
	    });

		$('.bounce.deeppink').animate({ top: gotoDeepPink[0], left: gotoDeepPink[1] }, 1500, function(){
	      animateDiv();        
	    });

	    $('.bounce.red').animate({ top: gotoRed[0], left: gotoRed[1] }, 750, function(){
	    	animateDiv();
	    });

	    $('.bounce.orange').animate({ top: gotoOrange[0], left: gotoOrange[1] }, 550, function(){
	    	animateDiv();
	    });

	    $('.bounce.yellow').animate({ top: gotoYellow[0], left: gotoYellow[1] }, 750, function(){
	    	animateDiv();
	    });

	    $('.bounce.pink').animate({ top: gotoPink[0], left: gotoPink[1] }, 1200, function(){
	    	animateDiv();
	    });

	    $('.bounce.darkcyan').animate({ top: gotoDarkCyan[0], left: gotoDarkCyan[1] }, 750, function(){
	    	animateDiv();
	    });

	    $('.bounce.lime').animate({ top: gotoLime[0], left: gotoLime[1] }, 450, function(){
	    	animateDiv();
	    });

	    $('.bounce.blue').animate({ top: gotoBlue[0], left: gotoBlue[1] }, 300, function(){
	    	animateDiv();
	    });

	    $('.bounce.green').animate({ top: gotoGreen[0], left: gotoGreen[1] }, 600, function(){
	    	animateDiv();
	    });

	    $('.bounce.aquamarine').animate({ top: gotoAquaMarine[0], left: gotoAquaMarine[1] }, 200, function(){
	    	animateDiv();
	    });

	    $('.bounce.blueviolet').animate({ top: gotoBlueViolet[0], left: gotoBlueViolet[1] }, 700, function(){
	    	animateDiv();
	    });

	    $('.bounce.darkmagenta').animate({ top: gotoDarkMagenta[0], left: gotoDarkMagenta[1] }, 650, function(){
	    	animateDiv();
	    });

	    $('.bounce.skyblue').animate({ top: gotoSkyBlue[0], left: gotoSkyBlue[1] }, 380, function(){
	    	animateDiv();
	    });

	    $('.bounce.purple').animate({ top: gotoPurple[0], left: gotoPurple[1] }, 300, function(){
	    	animateDiv();
	    });
    		// ^^ repeat syntax with new ID to add more
    			// also add a new goto variable for instances
    
};

//////////////////////////////////////////////////////////

$(document).ready(function() {
	/*$('#submitOne').on("click", function(){
		alert("Click");
		console.log($('#pOneName').val());
		nameFirst = $('#pOneName').val();
		colorFirst = $('#selectColorOne').val();

	});

	$('#submitTwo').on("click", function(){
		alert("Click");
		nameSecond = $("#pTwoName").val();
		colorSecond = $("#selectColorTwo").val();
	});*/

	//var playerOne = new Player(nameFirst, colorFirst);
		
	dotFade();
	animateDiv();
})


/*function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}*/

// for setting the player name on the track. set something 
// like this inside of the <p> tag:
// ****** <label id="**id**"></label> ******
// then use this function:
// $("button-id").on("click", function() {
// 	$('**id**').html($('input:text').val());
// });						^//or text input #id


/*
///////////////////////////////////////////////////////////////////////////

/////////// Notes

- have an initial pop up that asks one player or two
- if one player set one input feild, if two set two inputs (underscore)
- have function to gather info from input and set it to value
- have ability to set color

 


//////////////////////////////////////////////////////////////////////////

////////// Snippets



//////////////////////////////////////////////////////////////////////////
*/





