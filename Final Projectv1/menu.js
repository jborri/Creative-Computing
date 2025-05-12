document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const startMenu = document.getElementById("start-menu");

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
    }
  });

  // Door 1 elements
  const door1Link = document.getElementById("door1-link");
  const natureLink = document.getElementById("nature-link");
  const door1Modal = document.getElementById("door1-modal");
  const closeDoor1 = document.getElementById("close-door1");

  // Door 2 elements
  const door2Link = document.getElementById("door2-link");
  const memesLink = document.getElementById("memes-link");
  const door2Modal = document.getElementById("door2-modal");
  const closeDoor2 = document.getElementById("close-door2");

  // Door 3 elements
  const door3Link = document.getElementById("door3-link");
  const meLink = document.getElementById("me-link");
  const door3Modal = document.getElementById("door3-modal");
  const closeDoor3 = document.getElementById("close-door3");

  // Function to open a modal
  const openModal = (modal) => {
    modal.classList.remove("hidden");
  };

  // Function to close a modal
  const closeModal = (modal) => {
    modal.classList.add("hidden");
  };

  // Door 1 event listeners
  door1Link.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(door1Modal);
  });

  natureLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(door1Modal);
  });

  closeDoor1.addEventListener("click", () => {
    closeModal(door1Modal);
  });

  // Door 2 event listeners
  door2Link.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(door2Modal);
  });

  memesLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(door2Modal);
  });

  closeDoor2.addEventListener("click", () => {
    closeModal(door2Modal);
  });

  // Door 3 event listeners
  door3Link.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(door3Modal);
  });

  meLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(door3Modal);
  });

  closeDoor3.addEventListener("click", () => {
    closeModal(door3Modal);
  });

  // Optional: Close modal when clicking outside the content
  window.addEventListener("click", (event) => {
    if (event.target === door1Modal) {
      closeModal(door1Modal);
    }
    if (event.target === door2Modal) {
      closeModal(door2Modal);
    }
    if (event.target === door3Modal) {
      closeModal(door3Modal);
    }
  });

  const musicPlayer = document.getElementById("musicplayer");
  const audio = document.getElementById("background-music");

  musicPlayer.addEventListener("click", () => {
    if (audio.paused) {
      audio.play(); // Play the music
      musicPlayer.classList.remove("paused");
      musicPlayer.classList.add("playing");
    } else {
      audio.pause(); // Pause the music
      musicPlayer.classList.remove("playing");
      musicPlayer.classList.add("paused");
    }
  });

  const lotusImage = document.getElementById("lotus");
  const lotusModal = document.getElementById("lotus-modal");
  const closeLotus = document.getElementById("close-lotus");

  // Open the modal when the lotus image is clicked
  lotusImage.addEventListener("click", () => {
    lotusModal.classList.remove("hidden");
  });

  // Close the modal when the close button is clicked
  closeLotus.addEventListener("click", () => {
    lotusModal.classList.add("hidden");
  });

  // Optional: Close the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === lotusModal) {
      lotusModal.classList.add("hidden");
    }
  });

  const rotationSpeedSlider = document.getElementById("rotationSpeed1");
  const speedValue = document.getElementById("speedValue1");
  const smallest = document.querySelector(".smallest");
  const largest = document.querySelector(".largest");
  const middle = document.querySelector(".middle");

  // Function to update the animation duration
  const updateRotationSpeed = () => {
    const speed = rotationSpeedSlider.value;
    speedValue.textContent = speed;

    // Update the animation duration for each image
    smallest.style.animationDuration = `${speed}ms`;
    largest.style.animationDuration = `${speed}ms`;
    middle.style.animationDuration = `${speed}ms`;
  };

  // Add event listener to the slider
  rotationSpeedSlider.addEventListener("input", updateRotationSpeed);

  // Initialize the rotation speed
  updateRotationSpeed();
});

// Music player from previous project
function play() {
    var audio = new Audio('Gerudo Valley.mp3');
    audio.play();
    audio.loop = true;
    audio.volume = 0.2;
  }
  
  function setCookie(c_name,value,exdays)
  {
      var exdate=new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()); + "; path=/";
      document.cookie=c_name + "=" + c_value;
  }
  
  function getCookie(c_name)
  {
      var i,x,y,ARRcookies=document.cookie.split(";");
      for (i=0;i<ARRcookies.length;i++)
      {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
          {
          return unescape(y);
          }
        }
  }
  
  var song = document.getElementsByTagName('audio')[0];
  var played = false;
  var tillPlayed = getCookie('timePlayed');
  function update()
  {
      if(!played){
          if(tillPlayed){
          song.currentTime = tillPlayed;
          song.play();
          played = true;
          }
          else {
                  song.play();
                  played = true;
          }
      }
  
      else {
      setCookie('timePlayed', song.currentTime);
      }
  }
  
  setInterval(update,10);

function updateDateTime() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  document.getElementById('current-time').textContent = `${dateString} ${timeString}`;
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call to display immediately

  //loading screeeen
//   var loading_screen = document.querySelector(".loading");

// window.addEventListener('load', function() {
//     loading_screen.style.display = 'none';
// })
// Creating a new date object with the current date and time
const now = new Date();

// Creating a new date object with a specific date and time
const specificDate = new Date('2024-07-20T10:30:00');

// Creating a new date object with year, month (0-indexed), day, hours, minutes, seconds, milliseconds
const anotherDate = new Date(2025, 4, 11, 15, 45, 30, 500);

// Getting date components
const year = now.getFullYear();
const month = now.getMonth(); // 0-indexed
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();

// Setting date components
specificDate.setFullYear(2026);
specificDate.setMonth(6); // 0-indexed
specificDate.setDate(25);
specificDate.setHours(12);
specificDate.setMinutes(0);
specificDate.setSeconds(0);
specificDate.setMilliseconds(0);

// Formatting dates
const isoString = now.toISOString();
const dateString = now.toDateString();
const timeString = now.toTimeString();
const localeDateString = now.toLocaleDateString();
const localeTimeString = now.toLocaleTimeString();

// Getting timestamp (milliseconds since epoch)
const timestamp = now.getTime();

// Creating date from timestamp
const dateFromTimestamp = new Date(timestamp);

// Parsing date from string
const parsedDate = new Date(Date.parse('2024-07-20T10:30:00'));

// Date arithmetic
const futureDate = new Date(now);
futureDate.setDate(now.getDate() + 7); // Add 7 days

const pastDate = new Date(now);
pastDate.setDate(now.getDate() - 3); // Subtract 3 days

const emojiContainer = document.querySelector('.emoji-container');
const emojis = ['🍃', '🍃', '🪻', '🍃', '🪻'];  // Your emojis

function createFallingEmoji() {
    const emoji = document.createElement('span');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    // Random horizontal starting position
    emoji.style.left = `${Math.random() * 100}%`;

    // Apply falling animation
    emoji.style.animationName = "fall";

    // Random duration for a varied effect
    emoji.style.animationDuration = `${Math.random() * 4 + 3}s`; // Duration between 3-7s

    //Add the emoji to the container
    emojiContainer.appendChild(emoji);


     // Remove the emoji after it finishes falling
    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });
}

// Create a new emoji every so often (e.g. every half a second)
setInterval(createFallingEmoji, 1000);
