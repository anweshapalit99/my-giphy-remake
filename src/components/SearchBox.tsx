import React, { useEffect } from "react";
import { useState } from "react";
import "./../App.css";

const SearchBox = (props: any) => {
  const { handleInput } = props;
  const initalVal: string = "";
  const [val, setVal] = useState(initalVal);

  const handleChange = (event: any) => {
    setVal(event.target.value);
    handleInput(event.target.value);
  };

  const handleClose = (event: any) => {
    setVal(initalVal);
  };

  return (
    <>
      <input
        className="input-style"
        onChange={handleChange}
        name="searchBox"
        value={val}
        placeholder="Start typing to browse"
      />
      {val && (
        <button className="button-style" onClick={handleClose}>
          X
        </button>
      )}
    </>
  );
};

export { SearchBox };
