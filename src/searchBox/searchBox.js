import React, { useState } from 'react';




  function SearchBox(props){
    const searchHandler = props.searchHandler;
    const [currentValue, setCurrentValue] = useState(props.initialValue)
    const searchBoxActiveHandler = props.searchBoxActiveHandler;
    const informAppComponent = props.appNavigationHandler;
    function activateSearchBox(){searchBoxActiveHandler(true);}
    function disactivateSearchBox(){searchBoxActiveHandler(false);}
    function searchChanged(e){
        let data = e.target.data;
        setCurrentValue(data);
        searchHandler(e.target.innerText);
    }
    function save(){informAppComponent('save')}
    return (
        <div className="search-box">
            <div className="symbol center">&#x1F50D;</div>
            <div contentEditable className="text-field" 
                onInput={searchChanged}
                onFocus = {activateSearchBox}
                onBlur = {disactivateSearchBox}
                suppressContentEditableWarning={true}
                // innerText = {currentValue}
            >
            </div>
            <div className="button" onClick={save}>&#x1f4be;</div>
        </div>
    )
  }

export default SearchBox;
