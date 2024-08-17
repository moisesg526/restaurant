import _ from "lodash";
import Dish from "./dish.jpg";
import "./style.css";

const content = document.querySelector("#content");

function component() {
  const div = document.createElement("div");
  div.setAttribute("id", "info");
  content.appendChild(div);

  const h1 = document.createElement("h1");
  h1.textContent = "The Velvet Fork";
  div.appendChild(h1);

  const dish = new Image();
  dish.src = Dish;
  div.appendChild(dish);

  const p = document.createElement("p");
  p.textContent =
    "Welcome to The Velvet Fork, where the ambiance is as rich as the flavors. Indulge in a culinary experience like no other, surrounded by warm, ambient lighting and elegant décor that sets the stage for unforgettable moments. Whether you're savoring a romantic dinner or enjoying a night out with friends, our carefully crafted dishes and sophisticated atmosphere promise to leave you wanting more. Discover the perfect blend of luxury and comfort at The Velvet Fork.";
  div.appendChild(p);
}

content.appendChild(component());
