import useErrorHandler from "./useErrorHandler"
import React, { useState } from "react"

/* Custom fetch hook. 

2 pieces of state - errors and data
2 x objects error and data

*/

const useFetch = async(url) => {
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
            setData(data)
        } else {
            setError({isError: true, status: res.status, msg: `Error: ${res.status}! Something went wrong` })
            
        }
    } catch (error) {
        setError({isError: true, status: error.status, msg: error.message})
        
    }
}