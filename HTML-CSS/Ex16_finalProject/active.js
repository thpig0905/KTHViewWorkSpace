$('#top').on("click", function(e){
  $.scrollTo(0, 500);
});

$(window).scroll(
  function(){
    if ($(this).scrollTop() > 50) {
      $('header').addClass('active');
      $('#top').fadeIn();
    } else {
      $('header').removeClass('active');
      $('#top').fadeOut();
    }
  }
);

$('.testimonial-content .cards').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('#home').on("click", function(e){
  $.scrollTo(0, 500);
});

$('#about').on("click", function(e){
  $.scrollTo(604, 500);
});

$('#ranking').on("click", function(e){
  $.scrollTo(1410, 500);
});

$('#testimonial').on("click", function(e){
  $.scrollTo(2180, 500);
});

$('.trigger').on("click", function(e){
  $(this).toggleClass('active')
  $('.gnb , .sns').toggleClass('on')
});