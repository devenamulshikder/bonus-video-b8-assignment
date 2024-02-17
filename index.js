let titleCount = 1;
let totalPrice = 0
const cards = document.querySelectorAll(".card");
// console.log(cards);
for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  // console.log(card);
  card.addEventListener("click", function () {
    // console.log('clicked');

    // get the title
    const title = card.querySelector("h3").innerText;
    const price = parseInt(card.querySelector("span").innerText.split(' ')[1]);
    

    const titleContainer = document.getElementById("title-container");

    const p = document.createElement("p");
    p.innerText =titleCount+ '. '+ title;

    titleContainer.appendChild(p);
    titleCount++;
  });
}
