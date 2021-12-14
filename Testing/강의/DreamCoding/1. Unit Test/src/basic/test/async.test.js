const fetch = require("../async.js");

// My Solution

describe("async", () => {
  it("fetch success", async () => {
    return await fetch("hi").then((data) => {
      expect(data).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("fetch failed", async () => {
    return await fetch("error").catch((e) =>
      expect(e).toMatch("network error")
    );
  });
});

// Answer

describe("Async", () => {
  it("async - done", (done) => {
    fetch().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  it("async - return", () => {
    return fetch().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async - await", async () => {
    const product = await fetch();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async - resolves", () => {
    return expect(fetch()).resolves.toEqual({ item: "Milk", price: 200 });
  });

  it("async - reject", () => {
    return expect(fetch("error")).rejects.toBe("network error");
  });
});
