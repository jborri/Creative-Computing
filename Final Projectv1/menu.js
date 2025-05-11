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
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
  }
  
  setInterval(updateTime, 1000); // Update every 1000 milliseconds (1 second)
  updateTime(); // Initial call to display time immediately

  //loading screeeen
//   var loading_screen = document.querySelector(".loading");

// window.addEventListener('load', function() {
//     loading_screen.style.display = 'none';
// })
