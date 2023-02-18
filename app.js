$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        fade:true,
        speed: 500,
    });

    $('.slider2').slick({
        // autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScrooll: 1,
        centerMode:true,
        // appendDots:'.slider-dots',
        // fade:true,
        // speed: 500,
    });
});



const triggers = document.querySelectorAll('.menu-trigger');

console.log(triggers);

for(let i=0;i<triggers.length;i++){
    triggers[i].addEventListener('click',function(e){
        e.preventDefault();
        this.classList.toggle('is-open');
    });
}