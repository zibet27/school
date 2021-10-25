// to run this code type "node 4-time.js" in your command line
// if you don't have node.js installed, check this link https://nodejs.org/uk/download/current/

const { readFile, writeFile } = require("fs");

readFile("./input.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) return console.error(err);
  let [hours, minutes, seconds] = data.split(" ").map((s) => +s);
  if (minutes < 59) {
    minutes++;
  } else {
    minutes = 0;
    if (hours < 23) hours++;
    else hours = 0;
  }
  const output = `${hours} ${minutes} ${seconds}`;
  writeFile("./output.txt", output, () => {
    console.log("success");
    console.log({ input: data, output });
  });
});
