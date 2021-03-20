
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
	if(counter.length === 1 || counter.length === 0){
		textCountId.innerHTML = counter.length + ' item';
	} else{
		textCountId.innerHTML = counter.length + ' items';
	}
});


container.addEventListener('click', function(event) {
	if (event.target.classList.contains('new-content') ) {
		event.target.remove();
	}

	var counter = document.querySelectorAll('.new-content');
	if(counter.length === 1 || counter.length === 0){
		textCountId.innerHTML = counter.length + ' item';
	} else{
		textCountId.innerHTML = counter.length + ' items';
	}
});


box1Id.addEventListener('click', function(event) {
	var boxes = document.querySelectorAll('.new-content');
	boxes.forEach(function(box) {
		box.style.backgroundColor = 'pink';
	})
});

box2Id.addEventListener('click', function(event) {
	var boxes = document.querySelectorAll('.new-content');
	boxes.forEach(function(box) {
		box.style.backgroundColor = '#FDF06F';
	})
});

box3Id.addEventListener('click', function(event) {
	var boxes = document.querySelectorAll('.new-content');
	boxes.forEach(function(box) {
		box.style.backgroundColor = '#FF9966';
	})
});

box4Id.addEventListener('click', function(event) {
	var boxes = document.querySelectorAll('.new-content');
	boxes.forEach(function(box) {
		box.style.backgroundColor = '#FF6B61';
	})
});

box5Id.addEventListener('click', function(event) {
	var boxes = document.querySelectorAll('.new-content');
	boxes.forEach(function(box) {
		box.style.backgroundColor = '#75FFC0';
	})
});


removeId.addEventListener('click', function(event) {
	var boxes = document.querySelectorAll('.new-content');
	boxes.forEach(function(box) {
		box.remove();
	})
});













