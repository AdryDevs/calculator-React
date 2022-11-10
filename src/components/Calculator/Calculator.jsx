import { useState } from "react";
import calculate from "../../logic/calculator";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import DisplayController from "../DisplayController/DisplayController";

const Calculator = () => {
    const [state, setState] = useState({
        total: null,
        next: null,
        operation: null,
    });
 

    const actionHandler = (action) => {
        //function to calculate the result
        const result = calculate(state, action);
        setState(result);
        };
 
    // const [total, setTotal] = useState(null);
    // const [next, setNext] = useState(null);
    // const [operation, setOperation] = useState(null);

    return (<div>
        <DisplayController content={state.next} ></DisplayController>
        <ButtonPanel name="num" buttons={[1,2,3,4,5,6,7,8,9,0]} numbers action={actionHandler}></ButtonPanel>
        <ButtonPanel name="ops" buttons={['+','-','/','*','=']} operations action={actionHandler}></ButtonPanel>
        <ButtonPanel name="spc" buttons={['C','AC']} specials action={actionHandler}></ButtonPanel>
    </div> )
} 


export default Calculator;