import { useState, useEffect } from "react";

/* Custom fetch hook. 

config: 

two params: url (selfexplanatory) + valid (boolean) - if true will execute fetch


returns: 

      { loading: boolean,
          error: boolean,
          data: []
      }


*/

const useFetch = (url, valid) => {
  const [data, setData] = useState({
    loading: false,
    error: false,
    data: [],
  });

  useEffect(() => {
    setData({ loading: true, error: null, data: [] });
    /* prevent fetch is url is not valid */
    if (valid) {
      try {
        fetch(url).then((res) => {
          if (res.ok === true) {
            res.json().then((data) => {
              setData({ loading: false, error: false, data: data.message });
            });
            /* catch error outside of api scope */
          } else {
            setData({ loading: false, error: true, data: [] });
          }
        });

        /*catch error inside of api scope */
      } catch (error) {
        setData({ loading: false, error: true, data: [] });
      }
    } else {
      setData({
        loading: false,
        error: true,
        data: "An invalid paramenter has been detected",
      });
    }
  }, [url, valid]);

  return [data];
};

export default useFetch;
