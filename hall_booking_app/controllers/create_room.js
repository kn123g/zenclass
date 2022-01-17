const createRoomService = require('../services/store')
exports.createRoom = async (req,res)=>{
    let result = await createRoomService.createRoom(req.body.seats,req.body.amenities,req.body.price);
    if(result){

    }
}