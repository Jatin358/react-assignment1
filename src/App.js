import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import CardComponent from './components/Card';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
// import Footer from './Components/footer/Footer';
// import Header from './Components/header/Header';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

class App extends React.Component {
  render() {

    return <div className='main-content'>

        <Header />
        <Dashboard />
        <Footer />

    </div>

  }
}
export default App;
