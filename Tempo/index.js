
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
  
  });

  // Close the menu if clicked outside?
  document.addEventListener("click", (event) => {
    if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
      startMenu.classList.add("hidden");
      startMenu.style.display = "none";
       console.log("did it work?")
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.collapsible-header');

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling; // Get the content div next to the clicked header

      // Toggle the 'active' class on the content
      if (content.classList.contains('active')) {
        content.classList.remove('active');
        content.style.maxHeight = null; // Reset max-height
      } else {
        content.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px'; // Set max-height to content's full height
      }
    });
  });
});
window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".collapsible ol, .collapsible ul")) {
    let t = document.createElement("div");
    t.innerHTML = i.previousSibling.textContent;
    t.className = "toggle";
    t.onclick = () => t.classList.toggle("open");
    i.parentElement.removeChild(i.previousSibling);
    i.parentElement.insertBefore(t, i);
  }
});