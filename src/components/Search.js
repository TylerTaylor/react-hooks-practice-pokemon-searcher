import React from "react";

function Search({ searchTerm, onChangeSearch }) {

  // set up a function to handle the change in our input
  // this will pass the data back up to the parent component which sets the state
  function handleChange(event) {
    onChangeSearch(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;