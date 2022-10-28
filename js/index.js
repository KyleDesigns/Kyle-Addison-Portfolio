console.log("Your index.js file is loaded corrcectly");
//.on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler
$( "#button").hover(
    function() {
        $(this).css("background-color", "limegreen");
        $(this).css("color", "black");
    }, function() {
        $(this).css("background-color", "#333B50");
        $(this).css("color", "white");
    }
);
