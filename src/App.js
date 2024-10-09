// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import StoreList from './components/StoreList/StoreList';
import Hotjar from "./helpers/hotjar";
import { Analytics } from "@vercel/analytics/react"
import './App.css';

function App() {
  return (
    <div className="App">
      <Analytics/>
      <Header />
      <Filters />
      <Hotjar />
      <StoreList />
    </div>
  );
}

export default App;
