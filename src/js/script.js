
$(document).ready(function(){
    $('.slider__items').slick({
        prevArrow: $('.button__prev'),
        nextArrow: $('.button__next'),
        centerPadding: '20px',
    }
    );
});


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

$('input[name=phone]').mask("+7 (999) 999-99-99");

$flag = -1;

$('.dropbtn').hover(
  function () {
      $('.sneak').attr("style", "visibility:visible");
  },
  function () {
      if ($flag == -1) {
          $('.sneak').attr("style", "visibility:hidden");
      }
  }
);

/* const scroll = document.querySelector("body");
scroll.addEventListener('scroll'); */