import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {
  const [searchTerms, setSearchTerms] = useState('');

  const onChangeSearch = (event) => {
    setSearchTerms(event.currentTarget.value);
    props.refreshFunction(event.currentTarget.value);
  };

  const searchStyle = {
    borderRadius: '20px',
    padding: '10px',
    width: '300px',
  };

  return (
    <div style={searchStyle}>
      <Search
        className="Search"
        value={searchTerms}
        onChange={onChangeSearch}
        placeholder="Search By Typing..."
        style={{ color: 'white' }}
      />
    </div>
  );
}

export default SearchFeature;
