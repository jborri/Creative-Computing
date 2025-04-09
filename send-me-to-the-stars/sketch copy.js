document.addEventListener('DOMContentLoaded', function () {

    //an array holding links to all of the images (some of the repeat)
    let imgLinks = [
     'sketch1/Notebook001.jpg',
      'sketch1/Notebook002.jpg',
      'sketch1/Notebook003.jpg',
      'sketch1/Notebook004.jpg',
      'sketch1/Notebook005.jpg',
      'sketch1/Notebook006.jpg',
      'sketch1/Notebook007.jpg',
      'sketch1/Notebook008.jpg',
      'sketch1/Notebook009.jpg',
      'sketch1/Notebook010.jpg',
      'sketch1/Notebook011.jpg',
      'sketch1/Notebook012.jpg',
      'sketch1/Notebook013.jpg',
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
  