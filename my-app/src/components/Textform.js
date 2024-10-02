
import React, { useState } from 'react';
export default function Textform(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success")
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
  }
    const handleOnChange=(event)=>{
        setHistory([...history,text])
        setText(event.target.value)
    }
    const clearAll=()=>{
      let newText=' '
      setText(newText)
    }
    const handleUndo = () => {
      if (history.length > 0) {
        const previousText = history[history.length - 2];
        setText(previousText); 
        setHistory(history.slice(0, history.length - 2)); 
      }
    };
  
    const [text,setText]=useState("Enter text here")
    const [history, setHistory] = useState([])
  return (
    <>
    <div className='container' style=
      {
        {
          color:props.mode==='dark'? 'white':'black',
          backgroundColor:props.mode==='dark'? 'grey':'white'
        }
      }>
      <h1 
      >{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control" 
        style=
        {
          {
            color:props.mode==='dark'? 'white':'black',
            backgroundColor:props.mode==='dark'? 'grey':'white'
          }
        }
        id="my-box" rows="8"value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-3 " onClick={handleLoClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={clearAll}>Clear Text</button>
      <button className="btn btn-primary mx-3" onClick={handleUndo}>Undo text</button>
    </div>
    <div className="container" style=
      {
        {
          color:props.mode==='dark'? 'white':'black',
        }
      }>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} minutes read</p>
      <h2>{text.length>0? 'Preview':'Enter the text to preview it here'}</h2>
      <p>{text}</p>
    </div>
    </>
  )
}


