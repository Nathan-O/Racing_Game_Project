/*
//////////////////////////////////////////////////////////////////

						Dot. (intro)
					  Javascript/jQuery

//////////////////////////////////////////////////////////////////
*/
$(document).ready(function() {
	$('#nameOne').on("click", function(){
		alert("Click");
		var name = $('#pOneName').val();
		//name = $(this).text();
		console.log(name);
		return name;
	});	
})


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





