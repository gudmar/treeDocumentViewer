import React, { useState, useEffect ,useRef } from 'react';

function getArrayOfNTrueValues(n){
    let output = [];
    for (let i = 0; i < n; i++){
        output.push(true)
    }
    return output;
}

function Document(props){
    const [title, setTitle] = useState(props.title);
    const [isHidden, setIsHidden] = useState(props.isHidden);
    const [isNone, setIsNone] = useState(false)
    const [content, setContent] = useState(props.content);
    const [description, setDescription] = useState(props.description);
    const [allChildrenHidden, setAllChildrenHidden] = useState(false);
    const titleBox = useRef();
    const contentBox = useRef();
    const parentFilterInformer = props.childContainFilterHandler;
    const childrenContainFilterArr = isContent() ? getArrayOfNTrueValues(content.length) : undefined;
    const filter = props.filter;
    
    // let doChildrenIncludeFilter = false;
    function checkIfChildContainsFilter(){
        if (childrenContainFilterArr === undefined) return false;
        return childrenContainFilterArr.some((item)=>{return item === true})
    }
    useEffect(()=>{
        let iContainFilter = doesContainValue(props.filter)
        let doesChildContainFilter = checkIfChildContainsFilter();
        parentFilterInformer(iContainFilter || doesChildContainFilter);
        if (doesChildContainFilter || iContainFilter){
            setIsHidden(false)
            setIsNone(false)
        } else {
            setIsHidden(true)
            setIsNone(true)
        }
    }, [props.filter])

    function checkIfChildContainsFilterFactory(index){
        return (isFilteredValue)=>{
            childrenContainFilterArr[index] = isFilteredValue;
        }
    }

    let userDisactivated = props.isHidden;
    let filterDisactivated = false;

    function addDocument(){};
    function removeDocument(){};
    function showDocument(){
        setIsHidden(!isHidden)
        setAllChildrenHidden(!allChildrenHidden)
    };

    function isContent(){
        if (content === undefined) return false;
        if (content === null) return false;
        if (Array.isArray(content) && content.length === 0)  return false;
        return true;
    }
    function getDocuments(){
        if (!isContent()) return <></>
        return (
            content.map((item, index)=>{
                return <Document 
                    key={item.title + item.description} 
                    title={item.title} 
                    description={item.description} 
                    content={item.content}
                    filter = {filter}
                    childContainFilterHandler = {checkIfChildContainsFilterFactory(index)}
                    >
                </Document>
            })
        )
    }
    function doesContainValue(filter){
        let toSearchIn = (description + ' ' + title).toLocaleLowerCase().trim();
        return toSearchIn.includes(filter.toLocaleLowerCase().trim());
    }

    function doChildrenInclude(){

    }

    function getDescription(){return {__html: description}; }

    return (
        <div className={`document border ${isHidden?'hidden-document':''} ${isNone?'none-document':''}`}>
            <div className = "col col-menu">
                <div className="center button button-green" onClick={addDocument}>+</div>
                <div className="center button button-green" onClick={removeDocument}>-</div>
                <div className="center button button-green" onClick={showDocument}>
                    &#x1F441;<span className={`strike-through ${isHidden?'hidden':''}`}>/</span>
                </div>
            </div>
            <div className="col col-doc">
                <div className="title" ref={titleBox} >{title}</div>
                <div>{props.filter}</div>
                <div className={`description ${isHidden?'hidden':''}`} dangerouslySetInnerHTML = {getDescription()}></div>
                <div className={`document-container ${allChildrenHidden ? 'hidden' : ''}`}>
                    {getDocuments()}
                    
                </div>
            </div>

        </div>
    )
}

export default Document;