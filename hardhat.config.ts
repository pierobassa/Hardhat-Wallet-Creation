import * as dotenv from 'dotenv'

dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

//RETRIEVE ENV VARIABLES
const {
  ALCHEMY_KEY,
  GAS_PRICE
} = process.env;

const gasPrice = GAS_PRICE ? Number(GAS_PRICE) : "auto"

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      }
    ]
  },
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545' //Create the network with 'npx hardhat node'
    },
    ethereum: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      gasPrice: gasPrice
    }
}
  
};

export default config;
