"use strict"; // обязательно над всем кодом!
$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        slidesToShow:3,
        responsive:[
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow:1,
                   // centerMode: true,
                    variableWidth: true,
                    
                }
            }
        ]
    });
});
let arrow=document.querySelectorAll('.arrow');
let menu=document.querySelectorAll('.menu-footer__list');
for(let i=0; i<arrow.length; i++){
    let thisArrow=arrow[i];
    arrow[i].addEventListener('click', function(){
        thisArrow.classList.toggle('open');
        menu[i].classList.toggle('open');
    })
}