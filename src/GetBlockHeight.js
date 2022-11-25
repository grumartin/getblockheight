import React, { useState } from 'react';
import { ethers } from 'ethers';

const GetBlockHeight = () => {
  const [blockHeight, setBlockHeight] = useState('');

  const getHeight = () => {
    //connect to metamask
    if(window.ethereum){
        window.ethereum.request({method: 'eth_requestAccounts'})
        .then(result => {
            console.log("Wallet connected");
            //define provider
            let provider = new ethers.providers.Web3Provider(window.ethereum);
            //get block height
            provider.getBlockNumber().then(result => {
                setBlockHeight(result);
            })
        })
    }else{
        console.log("You need to install MetaMask");
    }
  }

  return (
      <div>
        <h2>Current Block Height on Görli Testnet</h2>
        <button onClick={getHeight}>Fetch Height</button>
        <div>Current Block Height: {blockHeight}</div>
      </div>
  )
}

export default GetBlockHeight;
