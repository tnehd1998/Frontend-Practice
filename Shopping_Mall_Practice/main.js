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

function init(choice) {
  const shopping_mall_products = document.querySelector(
    ".shopping_mall_products"
  );
  const shopping_mall_existingProduct = document.createElement("div");
  shopping_mall_existingProduct.className = "shopping_mall_existingProduct";
  shopping_mall_products.appendChild(shopping_mall_existingProduct);
  for (let product of product_array) {
    const newDiv = document.createElement("div");
    newDiv.className = "shopping_mall_product";
    newDiv.innerHTML = `<img src="imgs/${product.img}.png" />\n<p>${product.gender}, ${product.size}</p>`;
    shopping_mall_existingProduct.appendChild(newDiv);
    switch (choice) {
      case "t-shirt":
        if (product.type !== "t-shirt") newDiv.remove();
        break;
      case "pants":
        if (product.type !== "pants") newDiv.remove();
        break;
      case "skirt":
        if (product.type !== "skirt") newDiv.remove();
        break;
      case "blue":
        if (product.color !== "blue") newDiv.remove();
        break;
      case "yellow":
        if (product.color !== "yellow") newDiv.remove();
        break;
      case "pink":
        if (product.color !== "pink") newDiv.remove();
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

init();

const main_icon = document.querySelector(".main_icon");

const choice1 = document.querySelector(".t-shirt");
const choice2 = document.querySelector(".pants");
const choice3 = document.querySelector(".skirt");
const choice4 = document.querySelector(".blue");
const choice5 = document.querySelector(".yellow");
const choice6 = document.querySelector(".pink");

main_icon.addEventListener("click", () => {
  clearPage();
  init();
});

choice1.addEventListener("click", () => {
  clearPage();
  init("t-shirt");
});
choice2.addEventListener("click", () => {
  clearPage();
  init("pants");
});
choice3.addEventListener("click", () => {
  clearPage();
  init("skirt");
});
choice4.addEventListener("click", () => {
  clearPage();
  init("blue");
});
choice5.addEventListener("click", () => {
  clearPage();
  init("yellow");
});
choice6.addEventListener("click", () => {
  clearPage();
  init("pink");
});
