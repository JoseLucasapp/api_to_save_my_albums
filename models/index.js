const albumSchema = require('../database/schemas/index');
const re = /^\s+|\s+$/gm;

const addAlbum = async(data)=>{
    const musics = (data.musics).split(',');
    for(m in musics){
        musics[m] = musics[m].replace(re, '').toLowerCase();
    }

    await new albumSchema({
        albumname: data.albumname,
        artist: data.artist,
        cover: data.cover,
        musics: musics
    }).save()

    return 'Created';
}

const getAll = async()=>{
    return await albumSchema.find({});
}

module.exports = {addAlbum, getAll};