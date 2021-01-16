const output = document.querySelector(".output");
const [input1, input2] = document.querySelectorAll(".clr");
const bg = document.querySelector(".gradient");
const random = document.querySelector(".random-btn");
const side = document.getElementById("side");

let setGradient = () => {
    bg.style.background = _linearGradient();
    output.textContent = `${bg.style.background};`
}

input1.addEventListener('input', setGradient);
input2.addEventListener('input', setGradient);
random.addEventListener('click', randomClr);
side.addEventListener('change', setGradient);


let _linearGradient = () => {
    return `linear-gradient(${side.options[side.selectedIndex].value}, ${input1.value}, ${input2.value}) `;

}

function randomClr() {
    input1.value = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    input2.value = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    setGradient();
}


setGradient();