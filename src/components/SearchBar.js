import React from 'react';
import { useDispatch } from 'react-redux';
import { searchWidget } from '../redux/actions';
import '../css/SearchBar.scss'
const SearchBar = () => {
  const dispatch = useDispatch();

  const searchHandle = (e) => {
    dispatch(searchWidget(e.target.value));
  };

  return (

      <input type="text" className='input-searchbar' placeholder="Search here.."  onChange={searchHandle} />

  );
};

export default SearchBar;
