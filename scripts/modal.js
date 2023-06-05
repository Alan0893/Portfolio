const body = document.body;

const modals = document.getElementsByClassName("modal");
const projs = document.querySelectorAll('[proj]')
const exit = document.querySelectorAll("[close]");
const blurElements = document.getElementsByClassName("blur");

projs.forEach(p => {
  p.addEventListener('click', () => {
    let num = (p.id).replace("proj", "")
    const currModal = document.getElementById("modal-" + num);
    
    /**
     * Scaling the image
     */
    const image = currModal.querySelector(".img-container img");
    if(window.innerWidth >= 800) {
      image.style.height = "200px"
    }
    
    currModal.style.display = "block"
    addBlur();
    body.classList.add("modal-open");
  })
})

exit.forEach(e => {
  e.addEventListener('click', () => {
    let num = (e.id).replace("close", "")
    const currModal = document.getElementById("modal-" + num);

    currModal.style.display = "none";
    removeBlur();
    body.classList.remove("modal-open")
  })
})

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