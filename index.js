let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
// console.log(cards);
for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  // console.log(card);
  card.addEventListener("click", function () {
    // console.log('clicked');

    // get the title
    const title = card.querySelector("h3").innerText;
    const price = parseInt(card.querySelector("span").innerText.split(" ")[1]);

    // appending title in the title container
    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = titleCount + ". " + title;
    titleContainer.appendChild(p);
    titleCount++;

    // calculate price
    totalPrice += price;
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
  });
}

// discount apply btn

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  // get the value from input
  const inputValue = document.getElementById("input-field").value;
  const couponCode = inputValue.split(" ").join("").toUpperCase();
  if (totalPrice >= 200) {
    if (couponCode === "SELL200") {
      // discount calculation
      const discountElement = document.getElementById("discountPrice");
      const discountPrice = totalPrice * 0.2;
      discountElement.innerText = discountPrice.toFixed(2);
      // rest total calculation
      const restTotal = document.getElementById("total");
      restTotal.innerText=totalPrice-discountPrice.toFixed(2);
      document.getElementById("input-field").value='';
    } else {
      alert("invalid coupon code");
      document.getElementById("input-field").value = "";
    }
  } else {
    alert("please at least $200 khoroch koren bhai!");
    document.getElementById("input-field").value = "";
  }
});
