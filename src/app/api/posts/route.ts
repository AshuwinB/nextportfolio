import Post from "@/models/postModel";
import connect from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  await connect();
  const newPost = new Post(body);

  try {
    await newPost.save();
    return new NextResponse("Post Has Been Created", { status: 201 });
  } catch (error) {
    return new NextResponse("DataBase Error", { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  try {
    await connect();

    const posts = await Post.find(email && { email }).sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("DataBase Error", { status: 500 });
  }
};
