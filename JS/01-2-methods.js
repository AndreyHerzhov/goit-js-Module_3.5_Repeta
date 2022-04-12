// const playlist = {
//     name: `Мой супер плейлист`,
//     ratting: 5,
//     tracks: [`Трек-1`,`Трек-2`,`Трек-3`],
//     trackCount: 3,
//     getName (a) {
//         console.log('This is a function', a) // метод обьекта. Под капотом функция. getName: function () {}
//     },
// };

// playlist.getName(5);



const playlist = {
    name: `Мой супер плейлист`,
    ratting: 5,
    tracks: [`Трек-1`,`Трек-2`,`Трек-3`],
    //trackCount: 3, // лишнее
    changeName(newName){
        console.log(`this inside changeName: `, this)
        this.name = newName;  // this - это ссылка на тот обьект, который вызвал метод (только внутри метода)
    },
    addTrack(track){
        this.tracks.push(track);
        //this.trackCount = this.tracks.length;
    },
    updateRating(newRating){
        this.ratting = newRating;
    },
    getTrackCount(){
        return this.tracks.length;
    }
};



playlist.changeName('Новое имя');

playlist.addTrack('Новый трек-1');
console.log(playlist.getTrackCount()) // 4

playlist.addTrack('Новый трек-2');
console.log(playlist.getTrackCount()) // 5

playlist.updateRating('10')

console.log(playlist)