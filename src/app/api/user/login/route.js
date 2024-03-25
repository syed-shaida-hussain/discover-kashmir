import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

connect();

const handleErrors = (error) => {
    let errors = {username : '' , password : ''};

    if(error.message === "username is required") {
        errors.username = "username is required"
    }

    if(error.message === "Password is required") {
        errors.password = "Password is required"
    }

    if(error.message === "incorrect username") {
        errors.username = "username is not registered"
    }

    if(error.message === "incorrect password") {
        errors.password = "Incorrect Password"
    }
    return errors
}

const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({id} , process.env.SECRET_KEY , {
        expiresIn : maxAge
    })
}

export async function POST (request) {
    const {username,password} = await request.json();
    try {
        if(!username) {
            throw Error("username is required")
        }
        if(!password) {
            throw Error("Password is required")
        }

        const user = await User.findOne({username});
        if(!user){
            throw Error("incorrect username")
        }

        const isPasswordEqual = await bcrypt.compare(password,user.password);
        if(!isPasswordEqual){
            throw Error("incorrect password")
        }

        const token = createToken(user._id);
        
        const response = NextResponse.json({
            message : "Login Successfull",
            success : true,
            status : 200,
            user,
            token
        })
        response.cookies.set("token" , token , {
            httpOnly : true
        })

        return response
        } catch (error) {
        console.log(error)
        const errors = handleErrors(error);
        return NextResponse.json({
                message: "Problem in logging in",
                errors,
                status : 500,
        })
    }
}