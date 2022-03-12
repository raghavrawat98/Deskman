import { React, useState } from "react";

const CmdTextBox = () => {
    const [cmdText, setcmdText] = useState('');
    const numT = cmdText.length;

    console.log(numT);
    const createCMDLabel = () => {

        console.log(cmdText);

        var strt = cmdText + "";

        return strt;
    }
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Input CMD"
                onChange={e => setcmdText(e.target.value)} //Holding thr input Value and its characteristics
                //<p> for printing Value inside textbox
            />

            <p>Hi Hello</p>
            <p>{createCMDLabel()}</p> 
        </div>
    );

}
export default CmdTextBox;