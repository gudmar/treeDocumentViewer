import logo from './logo.svg';
import getData from './Data/testDocument';
import SearchBox from './searchBox/searchBox';
import Document from './document/document';
import React, { useState } from 'react';
import {getArrayOfNTrueValuesFactory, cloneArray} from './reusableCode/arrays'

import './App.css';

function App() {
  
  const [filter, setFilter] = useState('');
  const [content, setContent] = useState(getData());
  const initialFilter = filter;
  function searchHandler(filterText){
    // console.log(e.target.innerText)
    setFilter(filterText)
  }
  function searchBoxActiveHandler(isActive){
    if (isActive) console.log('Search box activated');
    if (!isActive) console.log('Search box disactivated');
  }
  function navigationHandler(command){
    if (command === 'save') {console.log(content)}
  }
  return (
    <div className="container">
      <SearchBox 
        searchBoxActiveHandler={searchBoxActiveHandler.bind(this)}
        searchHandler={searchHandler.bind(this)}
        initialValue = {initialFilter}
        appNavigationHandler = {navigationHandler}
      >
      </SearchBox>
      <Document 
        title={content.title} 
        content={content.content} 
        description={content.description}
        isHidden = {false}
        filter = {filter}
        childContainFilterHandler = {()=>{}}
        infromParentAboutContentChange = {(newContent)=>{ console.log(newContent); setContent(newContent)}}
      >
      </Document>
    </div>
  );
}
export default App;