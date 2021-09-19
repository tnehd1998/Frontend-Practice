// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("success");
  }, 4000);
});

// #2) Run the above promise and make it console.log "success"
promise1.then((data) => console.log(data));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = Promise.resolve(
  setTimeout(() => {
    res("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject("failed").catch(() => console.log("Ooops something went wrong"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "http://swapi.dev/api/people/1",
  "http://swapi.dev/api/people/2",
  "http://swapi.dev/api/people/3",
  "http://swapi.dev/api/people/4",
];

Promise.all(urls.map((url) => fetch(url).then((data) => data.json())))
  .then((array) => {
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
    console.log(array[3]);
  })
  .catch(() => console.log("error"));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
