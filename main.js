const input = document.getElementById("inputValue");
const btn = document.querySelector("button");
const span = document.getElementById("results");

let orginalValue = "";

input.addEventListener("input", e => {
  orginalValue = e.target.value;
  orginalValue = orginalValue.trim().toLowerCase();
  orginalValue = [...orginalValue];
});

btn.addEventListener("click", checkWords);
function checkWords() {
  let name = "";
  let copyValueReverse = [...orginalValue].reverse();
  let copyValue = orginalValue.filter(element => element != " ");
  copyValueReverse = copyValueReverse.filter(element => element != " ");
  let counterGodLetter = 0;
  copyValueReverse.forEach((letter, index) => {
    if (letter === copyValue[index]) {
      counterGodLetter++;
    } else return;
  });
  if (!orginalValue) return alert("Wrowadź słowo.");
  if (orginalValue.includes(" ")) name = "Zdanie";
  else name = "Słowo";
  copyValue.length === counterGodLetter
    ? (span.textContent = `${name}: ${orginalValue.join("")} jest palindromem`)
    : (span.textContent = `${name}: ${orginalValue.join("")} nie jest palindromem`);
  input.value = "";
}
