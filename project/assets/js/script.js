"use strict";

$(function () {
	$('#fullpage').fullpage();
});


function introScreen() {
	if($('.introduction').length){
		console.log ("true");
	}
	else{
		console.log ("false");
	}

	console.log ("class");
}
introScreen();


function observeFirstScreen() {
	// какие-либо параметры
	const options = {
		// root: document.querySelector( '#viewport' ), // я закомментил строку, чтобы использовать значение по умолчанию
		rootMargin: '-50px',
		threshold: [ 1, 0.5 ]
	};

	const target = document.querySelector( '.section' );
	let branchBlue = document.querySelector('.branch-yelow');
	let branchPink = document.querySelector('.branch-white__first');
	let branchSize = document.querySelector('.branch-white__second');
	let introText = document.querySelector('.introduction-text__second');
	let introSmallText = document.querySelector('.introduction-text');
	let introBackground = document.querySelector('.introduction-background');
	let introCloud = document.querySelector('.cloud');
	let introPoints = document.querySelector('.points');

	// callback-функция (возвратная функция)
	const trueCallback = function(entries, observer) {
		entries.forEach((entry) => {
			// делаем что-либо для каждого переданного элемента (в нашем случае он один)
				console.log( 'сработало' );
				branchBlue.classList.add('branch-blue');
				branchPink.classList.add('branch-pink');
				branchSize.classList.add('branch-size');
				introText.classList.add('intro-text');
				introSmallText.classList.add('intro-text__small');
				introBackground.classList.add('intro-backgound__size');
				introCloud.classList.add('cloud-size');
				introPoints.classList.add('points-size');
		});
	}

	const observer = new IntersectionObserver( trueCallback, options );
	observer.observe( target ); // запускаем "слежку" за элементом(ами) в константе target
}
setTimeout(observeFirstScreen, 2500);




