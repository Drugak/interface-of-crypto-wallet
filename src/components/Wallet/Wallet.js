import React from "react";
import store from '../../store'
import AuthButton from '../authButton'
import {ethers} from "ethers";
import {CONST} from "../../const";
import {useSelector} from "react-redux";
import {selectConnectedStatus} from "../../selectors";
import {setSignAddress, setConnectedStatus, setConnectId} from '../../action'
import SendTransaction from './SendTransaction';

const Wallet = () => {
    const connectedStatus = useSelector(selectConnectedStatus);
    const { ethereum } = window;

    const cryptoButton = async () => {
        const accounts = await ethereum.request({ method: "eth_accounts" });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const signature = await signer.signMessage(CONST.SIGNATURE_MESSAGE);
        const signAddress = ethers.utils.verifyMessage(CONST.SIGNATURE_MESSAGE, signature);

        if (signAddress.toLowerCase() === accounts[0].toLowerCase()) {
            store.dispatch(setConnectId({
                connectId: accounts[0]
            }));
            store.dispatch(setSignAddress({
                signAddress: signAddress
            }));
            store.dispatch(setConnectedStatus({
                connectedStatus: true
            }));
        } else {
            store.dispatch(setConnectedStatus({
                connectedStatus: false
            }))
        }
    };

    const getConnectedStatusText = () =>
        connectedStatus ? "Connected" : "Disconnected"


    return (
        <section className='crypto-app_section'>
            <h1>Wallet</h1>
            <div className="box connect-box">
                <div className={`connect-status ${connectedStatus ? 'connect': 'disconnect'}`}>
                    {getConnectedStatusText()}
                </div>
                <div className="connect-tools">
                    <AuthButton isDisabled={connectedStatus} callback={cryptoButton}/>
                </div>
            </div>
            {connectedStatus &&
                <div className="box transaction-box">
                    <SendTransaction />
                </div>
            }

        </section>
    )
}

export default Wallet;