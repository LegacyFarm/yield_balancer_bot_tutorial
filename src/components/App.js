import React, { Component } from 'react';
import logo from '../images/coin.png';
import NoWeb3 from './screens/noWeb3.js';
import Connect from './screens/connect.js';
import './App.css';

//IMPORT ABIs FROM POOLS LIST
// import ABI_aavePool from './src/abis/pools.js';
// import ABI_compoundPool from './src/abis/pools.js'; 

// //POOL CONTRACTS
// const aaveContract = new web3.eth.Contract(ABI_aavePool, process.env.AAVE_POOL_CONTRACT, {
//     from: process.env.CONTRACT_ADDRESS, // default from address
//     gasPrice: process.env.DEFAULT_GAS_PRICE // default gas price in wei
// });

// const compoundContract = new web3.eth.Contract(ABI_compoundPool, process.env.COMPOUND_POOL_CONTRACT, {
//     from: process.env.CONTRACT_ADDRESS, // default from address
//     gasPrice: process.env.DEFAULT_GAS_PRICE // default gas price in wei
// });

//WINDOW
//const dappScreen = document.querySelector('.dappScreen');
//
//



// _userAvailableDAI = // web3.account.balance

// _aaveAPR = ".01"; //set global by default
// _compoundAPR = ".00"; //set global by default

// _winner = "AAVE"; //Choose AAVE to start

// _initialDeposit = 0; //FORM INPUT
// _contractBalance = 0; // web3.contract.balance

// _totalEarnings = _contractBalance-_initialDeposit; 

// _rebalancingMsg = "Starting Rebalancing Process"; // Default start message for rebalance screen
// _finishRebalanceBTN = document.querySelector('.finish');


// //STATES
// function rebalancing_CheckingYields() {

//   //UPDATE FRONT END REACT AND STATE CHANGE?
//   _rebalancingMsg = "Checking Yeild Rates";

//   //YOU CAN GET THE APR VIA SMART CONTRACT
//   _aaveAPR = async await aaveContract.getReserveData(process.env.DAI_ADDRESS).currentStableBorrowRate;

//   //YOU CAN GET THE APR VIA API ENDPOINT
//   apiResponse = fetch("https://api.compound.finance/api/v2/account?addresses[]="+process.env.DAI_ADDRESS);
//   _compoundAPR = apiResponse.supply_rate; //What is the difference in Supply Rate and Borrow Rate? Borrow is for staking?

//   //CALCULATE THE WINNER
//   if (_aave >= _compoundAPR) {
//     _winner = "AAVE";
//     await compoundContract.methods.withdraw(DAI, contractAccount, compoundPool_DAI, totalEarnings);
//     await aaveContract.methods.deposit(DAI, contractAccount, aavePool_DAI, totalEarnings);
//   } else {
//     _winner = "COMPOUND";
//     await aaveContract.methods.withdraw(DAI, contractAccount, aavePool_DAI, totalEarnings);
//     await compoundContract.methods.deposit(DAI, contractAccount, compundPool_DAI, totalEarnings);
//   }

// }
// function rebalancing_TransferFunds() {

//   //UPDATE FRONT END REACT AND STATE CHANGE?
//   _rebalancingMsg = "Transfering funds to "+_winner;

//   if (_winner === "AAVE") {
//     async await yieldBalancerBot.withdraw(); //Time to set up the contract... 
//     async await yieldBalancerBot.deposit('AAVE');
//   }

//   if (_winner === "COMPOUND") {
//     async await yieldBalancerBot.withdraw(); 
//     async await yieldBalancerBot.deposit('COMP');
//   }

//   return _winner;
// }

// function rebalancing_Complete() {
//   _rebalancingMsg = "Transfering funds to "+_winner;
// }

// //CONTROL FUNCTIONS
// async function connect() {
//   accountsArray = await ethereum.request({ method: 'eth_requestAccounts' });
//   global const userAccount = accountsArray[0]; //GET THE FIRST ACCOUNT IN THE ARRAY
//   dappScreen.innerHTML = running; //IMPLEMENT REACT?
// }

// async function deposit() {

//   //Default Deposit Variables
//   asset = process.env.DAI_ADDRESS //Set the Token as DAI.
//   amount = _contractBalance //Deposit the Total Balance
//   onBehalfOf = msg.sender; //Tokens should be sent to the caller
//   referralCode = 0; //ENTER DappU here? LOL

//   //aaveContract
//   if ( pool === 'AAVE') {
//     aaveContract.deposit(address asset, uint256 amount, address onBehalfOf, uint16 referralCode);
//   };

//   //compoundContract
//    if ( pool === 'COMPOUND') {
//     compountContract.deposit(address asset, uint256 amount, address onBehalfOf, uint16 referralCode); //FIX
//   };
// }

// async function rebalance() {
//   async await rebalancing_CheckingYields();
//   async await rebalancing_TransferFunds();
//   async await rebalancing_Complete();
// }

// async function withdraw(contract) {

//   //Default Withdraw Variables
//   asset = process.env.DAI_ADDRESS //Set the Token as DAI.
//   amount = _contractBalance //Deposit the Total Balance
//   onBehalfOf = msg.sender; //Tokens should be sent to the caller
//   referralCode = 0; //ENTER DappU here? LOL

//   if (contract === "yieldBalancerBot") { //withdraw from contract address
//     yieldBalancerBotContract.withdraw(address asset, uint256 amount, address onBehalfOf, uint16 referralCode); //FIX
//   } else if (contract === "AAVE") { //withdraw from AAVE
//     aaveContract.withdraw(address asset, uint256 amount, address onBehalfOf, uint16 referralCode); //FIX
//   } else if (contract === "COMPOUND") {  //withdraw from COMPOUND
//     compountContract.withdraw(address asset, uint256 amount, address onBehalfOf, uint16 referralCode); //FIX
//   }

// }

// //TO INFINITY AND BEYOND
// async function borrow();
// async function repay();


//
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            @DappUniversity/yield_balancer_bot_tutorial
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mx-auto">
               
               <div className="card m-5 mx-auto col-8">
                  <h5 className="card-title pt-3 pb-1">DAI Yield Balancer</h5>
                  <p className="accountAddress card-text"> </p>
                  <img src={logo} className="card-img px-5" alt="..."/>
                  <div className="card-body dappScreen">
                  </div>
                </div>


                <p>Built With Love by DappUniversity</p>
                <a
                  className="App-link"
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LEARN BLOCKCHAIN <u><b>NOW! </b></u>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
