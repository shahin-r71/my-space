"use client"

import { signInAction } from "./actions";
import { signOutAction  } from "./actions";

export function SignInBtn(){
  return(
    
    <form
        action={signInAction}
      >
        <button type="submit" className="underline">SignIn</button>
    </form>
  )
}
export function SignOutBtn(){
  return(
    
    <form
      action={signOutAction}
    >     
      <button type="submit" className="underline">SignOut</button>
    </form>
  )
}