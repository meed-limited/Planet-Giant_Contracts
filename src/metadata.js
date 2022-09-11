let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];

const padHexBase = "0000000000000000000000000000000000000000000000000000000000000000";

// Hex for Image
const paddedHex1 = (padHexBase + (1).toString(16)).substr("-64");
const paddedHex2 = (padHexBase + (2).toString(16)).substr("-64");
const paddedHex3 = (padHexBase + (3).toString(16)).substr("-64");

// Hex for Path
const paddedHex11 = (padHexBase + (11).toString(16)).substr("-64");
const paddedHex12 = (padHexBase + (12).toString(16)).substr("-64");
const paddedHex13 = (padHexBase + (13).toString(16)).substr("-64");
const paddedHex21 = (padHexBase + (21).toString(16)).substr("-64");
const paddedHex22 = (padHexBase + (22).toString(16)).substr("-64");
const paddedHex23 = (padHexBase + (23).toString(16)).substr("-64");
const paddedHex31 = (padHexBase + (31).toString(16)).substr("-64");
const paddedHex32 = (padHexBase + (32).toString(16)).substr("-64");
const paddedHex33 = (padHexBase + (33).toString(16)).substr("-64");

// RUN FASTER LVL 1
ipfsArray.push({
  path: `metadata/${paddedHex11}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex1}.png`,
    name: `Run Faster`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "1" },
      { display_type: "Booster", trait_type: "Speed", value: "30" },
    ],
  },
});

// EXTRA TIME LVL 1
ipfsArray.push({
  path: `metadata/${paddedHex12}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex2}.png`,
    name: `Extra time`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "1" },
      { display_type: "Booster", trait_type: "Time", value: "30" },
    ],
  },
});

// JUMP HIGHER LVL 1
ipfsArray.push({
  path: `metadata/${paddedHex13}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex3}.png`,
    name: `Jump Higher`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "1" },
      { display_type: "Booster", trait_type: "Jump", value: "30" },
    ],
  },
});

// RUN FASTER LVL 2
ipfsArray.push({
  path: `metadata/${paddedHex21}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex1}.png`,
    name: `Run Faster`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "2" },
      { display_type: "Booster", trait_type: "Speed", value: "60" },
    ],
  },
});

// EXTRA TIME LVL 2
ipfsArray.push({
  path: `metadata/${paddedHex22}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex2}.png`,
    name: `Extra time`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "2" },
      { display_type: "Booster", trait_type: "Time", value: "60" },
    ],
  },
});

// JUMP HIGHER LVL 2
ipfsArray.push({
  path: `metadata/${paddedHex23}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex3}.png`,
    name: `Jump Higher`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "2" },
      { display_type: "Booster", trait_type: "Jump", value: "60" },
    ],
  },
});

// RUN FASTER LVL 3
ipfsArray.push({
  path: `metadata/${paddedHex31}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex1}.png`,
    name: `Run Faster`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "3" },
      { display_type: "Booster", trait_type: "Speed", value: "100" },
    ],
  },
});

// EXTRA TIME LVL 3
ipfsArray.push({
  path: `metadata/${paddedHex32}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex2}.png`,
    name: `Extra time`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "3" },
      { display_type: "Booster", trait_type: "Time", value: "120" },
    ],
  },
});

// JUMP HIGHER LVL 3
ipfsArray.push({
  path: `metadata/${paddedHex33}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex3}.png`,
    name: `Jump Higher`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "3" },
      { display_type: "Booster", trait_type: "Jump", value: "100" },
    ],
  },
});

axios
  .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY": "REtwfgnP81YBSFRpqrXiTdoqyFXXLC4jubxYUq9QYIPCXvirTuDk6iulYQ6GN88G",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });

//'https://ipfs.moralis.io:2053/ipfs/QmX1xfbKoUEHtnoiVY9uEtH3X6YuJx2yzPg6ggp3zrFUzz/images/0000000000000000000000000000000000000000000000000000000000000063.png'
