import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Mainbody from './components/Mainbody';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">      
        <Sidebar />
        <Mainbody />
      </div>
      <Footer />
    </div>
  );
}

export default App;
