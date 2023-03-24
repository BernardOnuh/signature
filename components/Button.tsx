import React from "react"
import { useState, useMemo } from "react";
import { useContract, useAddress, useClaimConditions, useActiveClaimConditionForWallet, Web3Button, useClaimerProofs, useClaimIneligibilityReasons  } from "@thirdweb-dev/react";

const Button = () => {
const  address = useAddress();
const myNftdropContractAddress ='0x8487Dfb97cdFc90CfaC8837D13f10f454851f9DC'
const quantity ='1';
const {contract: nftDrop} = useContract(myNftdropContractAddress);
const claimCondition = useClaimConditions(nftDrop);
const activeClaimCondition = useActiveClaimConditionForWallet(
    nftDrop,
    address || "" );
const claimerProofs = useClaimerProofs(nftDrop, address || "");
const claimIneligibilityReasons = useClaimIneligibilityReasons(nftDrop, {
  quantity,
  walletAddress: address || "",
});

const canClaim = useMemo(() => {
  return (
    activeClaimCondition.isSuccess &&
    claimIneligibilityReasons.isSuccess &&
    claimIneligibilityReasons.data?.length === 0
  );
}, [
  activeClaimCondition.isSuccess,
  claimIneligibilityReasons.data?.length,
  claimIneligibilityReasons.isSuccess,
]);


  return(
    <div className="p-4  text-white">
    <Web3Button
    accentColor="#33bbcf"
    contractAddress={nftDrop?.getAddress() || ""}
    action={(cntr) => cntr.erc721.claim(quantity)}
    isDisabled={!canClaim}
    onError={(err) => {
      console.error(err);
      alert("Error claiming NFTs");
    }}
    onSuccess={() => {
      quantity;
      alert("Successfully claimed NFTs");
    }}
    > Mint
    </Web3Button>
    </div>
)
};

export default Button;
