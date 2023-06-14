import React, {useState} from 'react';

export default function Textform(props) {
    const handleUpcase= ()=>{
        //console.log("Upper case was clicked" + text)
        let newText =text.toUpperCase();
        // setText("You have clicked on handleUpClick")
        setText(newText);
        props.showalert("Converted to upper case", "success")
    }
        const handlelocase= ()=>{
            //console.log("Upper case was clicked" + text)
            let newText =text.toLowerCase();
            // setText("You have clicked on handleUpClick")
            setText(newText);
            
        props.showalert("Converted to lower case", "success")

    }
    const handlelclear= ()=>{
        //console.log("Upper case was clicked" + text)
        let newText ='';
        // setText("You have clicked on handleUpClick")
        setText(newText);
        props.showalert("Converted to clear", "success")

    }
    // for copy function
    const handlelcopy= ()=>{
       // console.log(" Copy the word")
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showalert("Converted to copy text", "success")

    }

    //for removing extra spaces
    const handlelExtraspace= ()=>{
        // console.log(" Copy the word")
         let newtext = text.split(/[ ]+/);
         setText(newtext.join(""))
         props.showalert("Converted to removing extra spaces", "success")
 
     }  

    const handleOnChange= (event)=>{
        console.log("On Change")
        setText(event.target.value)

    }
    //use hook in the state
    const [text, setText] = useState('');
    // text = "new text"; wrong way to change the state
    //setText("new text") //right way to change the state
    return (
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'b#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="mybox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="6"></textarea>
        </div>
     <button type="button" className="btn btn-primary mx-1" onClick={handleUpcase}>Convert into Uppercase</button>
     <button type="button" className="btn btn-primary mx-1" onClick={handlelocase}>Convert into Lowercase</button>
     <button type="button" className="btn btn-primary mx-1" onClick={handlelclear}>Clear Text</button>
     <button type="button" className="btn btn-primary mx-1" onClick={handlelcopy}>Copy Text</button>
     <button type="button" className="btn btn-primary mx-1" onClick={handlelExtraspace}>Remove extraspace</button>
         <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length} Minutes to read</p>
            <h2>Perview</h2>
            <p>{text.length>0?text:"Enter some thing in the above perview"}</p>
         </div> 
 </div>
 </>
  )
}
