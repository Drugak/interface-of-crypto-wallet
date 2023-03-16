import {ethers} from "ethers";
import store from "../store";
import {setAccountInfo} from "../action";

const getAccountInfo = async (signAddress) => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const balance = await provider.getBalance(signAddress);
    const transitionCount = await provider.getTransactionCount(signAddress);
    const correctBalance = ethers.utils.formatEther(balance)

    // let etherscanProvider = new ethers.providers.EtherscanProvider();
    //
    // etherscanProvider.getHistory(signAddress).then((history) => {
    //     history.forEach((tx) => {
    //         console.log(tx, "================");
    //     })
    // });

    store.dispatch(setAccountInfo({balance: correctBalance, transitionCount, accountId: signAddress}))
};

export default getAccountInfo;