export default function hours() {
  let div = document.createElement("div");
  let h2 = document.createElement("h2");

  h2.textContent = "Hours & Location";
  div.appendChild(h2);

  let p = document.createElement("p");
  p.innerHTML =
    "<b>Dinner</b><br>Monday - Sunday 5:00pm - 11:00pm<br><b>Lunch</b><br>Friday, Saturday & Sunday<br>11:30am - 2:30pm";
  div.appendChild(p);

  return div;
}
