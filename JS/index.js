const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = ()=>{
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;
  if(document.cookie){ //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  }else{ //if cookie not set then alert an error
    alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
  }
}
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});
document.addEventListener("mousemove", function(e){
  this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');

      const x = (window.innerWidth - e.pageX*speed)/100; 
      const y = (window.innerHeight - e.pageY*speed)/100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
});
// responsive: [
//   {
//     breakpoint: 990,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1,
//     }
//   },
//   {
//     breakpoint: 640,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1
//     }
//   },
// ]
$(document).ready(function(){
    $('.ourBest_workers_slider').slick({
        infinite: true,
        dots: true,
        speed: 1500,
        arrows: false,
        // autoplay: true, 
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll:1,
        // adaptiveHeight: true,
        draggable: true,
        // touchThreshold: 10,
        swipe: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 683,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
    });
});
$(document).ready(function(){
  $('.opinion_slider').slick({
      infinite: true,
      dots: false,
      speed: 1500,
      arrows: true,
      // autoplay: true, 
      autoplaySpeed: 1500,
      slidesToShow: 3,
      slidesToScroll:1,
      draggable: false,
      swipe: false,
      nextArrow: '.opinion_arrows_right',
      prevArrow: '.opinion_arrows_left',
      variableWidth: true,
      responsive: [
        {
          breakpoint: 478,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
  });
});





