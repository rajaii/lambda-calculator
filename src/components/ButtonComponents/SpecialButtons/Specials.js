import React, { useState } from "react";

import SpecialButton from './SpecialButton.js';
import { specials as s } from '../../../data.js';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specials, setSpecials] = useState(s);
  return (
    <div>
      {specials.map(s => {
        return <SpecialButton specials={s} />
      })
       }
    </div>
  );
};

export default Specials;
