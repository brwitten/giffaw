$(document).on("ready", function(){
  $.ajax({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/search",
    data: $("form").serialize(),
    success: onSuccess,
    error: onError
  })
});

function onSuccess(json) {
  console.log("success got data");
  for (var i = 0; i < json.data.length; i++) {
    $(".gif-gallery").append('<img src="'+json.data[i].images.fixed_height.url+'">');
    console.log(json.data[i].images.fixed_height.url);
  }
};

function onError(xhr, status, errorThrown) {
	alert("Sorry, there was a problem!");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr);
};
