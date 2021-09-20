const button = document.getElementById("this-button");

let city = document.getElementById("one-by-one");
let mom = document.getElementById("one-by-two");
let dad = document.getElementById("one-by-three");
let food = document.getElementById("two-by-one");
let movie = document.getElementById("two-by-two");
let sport = document.getElementById("two-by-three");
let vacay = document.getElementById("three-by-one");
let celeb = document.getElementById("three-by-two");
let goal = document.getElementById("three-by-three");

function changeTable() {
  city.textContent = "Las Vegas";
  mom.textContent = "Mexico";
  dad.textContent = "Algeria";
  food.textContent = "Enchiladas";
  movie.textContent = "Star Wars";
  sport.textContent = "Boxing";
  vacay.textContent = "Amsterdam";
  celeb.textContent = "Ana de Armas";
  goal.textContent = "Stand on the Moon";
}

button.addEventListener('click', changeTable);

