const rooms = [];

export function createRoom(seats,amenities,price){
    try{
        rooms.push({seats,amenities,price});
        return `room created`
    }catch(e){

    }
}