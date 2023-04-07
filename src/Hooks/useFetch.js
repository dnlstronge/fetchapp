import useErrorHandler from "./useErrorHandler"
import React, { useState } from "react"

/* Custom fetch hook. 

3 pieces of state - errors and data + loading
2 x objects error and data 1 boolean
why not have just one object? 

*/

const useFetch = async(url) => {
    const [isLoading, setIsLoading] = useState()
    const [data, setData] = useState()
    const [error, setError] = useState({
        isError: false,
        status: null,
        msg: null
    })
    try {
        const res = await fetch(url)
        const data = await res.json()
        if(res?.ok) {
            setError({isError: false})
            setData(data)
        } else {
            setError({isError: true, status: res.status, msg: `Error: ${res.status}! Something went wrong` })
            
        }
    } catch (error) {
        setError({isError: true, status: error.status, msg: error.message})
        
    }
}