export default function about() {
  let aboutDiv = document.createElement("div");
  aboutDiv.setAttribute("div", "aboutDiv");

  let h2 = document.createElement("h2");
  h2.textContent = "Our Journey";
  aboutDiv.appendChild(h2);

  let p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, accusantium. Iure quas, dolores tenetur, pariatur vero temporibus voluptatibus ad nam facere accusantium animi totam. Mollitia qui quis quasi facilis deleniti.";
  aboutDiv.appendChild(p);
  return aboutDiv;
}
