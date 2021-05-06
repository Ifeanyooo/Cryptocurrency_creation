import React from 'react'
import './App.css';
import Status from './components/status'
import Send from './components/send'
import Transactions from './components/transactions'
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    axios.get()
  }

  render() {
    return (
    <div className="App">
    <Status/>
    <Send/>
    <Transactions/>
    </div>
  )
  }


}

  export default App
