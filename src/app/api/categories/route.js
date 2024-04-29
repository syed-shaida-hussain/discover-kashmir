import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextResponse } from "next/server";

connect();

export async function POST (request) {
    try {
        const cat = request.url();
        const category = await Post.find({$where : cat})
        return NextResponse.json({
            message : "category",
            success : true,
            status : 200,
            category
        })
    } catch (error) {
        return NextResponse.json({
            message: "could'nt get category",
            error : error.message,
            status : 500,
    })
    }
}