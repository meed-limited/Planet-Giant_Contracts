import hre, { ethers } from "hardhat";
import fs from "fs";

const recipient: string = "0xf6816299A0Fb350A035e502E88Af61C9B3d22192";

async function main() {
  // const NFT = await ethers.getContractFactory("NFT");
  // const nft = await NFT.deploy(recipient);
  // await nft.deployed();

  const Marketplace = await ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();
  await marketplace.deployed();

  console.log("\n");
  // console.log("NFT deployed to: ", nft.address);
  console.log("Marketplace deployed to: ", marketplace.address);
  console.log("\n");

  //Get GameContract ABI
  // const abiFile1 = JSON.parse(fs.readFileSync("./artifacts/contracts/NFT_Minter.sol/NFT.json", "utf8"));
  // const abi1 = JSON.stringify(abiFile1.abi);

  const abiFile2 = JSON.parse(fs.readFileSync("./artifacts/contracts/Marketplace.sol/Marketplace.json", "utf8"));
  const abi2 = JSON.stringify(abiFile2.abi);

  // console.log("NFT_Minter ABI:");
  // console.log("\n");
  // console.log(abi1);
  // console.log("\n");

  console.log("Marketplace ABI:");
  console.log("\n");
  console.log(abi2);
  console.log("\n");

  /** WAITING:
   ************/
  // await nft.deployTransaction.wait(7);
  await marketplace.deployTransaction.wait(7);

  /** VERIFICATION: (see: https://www.npmjs.com/package/@cronos-labs/hardhat-cronoscan)
   *****************/
  // await hre.run("verify:verify", {
  //   address: nft.address,
  //   constructorArguments: [recipient],
  // });

  await hre.run("verify:verify", {
    address: marketplace.address,
    constructorArguments: [],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
