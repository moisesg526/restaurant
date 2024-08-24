export default function menu() {
  const appetizers = [
    "CESAR SALAD $19",
    "STEAK TARTARE $28",
    "GREEN SALAD $16",
    "CALAMARI SALAD $24",
    "BURRATA $22",
    "CRAB CAKE $36",
  ];

  const entrees = [
    "OYSTERS $28",
    "SMOKED WAGYU $36",
    "STEAK TARTARE $34",
    "FILET MIGNON $72",
    "SKIRT STEAK $52",
    "PORTER HOUSE $180",
    "ALASKAN HALIBUT $52",
    "CHARRED LEMON CHICKEN $38",
  ];

  const desert = [
    "CREME BRULEE $16",
    "CHOCOLATE LAVA CAKE $16",
    "CRACKER JACK SUNDAE $14",
    "SORBET or ICE CREAM $12",
  ];

  let content = document.createElement("div");

  let h2 = document.createElement("h2");
  h2.textContent = "MENU";
  content.appendChild(h2);

  let meal = document.createElement("h3");
  meal.textContent = "Appetizers";
  content.appendChild(meal);

  appetizers.forEach((item) => {
    let appetizerDish = document.createElement("p");
    appetizerDish.textContent = item;
    content.appendChild(appetizerDish);
  });

  let h2Entree = document.createElement("h3");
  h2Entree.textContent = "Entree";
  content.appendChild(h2Entree);

  entrees.forEach((item) => {
    let entreeDish = document.createElement("p");
    entreeDish.textContent = item;
    content.appendChild(entreeDish);
  });

  let h2Desert = document.createElement("h3");
  h2Desert.textContent = "Desert";
  content.appendChild(h2Desert);

  desert.forEach((item) => {
    let dessertDish = document.createElement("p");
    dessertDish.textContent = item;
    content.appendChild(dessertDish);
  });

  return content;
}
