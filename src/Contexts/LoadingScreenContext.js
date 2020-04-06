import React, { createContext, useState } from 'react';

export const LoadingScreenContext = createContext();


const LoadingScreenContextProvider = (props) => {
    const [LoadingprogressValue, setLoadingProgressValue] = useState(0);
    const [Loadingcounter, setLoadingcounter] = useState(5);


    return (

        <LoadingScreenContext.Provider value={[LoadingprogressValue, setLoadingProgressValue, Loadingcounter, setLoadingcounter]}>
            {props.children}
        </LoadingScreenContext.Provider>
    )
}

export default LoadingScreenContextProvider