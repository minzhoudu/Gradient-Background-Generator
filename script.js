let output = document.querySelector(".output");
let input1 = document.querySelector(".clr1");
let input2 = document.querySelector(".clr2");
let bg = document.querySelector(".gradient");
let random = document.querySelector(".random-btn");
let side = document.getElementById("side");


input1.addEventListener("input", setGradient);
input2.addEventListener("input", setGradient);
random.addEventListener("click", randomClr);
side.addEventListener("change", setGradient);

function setGradient() {
    bg.style.background = "linear-gradient(" + side.options[side.selectedIndex].value + "," + input1.value + ", " + input2.value + ") "

    // dodavanje teksta u prazan h3 
    output.textContent = bg.style.background + ";"
};

function randomClr() {
    input1.value = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    input2.value = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    setGradient();
}


setGradient();