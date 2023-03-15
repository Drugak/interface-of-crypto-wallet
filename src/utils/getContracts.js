import {ethers} from "ethers";
import store from "../store";
import {setContractInfo} from "../action";

const abi = [
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",
    "function transfer(address to, uint amount) returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const getContracts = async (signAddress) => {
    const { ethereum } = window;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const contract = new ethers.Contract(signAddress, abi, provider);

    const code = await provider.getCode(signAddress);

    const address = await contract.balanceOf(signAddress);
    const decimals = await contract.decimals;
    const symbol = await contract.symbol;

    console.log(address, decimals, symbol, "======address, decimals, symbol=======");

    store.dispatch(setContractInfo({address, decimals, symbol}));
};

export default getContracts;