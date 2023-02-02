import React, { useState } from "react";

export default function SearchBar(props) {
  return (
    <form className="form-inline">
      <div className="input-group">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => props.onChange(event.target.value)}
        />
      </div>
    </form>
  );
}
