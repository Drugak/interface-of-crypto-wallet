import {get} from 'lodash'
export const selectAccount = (state) => get(state, "account", null);
export const selectAppState = (state) => get(state, "appState", null);