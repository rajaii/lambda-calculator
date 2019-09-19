import React, { useState } from "react";
import { operators as o } from '../../../data.js';
import OperatorButton from "./OperatorButton.js";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
const [operators, setOperators] = useState(o);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operators.map((o, i) => {
         return <OperatorButton operator={o} key={i} />
         
       })}
    </div>
  );
};
 export default Operators;