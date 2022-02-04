
function uuidProvider(){
    if (uuidProvider.instance === undefined) {
        uuidProvider.instance = this;
        uuidProvider.lastId = 0;
    } else {
        return this.instance;
    }
}
uuidProvider.prototype.getNextUuid = function(){
    uuidProvider.lastId += 1;
    
    return uuidProvider.lastId;
}

export default uuidProvider;