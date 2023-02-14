# Wallet Creation

This project demonstrates a basic wallet creation and export of the wallet with a specified password.

Supported Networks:
- Ethereum (ethereum)
- VechainTHOR (vechain)

# Installation
```shell
npm install
```

Create a wallet 
```
npx hardhat run ./scripts/create_wallet.ts --network <NETWORK>
```

The wallet created will be found at `./keystore/wallet-<timestamp>.json`