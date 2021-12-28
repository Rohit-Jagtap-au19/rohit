import React, { useState } from 'react'


export default function TextForm(props) {
    const handelUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext);
        props.showAlert("Converted to uppercase!","success");
    }
    // this is for lowercase
    const handellcClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext);
        props.showAlert("Converted to lowercase!","success");

    }
// this is for clear
    const handelclearClick = () => {
        let newtext = ''
        setText(newtext);
        props.showAlert("Text Cleared!","success");

    }
// this is for on click
    const handelonChange = (event) => {
        setText(event.target.value)
    }
// this is for copy
    const handelcopy = () =>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");

    }
// this is for remove extra spaces
    const removeExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!","success");

    }


    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color :props.mode==='dark'?'white':'#042743'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handelonChange} style={{backgroundColor :props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert To Uppercase</button>
                <button className="btn btn-info mx-1" onClick={handellcClick}>Convert To Lowercase</button>
                <button className="btn btn-danger mx-1" onClick={handelclearClick}>Clear</button>
                <button className="btn btn-danger mx-1" onClick={handelcopy}>Copy</button>
                <button className="btn btn-danger mx-1" onClick={removeExtraSpaces}>Remove spaces</button>
            </div>

            <div className="container my-2" style={{color :props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something In The Text Box Above To Preview It Here"}</p>
            </div>
        </>
    )
}