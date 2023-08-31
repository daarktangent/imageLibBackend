const mongoose = require('mongoose');

const postSchema=mongoose.Schema(
    {
        title:
        {
            type:String,
            required:true
        },
        date:
        {
            type:String,
            required:true
        },
        image:
        {
            type:String,
            required:true
        },
        isFavorite: {
            type: Boolean,
            default:false
          }
    });

module.exports=mongoose.model("Post",postSchema);