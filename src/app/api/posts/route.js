import Post from "@/models/postModel";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

connect();

export async function GET () {
    try {
        const posts = await Post.find({})
        return NextResponse.json({
            message : "All posts",
            success : true,
            status : 200,
            posts
        })
    } catch (error) {
        return NextResponse.json({
            message: "could'nt get posts",
            error : error.message,
            status : 500,
    })
    }
}