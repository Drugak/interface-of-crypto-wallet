import {ethers} from "ethers";

const abi = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",
    "function transfer(address to, uint amount) returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint amount)"
];

export const getContracts = (address, provider) => {
    const contract = new ethers.Contract(address, abi, provider);

    return {
        address: contract.address,
        resolvedAddress: contract.resolvedAddress,
        deployTransaction: contract.deployTransaction,
    }
};