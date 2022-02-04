import logo from './logo.svg';
import getData from './Data/testDocument';
import SearchBox from './searchBox/searchBox';
import Document from './document/document';
import React, { useState } from 'react';

import './App.css';

function App() {
  let content = getData();
  const [filter, setFilter] = useState('');
  const initialFilter = filter;
  function searchHandler(filterText){
    // console.log(e.target.innerText)
    setFilter(filterText)
  }
  function searchBoxActiveHandler(isActive){
    if (isActive) console.log('Search box activated');
    if (!isActive) console.log('Search box disactivated');
  }
  return (
    <div className="container">
      <SearchBox 
        searchBoxActiveHandler={searchBoxActiveHandler.bind(this)}
        searchHandler={searchHandler.bind(this)}
        initialValue = {initialFilter}
      >
      </SearchBox>
      <Document 
        title={content.title} 
        content={content.content} 
        description={content.description}
        isHidden = {false}
        filter = {filter}
        childContainFilterHandler = {()=>{}}
      >
      </Document>
    </div>
  );
}
export default App;