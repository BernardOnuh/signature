## 100DaysOfSolidity Day40
This week we are to create a Signature Mint NFTs minting site.

### Tools:
**thirdweb React SDK:** to enable users to connect and disconnect their wallets to our website, using useMetamask & useDisconnect, and prompt them to approve transactions with MetaMask. We'll also use the helpful hooks such as useNFTs to easily fetch data from the smart contract.

**thirdweb NFT Collection:** to create an ERC721 NFT Collection that our community can mint NFTs into.

**thirdweb TypeScript SDK:** to connect to our NFT Collection Smart contract via React hooks such as useNFTCollection, mint new NFTs with signature based minting.

**Next JS API Routes:** For us to securely generate signatures on the server-side, on behalf of our wallet, using our wallet's private key.

### Start Here

This is how we came up with the smart contract 

check [here](https://github.com/BernardOnuh/100DaysOfSolidity/tree/main/Signature)

### Now let's create Frontend Application

```bash
    git clone https://github.com/BernardOnuh/signature.git
```

You can go into the component and replace contract address.

you can read more on how to intteract with your contract [here](https://github.com/thirdweb-example/signature-based-minting)