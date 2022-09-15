import dotenv from "dotenv";
dotenv.config();
// import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-contract-sizer";
import "@cronos-labs/hardhat-cronoscan";

const privateKey: string | undefined = process.env.PRIVATE_KEY;

const config = {
  solidity: {
    version: "0.8.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
    },
  },
  networks: {
    main: {
      url: `${process.env.API_NODE_ETH}`,
      accounts: privateKey !== undefined ? [privateKey] : [],
      chainId: 1,
    },
    goerli: {
      url: `${process.env.API_NODE_GOERLI}`,
      accounts: privateKey !== undefined ? [privateKey] : [],
      chainId: 5,
    },
    // Polygon networks
    polygon: {
      url: `${process.env.API_NODE_POLYGON}`,
      accounts: privateKey !== undefined ? [privateKey] : [],
      chainId: 137,
    },
    mumbai: {
      url: `${process.env.API_NODE_POLYGON_MUMBAI}`,
      accounts: privateKey !== undefined ? [privateKey] : [],
      chainId: 80001,
    },
    // BNB Chain networks
    bnb_chain: {
      url: `${process.env.API_NODE_BSC}`,
      accounts: privateKey !== undefined ? [privateKey] : [],
      chainId: 56,
    },
    bnb_testnet: {
      url: `${process.env.API_NODE_BSC_TEST}`,
      accounts: privateKey !== undefined ? [privateKey] : [],
      chainId: 97,
    },
    // CRONOS networks
    cronos: {
      url: `${process.env.API_NODE_CRONOS}`,
      chainId: 25,
      accounts: privateKey !== undefined ? [privateKey] : [],
    },
    cronos_testnet: {
      url: `${process.env.API_NODE_CRONOS_TEST}`,
      chainId: 338,
      accounts: privateKey !== undefined ? [privateKey] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
  },
  contractSizer: {
    runOnCompile: true,
    strict: true,
  },
  etherscan: {
    apiKey: process.env.CRONOSSCAN_API_KEY,
    customChains: [
      {
        network: "cosmos",
        chainId: 25,
        urls: {
          apiURL: "https://api.cronoscan.com/api",
          browserURL: "https://cronoscan.com/",
        },
      },
      {
        network: "cosmos_test",
        chainId: 338,
        urls: {
          apiURL: "https://api.cronoscan.com/api",
          browserURL: "https://testnet.cronoscan.com/",
        },
      },
    ],
  },
};

export default config;
