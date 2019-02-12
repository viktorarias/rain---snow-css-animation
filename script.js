const numberOfDrops = 150;
const rainContainer = document.querySelector('#rain-container');
for(i = 0; i < numberOfDrops; i++){

 const createDrop = document.createElement('DIV');

 createDrop.classList.add('drop');
 rainContainer.appendChild(createDrop);




}
