// Selecting the button and the message paragraph elements
const button = document.getElementById("clickMe");
const messageParagraph = document.getElementById("message");

// Adding an event listener to the button
button.addEventListener("click", function () {
  // Changing the content of the message paragraph when the button is clicked
  messageParagraph.textContent = "Button was clicked!";
});
