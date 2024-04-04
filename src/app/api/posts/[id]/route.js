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