import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
      
    //    color:'black',
    //    backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode == 'dark'?'White':'#042743',
        backgroundColor: props.mode == 'dark'?'rgb(36 74 104)':'White'
    }

return (
<div className='container' style={{color: props.mode == 'dark'?'White':'#042743'}}>
    <h1 className='my2'>About Us</h1>
    <div class="accordion" id="accordionExample">
<div class="accordion-item" style={myStyle}>
<h2 class="accordion-header">
    <button class="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <strong>Analyse Your Text </strong>
    </button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count or character count
    </div>
</div>
</div>
<div class="accordion-item" style={myStyle}>
<h2 class="accordion-header">
    <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
   <strong> Free to use </strong>
    </button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
    <div class="accordion-body">
    Textutils is a free character counter tool that provides instant character count and word count stastics for a given text. Textutils reports the number of word and characters. Thus it suitable for writing text with word/ character limit.
    </div>
</div>
</div>
<div class="accordion-item" style={myStyle}>
<h2 class="accordion-header">
    <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    <strong>Browser Compatible</strong>
    </button>
</h2>
<div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    This word counter software works in any web browser such as chrome, forefox, explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel, documents, etc.
    </div>
</div>
</div>
</div>
</div>
  )
}
