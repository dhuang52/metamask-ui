import React, { Component } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Info from './Components/Info.js';
import Loading from './Components/Loading.js';
import ErrorMsg from './Components/ErrorMsg.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.updateAcctInfo = this.updateAcctInfo.bind(this);

    this.state = {
      hasMetamask: true,
      deniedRequest: false,
      hasAccounts: true,
      isLocked: true,
      account: "",
      balance: ""
    }
  }

  componentDidMount() {
    window.addEventListener('load', async () => {
      let ethereum = window.ethereum
      if (ethereum) {
        try {
          await ethereum.enable()
          this.updateAcctInfo()
        } catch (error) {
          console.error(error)
          this.setState({deniedRequest: true})
        }
      } else {
        // Metamask is not installed
        this.setState({hasMetamask: false})
      }
    })
  }

  updateAcctInfo = () => {
    let web3 = window.web3
    web3.eth.getAccounts((err, accounts) => {
      if (err != null) {
        console.log(err)
      }
      else if (accounts.length > 0) {
        // Metamask has been unlocked
        web3.eth.getBalance(web3.eth.accounts[0], function(err, balance) {
          this.setState({
            isLocked: false,
            account: accounts[0],
            balance: web3.fromWei(balance.toString(10), 'ether')
          })
        }.bind(this))
      } else {
        // no accounts?
        this.setState({hasAccounts: false})
      }
   });
  }

  render() {
    if(!this.state.hasMetamask) {
      return(
        <ErrorMsg message="Please install Metamask" />
      )
    } else if(this.state.deniedRequest) {
      return(
        <ErrorMsg message="Whoops! Try refreshing and accepting the
          application's request to connect" />
      )
    } else if(!this.state.hasAccounts) {
      return(
        <ErrorMsg message="It appears that you have no Metamask account" />
      )
    }
    else if(this.state.isLocked) {
      return( <Loading /> )
    }
    return(
      <Info
        address={this.state.account}
        balance={this.state.balance}
        switchedAcct={this.updateAcctInfo}
      />)
  }
}

export default App;
