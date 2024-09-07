"use strict";

if(window.screen.width <= 500){

	let mobileAnimGroup = document.querySelector('.introduction-group');

	let mobileAnimFirst = document.querySelector('.first-screen');
	let mobileAnimFirstTech = document.querySelector('.technology__first-screen');
	let mobileAnimSecondTech = document.querySelector('.technology__second-screen');
	let mobileAnimInstruction = document.querySelector('.instruction');
	let mobileAnimKit = document.querySelector('.kit');
	let mobileAnimTeam = document.querySelector('.team');
	
	mobileAnimGroup.classList.add('mobile');

	mobileAnimFirst.classList.add('mobile');
	mobileAnimFirstTech.classList.add('mobile');
	mobileAnimSecondTech.classList.add('mobile');
	mobileAnimInstruction.classList.add('mobile');
	mobileAnimKit.classList.add('mobile');
	mobileAnimTeam.classList.add('mobile');

	function observeIntroGroup() {
		const box = document.querySelector('.first-screen');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
			let branchBlue = document.querySelector('.branch-yelow');
			let branchPink = document.querySelector('.branch-white__first');
			let branchSize = document.querySelector('.branch-white__second');
			let introSmallText = document.querySelector('.introduction-text');
			let introBackground = document.querySelector('.introduction-background');
			let introCloud = document.querySelector('.cloud');
			let introPoints = document.querySelector('.points');
			if (entry.isIntersecting) {
				function addClass() {
					branchBlue.classList.add('branch-blue');
					branchPink.classList.add('branch-pink');
					branchSize.classList.add('branch-size');
					introSmallText.classList.add('intro-text__small');
					introBackground.classList.add('intro-backgound__size');
					introCloud.classList.add('cloud-size');
					introPoints.classList.add('points-size');
				}
				setTimeout(addClass, 2500);
			} else {
				return
			}
		});
		}, options);
		
		observer.observe(box);
	}
	observeIntroGroup();

	function mobileFirstScreen() {

		let overflow = document.querySelector('.introduction');
		let overflowGroup = document.querySelector('.introduction-group');
		let header = document.querySelector('.header');
		let branchFirst = document.querySelector('.branch-white__second.branch-size');
		let branchSecond = document.querySelector('.branch-yelow.branch-blue');
		let branchThird = document.querySelector('.branch-white__first.branch-pink');

		overflowGroup.classList.add('overflow');
		overflow.classList.add('overflow');
		header.classList.add('mobile');
		branchFirst.classList.add('mobile');
		branchSecond.classList.add('mobile');
		branchThird.classList.add('mobile');
		$('.first-screen.mobile').fadeOut(500);
		$('.cloud').fadeOut(1500);
		$('.introduction-text').fadeOut(1500);
		$('.points').fadeOut(1500);
		$('.technology__first-screen.mobile').fadeIn(1500);
		$('.technology__second-screen.mobile').fadeIn(1500);
		$('.instruction').fadeIn(1500);
		$('.kit').fadeIn(1500);
		$('.team').fadeIn(1500);
		$('.branch.branch-white__second.branch-size.mobile').fadeOut(1500);
		$('.branch.branch-yelow.branch-blue.mobile').fadeOut(1500);
		$('.branch.branch-white__first.branch-pink.mobile').fadeOut(1500);

	}
	setTimeout(mobileFirstScreen, 6000);

	
	function observeFirstScreen() {
		const box = document.querySelector('.first-screen');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
	
			let header = document.querySelector('.header');
			let introText = document.querySelector('.introduction-text__second');
			let cloud = document.querySelector('.cloud');
			let introTextTechnology = document.querySelector('.introduction-text');
			let positionPosition = document.querySelector('.points');
	
			if (entry.isIntersecting) {
				function addClass() {
					header.classList.add('header-active');
					introText.classList.add('intro-text');
					cloud.classList.add('cloud-size');
					introTextTechnology.classList.add('intro-text__small');
					positionPosition.classList.add('points-size');
				}
				setTimeout(addClass, 2500);
			} else {
				introText.classList.remove('intro-text');
			}
		});
		}, options);
		
		observer.observe(box);
	}
	observeFirstScreen();

	$(document).ready(function($) {
		$('.popup-open').click(function() {
			$('.popup-white').fadeIn();
			return false;
		});
		
		$('.popup-close').click(function() {
			$(this).parents('.popup-white').fadeOut();
			return false;
		});    
	
		$(document).keydown(function(e) {
			if (e.keyCode === 27) {
				e.stopPropagation();
				$('.popup-white').fadeOut();
			}
		});
		
		$('.popup-white').click(function(e) {
			if ($(e.target).closest('.popup').length == 0) {
				$(this).fadeOut();                 
			}
		});
	});
	

} else {

	let mobileAnimGroup = document.querySelector('.introduction-group');

	let mobileAnimFirst = document.querySelector('.first-screen');
	let mobileAnimFirstTech = document.querySelector('.technology__first-screen');
	let mobileAnimSecondTech = document.querySelector('.technology__second-screen');
	let mobileAnimInstruction = document.querySelector('.instruction');
	let mobileAnimKit = document.querySelector('.kit');
	let mobileAnimTeam = document.querySelector('.team');

	mobileAnimGroup.classList.remove('mobile');

	mobileAnimFirst.classList.remove('mobile');
	mobileAnimFirstTech.classList.remove('mobile');
	mobileAnimSecondTech.classList.remove('mobile');
	mobileAnimInstruction.classList.remove('mobile');
	mobileAnimKit.classList.remove('mobile');
	mobileAnimTeam.classList.remove('mobile');



	function observeIntroGroup() {
		const box = document.querySelector('.introduction-group');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
			let branchBlue = document.querySelector('.branch-yelow');
			let branchPink = document.querySelector('.branch-white__first');
			let branchSize = document.querySelector('.branch-white__second');
			let introSmallText = document.querySelector('.introduction-text');
			let introBackground = document.querySelector('.introduction-background');
			let introCloud = document.querySelector('.cloud');
			let introPoints = document.querySelector('.points');
			if (entry.isIntersecting) {
				function addClass() {
					branchBlue.classList.add('branch-blue');
					branchPink.classList.add('branch-pink');
					branchSize.classList.add('branch-size');
					introSmallText.classList.add('intro-text__small');
					introBackground.classList.add('intro-backgound__size');
					introCloud.classList.add('cloud-size');
					introPoints.classList.add('points-size');
				}
				setTimeout(addClass, 2500);
			} else {
				branchBlue.classList.remove('branch-blue');
				branchPink.classList.remove('branch-pink');
				branchSize.classList.remove('branch-size');
				introSmallText.classList.remove('intro-text__small');
				introBackground.classList.remove('intro-backgound__size');
				introCloud.classList.remove('cloud-size');
				introPoints.classList.remove('points-size');
			}
		});
		}, options);
		
		observer.observe(box);
	}
	observeIntroGroup();
	
	function observeFirstScreen() {
		const box = document.querySelector('.first-screen');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
	
			let header = document.querySelector('.header');
			let introText = document.querySelector('.introduction-text__second');
			let cloud = document.querySelector('.cloud');
			let introTextTechnology = document.querySelector('.introduction-text');
			let positionPosition = document.querySelector('.points');
	
			if (entry.isIntersecting) {
				function addClass() {
					header.classList.add('header-active');
					introText.classList.add('intro-text');
					cloud.classList.add('cloud-size');
					introTextTechnology.classList.add('intro-text__small');
					positionPosition.classList.add('points-size');
				}
				setTimeout(addClass, 2500);
			} else {
				introText.classList.remove('intro-text');
			}
		});
		}, options);
		
		observer.observe(box);
	}
	observeFirstScreen();
	
	
	function observeTechnology() {
		const box = document.querySelector('.technology__first-screen');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
	
			let branchPosition = document.querySelectorAll('.branch');
			let positionPosition = document.querySelector('.points');
	
			if (entry.isIntersecting) {
				branchPosition.forEach((elem) => {
					elem.classList.add('position');
				});
				positionPosition.classList.add('points-size');
			}
		});
		}, options);
		
		observer.observe(box);
	}
	observeTechnology();
	
	
	$(document).ready(function($) {
		$('.popup-open').click(function() {
			$('.popup-white').fadeIn();
			return false;
		});
		
		$('.popup-close').click(function() {
			$(this).parents('.popup-white').fadeOut();
			return false;
		});    
	
		$(document).keydown(function(e) {
			if (e.keyCode === 27) {
				e.stopPropagation();
				$('.popup-white').fadeOut();
			}
		});
		
		$('.popup-white').click(function(e) {
			if ($(e.target).closest('.popup').length == 0) {
				$(this).fadeOut();                 
			}
		});
	});
	
	let time = 0;
	
	
	function fisrtScreen() {
		const box = document.querySelector('.first-screen');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				function setTimeOnWheelFirst() {
					document.onwheel = function ( event ) {
	
						if( Date.now() - time < 2500 ){
							return false;
						}
						time = Date.now();
	
						let fisrtScreen = document.querySelector('.first-screen');
						let technologyFirstScreen = document.querySelector('.technology__first-screen');
						let technologySecondScreen = document.querySelector('.technology__second-screen');
						let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');
						let technologySecondBranch = document.querySelector('.branch.branch-white__first.branch-pink');
						let technologyThirdBranch = document.querySelector('.branch.branch-white__second.branch-size');
						let technologyBranch = document.querySelector('.branch-yelow__technology');
						let technologyPoints = document.querySelector('.points.points-size');
						let itemHome = document.querySelector('.item-home');
						let itemAbout = document.querySelector('.item-about');
						
						technologyFirstScreen.classList.remove('active');
						technologySecondScreen.classList.remove('active');
	
						if( event.deltaY > 0 ) {
							
								$('.technology__first-screen').fadeIn(1500);
								technologyFirstScreen.classList.add('active');
								$('.first-screen').fadeOut(1500);
								fisrtScreen.classList.remove('active');
								$('.cloud').fadeOut(1500);
								$('.introduction-text').fadeOut(1500);
		
								technologyPoints.classList.add('position');
								technologyFirstBranch.classList.remove('first-position');
								technologySecondBranch.classList.remove('first-position');
								technologyThirdBranch.classList.remove('first-position');
								technologyBranch.classList.remove('none');
								technologyPoints.classList.remove('first-position');
								itemHome.classList.remove('active__main-menu');
								itemAbout.classList.add('active__main-menu');

						} else {
							return;
						}
					}
				}
				setTimeout(setTimeOnWheelFirst, 0);
			}
		});
		}, options);
		
		observer.observe(box);
	}
	fisrtScreen();
	
	function technologyFirstScreen() {
		const box = document.querySelector('.technology__first-screen');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				function setTimeOnWheelSecond() {
					document.onwheel = function ( event ) {
	
						if( Date.now() - time < 2500 ){
							return false;
						}
						time = Date.now();
	
						let fisrtScreen = document.querySelector('.first-screen');
						let technologyFirstScreen = document.querySelector('.technology__first-screen');
						let technologySecondScreen = document.querySelector('.technology__second-screen');
						let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');
						let technologySecondBranch = document.querySelector('.branch.branch-white__first.branch-pink');
						let technologyThirdBranch = document.querySelector('.branch.branch-white__second.branch-size');
						let technologyBranch = document.querySelector('.branch-yelow__technology');
						let technologyPoints = document.querySelector('.points');
						let technologyCloud = document.querySelector('.cloud');
						let TechnologyIntroText = document.querySelector('.introduction-text');
						let home = document.querySelector('.item-home');
						let about = document.querySelector('.item-about');
	
						fisrtScreen.classList.remove('active');
						technologySecondScreen.classList.remove('active');
						
						if( event.deltaY > 0 ) {
							$('.technology__first-screen').fadeOut(1500);
							technologyFirstScreen.classList.remove('active');
							$('.technology__second-screen').fadeIn(1500);
							technologySecondScreen.classList.add('active');
							technologyFirstScreen.classList.add('deactive');
							
							technologyFirstBranch.classList.add('second-position');
							technologySecondBranch.classList.add('second-position');
							technologyThirdBranch.classList.add('second-position');
							technologyBranch.classList.add('second-position');
							technologyFirstBranch.classList.remove('revers');
							technologyThirdBranch.classList.remove('revers');
							technologySecondBranch.classList.remove('revers');
							technologyBranch.classList.remove('revers');

							$('.tech-first').on('click', function() {
								console.log("hello");
							});

						} else {
							$('.technology__first-screen').fadeOut(1500);
							technologyFirstScreen.classList.remove('active');
							$('.first-screen').fadeIn(1500);
							fisrtScreen.classList.add('active');
							$('.cloud').fadeIn(1500);
							$('.introduction-text').fadeIn(1500);
	
							technologyBranch.classList.remove('second-position');
							technologyFirstBranch.classList.add('first-position');
							technologySecondBranch.classList.add('first-position');
							technologyThirdBranch.classList.add('first-position');
							technologyBranch.classList.add('none');
							technologyPoints.classList.remove('position');
							technologyPoints.classList.remove('points-size');
							technologyCloud.classList.remove('cloud-size');
							TechnologyIntroText.classList.remove('intro-text__small');
							home.classList.add('active__main-menu');
							about.classList.remove('active__main-menu');
							technologyFirstBranch.classList.remove('revers');
							technologyThirdBranch.classList.remove('revers');
							technologySecondBranch.classList.remove('revers');
							technologyBranch.classList.remove('revers');
						}
					}
				}
				setTimeout(setTimeOnWheelSecond, 0);
			}
		});
		}, options);
		
		observer.observe(box);
	}
	technologyFirstScreen();


	$('#tech-first').on('click', function() {

		let technologyFirstScreen = document.querySelector('.technology__first-screen');
		let technologySecondScreen = document.querySelector('.technology__second-screen');
		let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');
		let technologySecondBranch = document.querySelector('.branch.branch-white__first.branch-pink');
		let technologyThirdBranch = document.querySelector('.branch.branch-white__second.branch-size');
		let technologyBranch = document.querySelector('.branch-yelow__technology');

		$('.technology__first-screen').fadeOut(1500);
		technologyFirstScreen.classList.remove('active');
		$('.technology__second-screen').fadeIn(1500);
		technologySecondScreen.classList.add('active');
		technologyFirstScreen.classList.add('deactive');
		
		technologyFirstBranch.classList.add('second-position');
		technologySecondBranch.classList.add('second-position');
		technologyThirdBranch.classList.add('second-position');
		technologyBranch.classList.add('second-position');

	});


	
	function technologySecondScreen() {
		const box = document.querySelector('.technology__second-screen');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				function setTimeOnWheelThird() {
					document.onwheel = function ( event ) {
	
						if( Date.now() - time < 2500 ){
							return false;
						}
						time = Date.now();
	
						let technologyFirstScreen = document.querySelector('.technology__first-screen');
						let technologySecondScreen = document.querySelector('.technology__second-screen');
						let instruction = document.querySelector('.instruction');
						let branchBlue = document.querySelector('.branch.branch-yelow.branch-blue');
						let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
						let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
						let branchYelow = document.querySelector('.branch-yelow__technology');
						let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');
						let fisrtText = document.querySelector('.introduction .introduction-group .technology__second-screen .gallery .gallery-image .text-first');
						let secondText = document.querySelector('.introduction .introduction-group .technology__second-screen .gallery .gallery-image .text-second');
						let thirdText = document.querySelector('.introduction .introduction-group .technology__second-screen .gallery .gallery-image .text-third');

						let branchWhitePos = document.querySelector('.branch.branch-white__first.branch-pink.position');
	
						if( event.deltaY > 0 ) {
							$('.technology__second-screen').fadeOut(1500);
							technologySecondScreen.classList.remove('active');
							$('.instruction').fadeIn(1500);
							instruction.classList.add('active');
	
							branchBlue.classList.add('third-position');
							branchWhite.classList.add('third-position');
							branchPink.classList.add('third-position');
							branchYelow.classList.add('third-position');
							fisrtText.classList.add('position');
							secondText.classList.add('position');
							thirdText.classList.add('position');
							branchWhite.classList.remove('revers');
							branchPink.classList.remove('revers');
							branchYelow.classList.remove('revers');
							
						} else {
							$('.technology__second-screen').fadeOut(1500);
							technologySecondScreen.classList.remove('active');
							$('.technology__first-screen').fadeIn(1500);
							technologyFirstScreen.classList.add('active');
							technologyFirstScreen.classList.remove('deactive');

							technologyFirstBranch.classList.remove('second-position');
							branchWhite.classList.remove('second-position');
							branchPink.classList.remove('second-position');
							branchYelow.classList.remove('second-position');
	
							branchBlue.classList.add('revers');
							branchPink.classList.add('revers');
							branchWhitePos.classList.add('revers');
							branchYelow.classList.add('revers');
						}
					}
				}
				setTimeout(setTimeOnWheelThird, 0);
			}
		});
		}, options);
		
		observer.observe(box);
	}
	technologySecondScreen();


	$('#tech-second').on('click', function() {

		let technologySecondScreen = document.querySelector('.technology__second-screen');
		let instruction = document.querySelector('.instruction');
		let branchBlue = document.querySelector('.branch.branch-yelow.branch-blue');
		let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
		let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
		let branchYelow = document.querySelector('.branch-yelow__technology');
		let fisrtText = document.querySelector('.introduction .introduction-group .technology__second-screen .gallery .gallery-image .text-first');
		let secondText = document.querySelector('.introduction .introduction-group .technology__second-screen .gallery .gallery-image .text-second');
		let thirdText = document.querySelector('.introduction .introduction-group .technology__second-screen .gallery .gallery-image .text-third');

		$('.technology__second-screen').fadeOut(1500);
		technologySecondScreen.classList.remove('active');
		$('.instruction').fadeIn(1500);
		instruction.classList.add('active');

		branchBlue.classList.add('third-position');
		branchWhite.classList.add('third-position');
		branchPink.classList.add('third-position');
		branchYelow.classList.add('third-position');
		fisrtText.classList.add('position');
		secondText.classList.add('position');
		thirdText.classList.add('position');

	});
	
	
	function instruction() {
		const box = document.querySelector('.instruction');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				function setTimeOnWheelInstruction() {
					document.onwheel = function ( event ) {
	
						if( Date.now() - time < 2500 ){
							return false;
						}
						time = Date.now();
	
						let technologySecondScreen = document.querySelector('.technology__second-screen');
						let instruction = document.querySelector('.instruction');
						let kit = document.querySelector('.kit');
						let branchBlue = document.querySelector('.branch.branch-yelow.branch-blue');
						let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
						let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
						let branchYelow = document.querySelector('.branch-yelow__technology');
						let fisrtText = document.querySelector('.introduction .introduction-group .technology__second-screen .gallery .gallery-image .text-first');
						let secondText = document.querySelector('.introduction .introduction-group .technology__second-screen .gallery .gallery-image .text-second');
						let thirdText = document.querySelector('.introduction .introduction-group .technology__second-screen .gallery .gallery-image .text-third');
	
						if( event.deltaY > 0 ) {
							$('.kit').fadeIn(1500);
							kit.classList.add('active');
							$('.instruction').fadeOut(1500);
							instruction.classList.remove('active');
							instruction.classList.add('deactive');
	
							branchWhite.classList.add('kit-position');
							branchPink.classList.add('kit-position');
							branchYelow.classList.add('kit-position');

							branchPink.classList.remove('revers');
							branchWhite.classList.remove('revers');
							branchYelow.classList.remove('revers');

						} else {
							$('.instruction').fadeOut(1500);
							instruction.classList.remove('active');
							$('.technology__second-screen').fadeIn(1500);
							technologySecondScreen.classList.add('active');
	
							branchBlue.classList.add('third-position');
							branchWhite.classList.remove('third-position');
							branchPink.classList.remove('third-position');
							branchYelow.classList.remove('third-position');
							fisrtText.classList.remove('position');
							secondText.classList.remove('position');
							thirdText.classList.remove('position');

							branchWhite.classList.add('revers');
							branchPink.classList.add('revers');
							branchYelow.classList.add('revers');
						}
					}
				}
				setTimeout(setTimeOnWheelInstruction, 0);
			}
		});
		}, options);
		
		observer.observe(box);
	}
	instruction();


	$('#instruction').on('click', function() {

		let instruction = document.querySelector('.instruction');
		let kit = document.querySelector('.kit');
		let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
		let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
		let branchYelow = document.querySelector('.branch-yelow__technology');

		$('.kit').fadeIn(1500);
		kit.classList.add('active');
		$('.instruction').fadeOut(1500);
		instruction.classList.remove('active');
		instruction.classList.add('deactive');

		branchWhite.classList.add('kit-position');
		branchPink.classList.add('kit-position');
		branchYelow.classList.add('kit-position');

	});
	
	
	function kit() {
		const box = document.querySelector('.kit');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				function setTimeOnWheelKit() {
					document.onwheel = function ( event ) {
	
						if( Date.now() - time < 2500 ){
							return false;
						}
						time = Date.now();
	
						let team = document.querySelector('.team');
						let instruction = document.querySelector('.instruction');
						let kit = document.querySelector('.kit');
						let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
						let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
						let branchYelow = document.querySelector('.branch-yelow__technology');
						let about = document.querySelector('.item-about');
						let contact = document.querySelector('.item-contact');
	
						if( event.deltaY > 0 ) {
							$('.team').fadeIn(1500);
							team.classList.add('active');
							$('.kit').fadeOut(1500);
							kit.classList.remove('active');
							kit.classList.add('deactive');
	
							branchWhite.classList.add('team-position');
							branchPink.classList.add('team-position');
							branchYelow.classList.add('team-position');
							about.classList.remove('active__main-menu');
							contact.classList.add('active__main-menu');

							branchWhite.classList.remove('revers');
							branchPink.classList.remove('revers');
							branchYelow.classList.remove('revers');
						} else {
							$('.kit').fadeOut(1500);
							kit.classList.remove('active');
							$('.instruction').fadeIn(1500);
							instruction.classList.add('active');
							instruction.classList.remove('deactive');
	
							branchWhite.classList.remove('kit-position');
							branchPink.classList.remove('kit-position');
							branchYelow.classList.remove('kit-position');

							branchWhite.classList.add('revers');
							branchPink.classList.add('revers');
							branchYelow.classList.add('revers');
						}
					}
				}
				setTimeout(setTimeOnWheelKit, 0);
			}
		});
		}, options);
		
		observer.observe(box);
	}
	kit();


	$('#kit').on('click', function() {

		let team = document.querySelector('.team');
		let instruction = document.querySelector('.instruction');
		let kit = document.querySelector('.kit');
		let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
		let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
		let branchYelow = document.querySelector('.branch-yelow__technology');
		let about = document.querySelector('.item-about');
		let contact = document.querySelector('.item-contact');

		$('.team').fadeIn(1500);
		team.classList.add('active');
		$('.kit').fadeOut(1500);
		kit.classList.remove('active');
		kit.classList.add('deactive');

		branchWhite.classList.add('team-position');
		branchPink.classList.add('team-position');
		branchYelow.classList.add('team-position');
		about.classList.remove('active__main-menu');
		contact.classList.add('active__main-menu');

	});
	
	
	function team() {
		const box = document.querySelector('.team');
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		};
		
		const observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				function setTimeOnWheelTeam() {
					document.onwheel = function ( event ) {
	
						if( Date.now() - time < 2500 ){
							return false;
						}
						time = Date.now();
	
						let team = document.querySelector('.team');
						let kit = document.querySelector('.kit');
						let branchWhite = document.querySelector('.branch.branch-white__first.branch-pink');
						let branchPink = document.querySelector('.branch.branch-white__second.branch-size');
						let branchYelow = document.querySelector('.branch-yelow__technology');
						let about = document.querySelector('.item-about');
						let contact = document.querySelector('.item-contact');
	
						if( event.deltaY > 0 ) {
							return
						} else {
							$('.team').fadeOut(1500);
							team.classList.remove('active');
							$('.kit').fadeIn(1500);
							kit.classList.add('active');
							kit.classList.remove('deactive');
	
							branchWhite.classList.remove('team-position');
							branchPink.classList.remove('team-position');
							branchYelow.classList.remove('team-position');
							about.classList.add('active__main-menu');
							contact.classList.remove('active__main-menu');

							branchWhite.classList.add('revers');
							branchPink.classList.add('revers');
							branchYelow.classList.add('revers');
						}
					}
				}
				setTimeout(setTimeOnWheelTeam, 0);
			}
		});
		}, options);
		
		observer.observe(box);
	}
	team();

	$('#team').on('click', function() {

		let team = document.querySelector('.team');
		

		let fisrtScreen = document.querySelector('.first-screen');

		let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');
		let technologySecondBranch = document.querySelector('.branch.branch-white__first.branch-pink');
		let technologyThirdBranch = document.querySelector('.branch.branch-white__second.branch-size');
		let technologyBranch = document.querySelector('.branch-yelow__technology');
		let technologyPoints = document.querySelector('.points');
		let technologyCloud = document.querySelector('.cloud');
		let TechnologyIntroText = document.querySelector('.introduction-text');
		let home = document.querySelector('.item-home');
		let contact = document.querySelector('.item-contact');

		$('.team').fadeOut(1500);
		team.classList.remove('active');
		$('.first-screen').fadeIn(1500);
		fisrtScreen.classList.add('active');
		$('.cloud').fadeIn(1500);
		$('.introduction-text').fadeIn(1500);

		technologyBranch.classList.remove('second-position');
		technologyFirstBranch.classList.remove('branch-blue');
		technologySecondBranch.classList.remove('branch-pink');
		technologyThirdBranch.classList.remove('branch-size');
		technologyBranch.classList.add('none');
		technologyPoints.classList.remove('position');
		technologyPoints.classList.remove('points-size');
		technologyCloud.classList.remove('cloud-size');
		TechnologyIntroText.classList.remove('intro-text__small');
		home.classList.add('active__main-menu');
		contact.classList.remove('active__main-menu');

	});

	function mainMenu() {

		const home = document.querySelector('.item-home');
		const about = document.querySelector('.item-about');
		const contact = document.querySelector('.item-contact');

		const fisrtScreen = document.querySelector('.first-screen');
		const tech = document.querySelector('.technology__first-screen');
		const team = document.querySelector('.team');

		const branch = document.querySelector('.branch');
		const points = document.querySelector('.points');

		home.addEventListener('click', function(e) {
			$('.technology__first-screen').fadeOut(1500);
			$('.technology__second-screen').fadeOut(1500);
			$('.instruction').fadeOut(1500);
			$('.kit').fadeOut(1500);
			$('.team').fadeOut(1500);

			$('.first-screen').fadeIn(1500);
			$('.introduction-text').fadeIn(1500);
			$('.cloud').fadeIn(1500);
			
			tech.classList.remove('active');
			fisrtScreen.classList.add('active');
			team.classList.remove('active');
			home.classList.add('active__main-menu');
			about.classList.remove('active__main-menu');
			contact.classList.remove('active__main-menu');
			$('.points').fadeIn(1500);

			if(document.querySelector('.points').classList.contains('position')) {
				points.classList.remove('position');
			}

			let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');
			let technologySecondBranch = document.querySelector('.branch.branch-white__first.branch-pink');
			let technologyThirdBranch = document.querySelector('.branch.branch-white__second.branch-size');
			let technologyBranch = document.querySelector('.branch-yelow__technology');

			technologyFirstBranch.classList.remove('position');
			technologyFirstBranch.classList.remove('second-position');
			technologyFirstBranch.classList.remove('third-position');
			technologyFirstBranch.classList.remove('kit-position');
			technologyFirstBranch.classList.remove('team-position');
			technologyFirstBranch.classList.remove('revers');

			technologySecondBranch.classList.remove('position');
			technologySecondBranch.classList.remove('second-position');
			technologySecondBranch.classList.remove('third-position');
			technologySecondBranch.classList.remove('kit-position');
			technologySecondBranch.classList.remove('team-position');
			technologySecondBranch.classList.remove('revers');

			technologyThirdBranch.classList.remove('position');
			technologyThirdBranch.classList.remove('second-position');
			technologyThirdBranch.classList.remove('third-position');
			technologyThirdBranch.classList.remove('kit-position');
			technologyThirdBranch.classList.remove('team-position');
			technologyThirdBranch.classList.remove('revers');

			technologyBranch.classList.add('none');
			technologyBranch.classList.remove('second-position');
			technologyBranch.classList.remove('third-position');
			technologyBranch.classList.remove('kit-position');
			technologyBranch.classList.remove('team-position');
			technologyBranch.classList.remove('revers');

		});
		about.addEventListener('click', function(e) {
			$('.first-screen').fadeOut(1500);
			$('.technology__second-screen').fadeOut(1500);
			$('.instruction').fadeOut(1500);
			$('.kit').fadeOut(1500);
			$('.team').fadeOut(1500);
			$('.introduction-text').fadeOut(1500);
			$('.cloud').fadeOut(1500);

			$('.technology__first-screen').fadeIn(1500);
			tech.classList.add('active');
			fisrtScreen.classList.remove('active');
			team.classList.remove('active');
			home.classList.remove('active__main-menu');
			about.classList.add('active__main-menu');
			contact.classList.remove('active__main-menu');

			if(document.querySelector('.points').classList.contains('position')) {
				
			} else {
				points.classList.add('position');
			}

			let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');
			let technologySecondBranch = document.querySelector('.branch.branch-white__first.branch-pink');
			let technologyThirdBranch = document.querySelector('.branch.branch-white__second.branch-size');
			let technologyBranch = document.querySelector('.branch-yelow__technology');

			technologyFirstBranch.classList.remove('second-position');
			technologyFirstBranch.classList.remove('third-position');
			technologyFirstBranch.classList.remove('kit-position');
			technologyFirstBranch.classList.remove('team-position');
			technologyFirstBranch.classList.remove('revers');


			technologySecondBranch.classList.remove('second-position');
			technologySecondBranch.classList.remove('third-position');
			technologySecondBranch.classList.remove('kit-position');
			technologySecondBranch.classList.remove('team-position');
			technologySecondBranch.classList.remove('revers');


			technologyThirdBranch.classList.remove('second-position');
			technologyThirdBranch.classList.remove('third-position');
			technologyThirdBranch.classList.remove('kit-position');
			technologyThirdBranch.classList.remove('team-position');
			technologyThirdBranch.classList.remove('revers');

			technologyBranch.classList.remove('none');
			technologyBranch.classList.remove('second-position');
			technologyBranch.classList.remove('third-position');
			technologyBranch.classList.remove('kit-position');
			technologyBranch.classList.remove('team-position');
			technologyBranch.classList.remove('revers');

		});
		contact.addEventListener('click', function(e) {
			$('.first-screen').fadeOut(1500);
			$('.technology__second-screen').fadeOut(1500);
			$('.instruction').fadeOut(1500);
			$('.kit').fadeOut(1500);
			$('.technology__first-screen').fadeOut(1500);
			$('.introduction-text').fadeOut(1500);
			$('.cloud').fadeOut(1500);

			$('.team').fadeIn(1500);
			tech.classList.remove('active');
			fisrtScreen.classList.remove('active');
			team.classList.add('active');
			home.classList.remove('active__main-menu');
			about.classList.remove('active__main-menu');
			contact.classList.add('active__main-menu');
			$('.points').fadeOut(1500);

			if(document.querySelector('.points').classList.contains('position')) {
				
			} else {
				points.classList.add('position');
			}

			let technologyFirstBranch = document.querySelector('.branch.branch-yelow.branch-blue');
			let technologySecondBranch = document.querySelector('.branch.branch-white__first.branch-pink');
			let technologyThirdBranch = document.querySelector('.branch.branch-white__second.branch-size');
			let technologyBranch = document.querySelector('.branch-yelow__technology');

			technologyFirstBranch.classList.add('position');
			technologyFirstBranch.classList.add('second-position');
			technologyFirstBranch.classList.add('third-position');
			technologyFirstBranch.classList.add('kit-position');
			technologyFirstBranch.classList.add('team-position');
			technologyFirstBranch.classList.remove('revers');

			technologySecondBranch.classList.add('position');
			technologySecondBranch.classList.add('second-position');
			technologySecondBranch.classList.add('third-position');
			technologySecondBranch.classList.add('kit-position');
			technologySecondBranch.classList.add('team-position');
			technologySecondBranch.classList.remove('revers');

			technologyThirdBranch.classList.add('position');
			technologyThirdBranch.classList.add('second-position');
			technologyThirdBranch.classList.add('third-position');
			technologyThirdBranch.classList.add('kit-position');
			technologyThirdBranch.classList.add('team-position');
			technologyThirdBranch.classList.remove('revers');

			technologyBranch.classList.remove('none');
			technologyBranch.classList.add('second-position');
			technologyBranch.classList.add('third-position');
			technologyBranch.classList.add('kit-position');
			technologyBranch.classList.add('team-position');
			technologyBranch.classList.remove('revers');
		});
	}
	mainMenu();

}

function get_name_browser(){
	// получаем данные userAgent
	var ua = navigator.userAgent;    
	// с помощью регулярного выражения
	// ищем упоминание названия браузера
	if (ua.search(/Safari/) > 0) return true;
	// Возвращем false если не нашли safari
	return false;
	}
// Если функция вернула true
// То подключаем css
if (get_name_browser()) {
	document.write('<link rel="stylesheet" href="/assets/css/iphone.css">');
}

document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form');
	const popup = document.querySelector('.popup-white');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = onInput();

		let formData = new FormData(form);

		if (error === 0) {
			popup.classList.add('sending');
			let response = await fetch('sendmail.php', {
				method: 'post',
				body: formData
			});
			if (response.ok) {
				popup.classList.remove('sending');
				alert('Address send');
				console.log('send');
			} else {
				alert('ERROR');
				popup.classList.remove('sending');
			}
		} else {
			alert('Fill in required fields');
		}
	}

	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	const input = document.querySelector('input');
	
	function isEmailValid(value) {
		return EMAIL_REGEXP.test(value);
	}
	
	function onInput() {
		let error = 0;
		if (isEmailValid(input.value)) {
			input.classList.remove('invalid');
			input.classList.add('valid');
			error = 0;
		} else {
			input.classList.remove('valid');
			input.classList.add('invalid');
			error++;
		}
		console.log(error);
		return error;
	}
	
	input.addEventListener('input', onInput);
});

