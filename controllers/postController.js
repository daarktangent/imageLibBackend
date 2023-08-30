
const Post = require('../models/postModel');
const createPost=async(req,res)=>
{
    try
    {
        const postnew=new Post(
            {
                title:req.body.title,
                date:req.body.date,
                image:req.file.filename
            });
            const postData = await postnew.save();

            res.status(200).send({success:true,msg:'post complete',data:postData});
    }
    catch(error)
    {
        res.status(400).send({success:false,msg:error.message});
    }
}
module.exports = {
    createPost
}