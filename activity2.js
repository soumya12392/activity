function getScore() {
    var score = localStorage.getItem("Score");
    document.getElementById("update").innerHTML = "<h2> Score: " + score + "</h2>";
}

function back() {
    window.location = "activity_1.html";
}