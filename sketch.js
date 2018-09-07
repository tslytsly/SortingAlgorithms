// Tom Sealey
// Based on Daniel Shiffman's Coding Challenge
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #114: Bubble Sort Visualization
// https://youtu.be/67k3I2GxTH8

let values = [];
let loops = 0;
let swaps = 0;
let lines = false;
let numLines = 25;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, height);
		numLines = width;
	for (i = 0; i < numLines; i++) {
		values[i] = random(height);
		//values[i] = noise(i/100.0)*height;
	}
}

function draw() {
	background(0);

	if (loops < values.length) {
		// for (j = 0; j < values.length - loops - 1; j++) {
		// 	let a = values[j];
		// 	let b = values[j + 1];
		// 	if (a > b) {
		// 		swap(values, j, j + 1);
		// 	}
		// }
		if (swaps < values.length - loops - 1) {
			let a = values[swaps];
			let b = values[swaps + 1];
			if (a > b) {
				swap(values, swaps, swaps + 1);
			}
			swaps++;
		} else {
			console.log('swap complete, restarting');
			swaps = 0;
			loops++;
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
			noStroke();
			fill(col);
			rect(location, height - values[i], width / numLines-1, height);
		}
	}
}

swap = function (arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}