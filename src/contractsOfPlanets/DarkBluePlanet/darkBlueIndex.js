import { ethers } from "ethers";
import { useContractCall } from "@usedapp/core";

import { address } from './address.js'

import planetAbi from "../PlanetAbi.json";
const contractInterface = new ethers.utils.Interface(planetAbi);

export function useWhiteListedUserDarkBlue(account) {

      const [planet] = useContractCall(
      account &&
      address && {
        abi: contractInterface,
        address: address,
        method: "whitelisted",
        args: [account],
      }) ?? [];
      return planet;
}

export function useGetDarkBlue(account) {


      const [balance] = useContractCall(
      account &&
      address && {
        abi: contractInterface,
        address: address,
        method: "balanceOf",
        args: [account],
      }) ?? [];
      return balance;
}