export default function about() {
  let display;
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "heading");
  display = h2.textContent = "Our Journey";
  return display;
}
