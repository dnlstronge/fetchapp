import { useState, useEffect } from "react";

/* Custom fetch hook. 



*/

const useFetch = (url) => {
  const [data, setData] = useState({
    loading: false,
    Error: null,
    data: [],
  });

  useEffect(() => {
    setData({ loading: true, error: null, data: [] });
    try {
      let response = null;
      fetch(url)
        .then((res) => {
          if (res?.ok) {
            res.json();
          } else {
            setData({
              loading: false,
              error: true,
              data: [],
            });
          }
        })
        .then((data) =>
          setData({ loading: false, error: null, data: data.message })
        );
    } catch (error) {
      setData({ loading: false, error: true, data: [] });
    }
  }, [url]);

  return [data];
};

export default useFetch;
