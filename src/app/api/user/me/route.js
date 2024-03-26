import { connect } from "@/dbConfig/dbConfig";
import { getUserDataFromToken } from "@/helpers/getUserData";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request){
    try {
        const userId = await getUserDataFromToken(request);
        const user = await User.findOne({_id : userId}).select("-password")
        return NextResponse.json({
            message : "user found",
            status : 200,
            user
        })
        
    } catch (error) {
        return NextResponse.json({
            error : error.message,
            status : 400
        })
    }
}