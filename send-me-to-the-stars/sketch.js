document.addEventListener('DOMContentLoaded', function () {

    //an array holding links to all of the images (some of the repeat)
    let imgLinks = [
       'sketch/image1.jpg',
       'sketch/image2.jpg',
       'sketch/image3.jpg',
       'sketch/image4.jpeg',
        'sketch/image5.jpeg',
        'sketch/image6.jpg',
        'sketch/image7.jpg',
        'sketch/image8.jpg',
        'sketch/image9.png',
        'sketch/image10.jpeg',
        'sketch/image11.jpeg',
        'sketch/image12.jpg',
        'sketch/image13.jpeg',
    ];
    
    //for each loop will go through each item in the array
    //same as a for loop, just a simpler syntax since you don't have to specify the start and end
    
   
    
    let container = document.querySelector('#container');
    imgLinks.forEach(function(d) {
      let img = document.createElement('img');
        img.src = d;
        img.classList.add('img');
       let div = document.createElement('div');
        div.classList.add('img-container');
        div.appendChild(img);
        container.appendChild(div);
        let randomx = Math.floor(Math.random() * 300);
        let randomy = Math.floor(Math.random() * 300);
  
        div.addEventListener('mouseover', function(event) {
          let randomx = Math.floor(Math.random() * 300);
          let randomy = Math.floor(Math.random() * 300);
          div.style.transform = `translate(${randomx}px, ${randomy}px)`;
        div.style.transition = 'transform 0.5s';
        div.classList.add('hover');
        console.log(div);
        // div.style['z-index'] =event.timeStamp;
        // div.style.position = 'absolute';
        // console.log(event);

    });
    div.addEventListener('mouseout', function(event) {
      div.classList.remove('hover');
      console.log(div);
      // div.style['z-index'] =event.timeStamp;
      // div.style.position = 'absolute';
      // console.log(event);

  });
        
        
      
    })
  
    
  });
  