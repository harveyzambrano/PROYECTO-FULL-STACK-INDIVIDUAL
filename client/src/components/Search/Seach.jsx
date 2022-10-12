import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { byName } from "../../actions/index";
import "./Search.css"

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(byName(name));
    document.getElementById("search").value = "";
  };

  return (
    <>
      <div>
        <input className="search-input"
          id="search"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
        />
      <button className="button_seach" type="submit" onClick={(e) => handleSubmit(e)}> Search </button>


      </div>
      
    </>
  );
};

export default SearchBar;