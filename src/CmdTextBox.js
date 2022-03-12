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
    //component to check braces and return true
    const checkBraces = () => {
        console.log("---------------started check-----------------")
        var stack = [];
        let balanced = true;
        for (let i = 0; i < cmdText.length; i++) {
            let x = cmdText[i];
            console.log(cmdText[i]);


            if (x === '(' || x === '[' || x === '{') {

                // Push the element in the stack
                stack.push(x);
                continue;
            }

            // If current character is not opening
            // bracket, then it must be closing.
            // So stack cannot be empty at this point.
            if (stack.length === 0) {
                //return false;
                balanced = false;
            }
            let check;
            switch (x) {
                case ')':
                    check = stack.pop();
                    if (check === '{' || check === '[') {
                        //return false;
                        balanced = false;
                        break;
                    }

                case '}':
                    check = stack.pop();
                    if (check === '(' || check === '[') {
                        // return false;
                        balanced = false;
                        break;
                    }
                case ']':
                    check = stack.pop();
                    if (check === '(' || check === '{') {
                        //return false;
                        balanced = false;
                        break;
                    }
            }
        }

        // Check Empty Stack
        // return (stack.length == 0);
        if (balanced) {
            console.log("balanced");
            return "Balanced";
        }
        console.log("Unbalanced");
        return "Unbalanced";
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
            <p>{checkBraces()}</p>
        </div>
    );

}
export default CmdTextBox;