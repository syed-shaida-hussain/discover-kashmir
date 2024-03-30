import { connect } from "@/dbConfig/dbConfig";
import { writeFile } from "fs/promises"
import { NextResponse } from "next/server";
import Post from "@/models/postModel";

connect();

const handleErrors = (error) => {
    let errors = {title : '' , postValue : '' , image : ''};

    if(error.message === "title is required") {
        errors.title = "title is required"
    }

    if(error.message === "postValue is required") {
        errors.postValue = "postValue is required"
    }

    if(error.message === "image is required") {
        errors.image = "Image is required"
    }
    return errors
}

export async function POST (request) {
    try {
        const data = await request.formData();
        const file = data.get('file');
        const title = data.get('title');
        const value = data.get('value');
        const authorName = data.get('authorName');
        const authorId = data.get('authorId');
        const imageData = await file.arrayBuffer();
        const buffer = Buffer.from(imageData);
        const path = `./public/${file.name}`;
        await writeFile(path,buffer)
        const postDoc = await Post.create({
            title,
            value,
            image : path,
            authorName,
            authorId
        })
        return NextResponse.json({
            post : postDoc,
            status : 201,
            message : "Post added successfully",
        })
    } catch (error) {
        const errors = handleErrors(error);
        return NextResponse.json({
                message: "Problem in adding a post",
                errors,
                status : 500,
        })
    }
}