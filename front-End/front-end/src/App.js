import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios';

import './App.css';


import List from './components/list/list';
import HomePage from './components/index/Home';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[]
    };
  }

  // loadData(){
  //   // documentation way to do it
  //   axios.get('/Ilist')
  //   .then(function (res){
  //     console.log(res.data);
  //     this.setState({list:res.data});
  //   })
  // }

  render() {
    // This is to test is axios is working
    // this.loadData();
    return (

      <div>

      <BrowserRouter>
        <Route exact path = '/' render={()=><HomePage/>}/>
        <Route path='/list' render={()=><List/>}/>
      </BrowserRouter>
      </div>
    );
  }
}
export default App;
