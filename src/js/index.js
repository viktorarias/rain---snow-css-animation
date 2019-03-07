import {Tweenmax} from 'gsap/TweenMax';

/**
 * Number of drops to rendering into DOM
 */
const numberOfDrops = 250;
const rainContainer = document.querySelector('#rain-container');

/**
 * Create dynamic drops and put them inside the rain container
 */
for(let i = 0; i < numberOfDrops; i++){

 const createDrop = document.createElement('DIV');

 createDrop.classList.add('rain');
 rainContainer.appendChild(createDrop);

}

/**
 * Select all drops and asign the class css animation
 */
 const drop = document.querySelectorAll('.rain');
 const buttonRain = document.querySelector('#rain'); 
 const buttonSnow = document.querySelector('#rain'); 

 /**
  * Add rain animation class
  */
 function weather(){
    drop.forEach((element) => {
        element.classList.toggle('snow');
    }
    );
 };

/**
 * Click event to add class 
 */
 buttonRain.addEventListener('click', weather);