import _ from "lodash";
import "./style.css";

const content = document.querySelector("#content");
document.body.appendChild(content);

function component() {
  const h1 = document.createElement("h1");

  h1.innerText = "Restaurant";

  return h1;
}

document.content.appendChild(component());
