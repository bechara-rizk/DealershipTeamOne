import React, { useState } from 'react';

function SearchFeature({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.currentTarget.value);
    onSearch(event.currentTarget.value);
  };

  return (
    <div className='searchbrstyle'>
      <input 
       className='searchbrstyle'
        value={searchValue}
        onChange={handleChange}
        placeholder="Search by make or model"
      />
    </div>
  );
}

export default SearchFeature;
