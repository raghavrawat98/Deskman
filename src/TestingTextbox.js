import {React, useState } from "react";

const TestingTextbox = () => {
    const [testText,setTestText]=useState('');
    const numT = testText.length;
    // const a="bcbbcb";
    // console.log(a.length);
    //console.log(testText);
    console.log(numT);
    const createPassLabel=()=>{
        console.log("___________________start");
        console.log(testText);

        var strt = testText+"";

        if(testText.length==0){
            return strt;
        }
        if(testText.length>5){
            return strt;
        }

        return strt;
        // console.log(numT);
        // console.log(testText);
        // console.log("___________________enddd");
        // return testText.target.value;
    }    
    return (
    <div className="form-group">
    <input 
    type="text" 
    className="form-control" 
    placeholder="Password"
    onChange={e=>setTestText(e.target.value)}
    />    
    
    <p>Hi Hello</p>
    <p>{createPassLabel()}</p>
    </div>
    );

}
export default TestingTextbox;