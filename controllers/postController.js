
const Post = require('../models/postModel');
const { post } = require('../routes/postRoute');
const createPost=async(req,res)=>
{
    try
    {
        const postnew=new Post(
            {
                title:req.body.title,
                date:req.body.date,
                image:req.file.filename,
                isFavorite:req.body.isFavorite
            });
            const postData = await postnew.save();

            res.status(200).send({success:true,msg:'post complete',data:postData});
    }
    catch(error)
    {
        res.status(400).send({success:false,msg:error.message});
    }
}

const getPosts = async(req,res)=>
{
    try
    { 
        const posts = await Post.find({});
        res.status(200).send({success:true,msg:'get complete',data:posts})
    }
    catch (error)
    {
        res.status(400).send({success:false,msg:error.message});
    }
}


const deletePost = async (req, res) => {
    try {
      const id = req.params.id;
      await Post.deleteOne({ _id: id });
      res.status(200).send({ success: true, msg: 'delete complete' });
    } catch (error) {
      res.status(400).send({ success: false, msg: error.message });
    }
  };
  const updatePost = async (req, res) => {
    const id = req.body.id;
    const isFavorite = req.body.isFavorite;
    console.log(req.body);
    console.log("Received id:", id);
    console.log("Received isFavorite:", isFavorite);
    try {
        await Post.findByIdAndUpdate(id, { $set: { isFavorite: isFavorite } });
        res.status(200).send({ success: true, msg: 'isFavorite updated' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};


module.exports = {
    createPost,
    getPosts,
    deletePost,
    updatePost
}