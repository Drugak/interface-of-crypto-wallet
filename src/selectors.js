import {get} from 'lodash'
export const selectAccount = (state) => get(state, "account", null);
export const selectSignAddress = (state) => get(state, "signAddress", null);
export const selectConnectID = (state) => get(state, "connectId", null);
export const selectConnectedStatus = (state) => get(state, "connectedStatus", null);
export const selectAccountInfo = (state) => get(state, "accountInfo", null);
export const selectContractInfo = (state) => get(state, "contractInfo", null);