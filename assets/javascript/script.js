var buttons=["dog","cat","tiger","wolf","lion","deer","elephant","rat","monkey","hippo","lepord","eagle","hornbill","parrot"];
animalButtons();
function animalButtons()
{
  $("#animals").empty();
  for(var i=0;i<buttons.length;i++)
  {
    var a =$("<button>");
    a.addClass("animal");
    a.attr("data-name",buttons[i]);
    a.text(buttons[i]);
    $("#animals").append(a);
  }
}
$("#add-animal").on("click", function(event) {
  event.preventDefault();
  var animalName =$("#animal-input").val().trim();
  buttons.push(animalName);
  animalButtons();
});
animalButtons();
$("button").on("click", function()
{
  $('#images').empty();
  var animal1 = $(this).attr("data-name");
  var noSpace = animal1.replace(" " , "_");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + noSpace + "&limit=10&api_key=dc6zaTOxFJmzC";
  console.log(queryURL);
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
  		for (var i = 0; i < 10; i++) {
  		  var rating = response.data[i].rating;
  			var img = $("<img>");
  				//add multiple attributes to the newly created <img> at one time
  			img.attr({
  					'src': response.data[i].images.fixed_height_still.url,
  					'data-name': 'still',
  					'data-still': response.data[i].images.fixed_height_still.url,
  					'data-animate': response.data[i].images.fixed_height.url,
  					'width': 300,
  					'height': 300
  			});
  		$('#images').append(img);
  		$('#images').append("<br>Rated: " + rating + "<br><br>");
  		}
  	});
  });

  $(document).on("click", 'img', function(){
  	//if the gif is still, change to animate
  	if($(this).attr('data-name') === 'still') {
  		$(this).attr('src', $(this).attr('data-animate'));
  		$(this).attr('data-name', 'animate');
  	}
  	//if the gif is animated, change to still
  	else {
  		$(this).attr('src', $(this).attr('data-still'));
  		$(this).attr('data-name', 'still');
  	}
  });
