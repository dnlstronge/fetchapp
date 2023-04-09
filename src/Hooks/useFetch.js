import { useState, useEffect } from "react";

/* Custom fetch hook. 



*/

const useFetch = (url) => {
  const [data, setData] = useState({
    loading: false,
    error: false,
    data: [],
  });

  useEffect(() => {
    setData({ loading: true, error: null, data: [] });

    try {
      
      fetch(url)
      .then((res) => {
        if(res.ok === true) {
          res.json().then((data) => {
            setData(data)
          })
        /* catch error outside of api scope */
        } else {
          setData({loading: false, error: true, data: []})
        }
        
      })
    
      /*catch error inside of api scope */
        
    } catch (error) {
      setData({ loading: false, error: true, data: [] });
    }
  }, [url]);
  return [data]
};

export default useFetch;
