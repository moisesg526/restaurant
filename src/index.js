import _ from "lodash";
import "./style.css";
import Restautant from "./restaurant.jpg";

const content = document.querySelector("#content");

function component() {
  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant";

  const background = new Image();
  background.src = Restautant;

  element.appendChild(background);
  return h1;
}

content.appendChild(component());
