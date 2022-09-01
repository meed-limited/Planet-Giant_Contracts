let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];

// RUN FASTER
let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + (1).toString(16)).substr("-64");
ipfsArray.push({
  path: `metadata/${paddedHex}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex}.png`,
    name: `Run Faster`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "1" },
      { display_type: "Booster", trait_type: "Speed", value: "100" },
    ],
  },
});

// EXTRA TIME
let paddedHex2 = ("0000000000000000000000000000000000000000000000000000000000000000" + (2).toString(16)).substr("-64");
ipfsArray.push({
  path: `metadata/${paddedHex2}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex2}.png`,
    name: `Extra time`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "1" },
      { display_type: "Booster", trait_type: "Time", value: "60" },
    ],
  },
});

// JUMP HIGHER
let paddedHex3 = ("0000000000000000000000000000000000000000000000000000000000000000" + (3).toString(16)).substr("-64");
ipfsArray.push({
  path: `metadata/${paddedHex3}.json`,
  content: {
    image: `ipfs://QmZAVihCcT97B7kzWFjMXmgqqGpoooDbN1kCABAGRmEFte/images/${paddedHex3}.png`,
    name: `Jump Higher`,
    description: "Planet Giant - Cronos Hackathon",
    attributes: [
      { trait_type: "Series", value: "Genesis" },
      { trait_type: "Level", value: "1" },
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
