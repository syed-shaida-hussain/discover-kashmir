import { connect } from "@/dbConfig/dbConfig";
import { writeFile } from "fs/promises"
import { NextResponse } from "next/server";
import Post from "@/models/postModel";
import User from "@/models/userModel";
import { getUserDataFromToken } from "@/helpers/getUserData";

connect();

const handleErrors = (error) => {
    let errors = {title : '' , postValue : '' , image : '' , category : ''};

    if(error.message === "title is required") {
        errors.title = "Please enter Title"
    }

    if(error.message === "postValue is required") {
        errors.postValue = "Please enter post value"
    }

    if(error.message === "image is required") {
        errors.image = "Please select an image"
    }

    if(error.message === "category is required") {
        errors.image = "Please select a category"
    }
    return errors
}

export async function POST (request) {
    try {
        const data = await request.formData();
        const file = data.get('file');
        const title = data.get('title');
        const value = data.get('value');
        const video = data.get('video');
        const category = data.get('category');
        const imageData = await file.arrayBuffer();
        const buffer = Buffer.from(imageData);
        const path = `./public/${file.name}`;
        await writeFile(path,buffer)
        const userId = await getUserDataFromToken(request);
        const user = await User.findOne({_id : userId}).select("-password")
        if(!user){
            throw Error("user not found")
        }
        const postDoc = await Post.create({
            title,
            value,
            image : path,
            category,
            video,
            authorName : user?.username,
            authorId : user?._id,
            carousel : false
        })
        return NextResponse.json({
            post : postDoc,
            message : "Post added successfully",
        },{status : 201})
    } catch (error) {
        const errors = handleErrors(error);
        return NextResponse.json({
                message: "Problem in adding a post",
                errors,
                status : 500,
        })
    }
}