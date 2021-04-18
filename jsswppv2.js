//PARALLAX
let back = document.querySelector('#back');
let mid = document.querySelector('#mid');
let fore = document.querySelector('#fore');
let parallax = document.querySelector('.parallax');
let flower = document.querySelectorAll('.flower');
let count = 0;
let slider = document.querySelector('slideContainer');
let h1 = document.querySelector('h1');

window.addEventListener('scroll', () =>{
    if(window.scrollY < 2600){
        let value = window.scrollY;
        if(value>1300){
            let valueDec = 2* (value - 1300);
            value -= valueDec;
        }
        console.log(value);
        console.log(window.scrollY);
        // back.style.top = -0.1 *value + "px";
        // mid.style.width = (width + value*0.1) + "px";
        // back.style.width = 100 - value + "%";
        // back.style.height = 100 - value + "%";
        console.log("back width",back.style.width);
        // back.style.objectFit = "none";
        mid.style.height = (100 + 0.3*value )+"%";
        fore.style.left = (- 2* value) + "px";
        fore.style.width = (500+(value*0.5))+"px";
        console.log("after" + fore.style.width);
        parallax.style.top = window.scrollY + "px";
        flower[count].style.display = "block";
        if(value < 550){
            flower[count].style.top = 60 - 0.1 * value + "vh";
            flower[count].style.width = 500 + 1 *value + "px";
            h1.style.display = "none";
        }
        else if(value < 1150){
            h1.style.display= "block";
            h1.style.fontSize = (0.05 *(value-550)) + "vw";
            h1.style.top = 50 - 0.05 * (value-550) + "vh"
            console.log("value",parseInt(h1.style.fontSize));
            // if(parseInt(h1.style.fontSize) > 30){
            //     h1.style.fontSize = 30 + "vw";
            // }
            flower[count].style.top  = 5.3 - 0.05 * (value-550) + "vh";
            flower[count].style.display = "none";
            count = Math.floor(((value-550)/100)%6);
            flower[count].style.top  = 5.3 - 0.05 * (value-550) + "vh";
            flower[count].style.width = 500 + 1 *value + "px";
            flower[count].style.display = "block";
        }
    }
    else{
        flower[count].style.display = "none";
    }
});


// SLIDER

let counter = 0; // counter
const slide = document.querySelector('.slide');
const slideImg = document.querySelectorAll('.slide img');
let size = slide.clientWidth;
// let size2 = slideImg[0].clientWidth;
// console.log(size);
// console.log(size2);

//buttons

let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

function translate(counter, size){
    console.log("function counter =", counter)
    slide.style.transform = "translateX(" + (-size * counter) + "px";
}

next.addEventListener('click', () =>{
    counter = (counter +1) % slideImg.length;
    translate(counter, size);
});

prev.addEventListener('click', () =>{
    counter = (counter -1) % slideImg.length;
    if(counter < 0){
        counter = slideImg.length -1;
    }
    translate(counter, size);
    console.log(counter);
}); 