// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},
// ];

// console.table(friends);

// for (const friend of friends){
//     console.log(friend);
// }

//     friend.newprop = 555; // newprop - это новое свойство
// };

// console.table(friends);





/*
 * Ищем друга по имени
*/

// const findFriendByName = function(allFriends, name){
//     for (const friend of allFriends){
//         // console.log(friend.name)

//         if (friend.name === name){
//             return 'НАШЛИ!!!'
//         }
//     }
//     return 'НЕ НАШЛИ!!!'
     
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


/*
 * Получаем имена всех друзей 
*/


// const getAllNames = function (allFriends){
//     let friendsName = [];
//     for (const friend of allFriends){
//         friendsName.push(friend.name);
       
//     }
//    return friendsName;
// }

// console.log(getAllNames(friends))



/*
 * Получаем имена всех друзей которые онлайн
*/

// const getOnlineFriends = function (allFriends){
//     const onlineFriends = [];
//     for (const friend of allFriends){
//         console.log(friend.online)
//         if(friend.online){
//             onlineFriends.push(friend)
//         }
//     }
//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends))


/*
 * Получаем имена всех друзей которые офлайн
*/

// const getOfflineFriends = function(allFriends){
//     const oflineFriend = [];

//     for (const friend of allFriends){
//         if(!friend.online)
//         oflineFriend.push(friend)
        
//     }
//     return oflineFriend;
// }


// console.log(getOfflineFriends(friends))



/*
 * Ищем друзей по статусу
*/


// const getFriendsByOnlineStatus = function (allFriends){
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends){
//         if(friend.online){
//             friendsByStatus.online.push(friend.name)
//         } 
//             friendsByStatus.offline.push(friend.name)
        
        
//     }
//     return friendsByStatus;
// }

// console.log(getFriendsByOnlineStatus(friends))
 


// const x = {
//     a: 5,
//     b: 2,
//     c: 60,
//     d: 22,
//     e: 90,
// }

// const keys = Object.keys(x);

// const keys = Object.keys(x);

