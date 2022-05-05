import React, { useRef, useEffect, useState } from 'react';
import '../App.css';

function Carrucel() {
  const ref = useRef(null);
  const [tam, setTam] = useState({x: 0,y: 0})
  const [x,setX] = useState(1);
  const [y,setY] = useState(1);

  const anterior = () => {
    setX(x-1);
  }
  const siguiente = () => {
    setX(x+1);
  }
  
  return (
    <div>
      <main className="contenedor"
        ref={ref}>
        <div className="carrucel">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </div>
      </main>
      <nav className="contenedor">
        <button onClick={anterior}> 
          &#60;&#45;&#45;
        </button>
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
        <button onClick={siguiente}> 
          &#45;&#45;&#62;
        </button>
      </nav>
      <p> { JSON.stringify(tam) } </p>
      <p> { x } </p>
      <p> { y } </p>
    </div>
  );
}

export default Carrucel;