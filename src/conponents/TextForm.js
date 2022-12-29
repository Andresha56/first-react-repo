import "./TextForm.css"
import React, { useState } from 'react';


function TextForm() {
    const handelSubmit = ()=>{ 
        let newText=Text.toUpperCase();
        setText(newText)
       
    }

    const handelChange = (event)=>{
       
       setText(event.target.value)
    
    }


   
    let [Text, setText] = useState("");
    return (
        <div className="textareaCon">
            <div className="mb-3 col-6 m-auto">
                <textarea className="form-control" onChange={handelChange} rows="3" value={Text} placeholder="Enter your Text here"></textarea>
            </div>
            <div className="btn-con">
            <input className="btn btn-success" type="button" value="UpperCase"  onClick={handelSubmit}/>
            </div>
    <h1>Characters={Text.length}</h1>
    <h1>word={Text.split(" ").length-1  }</h1>
    
   
    </div>


    )
}

export default TextForm