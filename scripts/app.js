$(document).on("ready", function(){
  $.ajax({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/search",
    data: $("form").serialize(),
    success: onSuccess,
    error: onError
  })
  console.log($("form").serialize());

  $("form").on("submit", function(e){
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search",
      data: $("form").serialize(),
      success: onSuccess,
      error: onError
    })
    console.log($("form").serialize());
  });

});

function onSuccess(json) {
  console.log("success got data");
  $(".gif-img").remove();
  for (var i = 0; i < json.data.length; i++) {
    $(".gif-gallery").append('<img class="gif-img" src="'+json.data[i].images.fixed_height.url+'">');
  }
};

function onError(xhr, status, errorThrown) {
	alert("Sorry, there was a problem!");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr);
};
