// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const likeButtons = document.querySelectorAll(".like-glyph");

  // Hide error modal initially

  // Function to handle like button click
      const handleLikeButtonClick = (event) => {
      const likeButtons = event.target;
      mimicServerCall()
          .then(() => {
              likeButtons.classList.add("activated-heart");
              likeButtons.classList.toggle("like-glyph");
              likeButtons.classList.toggle("like-glyph-empty");
              if (likeButtons.classList.contains("like-glyph")){
                likeButtons.innerText = FULL_HEART;
               
              }
              else if (likeButtons.classList.contains("activated-heart")){
                likeButtons.classList.remove("activated-heart");
                likeButtons.innerText = EMPTY_HEART;
              }
          })
          .catch(() => {
              errorModal.textContent = "Server Error. Please try again later.";
              errorModal.className = "";
              setTimeout(() => {
                  errorModal.classList.add("hidden");
              }, 3000);
          });
  };

  // Add event listener to each like button
  likeButtons.forEach((button) => {
      button.addEventListener("click", handleLikeButtonClick);
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
