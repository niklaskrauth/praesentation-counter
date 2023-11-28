import {useEffect, createContext, useState} from "react";

const Numbercontext = createContext();

const NumberProvider = ({children}) => {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        setNumber(1);
    }, []);

    return (
        <Numbercontext.Provider value={{number, setNumber}}>
            {children}
        </Numbercontext.Provider>
    )

}

export {Numbercontext, NumberProvider};
