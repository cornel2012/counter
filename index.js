let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

let entries = 0;
function save() {
    let countStr = (entries !== 0 ? ' - ' : '') + count;
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    entries++;
}

const incrementBtnEl = document.querySelector("#increment-btn");
incrementBtnEl.addEventListener("click", () => {
    increment();
});

const saveBtnEl = document.querySelector("#save-btn");
saveBtnEl.addEventListener("click", () => {
    save();
});