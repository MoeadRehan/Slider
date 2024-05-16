const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function(){
    counter++;
    if(counter === slides.length){
        counter = 0;
    }
    scroll();
})

prevBtn.addEventListener("click", function(){
    counter--;
    if(counter < 0){
        counter = slides.length-1;
    }
    scroll();
});

function scroll(){
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
