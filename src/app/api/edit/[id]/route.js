import Post from "@/models/postModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { connect } from "@/dbConfig/dbConfig";

connect()

export async function PUT ( request , {params} ) {
    try {
        const {id} = params
        const data = await request.formData();
        const file = data.get('file');
        const title = data.get('title');
        const value = data.get('value');
        const video = data.get('video');
        const category = data.get('category');
        const imageData = typeof file !== 'string' && await file.arrayBuffer();
        const buffer = typeof file !== 'string' && Buffer.from(imageData);
        const path = typeof file !== 'string' ? `./public/${file.name}` : file;
        typeof file !== 'string' && await writeFile(path,buffer)
        const post  = await Post.findById(id)
        post.title = title;
        post.value = value;
        post.video = video;
        post.category = category;
        post.image = path
        const updatedPost = await post.save();
        return NextResponse.json({
            message : "Post edited successfully",
            updatedPost
        })
    } catch (error) {
        return NextResponse.json({
            message: "could'nt edit post",
            error : error.message
    },{status : 500})
    }
}