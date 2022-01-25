import { Contract } from "@ethersproject/contracts";
import { useContractFunction, useContractCall } from "@usedapp/core";
import { useSendTransaction } from "@usedapp/core";
import { ethers } from "ethers";

import sunAbi from "./SunAbi.json";
const contractInterface = new ethers.utils.Interface(sunAbi);
const sunAddress = '0xe4c221410cCbB5e08499cDBB2CcA0E8F3d8352c6'

export function useGetSun(account) {
    const [value] = useContractCall(
    account &&
    sunAddress && {
    abi: contractInterface,
    address: sunAddress,
    method: "getBalance",
    args: [],
    }) ?? [];
    console.log('bal', value)
    return value;
}

export function BurnSun() {
    const contract = new Contract(sunAddress, sunAbi);

    const { state, send } = useContractFunction(contract, 'burnSun');
    try{
      txnHash = state.receipt.transactionHash
    } catch{}
    try{
      error = state.errorMessage
    } catch{}
    return { state, send };
}

export function Hash(){
    return txnHash;
}

export function Error(){
    if (typeof error === 'undefined') {
        error = ''
        } else {}
    return error;
}