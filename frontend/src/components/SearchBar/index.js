// import { useState } from 'react';
import './SearchBar.css';

/**
 *
 * @param {data} param0 Object
 *
 * SearchBar component
 *
 */

function SearchBar({ handleSubmit, handleChange }) {

  return (
    <form action="submit" onSubmit={handleSubmit} onChange={handleChange}>
      <input name="q" type="text" placeholder="Search by Title" />
      <button>Search</button>
</form>
  );
}

export default SearchBar;
