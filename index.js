const cards = document.querySelectorAll(".card");

function createRandomNum() {
  const randomTime = Math.floor(Math.random() * 9000) + 3000;
  console.log(randomTime);
  return randomTime;
}

function toggleClass(el) {
  el.classList.toggle("card-flip");
}

function attachInterval() {
  cards.forEach((item) => {
    setInterval(() => {
      toggleClass(item);
    }, createRandomNum());
  });
}

attachInterval();
