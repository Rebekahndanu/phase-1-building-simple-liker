// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function () {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.classList.contains("activated-heart")) {
            heart.classList.remove("activated-heart");
            heart.innerText = EMPTY_HEART;
          } else {
            heart.classList.add("activated-heart");
            heart.innerText = FULL_HEART;
          }
        })
        .catch((error) => {
          errorModal.classList.remove("hidden");
          const modalMessage = document.getElementById("modal-message");
          modalMessage.innerText = `Server Error: ${error}`;
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
