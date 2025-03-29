/*
  This is your site JavaScript code - you can add interactivity!
*/
function play() {
  var audio = new Audio('A&W (Instrumental With Backing Vocals).mp3');
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
// setInterval(update,10);
// sessionStorage.setItem('timePlayed', song.currentTime);
// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

// /* 
// Make the "Click me!" button move when the visitor clicks it:
// - First add the button to the page by following the steps in the TODO 🚧
// */
// const btn = document.querySelector("button"); // Get the button from the page
// if (btn) { // Detect clicks on the button
//   btn.onclick = function () {
//     // The 'dipped' class in style.css changes the appearance on click
//     btn.classList.toggle("dipped");
//   };
// }


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
