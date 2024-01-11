import React from "react";
import "./App.css";

const SearchBox = (props) => {
  const { handleInput } = props;
  //const [searchParam, setSearchParam] = useState("");
  //const initialState = "";
  const handleChange = (event) => {
    const { value } = event.target;
    handleInput(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-style"
        onChange={handleChange}
        name="searchBox"
        placeholder="Start typing to browse"
      />
    </form>
  );
};

export default SearchBox;
