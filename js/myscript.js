//List of movies
	var output = '';
	for(var i = 0; i < dataMovie.length; i++) {
   		output += "<div class='d-flex col-xs-11 col-sm-11 col-lg-5 border p-2 m-2 bg-black'><img class='pull-left img-responsive' width=100% src='" + dataMovie[i].image + "'>";
   		output += "<p class='d-table m-2 p-2'>" + dataMovie[i].name + "<br><br>";
    	output += "Description: " + dataMovie[i].about + "</p></div>";
	}
	document.getElementById('data_movie').innerHTML = output;

// Like-button
	$(".'d-table m-2 p-2'").append("<button type='button' id='likes' onclick='button()'>Like</button>");
	$("#likes").css({"background-color":"green", "padding":"10px","margin":"5px"});

	var likes = 0;
	function button() {
		document.getElementById("likes").innerHTML=likes;
		likes=likes+1;
		console.log(likes);
	}


// Select function

// $("#select").on("change",function(){
//     	var a = $("option:selected").val();
//     	$("#data_movie:contains('Adventure','Drama','Fantasy')").hide();

//    	 switch(a) {
//       	case "all": $("#data_movie:contains('Adventure','Drama','Fantasy')").show();break;
//       	case "Adventure": $("#data_movie:contains('Adventure')").show(); break;
//       	case "Drama": $("#data_movie:contains('Drama')").show();break;
//      	case "Fantasy": $("#data_movie:contains('Fantasy')").show();break;
//       	default: ;
//     	}
// });
//  	console.log(a);