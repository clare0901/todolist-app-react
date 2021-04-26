// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar'
import TodoList from './components/TodoList'
import Footer from './components/Footer'


class App extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <TodoList />
        <Footer />
      </div>
    )
  }
}

export default App;
