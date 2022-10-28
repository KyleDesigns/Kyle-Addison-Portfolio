console.log("Your index.js file is loaded corrcectly");

$( "#button").hover(
    function() {
        $(this).css("background-color", "limegreen");
        $(this).css("color", "black");
    }, function() {
        $(this).css("background-color", "#333B50");
        $(this).css("color", "white");
    }
);
