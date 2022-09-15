let fs = require("fs");
let axios = require("axios");
require("dotenv").config({
  path: "../.env",
});

const xAPI_Key = `${process.env.X_API_KEY}`;

let ipfsArray = [];
let promises = [];

// Image 11 = Run Faster I
let paddedHex11 = ("0000000000000000000000000000000000000000000000000000000000000000" + (11).toString(16)).substr(
  "-64"
);
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/11.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex11}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

// Image 12 = Extra time I
let paddedHex12 = ("0000000000000000000000000000000000000000000000000000000000000000" + (12).toString(16)).substr(
  "-64"
);
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/12.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex12}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

// Image 13 = Jump Higher I
let paddedHex13 = ("0000000000000000000000000000000000000000000000000000000000000000" + (13).toString(16)).substr(
  "-64"
);
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/13.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex13}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

// Image 21 = Run Faster II
let paddedHex21 = ("0000000000000000000000000000000000000000000000000000000000000000" + (11).toString(16)).substr(
  "-64"
);
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/21.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex21}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

// Image 22 = Extra time II
let paddedHex22 = ("0000000000000000000000000000000000000000000000000000000000000000" + (12).toString(16)).substr(
  "-64"
);
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/22.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex22}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

// Image 23 = Jump Higher II
let paddedHex23 = ("0000000000000000000000000000000000000000000000000000000000000000" + (13).toString(16)).substr(
  "-64"
);
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/23.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex23}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

// Image 31 = Run Faster III
let paddedHex31 = ("0000000000000000000000000000000000000000000000000000000000000000" + (11).toString(16)).substr(
  "-64"
);
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/31.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex31}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

// Image 32 = Extra time III
let paddedHex32 = ("0000000000000000000000000000000000000000000000000000000000000000" + (12).toString(16)).substr(
  "-64"
);
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/32.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex32}.png`,
        content: data.toString("base64"),
      });
      res();
    });
  })
);

// Image 33 = Jump Higher III
let paddedHex33 = ("0000000000000000000000000000000000000000000000000000000000000000" + (13).toString(16)).substr(
  "-64"
);
promises.push(
  new Promise((res, rej) => {
    fs.readFile(`${__dirname}/image/33.png`, (err, data) => {
      if (err) rej();
      ipfsArray.push({
        path: `images/${paddedHex33}.png`,
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
        "X-API-KEY": xAPI_Key,
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
