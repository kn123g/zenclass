const { v4: uuidv4 } = require('uuid');
const rooms = [];
const booking_status = [];
exports.createRoom = (room_id,seats,amenities,price)=>{
    try{
        if(rooms.filter(data=>data.room_id==room_id).length == 0){
            rooms.push({id:uuidv4(),room_id,seats,amenities,price,booking_id:""});
            console.log(rooms)
            return {
                message:`room created for id ${room_id}`,
                status_code:201
            }
        }
        else{
            return {
                message:`room id ${room_id} already exists`,
                status_code:406
            }
        }
    }catch(e){
        console.log(e.stack)
        return {
            message:e.message,
            status_code:501
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
                    message:`room ${room_id} booked for ${customer_name}`,
                    status_code:201
                }
            }
            else{
                return {
                    message: `room ${room_id} already booked`,
                    status_code:406
                }
            }
        }
        else{
            return {
                message:`room id ${room_id} doesn't exists`,
                status_code:406
            }
        }
    }catch(e){
        console.log(e.stack)
        return {
            message:e.message,
            status_code:501
        }
    }
}

exports.listRooms = ()=>{
    try{
        let available_rooms = [...rooms];
        if(available_rooms.length>0){
            for(let room in available_rooms){
                let booking_details = booking_status.find(data=> data.room_id == available_rooms[room].room_id);
                available_rooms[room].booking_details = booking_details;
            }
            return available_rooms.map(data => {
                console.log(data)
                return{
                    room_name : data.room_id,
                    booked_status : data.booking_id ? true : false,
                    customer_name : data?.booking_details?.customer_name,
                    date : data?.booking_details?.date,
                    start_time : data?.booking_details?.start_time,
                    end_time : data?.booking_details?.end_time
                }
            })
        }
        else{
            return {
                message:"no rooms available please create room"
            }
        }
    }catch(e){
        console.log(e.stack)
        return {
            message:e.message
        }
    }
}

exports.listCustomers = ()=>{
    try{
        if(booking_status.length>0){
            return booking_status.map(data => {
                console.log(data)
                return{
                    room_name : data.room_id,
                    customer_name : data.customer_name,
                    date : data.date,
                    start_time : data.start_time,
                    end_time : data.end_time
                }
            })
        }
        else{
            return {
                message:"no customers available"
            }
        }
    }catch(e){
        console.log(e.stack)
        return {
            message:e.message
        }
    }
}