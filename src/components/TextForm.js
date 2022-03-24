import React,{useState} from 'react'


export default function TextForm(props) {

    const HandleUpClick =()=>{
        //console.log("upperCase was clicked")
        let newText= text.toUpperCase();
        setText(newText)
    }
    const HandleLowClick =()=>{
        //console.log("lowerCase was clicked")
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleOnChange =(event)=>{
        //console.log("onChange")
        setText(event.target.value)
    }

    const [text, setText] = useState("enter your text here");
    //react Hooks, let you use state and other React features without writing a class.
    //here,useState is one of the hooks we r using in react .

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
                <button className="btn btn-primary" onClick={HandleUpClick} >Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={HandleLowClick} >Convert to lowercase</button>
        </div>
        <div className="container">
            <h3 className="my-2">Your text summary</h3>
            <p>{text.split(" ").length} words, {text.length} characters, {text.split(".").length} sentences</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h3 className="my-2">Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
//we r able to put/type/write some content inside our textarea with help of "onChange"event.
