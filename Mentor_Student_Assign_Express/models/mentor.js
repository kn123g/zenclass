const mongoose = require("mongoose");

const mentorsSchema = mongoose.Schema(
  {
    mentor_id:
    {type:mongoose.SchemaTypes.Number,required:true},
    mentor_name:
    {type:mongoose.SchemaTypes.String,required:true}
  });

module.exports = mongoose.model('mentors',mentorsSchema);