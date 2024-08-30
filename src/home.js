import Dish from "./dish.jpg";
import DarkMeal from "./dark-meal.jpg";

export default function home() {
  const div = document.createElement("div");
  div.setAttribute("id", "info");

  const text = document.createElement("div");
  text.setAttribute("id", "text");

  const h1 = document.createElement("h1");
  h1.textContent = "The Velvet Fork";
  text.appendChild(h1);

  const p = document.createElement("p");
  p.textContent =
    "Welcome to The Velvet Fork, where the ambiance is as rich as the flavors. Indulge in a culinary experience like no other, surrounded by warm, ambient lighting and elegant décor that sets the stage for unforgettable moments. Whether you're savoring a romantic dinner or enjoying a night out with friends, our carefully crafted dishes and sophisticated atmosphere promise to leave you wanting more. Discover the perfect blend of luxury and comfort at The Velvet Fork.";
  text.appendChild(p);

  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("id", "imgDiv");

  const dish = new Image();
  const darkMeal = new Image();
  dish.src = Dish;
  darkMeal.src = DarkMeal;
  imageDiv.appendChild(darkMeal);
  imageDiv.appendChild(dish);


  div.appendChild(text);
  div.appendChild(imageDiv);
  content.appendChild(div);

  return div;
}
