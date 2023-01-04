function main ([arg1, arg2, arg3], arg) { 
    let myPushItem = [arg1, arg2, arg3];
    myPushItem.push(arg);
    return myPushItem; 
};

module.exports = main;