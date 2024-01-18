import React, { useEffect, useRef, useState } from "react";
import { SearchBox } from "./components/SearchBox";
import useGiphyApi from "./hooks/useGiphy";
import "./App.css";

function App() {
  const [searchParam, setSearchParam] = useState("");
  const limit = 20;
  const intersectionTarget = useRef(null);

  const { loading, error, data : apiData } = useGiphyApi(searchParam,limit);

  const handleInput = (itemName: string) => {
    setSearchParam(itemName);
  };

  return (
    <div className="container">
      <span className="title-container">Giphy Remake</span>
      <div className="search-container">
        <SearchBox handleInput={handleInput} />
      </div>
      <div className="gallery">
        {!loading &&
          searchParam &&
          apiData?.data?.map((item: any) => {
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
      <div ref={intersectionTarget}>hello</div>
      <>{loading && <div>Currently loading...</div>}</>
      <>{error && <div>{`There's an error ${error}`}</div>}</>
    </div>
  );
}

export default App;
