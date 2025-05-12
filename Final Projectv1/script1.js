
document.addEventListener("DOMContentLoaded", () => {
  const imageFolder = "images/door1/";
  const images = [
    "IMG_0679.JPG",
    "IMG_1041.JPG",
    "IMG_1042.JPG",
    "IMG_1043.JPG",
    "IMG_1049.JPG",
    "IMG_1057.JPG",
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
