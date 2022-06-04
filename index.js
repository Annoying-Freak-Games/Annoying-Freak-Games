/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function showSlide(slideIndex) {
	var slides = document.getElementsByClassName("review_mySlides");
	var dots = document.getElementsByClassName("review_dot");
	
	var i;
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" review_active", "");
	}
	
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " review_active";
}

// on load video, width="560" height="315"
function loadVideo(youtube_url) {
	window.setTimeout(function () {
		var html = '<iframe width="700" height="400" src=' + youtube_url + ' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		document.getElementById("video").innerHTML = html;
	}, 2000);
}

// fake progress bar play games
function moveProgressBar() {
	var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("unity-progress-bar-full");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}