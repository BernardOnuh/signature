import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function generateMintSignature(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    // De-construct body from request
  const { address } = JSON.parse(req.body);
  const mumbaiSDK = new ThirdwebSDK('mumbai');
  const earlyNFTs = await mumbaiSDK.getContract(
    '0xaC8d6c69b14A62F19Bf1cAD327F7cb19D86e5b63',
    'edition-drop'
  );
    
  const numTokensInCollection = await earlyNFTs.getTotalCount();
  let userHasToken = false;

  for (let i =0; i < numTokensInCollection.toNumber(); i++) {
    const balance = await earlyNFTs.balanceOf(address, i);
    if (balance.toNumber() > 0) {
      userHasToken = true;
      break;
  }
}
const goerliSDK = ThirdwebSDK.fromPrivateKey(
    process.env.PRIVATE_KEY as string,
    "mumbai"
  );
  const signatureDrop = await goerliSDK.getContract(
    "0xaC8d6c69b14A62F19Bf1cAD327F7cb19D86e5b63",
    "signature-drop"
  );

  // If the user has an early access NFT, generate a mint signature
  if (userHasToken) {
    const mintSignature = await signatureDrop.signature.generate({
      to: address, // Can only be minted by the address we checked earlier
      price: "0", // Free!
      mintStartTime: new Date(0), // now
    });

    res.status(200).json(mintSignature);
  } else {
    res.status(400).json({
      message: "User does not have an early access NFT",
    });
  }
  }