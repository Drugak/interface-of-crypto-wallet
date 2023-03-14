import React from "react";
import { DefaultButton} from '@fluentui/react/lib/Button';

const AuthButton = ({callback, isDisabled}) => <DefaultButton disabled={isDisabled} text="Connect To Wallet" onClick={callback} />

export default AuthButton;