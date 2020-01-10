menu.onclick = function myFunction() {
    var x = document.getElementById('myheadnav');

    if (x.className === "headnav") {
        x.className += " responsive";
    } else {
        x.className = "headnav";
    }

}