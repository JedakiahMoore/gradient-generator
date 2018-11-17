var color1 = document.querySelectorAll("input")[0];
var color2 = document.querySelectorAll("input")[1];
var body = document.querySelector("body");
var css = document.querySelector("h3");

console.log(color1.value, color2.value);

const setGradient = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    css.textContent = body.style.background + ";";
}

color1.addEventListener('input', function() {
    console.log("Color1: ", color1.value);
    setGradient();
});

color2.addEventListener('input', function() {
    console.log("Color2: ", color2.value);
    setGradient();
});