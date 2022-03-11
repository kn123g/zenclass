const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
  {
    student_id:
    {type:mongoose.SchemaTypes.String},
    student_name:
    {type:mongoose.SchemaTypes.String,required:true},
    student_email:
    {type:mongoose.SchemaTypes.String,unique: true},
    student_gender:
    {type:mongoose.SchemaTypes.String,required:true},
    mentor:
    {type:mongoose.SchemaTypes.String},
  });

module.exports = mongoose.model('users',usersSchema);