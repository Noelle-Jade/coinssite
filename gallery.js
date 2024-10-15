var elements = document.getElementsByClassName("column");

for (var i = 0; i < elements.length; i++) {
  elements[i].style.flex = "20%";
}

var modal = document.getElementById('modalID');
var images = document.getElementsByClassName('modalImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
