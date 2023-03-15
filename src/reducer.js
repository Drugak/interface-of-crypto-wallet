import { handleActions } from 'redux-actions';
import {setAccount, setSignAddress, setConnectedStatus, setConnectId, setAccountInfo, setContractInfo} from './action'

const INITIAL_STATE = {
    account: {},
    connectedStatus : false,
    signAddress: '',
    connectId: undefined,
    accountInfo: {},
    contractInfo: {}
}

export default handleActions(
{
        [setAccount]: (state,{ payload }) => {
            return { ...state, account: payload};
        },
        [setConnectedStatus]: (state,{ payload }) => {
            return { ...state, connectedStatus: payload};
        },
        [setSignAddress]: (state,{ payload }) => {
            return { ...state, signAddress: payload};
        },
        [setConnectId]: (state,{ payload }) => {
            return { ...state, connectId: payload};
        },
        [setAccountInfo]: (state,{ payload }) => {
            return { ...state, accountInfo: payload};
        },
        [setContractInfo]: (state,{ payload }) => {
            return { ...state, contractInfo: payload};
        }
    },
    INITIAL_STATE
);