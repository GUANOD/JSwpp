//PARALLAX
let back = document.querySelector('#back');
let mid = document.querySelector('#mid');
let fore = document.querySelector('#fore');

window.addEventListener('scroll', (e) =>{
    console.log(e);
    const value = window.scrollY;

    back.style.top = value + "px";
})




// // SLIDER

// const slide = document.querySelector('.slide');
// const slideImg = document.querySelectorAll('.slide img');

// // counter
// let counter = 1;
// const size = slideImg[0].clientWidth;

// //buttons
// const next = document.querySelector('#next');
// const prev = document.querySelector('#prev');

// //start slide at position 1
// slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// //next buttton action
// next.addEventListener('click', () =>{
//     if(counter >= slideImg.length-1){return;}
//     slide.style.transition = "transform 0.4s ease-in-out";
//     counter ++;
//     slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
// });

// //prev button action
// prev.addEventListener('click', () =>{
//     if(counter <= 0){return;}
//     slide.style.transition = "transform 0.4s ease-in-out";
//     counter --;
//     slide.style.transform = 'translateX(' + (-size * counter) + 'px';
// });

// // LOOP the slide
// slide.addEventListener('transitionend', (e)=>{
//     if(slideImg[counter].id === "lastClone"){
//         slide.style.transition = 'none';
//         counter = slideImg.length -2;
//         slide.style.transform = 'translateX(' + (-size * counter) + 'px';
//     }
//     if(slideImg[counter].id === "firstClone"){
//         slide.style.transition = "none";
//         counter = 1;
//         slide.style.transform = 'translateX(' + (-size * counter) + 'px';
//     }
// });

