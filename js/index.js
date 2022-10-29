console.log("Your index.js file is loaded corrcectly");

$( "button").hover(
    function() {
        $(this).css("background-color", "limegreen");
        $(this).css("color", "black");
        $(this).css("border-color", "#333B50");
    }, function() {
        $(this).css("background-color", "#333B50");
        $(this).css("color", "white");
        $(this).css("border-color", "limegreen");
    }
);
