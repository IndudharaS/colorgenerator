// Get the button and the color text element
const button = document.getElementById("btn");
const colorText = document.getElementById("color");

// Function to generate random color in hex format
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add event listener to the button
button.addEventListener("click", () => {
  // Generate a random color
  const randomColor = getRandomColor();

  // Change the background color with a smooth transition
  document.body.style.backgroundColor = randomColor;

  // Update the color text to display the selected color
  colorText.textContent = randomColor;
});
