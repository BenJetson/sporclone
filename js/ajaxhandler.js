function loadGame(file) {
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById(gameConfig).innerHTML = xhttp.responseText;
            setup();
        }
    }
    
    xhttp.open("GET", file, true);
    xhttp.send();
    
    return False;
    
}