import {useContext, useState} from "react";
import {Numbercontext} from "./NumberProvider";

const Dec = () => {

    const {number, setNumber} = useContext(Numbercontext);

    function handleClick() {
       setNumber(number - 1);
    }

    return (
      <div>
        <button onClick={handleClick}>-</button>
      </div>
    );

}

export default Dec;