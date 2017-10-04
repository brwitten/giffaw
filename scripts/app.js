$(document).on("ready", function(){

  $.ajax({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/search",
    data: $("form").serialize(),
    success: onSuccess,
    error: onError,
    key: "NcLhtT9vwfMS0UJ9TtZYwjzkq0KpyH6q"

  })

});

function onSuccess(json) {
  console.log("success got data");
  console.log(json.data);
  console.log(json.length);
  for (var i = 0; i < json.data.length; i++) {
    $(".gif-gallery").append('<img src="'+json.data[i].images.fixed_height.url+'">');
    console.log(json.data[i].images.fixed_height.url);
  }
}

// function onSuccess(json) {
//     for(i = 0; i < json.data.length; i++){
//     $(".gif-gallery").append('<img src="'+json.data[i].images.fixed_height.url+'">');
//     console.log(json);
// }
// }


function onError(xhr, status, errorThrown) {
	alert("Sorry, there was a problem!");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr);
}
