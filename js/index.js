console.log("Your index.js file is loaded corrcectly");
let mybutton = document.getElementById("myBtn");
$( "button").hover(
    function() {
        $(this).css("background-color", "limegreen");
        $(this).css("color", "black");
        $(this).css("border-color", "#0D1526");
    }, function() {
        $(this).css("background-color", "#0D1526");
        $(this).css("color", "white");
        $(this).css("border-color", "limegreen");
    }
);

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 500, 'linear');
});

// Get the button:


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}