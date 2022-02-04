import React, { useState } from 'react';

  function SearchBox(props){
    const searchHandler = props.searchHandler;
    const [currentValue, setCurrentValue] = useState(props.initialValue)
    const searchBoxActiveHandler = props.searchBoxActiveHandler;
    function activateSearchBox(){searchBoxActiveHandler(true);}
    function disactivateSearchBox(){searchBoxActiveHandler(false);}
    function searchChanged(e){
        let data = e.target.data;
        setCurrentValue(data);
        searchHandler(e.target.innerText);
    }
    return (
        <div className="search-box">
            <div className="symbol center">&#x1F50D;</div>
            <div contentEditable className="text-field" 
                onInput={searchChanged}
                onFocus = {activateSearchBox}
                onBlur = {disactivateSearchBox}
            >{currentValue}
            </div>
        </div>
    )
  }

export default SearchBox;
