import React, {useCallback, useRef, useState} from "react";
import {TextField} from "@fluentui/react/lib/TextField";
import {MessageBar, MessageBarType} from "@fluentui/react";
import {DefaultButton} from "@fluentui/react/lib/Button";
import {ethers} from "ethers";

const SendTransaction = () => {
    const to = useRef();
    const value = useRef();
    const gasPrice = useRef();
    const gasLimit = useRef();

    const [transactionError, setTransactionError] = useState(null);

    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    let wallet = ethers.Wallet.createRandom();
    let walletSigner = wallet.connect(provider)

    const sentTransaction = useCallback(async (e) => {
        e.preventDefault();
        walletSigner.sendTransaction({
            from: wallet.address,
            // to: "0x8d2624A801BE9D6c1D07be2DD0C2620AD0fC5EB7",
            to: to.current.value,
            value: ethers.utils.parseEther(value.current.value),
            gasPrice: ethers.utils.parseEther(gasPrice.current.value),
            gasLimit: ethers.utils.parseEther(gasLimit.current.value),
            nonce: provider.getTransactionCount(wallet.address,'latest')
        }).then((data) => {
            debugger;
        })
        .catch((error) => {
            setTransactionError(error.data.message);
        });
    }, [to, value, gasLimit, gasPrice])


    return (
        <div className="transaction-form">
            {
                transactionError &&
                <MessageBar messageBarType={MessageBarType.error} isMultiline={true} dismissButtonAriaLabel="Close">
                    {transactionError}
                </MessageBar>
            }
            <form onSubmit={sentTransaction}>
                <TextField ref={value} type="number" label="Amount" required/>
                <TextField ref={to} label="Recipient" required/>
                <TextField ref={gasPrice} type="number" label="Gas Price" required/>
                <TextField ref={gasLimit} type="number" label="Gas Limit" required/>

                <DefaultButton text="Send" type="submit"/>
            </form>
        </div>
    );
};

export default SendTransaction;