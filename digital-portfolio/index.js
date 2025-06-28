
  const startButton = document.getElementById("titles");
  const startMenu = document.getElementById("link_container");

  startButton.addEventListener("click", () => {
    // Toggle the visibility of the start menu
    if (startMenu.classList.contains("hidden")) {
      startMenu.classList.remove("hidden");
      startMenu.style.display = "block";
    } else {
      startMenu.classList.add("hidden");
      startMenu.style.display = "none";
    }
    console.log("did it work?")
  });

  // Close the menu if clicked outside?
  document.addEventListener("click", (event) => {
    if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
      startMenu.classList.add("hidden");
      startMenu.style.display = "none";
    }});