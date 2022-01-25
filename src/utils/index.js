import { Contract } from "@ethersproject/contracts";
import { useContractFunction, useContractCall } from "@usedapp/core";
import { useSendTransaction } from "@usedapp/core";
import { ethers } from "ethers";

import { address as address2 } from '../contractsOfPlanets/BluePlanet/address.js'
import { address as address5 } from '../contractsOfPlanets/BrownPlanet/address.js'
import { address as address4 } from '../contractsOfPlanets/DarkBluePlanet/address.js'
import { address as address3 } from '../contractsOfPlanets/Earth/address.js'
import { address as address7 } from '../contractsOfPlanets/Earth2/address.js'
import { address as address6 } from '../contractsOfPlanets/PinkPlanet/address.js'
import { address as address1 } from '../contractsOfPlanets/RedPlanet/address.js'
import { address as address9 } from '../contractsOfPlanets/WhitePlanet/address.js'

import planetAbi from "../contractsOfPlanets/PlanetAbi.json";
const contractInterface = new ethers.utils.Interface(planetAbi);


var txnHash = ''
var error = ''

export function Hash(){
    return txnHash;
}

export function SenddTransaction(){
        const { state, sendTransaction } = useSendTransaction()
        try{
            error = state.errorMessage
        } catch{}
        return { state, sendTransaction };
    }

export function Error(){
    if (typeof error === 'undefined') {
        error = ''
        } else {}
    return error;
}

export function BuyLands(methodName: string, id) {
    const contractAddress = adr(id)
    const contract = new Contract(contractAddress, planetAbi);

    const { state, send } = useContractFunction(contract, methodName);
    try{
      txnHash = state.receipt.transactionHash
    } catch{}
    try{
      error = state.errorMessage
    } catch{}
    return { state, send };
}

export function BuyPlanets(methodName: string, id) {
    const contractAddress = adr(id)
    const contract = new Contract(contractAddress, planetAbi);

    const { state, send } = useContractFunction(contract, methodName);
    try{
      txnHash = state.receipt.transactionHash
    } catch{}
    try{
      error = state.errorMessage
    } catch{}
    return { state, send };
}

export function Withdraw(methodName: string, id) {
    const contractAddress = adr(id)
    const contract = new Contract(contractAddress, planetAbi);

    const { state, send } = useContractFunction(contract, methodName);
    try{
      txnHash = state.receipt.transactionHash
    } catch{}
    try{
      error = state.errorMessage
    } catch{}
    return { state, send };
}

export function useGetPlanetValue(id, account) {
    var address = adr(id)
    console.log(address)
    const [value] = useContractCall(
    account &&
    address && {
    abi: contractInterface,
    address: address,
    method: "getBalance",
    args: [],
    }) ?? [];
    console.log('bal', value)
    return value;
}

function adr(id){
    var address
    if (( id == 1 )){
        address=address1
    } else if ((id == 2)){
        address=address2
    }else if ((id == 3)){
        address=address3
    }else if ((id == 4)){
        address=address4
    }else if ((id == 5)){
        address=address5
    }else if ((id == 6)){
        address=address6
    }else if ((id == 7)){
        address=address7
    }else if ((id == 8)){
        address=address9
    } else{
        console.log('else')
    }
    return address
}






