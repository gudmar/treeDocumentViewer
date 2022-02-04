import React, { useState, useEffect ,useRef } from 'react';
import { clone } from '@babel/types';
import {getArrayOfNTrueValuesFactory, cloneArray} from '../reusableCode/arrays'
import  uuidProvider  from '../reusableCode/uuidProvider'

function Document(props){
    const [title, setTitle] = useState(props.title);
    const [isHidden, setIsHidden] = useState(props.isHidden);
    const [isNone, setIsNone] = useState(false)
    const [content, setContent] = useState(props.content || []);
    const [description, setDescription] = useState(props.description);
    const [allChildrenHidden, setAllChildrenHidden] = useState(false);
    const titleBox = useRef();
    const descriptionBox = useRef();
    const parentFilterInformer = props.childContainFilterHandler;
    const childrenContainFilterArr = isContent() ? getArrayOfNTrueValuesFactory(true)(content.length) : undefined;
    const filter = props.filter;
    const informParentAboutOwnContentChangeHandler = props.infromParentAboutContentChange
    const removeMe = props.removeMe
    const uuidProv = new uuidProvider();

    console.log(typeof informParentAboutOwnContentChangeHandler)

    let childContentArr = isContent() ? getArrayOfNTrueValuesFactory({})(content.length) : undefined;
    
    function checkIfChildContainsFilter(){
        if (childrenContainFilterArr === undefined) return false;
        return childrenContainFilterArr.some((item)=>{return item === true})
    }
    function titleChange() {
        // setTitle(titleBox.current.innerHTML);
        handleOwnContentUpdate();
    }
    function descriptionChange(e){
        console.log(descriptionBox.current.innerHTML)
        // setDescription(descriptionBox.current.innerHTML);
        handleOwnContentUpdate();
        
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

    function handleOwnContentUpdate(){
        let obj = {
            title: titleBox.current.innerHTML,
            description: descriptionBox.current.innerHTML,
            content: cloneArray(content)
        }
        console.log(obj) 
        setDescription(obj.description);
        setTitle(obj.title);
        setContent(obj.content);
        console.log(content)
        informParentAboutOwnContentChangeHandler(obj);
    }

    function handleChildContentUpdateFactory(index){
        
        return (newDocumentContent)=>{
            // let contentClone = cloneArray(content);
            let contentClone = JSON.parse(JSON.stringify(content))
            contentClone[index] = newDocumentContent;
            setContent(contentClone);
            console.log(contentClone)
            console.log(content)
            setTimeout(()=>{console.log(content)}, 100)
            console.log(contentClone === content)
        }
    }

    function checkIfChildContainsFilterFactory(index){
        return (isFilteredValue)=>{
            childrenContainFilterArr[index] = isFilteredValue;
        }
    }

    let userDisactivated = props.isHidden;
    let filterDisactivated = false;

    function addDocument(){
        
        let arrClone = cloneArray(content);
        // let arrClone = JSON.parse(JSON.stringify(content))
        arrClone.push({title:'', description:'',content:[]})
        setContent(arrClone)
        informParentAboutOwnContentChangeHandler({
            title:title, description:description, content:arrClone
        });
    };
    function removeChildFactory(index){
        return ()=>{
            let arrClone = cloneArray(content);
            arrClone.splice(index, 1);
            setContent(arrClone);    
        }
    };
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
                    // key={item.title + item.description} 
                    key = {uuidProv.getNextUuid()}
                    title={item.title} 
                    description={item.description} 
                    content={item.content}
                    filter = {filter}
                    childContainFilterHandler = {checkIfChildContainsFilterFactory(index)}
                    infromParentAboutContentChange = {handleChildContentUpdateFactory(index)}
                    removeMe = {removeChildFactory(index)}
                    >
                </Document>
            })
        )
    }


    // childContainFilterHandler = {checkIfChildContainsFilterFactory(index)}



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
                <div className="center button button-green" onClick={removeMe}>-</div>
                <div className="center button button-green" onClick={showDocument}>
                    &#x1F441;<span className={`strike-through ${isHidden?'hidden':''}`}>/</span>
                </div>
            </div>
            <div className="col col-doc">
                <div className="title" 
                    ref={titleBox} 
                    onBlur={titleChange} 
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                > 
                    {title} 
                </div>
                <div>{props.filter}</div>
                <div className={`description ${isHidden?'hidden':''}`} 
                    dangerouslySetInnerHTML = {getDescription()}
                    ref = {descriptionBox}
                    onBlur={descriptionChange}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                >
                </div>
                <div className={`document-container ${allChildrenHidden ? 'hidden' : ''}`}>
                    {getDocuments()}
                    
                </div>
            </div>

        </div>
    )
}

export default Document;