// Open modal
var modal = document.getElementById("modal-04");
var btn = document.getElementById("proj4");
var close = document.getElementById("close");
var body = document.body;
var blurElements = document.getElementsByClassName("blur");

btn.onclick = function () {
  modal.style.display = "block";
  addBlur();
  //body.classList.add("modal-open");
};

// Close modal
close.onclick = function () {
  modal.style.display = "none";
  removeBlur();
  //body.classList.remove("modal-open")
};
// Close modal when clicking outside
/*window.addEventListener("click", function (event) {
			var element = event.target
			var parentElement = element.parentNode;
		});*/

// Function to add blur effect
function addBlur() {
  for (var i = 0; i < blurElements.length; i++) {
    blurElements[i].classList.add("blurred");
  }
}

// Function to remove blur effect
function removeBlur() {
  for (var i = 0; i < blurElements.length; i++) {
    blurElements[i].classList.remove("blurred");
  }
}
