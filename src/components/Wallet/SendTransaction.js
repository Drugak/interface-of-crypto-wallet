import React, {useCallback, useRef, useState} from "react";
import {TextField} from "@fluentui/react/lib/TextField";
import {MessageBar, MessageBarType} from "@fluentui/react";
import {DefaultButton} from "@fluentui/react/lib/Button";
import {ethers} from "ethers";

const SendTransaction = () => {
    const { ethereum } = window;

    const to = useRef();
    const value = useRef();
    const gasPrice = useRef();
    const gasLimit = useRef();

    const [transactionError, setTransactionError] = useState(false);
    const [transactionSuccess, setTransactionSuccess] = useState(false);

    const sentTransaction = useCallback(async (e) => {
        e.preventDefault();

        const provider = new ethers.providers.Web3Provider(ethereum);
        let wallet = ethers.Wallet.createRandom();
        let walletSigner = wallet.connect(provider)

        walletSigner.sendTransaction({
            from: wallet.address,
            // to: "0x8d2624A801BE9D6c1D07be2DD0C2620AD0fC5EB7",
            to: to.current.value.toString(16),
            value: '0x'+ethers.utils.parseEther(value.current.value),
            gasPrice: '0x'+gasPrice.current.value.toString(16),
            gasLimit: '0x'+gasLimit.current.value.toString(16),
            nonce: provider.getTransactionCount(wallet.address,'latest')
        }).then((data) => {
            setTransactionError(null);
            setTransactionSuccess('Transaction was successful.');
        })
        .catch((error) => {
            setTransactionError(error.data?.message || error.message);
        });
    }, [to, value, gasLimit, gasPrice]);


    return (
        <div className="transaction-form">
            {(transactionError || transactionSuccess) &&
                <MessageBar
                    messageBarType={MessageBarType[transactionError ? 'error': 'success']}
                    isMultiline={true}
                    dismissButtonAriaLabel="Close"
                >
                    {transactionError || transactionSuccess}
                </MessageBar>
            }
            <form onSubmit={sentTransaction}>
                <TextField ref={value} type="number" label="Amount" required/>
                <TextField ref={to} label="Recipient" required/>
                <TextField ref={gasPrice} type="number" label="Gas Price" required/>
                <TextField ref={gasLimit} type="number" label="Gas Limit" required/>

                <DefaultButton className="transaction-button" text="Send" type="submit"/>
            </form>
        </div>
    );
};

export default SendTransaction;