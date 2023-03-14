import React from "react";
import {useSelector} from "react-redux";
import {selectAccount} from "../selectors";

const AccountInfo = () => {
    const account = useSelector(selectAccount);

    return (
        <section className="crypto-app_section">
            <h1>Account Info</h1>
            <div className='box'>
                <p>Account ID: {account.accountInfo}</p>
                <p>Balance: {account.balance}</p>
                <p>Transition Count: {account.transitionCount}</p>
                <p>Contact: </p>
            </div>
        </section>
    )
}

export default AccountInfo;