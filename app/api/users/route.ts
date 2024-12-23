import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  const users= await prisma.user.findMany();

  return NextResponse.json(users);
}
export async function PUT(req:NextRequest){
  const {id,email,...body}=await req.json();
  // const body=await req.json();
  //let userFound=true;
  if (!id || !email) {
      return NextResponse.json({ error: 'User ID or email is required to update' },{status:400});
    }
  // console.log(req.body)
  try{
    const user= await prisma.user.update({
      where:{
        id:id
      },
      data:{
        ...body,
      },
    })
    // console.log(user)
   

    return NextResponse.json(user)
  }catch(error){
    console.error('Error updating user:', error?.message || error);
    return NextResponse.json({ error: 'Internal Server Error!!!!' },{status:500});
    
  }
  
}

export async function POST(req:NextRequest){
  const body = await req.json();
  // if (!id || !email) {
  //     return NextResponse.json({ error: 'User ID or email is required to update' },{status:400});
  //   }
  // console.log(req.body)
  try{
    const newUser= await prisma.user.create({
    data:{
      ...body,
    },
  })
  // console.log(user)

  return NextResponse.json(newUser)
  }catch(error){
    console.error('Error updating user:', error.message || error);
    return NextResponse.json({ error: 'Internal Server Error' },{status:500});
  }
  
}