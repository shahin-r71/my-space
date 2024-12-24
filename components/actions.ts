"use server"
import { signIn,signOut } from "@/auth"
// import { redirect } from "next/navigation"

export async function signInAction(){
    await signIn("github",{redirectTo: "https://my-space-hazel.vercel.app/dashboard"})
}

export async function signOutAction(){
    await signOut()
}