import React from 'react'
import '../searchbox/search-box.style.css'

export const SearchBox = ({placeholder, handleOnChange}) => 
    <input  className='search' type='search' placeholder={ placeholder } onChange={handleOnChange} />