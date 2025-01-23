(function($) {

	var	$window = $(window),
		$body = $('body'),
		settings = {

			// Carousels
				carousels: {
					speed: 4,
					fadeIn: true,
					fadeDelay: 250
				},

		};

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '961px',   '1280px' ],
			narrow:    [ '841px',   '960px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 350,
			noOpenerFade: true,
			alignment: 'center'
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Nav.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					target: $body,
					visibleClass: 'navPanel-visible'
				});
		
})(jQuery);

// --------slideshows--------
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, no) {
	showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

function showSlides(n, no) {
	let i;
	let x = document.getElementsByClassName(slideId[no]);
	if (n > x.length) {slideIndex[no] = 1}    
	if (n < 1) {slideIndex[no] = x.length}
	for (i = 0; i < x.length; i++) {
	   x[i].style.display = "none";  
	}
	x[slideIndex[no]-1].style.display = "block";  
  }

// Function to open the overlay
// function openOverlay(content) {
//     document.getElementById("overlay").style.display = "flex";
//     document.getElementById("overlay-info").innerHTML = content;
// }

// // Function to close the overlay
// function closeOverlay() {
//     document.getElementById("overlay").style.display = "none";
// }

// function openOverlay(title, description) {
// 	// Get the overlay elements
// 	const overlay = document.getElementById('overlay');
// 	const overlayContent = document.getElementById('overlay-inner-content');
  
// 	// Set the content
// 	overlayContent.innerHTML = `
// 	  <h3>${title}</h3>
// 	  <p>${description}</p>
// 	`;
  
// 	// Show the overlay
// 	overlay.style.display = 'flex';
//   }
  
//   function closeOverlay() {
// 	// Hide the overlay
// 	document.getElementById('overlay').style.display = 'none';
//   }

// function showOverlay(titleId, descId, mediaId) {
// 	const overlay = document.getElementById('overlay');
// 	const title = document.getElementById(titleId).innerHTML;
// 	const description = document.getElementById(descId).innerHTML;
// 	const mediaContent = document.getElementById(mediaId).innerHTML;
  
// 	document.getElementById('overlay-title').innerHTML = title;
// 	document.getElementById('overlay-description').innerHTML = description;
// 	document.getElementById('media-content').innerHTML = mediaContent;
  
// 	overlay.style.display = 'block';
//   }
  
//   function closeOverlay() {
// 	document.getElementById('overlay').style.display = 'none';
//   }

function on() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("body").style.overflow = "hidden";
  }
  
  function off() {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("body").style.overflow = "";
  }
  

// JavaScript for Portfolio Work 2
function onOverlay2() {
    document.getElementById("overlay2").style.display = "block";
    document.body.style.overflow = "hidden";
}

function offOverlay2() {
    document.getElementById("overlay2").style.display = "none";
    document.body.style.overflow = "";
}

function onOverlay3() {
    document.getElementById("overlay3").style.display = "block";
    document.body.style.overflow = "hidden";
}

function offOverlay3() {
    document.getElementById("overlay3").style.display = "none";
    document.body.style.overflow = "";
}

function onOverlay4() {
    document.getElementById("overlay4").style.display = "block";
    document.body.style.overflow = "hidden";
}

function offOverlay4() {
    document.getElementById("overlay4").style.display = "none";
    document.body.style.overflow = "";
}

function onOverlay5() {
    document.getElementById("overlay5").style.display = "block";
    document.body.style.overflow = "hidden";
}

function offOverlay5() {
    document.getElementById("overlay5").style.display = "none";
    document.body.style.overflow = "";
}

function onOverlay6() {
    document.getElementById("overlay6").style.display = "block";
    document.body.style.overflow = "hidden";
}

function offOverlay6() {
    document.getElementById("overlay6").style.display = "none";
    document.body.style.overflow = "";
}

function onOverlay7() {
    document.getElementById("overlay7").style.display = "block";
    document.body.style.overflow = "hidden";
}

function offOverlay7() {
    document.getElementById("overlay7").style.display = "none";
    document.body.style.overflow = "";
}

function onOverlay8() {
    document.getElementById("overlay8").style.display = "block";
    document.body.style.overflow = "hidden";
}

function offOverlay8() {
    document.getElementById("overlay8").style.display = "none";
    document.body.style.overflow = "";
}

function onOverlay9() {
    document.getElementById("overlay9").style.display = "block";
    document.body.style.overflow = "hidden";
}

function offOverlay9() {
    document.getElementById("overlay9").style.display = "none";
    document.body.style.overflow = "";
}

