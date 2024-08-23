export default function menu() {
  function elementCreator(element) {
    return () => {
      return document.createElement(element);
    };
  }

  let appetizers = `CESAR SALAD $19
    STEAK TARTARE $28
    GREEN SALAD $16
    CALAMARI SALAD $24
    BURRATA $22
    CRAB CAKE $36
    `;

  let entrees = `OYSTERS $28
    SMOKED WAGYU $36
    STEAK TARTARE $34
    FILET MIGNON $72
    SKIRT STEAK $52
    PORTER HOUSE $180
    ALASKAN HALIBUT $52
    CHARRED LEMON CHICKEN %38
    `;

  let desert = `CREME BRULEE $16
    CHOCOLATE LAVA CAKE $16
    CRACKER JACK SUNDAE $14
    SORBET or ICE CREAM $12
    `;

  let content = elementCreator("div");

  let h2 = elementCreator("h2");
  h2.textContent = "MENU";
  content.appendChild(h2);

  let meal = elementCreator("h3");
  meal.textContent = "Appetizers";
  content.appendChild(meal);

  let dish = elementCreator("p");
  dish.textContent = appetizers;
  content.appendChild(dish);

  return content;
}
