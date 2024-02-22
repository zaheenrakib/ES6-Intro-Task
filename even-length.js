const friendsName = ['Bulbul' , 'Ahsan','Arif','Saiful','Masud','Hasibur','Shimul','Rhaman'];
const ChekeNameLength = friendsName => {
    const storeEvenName = [];
    for(const fName of friendsName){
        const dif = fName.length;
        if(dif %2 == 0){
            storeEvenName.push(fName);
            // console.log(fName);
        }       
    }
    return storeEvenName;
}

const getName = ChekeNameLength(friendsName);
console.log(getName);