function getArrayOfNTrueValuesFactory(defaultValue){
    return function(n){
        let output = [];
        for (let i = 0; i < n; i++){
            output.push(true)
        }
        return output;    
    }
}
function cloneArray(arr){
    return arr.map((item)=>{return item})
}

export {getArrayOfNTrueValuesFactory, cloneArray}