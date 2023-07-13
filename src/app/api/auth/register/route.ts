import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connect from '@/utils/dbConfig';

export const POST = async(request:NextRequest)=>{
    const {name,email,password}  = await request.json();
    await connect();

    const hashPassword = await bcrypt.hash(password,5);

    const newUser = new User({
        name,
        email,
        password: hashPassword
    })

    try {

        await newUser.save()
        return new NextResponse("user has been created",{status:201})
        
    } catch (error:any) {
        return new NextResponse(error.message,{status:500})
    }

}