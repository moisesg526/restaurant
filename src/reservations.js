export default function reservations() {
  let reserveDiv = document.createElement("div");

  let header = document.createElement("h2");
  header.textContent = "Reseravation";
  reserveDiv.appendChild(header);

  let reserve = document.createElement("button");
  reserve.setAttribute("id", "reservation");
  reserve.textContent = "Reserve a Table";
  reserveDiv.appendChild(reserve);

  let p = document.createElement("p");
  p.textContent =
    "Our kitchen is open throughout the day and we accept reservations for table seating.  The bar continues to be available for walk-ins at all times.";
  reserveDiv.appendChild(p);
  return reserveDiv;
}
