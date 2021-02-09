var slider = document.getElementById("myRange");
var output = document.getElementById("value");


slider.oninput = function() {
    output.innerHTML = slider.value;
}

slider.addEventListener("mousemove", function() {
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '%, rgb(214, 214, 214)' + x + '%)';
    slider.style.background = color;
})