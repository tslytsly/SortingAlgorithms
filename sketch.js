// Tom Sealey
// Based on Daniel Shiffman's Coding Challenge
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #114: Bubble Sort Visualization
// https://youtu.be/67k3I2GxTH8

let values = [];
let loops;
let swaps;
let cycles = 1;
let lines = false;
let numLines = 25;
let selType, inpNum;
let button;

function setup() {
	selType = createSelect();
	selType.position(10, 10);
	selType.option('Bubble');
	selType.option('Selection');
	selType.option('QuickSort');

	inpNum = createInput('25');
	inpNum.position(10, 30);
	inpNum.input(function() {
		numLines = inpNum.value();
		resetArray();
	});

	button = createButton('Restart');
	button.position(10, 50);
	button.mousePressed(resetArray);

	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, height);
	resetArray();
}

function draw() {
	background(0);

	if (loops < values.length) {
		switch (selType.value()) {
			case 'Bubble':
				bubbleSort();
				break;
			case 'Selection':
				selectionSort();
				break;
			default:
				bubbleSort();
				break;
		}
	} else {
		console.log("finished");
		noLoop();
	}

	for (i = 0; i < values.length; i++) {
		let col = color(values[i], height, height);
		let location = map(i, 0, values.length, 0, width);
		stroke(col);
		if (lines) {
			line(location, height, location, height - values[i]);
		} else {
			if (cycles <= 10) noStroke();
			fill(col);
			rect(location, height - values[i], width / numLines, height);
		}
	}
}

swap = function (arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

bubbleSort = function () {
	if (swaps < values.length - loops - 1) {

		if (numLines >= 50) cycles = 10;
		else if (numLines >= 200) cycles = 50;
		else if (numLines >= 500) cycles = 100;

		for (i = 0; i < cycles; i++) {
			let a = values[swaps];
			let b = values[swaps + 1];
			if (a > b) {
				swap(values, swaps, swaps + 1);
			}
			swaps++;
		}
	} else {
		swaps = 0;
		loops++;
	}
}

selectionSort = function () {
	for (j = 0; j < values.length - loops - 1; j++) {
		let a = values[j];
		let b = values[j + 1];
		if (a > b) {
			swap(values, j, j + 1);
		}
	}
}

resetArray = function() {
	console.log('resetting')
	values = [];
	for (i = 0; i < numLines; i++) {
		values[i] = random(height);
	}
	loops = 0;
	swaps = 0;
	loop();
}