import { ThirdwebNftMedia, useAddress, useContract, useNFTs, Web3Button} from '@thirdweb-dev/react';
import { useState} from 'react';

const Buttons = () =>{
    const address = useAddress();
    const ContractAddress = '0xaC8d6c69b14A62F19Bf1cAD327F7cb19D86e5b63';
    const {contract: nftCollection} = useContract(ContractAddress);
    const { data: nfts, isLoading:loadingNfts } =useNFTs(nftCollection);


    const claim = async () => {
        const signedPayloadReq = await fetch(`/api/generate-mint-signature`, {
            method: "POST",
            body: JSON.stringify({
              address: address,
            }),
          });
      
          console.log(signedPayloadReq);
      
          if (signedPayloadReq.status === 400) {
            alert(
              "Looks like you don't own an early access NFT :( You don't qualify for the free mint."
            );
          }
        };
    return(
        <div className='p-4 text-white'>
        <Web3Button
        accentColor="#33bbcf"
        contractAddress={ContractAddress}
        action={() => claim()}
        colorMode="dark"
      >
        Claim
      </Web3Button>  
      </div>
    );
};
export default Buttons