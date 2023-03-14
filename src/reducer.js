import { handleActions } from 'redux-actions';
import {setAccount, setAppState} from './action'

const INITIAL_STATE = {
    account: {},
    appState: {
        connected: false
    }
}

export default handleActions(
{
        [setAccount]: (state,{ payload }) => {
            return { ...state, account: payload};
        },
        [setAppState]: (state,{ payload }) => {
            return { ...state, appState: payload};
        }
    },
    INITIAL_STATE
);