let count = 1;
function createUserProfile(baseInfo, preferences, contacts) {
    let newObj = Object.assign({id: count}, baseInfo, preferences, contacts);
    count++;
    return newObj

}