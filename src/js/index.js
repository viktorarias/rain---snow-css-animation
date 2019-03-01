import {Tweenmax} from 'gsap/TweenMax';


const numberOfDrops = 300;
const rainContainer = document.querySelector('#rain-container');
for(let i = 0; i < numberOfDrops; i++){

 const createDrop = document.createElement('DIV');

 createDrop.classList.add('drop');
 rainContainer.appendChild(createDrop);

}
 const drop = document.querySelectorAll('.drop');
 const buttonRain = document.querySelector('#rain'); 
 const buttonSnow = document.querySelector('#rain'); 

 function rain(){
    drop.forEach((element) => {
        element.classList.remove('snow');
        element.classList.add('rain');
    }
    )
 };
 function snow(){
    drop.forEach((element) => {
        element.classList.remove('rain');
        element.classList.add('snow');
    }
    )
 };

 buttonRain.addEventListener('click', rain);
 buttonSnow.addEventListener('click', snow);