import React from "react";
import {useSelector} from "react-redux";
import {selectAccountInfo, selectContractInfo} from "../../selectors";


const AccountInfo = () => {
    const {balance,transitionCount} = useSelector(selectAccountInfo);
    const contractInfo = useSelector(selectContractInfo);

    console.log(contractInfo, "====contractInfo======");
    return (
        <section className="crypto-app_section">
            <h1>Account Info</h1>
            <div className='box'>
                {/*<p>Account ID: {accountInfo}</p>*/}
                <p>Balance: {balance}</p>
                <p>Transition Count: {transitionCount}</p>
                <p>Contact: {contractInfo.address}</p>
            </div>
        </section>
    )
}

export default AccountInfo;