const input = document.getElementById("inputValue");
const btn = document.querySelector("button");
const span = document.getElementById("results");

let value = "";

input.addEventListener("input", e => {
  value = e.target.value;
  value = value.trim().toLowerCase();
  value = [...value];
});

btn.addEventListener("click", checkWords);
function checkWords() {
  const copyArray = [...value].reverse();
  let counterGodLetter = 0;
  copyArray.forEach((letter, index) => {
    if (letter === value[index]) {
      counterGodLetter++;
    } else return;
  });
  value.length === counterGodLetter
    ? (span.textContent = "Słowo jest palindromem")
    : (span.textContent = "Słowo nie jest palindromem");
}
