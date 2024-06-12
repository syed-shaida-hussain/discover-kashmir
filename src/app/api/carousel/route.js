import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextResponse } from "next/server";

connect();

export async function GET () {
    try {
        const carouselPosts = await Post.find({carousel : true})
        return NextResponse.json({
            message : "Posts for Carousel",
            success : true,
            status : 200,
            carouselPosts
        },{status : 200})
    } catch (error) {
        return NextResponse.json({
            message: "could'nt get carousel posts",
            error : error.message,
            status : 500,
        }, {status : 500})
    }
}