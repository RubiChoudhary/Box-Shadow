
import React,{useState, usestate} from 'react';
import './App.css';

function App() {
  const[Hori,setHori] =useState(10)
  const[Veri,setVeri] =useState(10)
  const[Blur,setBlur] =useState(10)
  const[Color,setColor] =useState("black")
  const[CheckOn,setCheckOn] =useState(false)



  return (
    <div className="App">

       <div className="controls">
      <label>Horizontal length</label>
      <input type="range" min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
      
      
      <label>Vertical length</label>
      <input type="range" min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />
      
      
      <label>Blur</label>
      <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
      

       
      <label>Color</label>
      <input type="color"  value={Color} onChange={(e)=>setColor(e.target.value)} />

    <div className="switch">
    <label>
      Outline
      <input type="checkbox" checked={CheckOn} onchange={()=>setCheckOn(!CheckOn)}/>
      <span className="lever"></span>
      inset
    </label>
      </div>
      </div>


      
      
      <div className="output">
        
      <div className="box" style={{boxShadow:`${CheckOn ?"inset":""}${Hori}px ${Veri}px ${Blur}px ${Color} ` }}>
        <p>box-shadow:{Hori}px {Veri}px {Blur}px {Color}</p>
       </div>
        </div>
      </div>

  );
}

export default App;
