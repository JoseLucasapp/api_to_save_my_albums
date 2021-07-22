const {addAlbum, getAll} = require('../models/index');

module.exports.addAlbum = async (req, res)=>{
    try{
        const album = await addAlbum(req.body);
        res.status(200).json({msg: album});
    }catch(err){
        res.status(500).json({error: err});
    }
}

module.exports.getAll = async(req, res)=>{
    try{
        const album = await getAll();
        res.status(200).json({data: album});
    }catch(err){
        res.status(500).json({error: err});
    }
}