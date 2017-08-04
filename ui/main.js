console.log('Loaded!');
var up = document.getElementById("up");
var icon = document.getElementById("icon");
up.onclick = function(){
    var interval = setInterval(moveRight, 100);
    icon.style.marginLeft = "50px";
};