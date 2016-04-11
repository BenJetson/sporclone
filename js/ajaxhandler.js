var xhttp;

function loadGame(file) {
    
    xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            
            var serverResponse = xhttp.responseText.split("*");
            var answerArray = serverResponse.splice(0,serverResponse.length - 1);
            var timeAmt = Number(serverResponse.splice(-1));
            
            setup(answerArray, timeAmt);
        }
    }
    
    xhttp.open("GET", file, true);
    xhttp.send();
        
}