const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".productItem");
const buttons = document.querySelectorAll(".filter");
const priceButton = document
  .getElementById("searchPrice")
  .querySelector("button");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);

  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const searchPriceHandler = (event) => {
  const searchPrice = +event.target.parentElement.children[0].value;

  products.forEach((product) => {
    const productPrice = product.children[2].innerText;
    const price = +productPrice.split(" ")[1];

    if (!searchPrice) {
      product.style.display = "block";
    } else {
      searchPrice === price
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
searchInput.addEventListener("keyup", searchHandler);
priceButton.addEventListener("click", searchPriceHandler);
