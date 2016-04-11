var xhttp;

function loadGame(file) {
    
    xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            
            console.log(xhttp.responseText);
            
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