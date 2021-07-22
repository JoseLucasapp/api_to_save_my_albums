const controller = require('../controllers/index');

module.exports = (router)=>{
    router.post('/album', controller.addAlbum);
    router.get('/album', controller.getAll);
}