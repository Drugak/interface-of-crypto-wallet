import React from "react";
import Wallet from "./components/Wallet";
import AccountInfo from "./components/AccountInfo";
import News from "./components/News/News";
import './App.scss';
import store from "./store";
import {setAppState, setAccount} from "./action";

export default function App() {
    const { ethereum } = window;
    const setDisconnectState = () => {
        store.dispatch(setAppState({
            connected: false
        }));
        store.dispatch(setAccount({
            account: null
        }))
    }

    if (!ethereum.isMetaMask) {

    }

    ethereum.on('accountsChanged', setDisconnectState);
    ethereum.on('disconnect', setDisconnectState);
    ethereum.on('chainChanged', setDisconnectState);



    return (
        <div className="crypto-app">
            <Wallet/>
            <AccountInfo />
            <News />
        </div>
    );
}