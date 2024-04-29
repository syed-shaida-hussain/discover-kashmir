import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true , "title is required"],
        minlength : [10 , "Title should be greater than 10 characters"],
    },
    value : {
        type : String,
        required : [true , "value is required"],
        minlength : [10 , "Post should be greater than 100 characters"],
    },
    image : {
        type : String,
        required : [true , "image is required"],
    },
    category : {
        type : String,
        required : [true , "category is required"]
    },
    authorName : {
        type : String,
        required : true
    },
    authorId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    comments : {
        type : String,
    }
} , {
    timeStamps : true
})

const Post = mongoose.models.posts || mongoose.model("posts" , postSchema);

export default Post