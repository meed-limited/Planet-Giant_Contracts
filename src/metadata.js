let axios = require("axios");
require("dotenv").config({
  path: "../.env",
});

const xAPI_Key = `${process.env.X_API_KEY}`;
const padHexBase = "0000000000000000000000000000000000000000000000000000000000000000";

let ipfsArray = [];

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
    image: `ipfs://QmS383B2NkZdUxtuU1Kn9fLkff8Vo2GZT9hJmTsvWfLANF/images/${paddedHex11}.png`,
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
    image: `ipfs://QmS383B2NkZdUxtuU1Kn9fLkff8Vo2GZT9hJmTsvWfLANF/images/${paddedHex12}.png`,
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
    image: `ipfs://QmS383B2NkZdUxtuU1Kn9fLkff8Vo2GZT9hJmTsvWfLANF/images/${paddedHex13}.png`,
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
    image: `ipfs://QmS383B2NkZdUxtuU1Kn9fLkff8Vo2GZT9hJmTsvWfLANF/images/${paddedHex21}.png`,
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
    image: `ipfs://QmS383B2NkZdUxtuU1Kn9fLkff8Vo2GZT9hJmTsvWfLANF/images/${paddedHex22}.png`,
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
    image: `ipfs://QmS383B2NkZdUxtuU1Kn9fLkff8Vo2GZT9hJmTsvWfLANF/images/${paddedHex23}.png`,
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
    image: `ipfs://QmS383B2NkZdUxtuU1Kn9fLkff8Vo2GZT9hJmTsvWfLANF/images/${paddedHex31}.png`,
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
    image: `ipfs://QmS383B2NkZdUxtuU1Kn9fLkff8Vo2GZT9hJmTsvWfLANF/images/${paddedHex32}.png`,
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
    image: `ipfs://QmS383B2NkZdUxtuU1Kn9fLkff8Vo2GZT9hJmTsvWfLANF/images/${paddedHex33}.png`,
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
      "X-API-KEY": xAPI_Key,
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

//image: https://ipfs.moralis.io:2053/ipfs/QmS383B2NkZdUxtuU1Kn9fLkff8Vo2GZT9hJmTsvWfLANF/images/000000000000000000000000000000000000000000000000000000000000000c.png
//metadata: https://ipfs.moralis.io:2053/ipfs/QmYsP4uGK1pdDNF7Hnse8vLxKGRojDCa9GtCKpAwKxuYSr/metadata/0000000000000000000000000000000000000000000000000000000000000015.json
