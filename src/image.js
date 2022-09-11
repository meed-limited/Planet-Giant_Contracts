let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];
let promises = [];

// Image 1 = Run Faster
let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + (11).toString(16)).substr("-64");
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/1.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

// Image 2 = Extra time
let paddedHex2 = ("0000000000000000000000000000000000000000000000000000000000000000" + (12).toString(16)).substr("-64");
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/2.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex2}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

// Image 3 = Jump Higher
let paddedHex3 = ("0000000000000000000000000000000000000000000000000000000000000000" + (13).toString(16)).substr("-64");
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/3.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex3}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

Promise.all(promises).then(() => {
  axios
    .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
      headers: {
        "X-API-KEY": "REtwfgnP81YBSFRpqrXiTdoqyFXXLC4jubxYUq9QYIPCXvirTuDk6iulYQ6GN88G",
        "Content-Type": "application/json",
        accept: "application/json",
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      maxRedirects: Infinity,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
