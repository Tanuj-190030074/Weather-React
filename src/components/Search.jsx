import React, { useState } from 'react';
import styled from 'styled-components';

function Search({ setSearchResults }) {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchResults(search);
    setSearch('');
  };

  console.log(search);
  return (
    <div style={StyledSearch}>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          style={inputstyle}
          placeholder='Search your location and click enter'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

const StyledSearch={
  marginBottom:"30px",
  }
const inputstyle={
  width:"80%",
  height: "45px",
  borderRadius: "10px",
  paddingLeft: "20px"
  }
export default Search;
