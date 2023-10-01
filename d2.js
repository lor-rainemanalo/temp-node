// fs async
const { readFile, writeFile } = require("fs");
console.log("start!");

readFile("./content/first.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log(err);
    return false;
  }
  const first = data;
  readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return false;
    }
    const second = data;
    writeFile(
      "./content/result-async.txt",
      `EN ${first} ${second}`,
      {
        flag: "a",
      },
      (err, result) => {
        if (err) {
          console.log(err);
          return false;
        }

        console.log("done!");
      }
    );
  });
});

console.log("next one......");

//create server
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("about page!");
  }

  res.end(`
  <div><h1>404 not found</h1>
  <p>cant find page</p>
  <a href="/">back home</a></div>
  `);
});

server.listen(5000);

// first package/dependency/module
