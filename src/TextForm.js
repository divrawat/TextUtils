import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpClick=()=>{
    // console.log("Upper case was clicked" + text);
    let newtext=text.toUpperCase();
  setText(newtext);
}
const handleLoClick=()=>{
    // console.log("Upper case was clicked" + text);
    let newtext=text.toLowerCase();
  setText(newtext);
}

const handleCopyClick=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  alert("Copied the text: " + text.value);
}

const handleClearClick=()=>{
    // console.log("Upper case was clicked" + text);
    let newtext='';
  setText(newtext);
}
const handleExtraClick=()=>{
   let newText=text.split(/[ ]+/);
   setText(newText.join(" "));
}

// Changes made by Japsimran Singh
const handleCapitalClick=()=>{
  let splitText = text.split(".");
  let finalText = '';
  for (var i=0;i<splitText.length;i++){
    // trimming to remove empty leading and trailing spaces.
    splitText[i] = splitText[i].trim()   
    // Now making first letter capital.
    // console.log(splitText[i][0].toUpperCase() + splitText[i].substring(1))
    finalText += splitText[i][0].toUpperCase()+ splitText[i].substring(1) + '. ';
    
  }
  
  console.log(finalText);
  // setText(newtext+text.slice(1,));  
  setText(finalText);  
}

const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
}

const [text,setText]=useState("Enter text Here 2");
    return (
        <>
        
<div className="form-floating" style={{color:props.mode=== 'dark'?'white' : '#000039'}}>
<h1>{props.heading} </h1>
  <textarea value={text} className="form-control" onChange={handleOnChange}  id="myBox" rows="8" 
  style={{backgroundColor:props.mode=== 'dark'?'grey' : 'white',color:props.mode=== 'dark'?'white' : '#000039'}}></textarea>
  
</div>

<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraClick}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-1" onClick={handleCapitalClick}>Capitalize</button>

<div className="container my-3" style={{color:props.mode=== 'dark'?'white' : '#000039'}}>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter Your Text"}</p>


</div>
        </>
    )
}
