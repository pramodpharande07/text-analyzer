import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to uppercase","success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to Lowecase","success")
    }

    const handlClearClick = ()=>{
        let newText = ''
        setText(newText);
        props.showAlert("Text is Cleared","success")
    }

    const handleCopy = ()=>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
      document.getSelection().removeAllRanges()
      props.showAlert("Text is Copied","success")
    }

    const handleExtraSpaces = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed","success")
    }

    // without onchange we cant type text 
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    
    //useState hook
    const [text, setText] = useState('')

    // text = "enter text" wrong way for updation
    // setText('Enter text');

  return (
<>
<div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
  <h1 className='mb-3'>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" style={{color : props.mode === 'dark'?'white':'black', backgroundColor: props.mode === 'dark'?'#13466e':'white'}  } onChange={handleOnChange} value={text} id="myBox" rows="8" ></textarea></div>
  <button disabled= {text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled= {text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled= {text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled= {text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <button disabled= {text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handlClearClick}>Clear Text</button>
</div> 

<div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
<h2>Your Text Summary</h2>
<p>{text.split(" ").filter((element)=>{return element.length !== 0}).length } words {text.length} characters</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Read Minute</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview"}</p>
</div>
</>
  )
}
