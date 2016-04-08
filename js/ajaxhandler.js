function loadGame(file) {
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            
            var serverResponse = xhttp.responseText;
            var serverResponse = serverResponse.split("*");
            var answerArray = serverResponse.split(0,-1);
            var timeAmt = Number(serverResponse[-1]);
            
            setup(answerArray, timeAmt);
        }
    }
    
    xhttp.open("GET", file, true);
    xhttp.send();
        
}