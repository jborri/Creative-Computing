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

//   const door1Link = document.getElementById("door1-link");
//   const door1Modal = document.getElementById("door1-modal");
//   const closeDoor1 = document.getElementById("close-door1");

//   // Show the modal when Door 1 is clicked
//   door1Link.addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent default link behavior
//     door1Modal.classList.remove("hidden");
//   });

//   // Hide the modal when the close button is clicked
//   closeDoor1.addEventListener("click", () => {
//     door1Modal.classList.add("hidden");
//   });

//   // Optional: Hide the modal when clicking outside the modal content
//   window.addEventListener("click", (event) => {
//     if (event.target === door1Modal) {
//       door1Modal.classList.add("hidden");
//     }
//   });

//   const door1Action = document.getElementById("door1-action");

//   door1Action.addEventListener("click", () => {
//     alert("You clicked the action button in Door 1!");
//   });
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