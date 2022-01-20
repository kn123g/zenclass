const { v4: uuidv4 } = require('uuid');
const rooms = [];
const booking_status = [];
exports.createRoom = (room_id,seats,amenities,price)=>{
    try{
        if(rooms.filter(data=>data.room_id==room_id).length == 0){
            rooms.push({id:uuidv4(),room_id,seats,amenities,price,booking_id:""});
            console.log(rooms)
            return {
                message:"room created",
                room_id
            }
        }
        else{
            return {
                message:"room id already exists",
                room_id
            }
        }
    }catch(e){
        return {
            message:"couldn't able to create room",
            room_id
        }
    }
}

exports.bookRoom = (customer_name,room_id,date,start_time,end_time)=>{
    try{
        let room = rooms.find(data=>data.room_id == room_id);
        if(room){
            if(!room.booking_id){
                let booking_id = uuidv4();
                booking_status.push({id:booking_id,customer_name,room_id,date,start_time,end_time});
                room.booking_id = booking_id;
                console.log(booking_status)
                console.log(rooms)
                return {
                    message:"room booked",
                    room_id,
                    customer_name
                }
            }
            else{
                return {
                    message:"room already booked",
                    room_id
                }
            }
        }
        else{
            return {
                message:"room doesn't exists",
                room_id
            }
        }
    }catch(e){
        return {
            message:"couldn't able to book room",
            room_id
        }
    }
}