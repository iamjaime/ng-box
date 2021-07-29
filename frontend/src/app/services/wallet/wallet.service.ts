import { Injectable } from '@angular/core';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class WalletService {

  /**
   * The Modal Component that Shows the different wallet service providers
   * in which you can login from.
   */
  web3Modal: any;

  /**
   * The Web3 Library
   */
  web3js: any;

  /**
   * The Wallet Provider ( ex: Metamask, TrustWallet etc. )
   */
  provider: any;

  /**
   * The Connected Wallet Addresses ( Accounts )
   */
  accounts: string[];


  constructor() {
    let providerOptions: any = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          rpc: {

          }
        }
      }
    };

    // Lets setup our RPC values from our environments....
    providerOptions.walletconnect.options.rpc[environment.network.chainId] = environment.network.rpc;
    providerOptions.walletconnect.options.rpc[environment.network.chainId] = environment.network.rpc;


    this.web3Modal = new Web3Modal({
      network: "binance", // optional
      cacheProvider: false, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });

  }


  /**
   * Connects To Wallet
   * @return {Promise<any>}
   */
  async connectAccount() {
    this.provider = await this.web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts();

    return this.accounts;
  }

}
