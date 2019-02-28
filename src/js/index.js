import {Tweenmax} from 'gsap/TweenMax';


const numberOfDrops = 150;
const rainContainer = document.querySelector('#rain-container');
for(let i = 0; i < numberOfDrops; i++){

 const createDrop = document.createElement('DIV');

 createDrop.classList.add('drop');
 rainContainer.appendChild(createDrop);

}
 const drop = document.querySelectorAll('drop');

const timeLine = new TimelineMax();
timeLine
.addLabel('frame1')
.to(drop, 0, {css:{className:'+=rain'}}, 'frame1')

.addLabel('frame2','+=.2')
.to(drop, 0, {css:{className:'+=snow'}}, 'frame2')
// .to([creative.dom.f2Snow1, creative.dom.f2Snow2,creative.dom.bgExit],0,{zIndex: 1});

function removeRain() {
var arr = Array.prototype.slice.call(creative.dom.drop);

arr.forEach(function(el) {
el.classList.remove('rain');
});

}
function removeSnow() {
var arr = Array.prototype.slice.call(creative.dom.drop);

arr.forEach(function(el) {
el.classList.remove('snow');
});
}
