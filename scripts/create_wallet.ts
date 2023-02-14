import { ethers } from "ethers";
import * as fs from 'fs'

const {
    WALLET_PASSWORD
} = process.env;

const KEYSTORE_DIR = './keystore';

async function main() {
    let randomWallet = ethers.Wallet.createRandom();

    let walletJSON = await randomWallet.encrypt(String(WALLET_PASSWORD)) //encrypts the wallet with the given password in .env

    !fs.existsSync(KEYSTORE_DIR) && fs.mkdirSync(KEYSTORE_DIR); //Create keystore directory

    fs.writeFileSync(KEYSTORE_DIR+'/wallet-'+Date.now()+'.json', JSON.stringify(JSON.parse(walletJSON), null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });