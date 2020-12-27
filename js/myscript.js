//List of movies
let movies = JSON.parse(dataMovie);
let sortedMovies = movies;

function display(movieCards) {
    $("#data_movie").empty();
    movieCards.forEach(movie => {
        $("#data_movie").append(`
	<div class="card mb-3 bg-black" style="max-width: 540px;">
		<div class="row no-gutters">
		<div class="col-md-4">
			<img src="${movie.image}" class="card-img" alt="...">
		</div>
		<div class="col-md-8">
			<div class="card-body">
				<h5 class="card-title">${movie.name}</h5>
	         	<p class="card-text">Description: ${movie.about}</p>
		    	<button class='row like_button btn d-flex align-self-end' type='button'>Like <img src='img/like.png' width="30px" class="ml-2"><span id='result' class='count text-info ml-2 px-2'>${ movie.like}</span></button>
			</div>
		</div>
		</div>
	</div>
	`)
    });
    // like function
    $(".like_button").on("click", function() {
        let counter = $(this).after().find(".count").text();
        console.log(counter);
        counter++;
        $(this).after().find(".count").text(counter);
    });
}

function showSort() {
    sortedMovies = movies.sort((a, b) => b.like - a.like);
    display(sortedMovies);
}
$("#sortResult").on("click", showSort);
$(document).ready(display(sortedMovies));


///// 1st version - JS and for-loop
// var output = '';
// for (let i = 0; i < dataMovie.length; i++) {

//     output += `
// <div class="card mb-3 bg-black" style="max-width: 540px;">
//   <div class="row no-gutters">
//     <div class="col-md-4">
//       <img src="` + dataMovie[i].image + `" class="card-img" alt="...">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">` + dataMovie[i].name + `</h5>
//         <p class="card-text">Description: ` + dataMovie[i].about + `</p>
//         <button class='row like_button btn d-flex align-self-end' type='button'>Like <img src='img/like.png' width="30px" class="ml-2"><span id='result' class='count text-info ml-2 px-2'>` + dataMovie[i].like + `</span></button>
//       </div>
//     </div>
//   </div>
// </div>`;
// }
// document.getElementById('data_movie').innerHTML = output;
///// add likes
// var btns = document.getElementsByClassName("like_button");

// for (let i in btns) {
//     btns[i].addEventListener("click", function() {
//         Like(dataMovie[i], i) // dataMovie[i] is object and i is for index
//         console.log(dataMovie[i], i);
//     })
// }

// function Like(obj, i) {
//     let like = obj.like; // "like" quantity in json
//     like++; //add one more value to qtt in json
//     document.getElementsByClassName("count")[i].innerHTML = like;
// }

// Like-button array 2nd version, more suitable for shopping cart
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

// $("#select").on("change", function() {
//     var a = $("option:selected").val();
//     $("#data_movie:contains('Adventure','Drama','Fantasy')").hide();

//     switch (a) {
//         case "all":
//             $("#data_movie:contains('Adventure','Drama','Fantasy')").show();
//             break;
//         case "Adventure":
//             $("#data_movie:contains('Adventure')").show();
//             break;
//         case "Drama":
//             $("#data_movie:contains('Drama')").show();
//             break;
//         case "Fantasy":
//             $("#data_movie:contains('Fantasy')").show();
//             break;
//         default:
//             ;
//     }
// });
// console.log(a);