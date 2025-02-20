const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }    
});
swiper.on("slideChange", () => {
  const indexRaqami = swiper.realIndex; 

  if(indexRaqami === 1){
      document.body.style.backgroundColor = "red"; 
  }
  else if(indexRaqami === 2){
      document.body.style.backgroundColor = "blue"; 
  }
});