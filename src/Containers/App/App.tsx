import * as React from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Navbar/>
        <Header/>
      </div>
    );
  }
}

export default App;
