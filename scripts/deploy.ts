import hre, { ethers } from "hardhat";
import fs from "fs";

const recipient: string = "0xF0eEaAB7153Ff42849aCb0E817efEe09fb078C1b";

async function main() {
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(recipient);
  await nft.deployed();

  console.log("\n");
  console.log("ERC20Whitelist deployed to: ", nft.address);
  console.log("\n");

  // Get GameContract ABI
  const abiFile = JSON.parse(fs.readFileSync("./artifacts/contracts/NFT_Minter.sol/NFT.json", "utf8"));
  const abi = JSON.stringify(abiFile.abi);

  console.log("NFT_Minter ABI:");
  console.log("\n");
  console.log(abi);
  console.log("\n");

  /** WAITING:
   ************/
  await nft.deployTransaction.wait(7);

  /** VERIFICATION: (see: https://www.npmjs.com/package/@cronos-labs/hardhat-cronoscan)
   *****************/
  await hre.run("verify:verify", {
    address: nft.address,
    constructorArguments: [recipient],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});