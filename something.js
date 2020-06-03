function ready(callback){
  // in case the document is already rendered
  if (document.readyState!='loading') callback();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') callback();
  });
}



//*****************MOVIES************/
ready(function(){
  // Select the carousel you'll need to manipulate and the buttons you'll add events to
  const carousel = document.querySelector("[data-target='carousel']");
  const card = carousel.getElementsByClassName("card");
  const leftButton = document.querySelector("[data-action='slideLeft']");
  const rightButton = document.querySelector("[data-action='slideRight']");

  // Prepare to limit the direction in which the carousel can slide, 
  // and to control how much the carousel advances by each time.
  // In order to slide the carousel so that only three cards are perfectly visible each time,
  // you need to know the carousel width, and the margin placed on a given card in the carousel;
  //const cardStyle = card.currentStyle || window.getComputedStyle(card)

  // Define an offset property to dynamically update by clicking the button controls
  // as well as a maxX property so the carousel knows when to stop at the upper limit
  let offset = 0;
  // Add the click events
  leftButton.addEventListener("click", function() {
    if (offset !== 0) {
      if(screen.width <= 768)
        offset+=180;
      else
        offset += 234;
      for(var x = 0;x<card.length;x++){
        card[x].style.transform = `translateX(${offset}px)`;
      }
    }
  })
    
  rightButton.addEventListener("click", function() {
    if(screen.width <= 768)
      offset-=180;
    else
      offset -= 234;
    for(var x = 0;x<card.length;x++){
      card[x].style.transform = `translateX(${offset}px)`;
    }
    
  })



//*****************TV SHOWS************/


  // Select the carousel you'll need to manipulate and the buttons you'll add events to
  const carousel2 = document.querySelector("[data-target='carousel2']");
  const card2 = carousel2.getElementsByClassName("card2");
  const leftButton2 = document.querySelector("[data-action='slideLeft2']");
  const rightButton2 = document.querySelector("[data-action='slideRight2']");

  // Prepare to limit the direction in which the carousel can slide, 
  // and to control how much the carousel advances by each time.
  // In order to slide the carousel so that only three cards are perfectly visible each time,
  // you need to know the carousel width, and the margin placed on a given card in the carousel

  // Define an offset property to dynamically update by clicking the button controls
  // as well as a maxX property so the carousel knows when to stop at the upper limit
  let offset2 = 0;

  // Add the click events
  leftButton2.addEventListener("click", function() {
    if (offset2 !== 0) {
      if(screen.width <= 768)
        offset2+=180;
      else
        offset2 += 234;
      for(var x = 0;x<card2.length;x++){
        card2[x].style.transform = `translateX(${offset2}px)`;
      }
    }
  })
    
  rightButton2.addEventListener("click", function() {
    if(screen.width <= 768)
      offset2-=180;
    else
      offset2-= 234;
    for(var x = 0;x<card2.length;x++){
      card2[x].style.transform = `translateX(${offset2}px)`;
    }
    
  })

})


