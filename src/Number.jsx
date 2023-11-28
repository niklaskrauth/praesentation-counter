import {useContext, useEffect, useState} from "react";
import {Numbercontext} from "./NumberProvider";


const Number = () => {

   const {number, setNumber} = useContext(Numbercontext);

    useEffect(() => {
        setNumber(1)
    }, []);

    return (
        <div>
            <h1>{number}</h1>
        </div>
    )

}

export default Number;