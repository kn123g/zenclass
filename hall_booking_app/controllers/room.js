const room_service = require('../services/store');
exports.createRoom = async (req,res)=>{
    try{
        let result = await room_service.createRoom(req.body.room_id,req.body.seats,req.body.amenities,req.body.price);
        if(result){    
            res.status(result.status_code).json({message:result.message});
        }
    }
    catch(e){
            res.status(501).json({message:"couldn't able to create room"});
    }
}

exports.bookRoom = async (req,res)=>{
    try{
        let result = await room_service.bookRoom(req.body.customer_name,req.body.room_id,req.body.date,req.body.start_time,req.body.end_time);
        if(result){    
            res.status(result.status_code).json({message:result.message});
        }
    }
    catch(e){
            res.status(501).json({message:"couldn't able to book room"});
    }
}


exports.listRooms = async (req,res)=>{
    try{
        let result = await room_service.listRooms();
        if(result){    
            res.status(200).json(result);
        }
    }
    catch(e){
            res.status(501).json({message:"couldn't able to fetch rooms status"});
    }
}


exports.listCustomers = async (req,res)=>{
    try{
        let result = await room_service.listCustomers();
        if(result){    
            res.status(200).json(result);
        }
    }
    catch(e){
            res.status(501).json({message:"couldn't able to fetch customers details"});
    }
}