import { useState } from 'react';
import { Btn } from './components/Btn';
import './App.css';


import { FaUndoAlt, FaRedoAlt } from "react-icons/fa";
function App() {
  const [dot, setDot] = useState([]);
  const [lastDot, setLastDot] = useState([]);
  
  const handleClickScreen = (e)=>{
    setDot([...dot, {x: e.clientX, y: e.clientY}]);
    setLastDot([]);
  };
  
  const handleClickUndo = (e)=>{
    e.stopPropagation();
    
    if(dot.length !== 0){
      setLastDot([...lastDot, dot[dot.length-1]])
      setDot(dot.slice(0, -1));
    }
  };

  const handleClickRedo = (e)=>{
    e.stopPropagation();
    
    if (lastDot.length !== 0){
      setDot([...dot, lastDot[lastDot.length-1]]);
      setLastDot(lastDot.slice(0, -1));
    }
  };

  return (
    <div className="App" onClick={handleClickScreen}>
      <header className='btns'>
        <Btn text={'Refazer'} handleClick={handleClickRedo} icon={<FaRedoAlt />}/>
        <Btn text={'Desfazer'} handleClick={handleClickUndo} icon={<FaUndoAlt />}/>
      </header>

      <div className='null-dot'>
        {dot.length === 0 ? (<p onClick={e=>e.stopPropagation()}>Sem pontos</p>):(
          dot.map((el, key)=>{
            return <span key={key} style={{top: el.y, left: el.x}}></span>
          })
        )}
      </div>
      
    </div>
  );
}

export default App;
