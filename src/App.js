import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import useGiphyApi from "./useGiphyApi";
import "./App.css";

function App() {
  const [searchParam, setSearchParam] = useState("");
  let [limit, setLimit] = useState(10);
  const [delay] = useState(500);
  const [scrollTop, setScrollTop] = useState(0);

  const handleInput = (itemName) => {
    setSearchParam(itemName);
  };

  const handleScroll = () => {
    console.log("Testing");
    setLimit((limit += 1));
  };

  function throttle(callback, limit) {
    console.log("In throttle");
    let wait = false;
    return function () {
      if (!wait) {
        callback();
        wait = true;
        setTimeout(function () {
          wait = false;
        }, limit);
      }
    };
  }

  /*  useEffect(() => {
    setScrollTop(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 500));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop, handleScroll]); */

  window.addEventListener("scroll", throttle(handleScroll, 500));

  const { loading, error, apiData } = useGiphyApi(
    `https://api.giphy.com/v1/gifs/search?api_key=5IWS2gntsE0fxIFwK6Z7QGUARGCqfb8Q&limit=${limit}&q=${searchParam}`,
    delay
  );

  return (
    <div className="container">
      <span className="title-container">Hello Giphy</span>
      <div className="search-container">
        <SearchBox handleInput={handleInput} />
      </div>
      <div className="gallery">
        {!loading &&
          apiData.data &&
          apiData.data.map((item) => {
            return (
              <div className="image" key={item.id}>
                <img
                  loading="lazy"
                  alt={item.title}
                  src={item.images.fixed_height.url}
                />
              </div>
            );
          })}
      </div>
      <>{loading && <div>Currently loading...</div>}</>
      <>{error && <div>{`There's an error ${error}`}</div>}</>
    </div>
  );
}

export default App;
