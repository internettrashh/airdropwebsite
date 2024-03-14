// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@thirdweb-dev/contracts/base/ERC20Base.sol";

contract Airdrop is ERC20 {
    constructor(uint256 initialSupply) ERC20("cryptomayne", "CM") {
        _mint(msg.sender, initialSupply);
    }

    function claim() public {
        require(balanceOf(msg.sender) == 20, "You cannot claim anymore tokens");
        // Convert 0.1 to an integer by multiplying by 10^decimals
        uint256 amountToMint = 1 * 10 ** decimals(); // 0.1 * 10^decimals()
        _mint(msg.sender, amountToMint);
    }
}