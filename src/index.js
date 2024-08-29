import _ from "lodash";
import TheVelvetFork from "./the-velvet-fork.jpg";
import home from "./home";
import about from "./about";
import menu from "./menu";
import hours from "./hours";
import reservations from "./reservations";
import "./style.css";

const content = document.querySelector("#content");
const body = document.querySelector("body");
const nav = document.querySelector("nav");

const homeBtn = document.querySelector("#home");
const aboutBtn = document.querySelector("#about");
const menuBtn = document.querySelector("#menu");
const hoursBtn = document.querySelector("#hours");
const reservationBtn = document.querySelector("#reservation");

function component() {
  const logo = new Image();
  logo.setAttribute("id", "logo");
  logo.src = TheVelvetFork;
  nav.appendChild(logo);

  aboutBtn.onclick = function () {
    content.innerHTML = "";
    content.appendChild(hours());
  };

  const footer = document.createElement("footer");
  body.appendChild(footer);
  const copyight = document.createElement("p");
  copyight.textContent = "2024 © Copyright by Moises Gomez";
  footer.appendChild(copyight);
}

content.appendChild(component());
