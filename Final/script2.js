/*
  This is your site JavaScript code - you can add interactivity!
*/
// // ----- GLITCH STARTER PROJECT HELPER CODE -----

// // Open file when the link in the preview is clicked
// let goto = (file, line) => {
//   window.parent.postMessage(
//     { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
//   );
// };
// // Get the file opening button from its class name
// const filer = document.querySelectorAll(".fileopener");
// filer.forEach((f) => {
//   f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
// });
document.addEventListener("DOMContentLoaded", () => {
  const imageFolder = "images/door2/";
  const images = [
    "IMG_0852.JPG",
    "IMG_0854.JPG",
    "IMG_0865.JPG",
    "IMG_0866.JPG",
    "IMG_0903.JPG",
    "IMG_1044.JPG",
    "IMG_1045.JPG",
    "IMG_1046.JPG",
    "IMG_1050.JPG",
    "IMG_1052.JPG",
    "IMG_1054.JPG",
    "IMG_1060.JPG",
  ];


  let currentIndex = 0;
  const slideshowElement = document.getElementById("slideshow");
  const speedSlider = document.getElementById("speedSlider");
  const speedValue = document.getElementById("speedValue");

  let intervalId;
  let cycleSpeed = parseInt(speedSlider.value, 10);

  function cycleImages() {
    const imagePath = imageFolder + images[currentIndex];
    console.log("Loading image:", imagePath); // Debugging
    slideshowElement.src = imagePath;
    currentIndex = (currentIndex + 1) % images.length;
  }

  function startSlideshow() {
    clearInterval(intervalId); // Clear the previous interval
    intervalId = setInterval(cycleImages, cycleSpeed); // Start a new interval with the updated speed
  }

  // Update the cycle speed when the slider value changes
  speedSlider.addEventListener("input", () => {
    cycleSpeed = parseInt(speedSlider.value, 10); // Get the new speed from the slider
    speedValue.textContent = cycleSpeed; // Update the displayed speed value
    startSlideshow(); // Restart the slideshow with the new speed
  });

  // Start the slideshow initially
  startSlideshow();
  cycleImages(); // Show the first image immediately
});
