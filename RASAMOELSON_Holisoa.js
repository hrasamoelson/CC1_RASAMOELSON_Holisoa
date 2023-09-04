"use strict";


const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");

let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;

function launchGame(_evt) {
	secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1;
	maxGuesses = Math.ceil(Math.log($maxUsr.value)) + 1;
	// TODO : compléter ici
	$guessBtn.toggleAttribute("disabled", false);
	$output.innerHTML += "<br>";
	$output.append('Partie lancée, trouvez le nombre secret en au plus ' + maxGuesses + ' coups');
	$output.innerHTML += "<br>";
}

function checkValue(_evt) {
	nbGuesses += 1;
	if (secretNumber == $numUsr.value) {
		$guessBtn.toggleAttribute("disabled", true);
		$output.append('Bravo vous avez trouvé en ' + nbGuesses + ' coups');
		$output.innerHTML += "<br>";
	} else if (secretNumber > $numUsr.value) {
		$output.append('\r\n' + $numUsr.value + ' est trop bas');
		$output.innerHTML += "<br>";
	} else {
		$output.append('\r\n' + $numUsr.value + ' est trop haut');
		$output.innerHTML += "<br>";
	}
	if (secretNumber != $numUsr.value && nbGuesses == maxGuesses) {
		$guessBtn.toggleAttribute("disabled", true);
		$output.append('Perdu le nombre était ' + secretNumber);
	}
}
$guessBtn.addEventListener("click", checkValue);
$startBtn.addEventListener("click", launchGame);



function addCow(evt) {
	let move = (Math.random() * 1);
	console.debug(evt.x, evt.y);
	// TODO : compléter ici
	const $img = document.createElement("img");
	$img.src = "https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg";
	$img.classList.add("cow");
	console.debug(evt.y, evt.x);
	$img.style.transform = `rotate(${move} turn)`;
	$img.style.top = `${evt.y}px`;
	$img.style.left = `${evt.x}px`;
	document.body.appendChild($img);
}

function toggleCow(_evt) {
	if (document.onmousedown instanceof Function) {
		document.onmousedown = null;
	} else {
		document.onmousedown = addCow;
	}
}
$cowBtn.addEventListener("click", toggleCow);
