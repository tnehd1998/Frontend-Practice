"use strict";

class Product {
  constructor(img, gender, size, type, color) {
    this.img = img;
    this.gender = gender;
    this.size = size;
    this.type = type;
    this.color = color;
  }
}

const product_array = [
  new Product("pink_t", "female", "large size", "t-shirt", "pink"),
  new Product("blue_p", "man", "small size", "pants", "blue"),
  new Product("yellow_p", "man", "large size", "pants", "yellow"),
  new Product("yellow_s", "female", "large size", "skirt", "yellow"),
  new Product("blue_s", "female", "small size", "skirt", "blue"),
  new Product("blue_t", "male", "large size", "t-shirt", "blue"),
  new Product("yellow_t", "female", "small size", "t-shirt", "yellow"),
  new Product("pink_p", "man", "large size", "pants", "pink"),
  new Product("pink_s", "female", "small size", "skirt", "pink"),
  new Product("pink_t", "female", "large size", "t-shirt", "pink"),
  new Product("blue_p", "man", "small size", "pants", "blue"),
  new Product("yellow_p", "man", "large size", "pants", "yellow"),
  new Product("yellow_s", "female", "large size", "skirt", "yellow"),
  new Product("blue_s", "female", "small size", "skirt", "blue"),
  new Product("blue_t", "male", "large size", "t-shirt", "blue"),
  new Product("yellow_t", "female", "small size", "t-shirt", "yellow"),
  new Product("pink_p", "man", "large size", "pants", "pink"),
  new Product("pink_s", "female", "small size", "skirt", "pink"),
];

function showProduct(choice) {
  const shopping_mall_products = document.querySelector(
    ".shopping_mall_products"
  );

  const shopping_mall_existingProduct = document.createElement("div");
  shopping_mall_existingProduct.className = "shopping_mall_existingProduct";
  shopping_mall_products.appendChild(shopping_mall_existingProduct);
  for (let product of product_array) {
    const newDiv = document.createElement("div");

    newDiv.className = "shopping_mall_product";
    newDiv.innerHTML = `
    <img src="imgs/${product.img}.png" />
    <p>${product.gender}, ${product.size}</p>
    `;
    shopping_mall_existingProduct.appendChild(newDiv);

    switch (choice) {
      case "t-shirt":
      case "pants":
      case "skirt":
        if (product.type !== choice) newDiv.remove();
        break;
      case "blue":
      case "yellow":
      case "pink":
        if (product.color !== choice) newDiv.remove();
        break;
    }
  }
}

function clearPage() {
  const existingProduct = document.querySelector(
    ".shopping_mall_existingProduct"
  );
  existingProduct.remove();
}

showProduct();

const main_icon = document.querySelector(".main_icon");

const choice1 = document.querySelector(".t-shirt");
const choice2 = document.querySelector(".pants");
const choice3 = document.querySelector(".skirt");
const choice4 = document.querySelector(".blue");
const choice5 = document.querySelector(".yellow");
const choice6 = document.querySelector(".pink");

main_icon.addEventListener("click", () => {
  clearPage();
  showProduct();
});

choice1.addEventListener("click", () => {
  clearPage();
  showProduct("t-shirt");
});
choice2.addEventListener("click", () => {
  clearPage();
  showProduct("pants");
});
choice3.addEventListener("click", () => {
  clearPage();
  showProduct("skirt");
});
choice4.addEventListener("click", () => {
  clearPage();
  showProduct("blue");
});
choice5.addEventListener("click", () => {
  clearPage();
  showProduct("yellow");
});
choice6.addEventListener("click", () => {
  clearPage();
  showProduct("pink");
});
