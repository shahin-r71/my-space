import React from 'react'
import { auth } from "@/auth"
// import { SignOutBtn } from './Buttons';
import Link from 'next/link';

export default async function SignIn() {

  const session = await auth();

  if(session) return (
    <Link href={"/api/auth/signout"}>Sign Out</Link>
  )
  return null;
} 