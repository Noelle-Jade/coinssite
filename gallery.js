// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

for (var i = 0; i < elements.length; i++) {
  elements[i].style.flex = "25%";
}
