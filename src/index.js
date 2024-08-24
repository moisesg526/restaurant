import _ from "lodash";
import Dish from "./dish.jpg";
import DarkMeal from "./dark-meal.jpg";
import TheVelvetFork from "./the-velvet-fork.jpg";
import about from "./about";
import menu from "./menu";
import "./style.css";

const content = document.querySelector("#content");
const body = document.querySelector("body");
const nav = document.querySelector("nav");

function component() {
  const logo = new Image();
  logo.setAttribute("id", "logo");
  logo.src = TheVelvetFork;
  nav.appendChild(logo);

  const div = document.createElement("div");
  div.setAttribute("id", "info");
  content.appendChild(div);

  const h1 = document.createElement("h1");
  h1.textContent = "The Velvet Fork";
  div.appendChild(h1);

  const p = document.createElement("p");
  p.textContent =
    "Welcome to The Velvet Fork, where the ambiance is as rich as the flavors. Indulge in a culinary experience like no other, surrounded by warm, ambient lighting and elegant décor that sets the stage for unforgettable moments. Whether you're savoring a romantic dinner or enjoying a night out with friends, our carefully crafted dishes and sophisticated atmosphere promise to leave you wanting more. Discover the perfect blend of luxury and comfort at The Velvet Fork.";
  div.appendChild(p);

  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("id", "imgDiv");
  content.appendChild(imageDiv);

  const dish = new Image();
  const darkMeal = new Image();
  dish.src = Dish;
  darkMeal.src = DarkMeal;
  imageDiv.appendChild(darkMeal);
  imageDiv.appendChild(dish);

  nav.onclick = function () {
    content.innerHTML = "";
    content.appendChild(menu());
  };

  const footer = document.createElement("footer");
  body.appendChild(footer);
  const copyight = document.createElement("p");
  copyight.textContent = "2024 © Copyright by Moises Gomez";
  footer.appendChild(copyight);
}

content.appendChild(component());
