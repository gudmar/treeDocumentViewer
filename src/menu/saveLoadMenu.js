import React, { useState, useEffect } from 'react';

function SaveLoadMenu(props){

    const informParentIWantToHide = props.informParentIWantToHide;
    const shouldMenuBeHidden = props.shouldMenuBeHidden;
    const menuType = props.menuType;
    let actionButtonLabel = undefined;
    let menuTitle = undefined;
    function close(){  informParentIWantToHide();  }

    useEffect(()=>{
        console.log(menuType)
        if (props.menuType === 'save') {
            menuTitle = 'Save to storage';
            actionButtonLabel = 'Save';
        }
        if (props.menuType === 'save-file'){
            menuTitle = 'Save to a file'; 
            actionButtonLabel = 'Save'
        }
        if (props.menuType === 'load'){
            menuTitle = 'Load from the storage';
            actionButtonLabel = "Load"
        }
        if (props.menuType === 'load-file'){
            menuTitle = 'Load from a file';
            actionButtonLabel = 'Load'
        }
    },[props.menuType])

    return (
        <div className={`shutter center ${shouldMenuBeHidden?'hidden':''}`}>
            <div className="popup-window col col-12">
                <div className="titlebar row">
                    <div className = "window-title">{menuTitle}
                    </div>
                    <div className = "button button-red center" onClick = {close}>&times;</div>
                </div>
                <div className="window-files">
                </div>
                <div className = "row">
                    <div className = "text-field-menu"
                        contentEditable = {true}
                        suppressContentEditableWarning = {true}
                    ></div>
                </div>
                <div className = "row">
                    <div className="button button-big">{actionButtonLabel}</div>
                </div>
            </div>
        </div>
    )
}

export default SaveLoadMenu;