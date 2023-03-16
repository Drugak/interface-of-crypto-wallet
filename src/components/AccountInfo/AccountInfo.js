import React from "react";
import {useSelector} from "react-redux";
import {selectAccountInfo, selectContractInfo} from "../../selectors";


const AccountInfo = () => {
    const {balance,transitionCount, accountId} = useSelector(selectAccountInfo);
    const contractInfo = useSelector(selectContractInfo);

    return (
        <section className="crypto-app_section account-info">
            <h1>Account Info</h1>
            <div className='box'>
                <p>Account ID: {accountId}</p>
                <p>Balance: {balance}</p>
                <p>Transition Count: {transitionCount}</p>
                <p>Contact: {contractInfo.address}</p>
            </div>
        </section>
    )
}

export default AccountInfo;