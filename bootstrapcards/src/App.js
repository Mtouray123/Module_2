import React from "react";
import "./index.css";
//import card1
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
// IMPORT DATA
import cardsArr from './data'
console.log('this is cardsArr:', cardsArr)

export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        <Card1 />
        <Card2 />
      </section>
    </div>
  );
}
