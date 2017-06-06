var buttons=["dog","cat","tiger","wolf","lion","deer","elephant","rat","monkey","hippo","lepord","eagle","hornbill","parrot"];
function buttons()
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
  var animal =$("#animal-input").val().trim();
  animals.push(animal);
  buttons();
});
buttons();
$("button").on("click", function()
{
  var animal = $(this).attr("data-name");
  var queryURL="http://api.giphy.com/v1/gifs/search?q="+animal+"&api_key=dc6zaTOxFJmzC";
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var animalDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $("#images").prepend(animalDiv);
    }

});
});
