import React from "react";
import Wallet from "./components/Wallet/Wallet";
import AccountInfo from "./components/AccountInfo/AccountInfo";
import News from "./components/News/News";
import './App.scss';
import store from "./store";
import {setConnectId, setConnectedStatus} from "./action";
import {selectConnectedStatus} from './selectors';
import {useSelector} from "react-redux";
import AccountInfoWrapper from "./components/AccountInfo/AccountInfoWrapper";

export default function App() {
    const { ethereum } = window;
    const reState = (chainId) => {
        const id = Array.isArray(chainId) ? chainId[0] : chainId;
        store.dispatch(setConnectedStatus({connectedStatus: true}));
        store.dispatch(setConnectId({connectId: id}))
    }

    const connectedStatus = useSelector(selectConnectedStatus)

    ethereum.on('chainChanged', reState);
    ethereum.on('accountsChanged', reState);

    return (
        <div className="crypto-app">
            <Wallet/>
            {connectedStatus && <AccountInfoWrapper/>}
            <News />
        </div>
    );
}