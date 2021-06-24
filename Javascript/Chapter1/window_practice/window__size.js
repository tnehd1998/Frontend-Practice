"use strict";

const screen = document.querySelector("#screen");
screen.innerText = `window.screen: ${window.screen.width}, ${window.screen.height}`;

const outer = document.querySelector("#outer");
outer.innerText = `window.outer: ${window.outerWidth}, ${window.outerHeight}`;

const inner = document.querySelector("#inner");
inner.innerText = `window.inner: ${window.innerWidth}, ${window.innerHeight}`;

const client = document.querySelector("#client");
client.innerText = `documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;

window.addEventListener("resize", () => {
  screen.innerText = `window.screen: ${window.screen.width}, ${window.screen.height}`;
  outer.innerText = `window.outer: ${window.outerWidth}, ${window.outerHeight}`;
  inner.innerText = `window.inner: ${window.innerWidth}, ${window.innerHeight}`;
  client.innerText = `documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
});
