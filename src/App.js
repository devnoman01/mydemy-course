import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import courseData from './fakeData/courseData'
import MainSite from './components/MainSite/MainSite';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainSite></MainSite>
    </div>
  );
}

export default App;
