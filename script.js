import data from './data.json' assert {type: 'json'};

const {
  genre,
  theme,
  platform,
  budget,
  baseDays
} = data;

function randomize(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomArbitraryNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getDeadLine(bud) {
  const baseDay = baseDays[budget.indexOf(bud)];
  const deadline = getRandomArbitraryNumber(baseDay - Math.floor(baseDay / 5),
    baseDay + Math.floor(baseDay / 5));

  return deadline;
}

function generateOrder() {
  const order = {
    genreResponse: randomize(genre),
    themeResponse: randomize(theme),
    platformResponse: randomize(platform),
    budgetResponse: `${randomize(budget)}`,
  }
  order.deadLineResponse = `${getDeadLine(parseInt(order.budgetResponse))}`;
  return order;
}

document.getElementById("generate").addEventListener("click", () => {
  const order = generateOrder();
  document.getElementById("genre").innerHTML = `Genre: ${order.genreResponse}`;
  document.getElementById("theme").innerHTML = `Theme: ${order.themeResponse}`;
  document.getElementById("platform").innerHTML = `Platform: ${order.platformResponse}`;
  document.getElementById("budget").innerHTML = `Budget: US$ ${order.budgetResponse}.00`;
  document.getElementById("deadline").innerHTML = `Deadline: ${order.deadLineResponse} days`;
});