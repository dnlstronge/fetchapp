
import { useState, useEffect } from "react";

/* Custom fetch hook. 



*/

const useFetch = (url) => {
  
  /* initial state */
  const [data, setData] = useState(null) 

  useEffect(() => {
    const res = async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }
    res()
  }, [url])
  
}
export default useFetch;
