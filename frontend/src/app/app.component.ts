import {Component} from '@angular/core';
import {WalletService} from "./services/wallet/wallet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * The Connected Wallet Address
   */
  connectedAddress: string = '';

  /**
   * Is the Wallet Currently Connected?
   * @type {boolean}
   */
  isConnected: boolean = false;

  constructor(private wallet: WalletService) {}

  /**
   * Triggers the wallet connection modal
   * @return {Promise<void>}
   */
  async connectToWallet() {
    try {
      const connectedWalletAddresses = await this.wallet.connectAccount();
      this.connectedAddress = connectedWalletAddresses[0];
      this.isConnected = true;
      console.log(connectedWalletAddresses);
    } catch (e) {
      console.error(e);
    }
  }

}
