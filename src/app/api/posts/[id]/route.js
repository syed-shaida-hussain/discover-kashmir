import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextResponse } from "next/server";

connect();

export async function GET ( request , {params} ) {
    try {
        const {id} = params
        const post = await Post.findById({_id : id})
        return NextResponse.json({
            message : "Single post",
            success : true,
            status : 200,
            post
        })
    } catch (error) {
        return NextResponse.json({
            message: "could'nt get single post",
            error : error.message,
            status : 500,
    })
    }
}

export async function DELETE (request , {params}) {
    try {
        const {id} = params;
        const deletedPost = await Post.findByIdAndDelete({_id : id})
        return NextResponse.json({
            message : "Post deleted successfully",
            success : true,
            status : 200,
            deletedPost
        },{status : 200})
    } catch (error) {
        return NextResponse.json({
            message: "could'nt delete post",
            error : error.message,
            status : 500,
    })
    }
}