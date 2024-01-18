import { useEffect, useState } from "react";
import instanceAppService from "../service/app.service";

const useGiphy = (search: string, limit: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>();
  const url = `https://api.giphy.com/v1/gifs/search?api_key=5IWS2gntsE0fxIFwK6Z7QGUARGCqfb8Q&limit=${limit}&q=${search}`;

  useEffect(() => {
    if (!!search.length) {
      setLoading(true);
      try {
        instanceAppService.fetchGiphy(url).then((data_from_api) => {
          setData(data_from_api);
          setError(null);
          setLoading(false);
        });
      } catch (e: any) {
        setLoading(false);
        setError(e);
        setData(null);
      }
    }
  }, [search, url]);

  return { loading, error, data };
};

export default useGiphy;
