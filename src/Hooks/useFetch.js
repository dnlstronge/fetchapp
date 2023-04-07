
import { useState } from "react";

/* Custom fetch hook. 



*/

const useFetch = async (url) => {
  
  /* initial state */
  const [response, setResponse] = useState([{
    status: null,
    isLoading: false,
    error: { isError: false, msg: null },
    data: [],
}]);

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (res?.ok) {
      return setResponse([{
        status: res.status,
        isLoading: false,
        error: { isError: false, msg: null },
        data: data,
      }]);
    } else {
      return setResponse([{
        ...response,
        isLoading: false,
        status: res.status,
        error: {
          isError: true,
          msg: `Error: ${res.status}! Something went wrong`,
        },
      }]);
    }
  } catch (error) {
   return setResponse([{
      ...response,
      isLoading: false,
      status: error.status,
      error: {
        isError: true,
        msg: error.msg,
      },
    }]);
  }
};
export default useFetch;
