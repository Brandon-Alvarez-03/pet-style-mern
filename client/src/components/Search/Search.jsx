import React from 'react'
import Css from "./search.css"

const Search = ({ query, setQuery }) => {

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search