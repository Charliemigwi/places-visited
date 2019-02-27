// business logic
function Place(name, location) {
  this.name = name;
  this.location = location;
}
Place.prototype.fullName = function() {
  return this.name + " , " + this.location;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedLocation = $("input#location").val();

    var newPlace = new Place(inputtedName , inputtedLocation);

    $("ul#places").append("<li><span class='place'>" + newPlace.fullName() + "</span></li>");
    $(".place").last().click(function() {
      $("#show-places").show();
      $("#show-place h2").text(newPlace.name);
      $(".name").text(newPlace.name);
      $(".location").text(newPlace.location);
    });
    $("input#new-name").val("");
    $("input#new-location").val("");
  });
});
