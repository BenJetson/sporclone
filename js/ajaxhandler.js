function loadGame(file) {
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            setup(xhttp.responseText);
        }
    }
    
    xhttp.open("GET", file, true);
    xhttp.send();
        
}