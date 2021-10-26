function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const names = ['shahed', 'rahat', 'rafi', 'mahmud', 'hazratullah', 'jidan'];
const myBigBuddy = megaFriend(names);
console.log(myBigBuddy);

if(names.indexOf('jidan') != -1){
    // console.log('jidan exits');
}

if(names.includes('mahmud') == true){
    console.log('mahmud exits');
}

// concat
const first = [3, 2, 4, 4];
const second = [3, 12, 7];
const combined = first.concat(second);
console.log(combined);