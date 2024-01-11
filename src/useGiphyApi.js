import { useState, useEffect, useCallback, useRef } from "react";

const useGiphyApi = (myUrl, delay) => {
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState([]);
  let timer = useRef();
  let count = useRef(0);

  const fetchData = useCallback(async () => {
    try {
      isLoading(true);
      setError(null);
      count.current += 1;
      console.log(count.current);
      const response = await fetch(myUrl);
      const data = await response.json();
      setApiData(data);
      isLoading(false);
    } catch (err) {
      isLoading(false);
      setError(err);
      setApiData(null);
    }
  }, [myUrl]);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => fetchData(myUrl), delay);
  }, [myUrl, fetchData, timer, delay]);

  return { loading, error, apiData };
};

export default useGiphyApi;
