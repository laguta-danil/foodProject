import React from 'react';
import './App.css';
import ProductsCard from "./Components/ProductsCard";
import {Header} from "./Components/Header";

function App() {
  return (
    <div className="App">
        <Header />
      Main page
        <ProductsCard />
    </div>
  );
}

export default App;