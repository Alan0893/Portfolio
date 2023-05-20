const copyText = document.getElementsByClassName("copy");

Array.from(copyText).forEach((text) => {
	text.addEventListener('click', () => {
		navigator.clipboard.writeText(text.textContent)
			.then(() => {
				showCopyMessage();
			})
			.catch((e) => {
				console.error('Error copying text: ', e)
			})
	})
})

function showCopyMessage() {
  const copyMessage = document.getElementById("copyMessage");
  copyMessage.style.display = "block";

  setTimeout(() => {
    copyMessage.style.display = "none";
  }, 2000);
}