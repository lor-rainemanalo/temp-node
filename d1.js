const amount = 1;

if (amount < 10) {
  console.log("small num");
} else {
  console.log("large num");
}

console.log("leshgo");

// globals
console.log(process);

// Modules

const { lor, raineweee } = require("./names");

const sayHi = require("./utils");

sayHi("lor");
sayHi(lor);
sayHi(raineweee);

const { singlePerson } = require("./alt-export");

require("./mind-grenade");

// os module
const os = require("os");

//  info about current user
const user = os.userInfo();
console.log(user);

const uptime = os.uptime();
console.log(uptime);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOs);

// path module
const path = require("path");

console.log(path.sep);

const filePath = path.join("content", "subfolder", "test.txt");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

// fs sync
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync("./content/result.txt", `COME ON ${first} ${second}`, {
  flag: "a",
});

// fs async callback hell
const { readFile, writeFile } = require("fs");

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

        console.log(result);
      }
    );
  });
});

// sync vs async
// const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first1 = readFileSync("./content/first.txt", "utf8");
const second2 = readFileSync("./content/second.txt", "utf8");

writeFileSync("./content/result.txt", `COME ON ${first1} ${second2}`, {
  flag: "a",
});
console.log("done");
console.log("next...");
