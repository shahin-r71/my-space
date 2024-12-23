import React from 'react'
import { auth } from "@/auth"
// import { SignInBtn } from './Buttons';
import UserAvatar from './UserAvatar';
import Link from 'next/link';

export default async function SignIn() {
 
  const session = await auth();
  let profilePicture:string;
  if(!session){
    return (
      // <SignInBtn />
      <Link href={"/api/auth/signin"}>Sign In</Link>
    )
  } else{
    profilePicture = session.user.image!;
  }
  
  return (
    <UserAvatar profilePicture={profilePicture}/>
  )


} 