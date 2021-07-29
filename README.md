# NG-BOX


NG-Box is a Truffle Box with the following features:

* Smart Contract Development with Truffle framework integrated.
* Angular 12 framework customized to easily support Web3 integrations.
* TailwindCSS utility framework integrated for a simplified UI development process.
* Easily Jump start your DAPP by using this pre-configured Angular Starter DAPP. 



### Install

```
$ npm install
```

### Quick Usage

The Frontend of the DAPP lives in the `frontend` directory. <br>
The Smart Contracts and anything blockchain related live in the `blockchain` directory. <br>
When you compile your smart contracts, you will find the compiled contracts within the `./frontend/src/app/abi` directory. <br>
The Truffle Configurations live in the `truffle-config.js` file. <br>


To run the application simply do the following:
```
$ cd ./frontend && npm run start
```

From there, you can open your browser and go to `http://localhost:4200`


### Development

Pull requests are welcome. To get started, just fork this repo, clone it locally, and run:

```shell
npm install
```

*Notes on project branches:*
+    `master`: Stable, released version
+    `develop`: Work targeting stable release
+    `feature/{your-feature}`: Work targeting specific feature


Please make pull requests against `develop`.

### Author
[Jaime Bernal](https://github.com/iamjaime)


### License

MIT