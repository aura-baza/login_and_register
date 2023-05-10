let numero = 10;
window.addEventListener("DOMContentLoaded", () => {
  const signUp = document.querySelector(".signUp");
  const container__form = document.querySelector(".container__form");
  const table = document.querySelector(".table");
  const table1 = document.querySelector(".table1");

  container__form.style.transform = `translateX(${numero}%)`;
  signUp.addEventListener("click", () => {
    table.style.display = "none";
    table1.style.display = "block";
    numero = 90;
    container__form.style.transform = `translateX(${numero}%)`;

    const back = document.querySelector(".back");
    back.addEventListener("click", () => {
      table.style.display = "block";
      table1.style.display = "none";
      numero = 10;
      container__form.style.transform = `translateX(${numero}%)`;
    });
  });
});
