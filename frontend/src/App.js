import { ConnectWallet , useContract } from "@thirdweb-dev/react";
import "./styles/Home.css";
import  { CONTRACTADDY }  from "./contracts/Contractaddy.js";
import { Web3Button } from "@thirdweb-dev/react";
import React, { useState } from 'react';




export default function Home() {
  const {contract}=useContract(CONTRACTADDY);
  const [showModal, setShowModal] = useState(false);
  // console.log(CONTRACTADDY);
  
  
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
                crypto mayne airdrop
            </span>
          </h1>

         
          
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%",marginTop:"20%" }}>
            <Web3Button
              contractAddress={CONTRACTADDY}
              action={(contract) => contract.call("claim")}
              onSuccess={(result) => {
                console.log("Transaction successful:", result);
                setShowModal(true);
              }}
            >
              airdrop 1 token 
            </Web3Button>
            {showModal && (    <div className="card" style={{ position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}>
    
          <h2>Transaction Successful</h2>
          <p>Your transaction was successful, please check your wallet.</p>
          
          <button style={{ justifyContent: "center", alignItems: "center"}} onClick={() => setShowModal(false)}>Close</button>
          
        </div>
      )}
          </div>
        </div>
      </div>
    </main>
  );
}