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
function loadVideo() {
    var html = '<iframe width="700" height="400" src="https://www.youtube.com/embed/_rGEfbtEKAg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    document.getElementById("video").innerHTML = html;
}