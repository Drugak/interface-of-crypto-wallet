import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectSignAddress, selectConnectID} from "../../selectors";
import getAccountInfo from '../../utils/getAccountInfo'
import getContracts from '../../utils/getContracts'
import AccountInfo from "./AccountInfo";


const AccountInfoWrapper = () => {
    const {signAddress} = useSelector(selectSignAddress);
    const {connectId} = useSelector(selectConnectID)

    useEffect(() => {
        getContracts(signAddress)
        getAccountInfo(signAddress);
    }, [connectId])

    return <AccountInfo />;
}

export default AccountInfoWrapper;