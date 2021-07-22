const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    albumname:{
        type: String
    },
    artist:{
        type:String
    },
    cover:{
        type: String
    },
    musics:{
        type: [String]
    }
});

module.exports = mongoose.model('album', albumSchema)