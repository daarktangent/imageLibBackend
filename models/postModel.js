const mongoose = require('mongoose');

const postSchema=mongoose.Schema(
    {
        title:
        {
            type:String,
            required:true
        },//name can be different 
        date:
        {
            type:String,
            required:true
        },
        image:
        {
            type:String,
            required:true
        }
    });

module.exports=mongoose.model("Post",postSchema);