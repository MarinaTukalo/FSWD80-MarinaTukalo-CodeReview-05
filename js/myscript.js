//List of movies
	var output = '';
	for(let i = 0; i < dataMovie.length; i++) {
   		output += "<div class='d-flex col-xs-11 col-sm-11 col-lg-5 border p-2 m-2 bg-black'><img class='pull-left img-responsive' width=100% src='" + dataMovie[i].image + "'>";
   		output += "<p class='d-table m-2 p-2'>" + dataMovie[i].name + "<br><br>";
    	output += "Description: " + dataMovie[i].about + "</p><br>";
    	output += "<button class='row like_button btn d-flex align-self-end' type='button'>Like <img src='img/like.png' width=30px><span id='result' class='count text-light ml-2 px-2'>"+dataMovie[i].like+"</span></button></div>";
	}
	document.getElementById('data_movie').innerHTML = output;

	var btns = document.getElementsByClassName("like_button");

	for(let i in btns){
		btns[i].addEventListener("click",function(){
			Like(dataMovie[i],i) // dataMovie[i] is object and i is for index
			console.log(dataMovie[i],i);
		})
	}

	function Like(obj,i){
		let like = obj.like; // "like" quantity in json
		like++; //add one more value to qtt in json
		document.getElementsByClassName("count")[i].innerHTML= like;
	}

/* 2 version
	$(".like_button").on("click", function(){
		var counter = $(this).after().find(".count").text();
		console.log(counter);
		counter++;
		$(this).after().find(".count").text(counter);
	});
*/

// Like-button array 3 version, more suitable for shopping cart
	/*
	var likebtn = [];

	function addLikes(obj){
		if(obj.like == 0){
			likebtn.push(obj);				
			obj.like++;
			showLike();
		}else{
			obj.like++;
			showLike();		
		}
	}

	var btns = document.getElementsByClassName("like_button");
	for(let i = 0; i< btns.length; i++){
		btns[i].addEventListener("click", function(){
			addLikes(dataMovie[i])
		});
	}

	function showLike(){
		document.getElementById("result").innerHTML = ``;
		for(let i=0; i<likebtn.length; i++){
		document.getElementById("result").innerHTML += `${dataMovie[i].like}`
		}
	}
	*/

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