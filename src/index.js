import _ from "lodash";
import "./style.css";

const content = document.querySelector("#content");

function component() {
  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant";


  return h1;
}

content.appendChild(component());
