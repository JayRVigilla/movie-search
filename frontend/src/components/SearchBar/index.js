import { useState } from 'react';
import './SearchBar.css';

/**
 *
 * @param {data} param0 Object
 *
 * SearchBar component
 *
 */

function SearchBar({ handleSubmit }) {
  const INITIAL_STATE = {q:''}
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  return (
    <form action="submit" onSubmit={handleSubmit} onChange={handleChange}>
      <input for="q" type="text" placeholder="Search by Title" />
      <button>Search</button>
</form>
  );
}

export default SearchBar;
