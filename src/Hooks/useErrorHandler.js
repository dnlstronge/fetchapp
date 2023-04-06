import React from "react";

const useErrorHandler = (response, setError) => {

         return setError({
                            isError: true, 
                            status: response.status, 
                            msg:  `Error: ${response.status} something went wrong`})
    
}

export default useErrorHandler;