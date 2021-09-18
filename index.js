function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var modal = document.getElementById('id01');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}


function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
