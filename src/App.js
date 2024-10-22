import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Button from './components/Button';
import { useState } from 'react';
import Count from './components/Count';

function App() {


  console.log("se renderiza app")

  return (
    <>
      <NavBar />

      {/* <Button texto="otro botón" />
      <Button texto="yo no soy un botón" /> */}

      <ItemListContainer greeting="bienvenido a mi tienda"/>

      {/* <button onClick={()=>sum()}> botón de html</button> */}
      {/* <span>{count}</span> */}
    </>
  );
}

export default App
