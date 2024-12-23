"use server"
import { signIn,signOut } from "@/auth"
// import { redirect } from "next/navigation"

export async function signInAction(){
    await signIn("github",{redirectTo: "https://localhost:3000/dashboard"})
}

export async function signOutAction(){
    await signOut()
}