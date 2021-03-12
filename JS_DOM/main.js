
let button = document.querySelector('button');


button.addEventListener('click', function(event) {
	let image = document.createElement('img');
	image.classList.add('new-content');
	image.src = './egg.png';
	image.style.left = (90 * Math.random()) + '%';
    image.style.top = (90 * Math.random()) + '%';
  container.appendChild(image);
});

container.addEventListener('click', function() {
	if (event.target.classList.contains('new-content') ) {
		event.target.remove();
	}

});




 
 









