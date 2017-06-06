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
    $()"#animals").append(a);
  }
}
$("#add-animal").on("click", function(event) {
  event.preventDefault();
  var animal =$("#animal-input").val().trim();
  animals.push(animal);
  buttons();
});
