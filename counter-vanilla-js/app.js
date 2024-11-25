const value = document.getElementById("value");
const kurang = document.getElementById("kurang");
const tambah = document.getElementById("tambah");
let count = 0;

value.textContent = count;

tambah.addEventListener("click", () => {
  count++;
  value.textContent = count;
});

kurang.addEventListener("click", () => {
  count--;
  value.textContent = count;
});
