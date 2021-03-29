
let button = document.querySelector('buttonClickMe');
let container = document.querySelector('#container');
let box1Id = document.querySelector('#box1Id');
let box2Id = document.querySelector('#box2Id');
let box3Id = document.querySelector('#box3Id');
let box4Id = document.querySelector('#box4Id');
let box5Id = document.querySelector('#box5Id');
let textCountId = document.querySelector('#textCountId');
let removeId = document.querySelector('#removeId');

buttonClickMe.addEventListener('click', function(event) {
	let image = document.createElement('img');
	image.classList.add('new-content');
	image.src = './egg.png';
	image.style.left = (90 * Math.random()) + '%';
	image.style.top = (90 * Math.random()) + '%';
	container.appendChild(image);

	var counter = document.querySelectorAll('.new-content');
	var counterText = counter.length + ' item';
	if (counter.length > 1) {
		counterText += 's';
	}
	textCountId.innerHTML = counterText;
});


container.addEventListener('click', function(event) {
	if (event.target.classList.contains('new-content') ) {
		event.target.remove();
	}

	var counter = document.querySelectorAll('.new-content');
	var counterText = counter.length + ' item';
	if (counter.length > 1) {
		counterText += 's';
	}
	textCountId.innerHTML = counterText;
});

container.addEventListener('click', function(event) {
  var target = event.target;
  if (target.classList.contains('swatch')) {
    // Get the computed style of the element (this means the CSS applied from external stylesheets, not just in the style attribute)
    var color = getComputedStyle(target)['backgroundColor'];
    var boxes = document.querySelectorAll('.new-content');

    boxes.forEach(function(box) {
      box.style.backgroundColor = color;
    });
  }
});



removeId.addEventListener('click', function(event) {
	var boxes = document.querySelectorAll('.new-content');
	boxes.forEach(function(box) {
		box.remove();
	})
});













