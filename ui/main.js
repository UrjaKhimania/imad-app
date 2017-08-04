console.log('Loaded!');
var up = document.getElementById("up");
var icon = document.getElementById("icon");
up.onclick = function(){
    var icon = document.getElementById("icon");
    var interval = setInterval(moveRight, 100);
    icon.style.marginLeft = "100px";
};
