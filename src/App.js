// // // import About from "./components/About.js";
import Navbar from "./components/Navbar"
 import TextForm from "./TextForm";
 import React, { useState } from 'react'
 
export const App = () => {
  const [mode, setMode] = useState('light')

  const togglemode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    document.body.style.backgroundColor = '#000036';
    }
    else{ 
    setMode('light');
    document.body.style.backgroundColor = 'white';
    }
    
  }

  return (
    <>
    {/* <Navbar/> */}
<Navbar title="TextUtils" aboutText="About textutils" mode={mode} togglemode={togglemode} />
<div className="container my-3">
<TextForm heading="Enter The text To Analyze" mode={mode} />
{/* <About/> */}

</div>
    </>
  );
}

export default App;
