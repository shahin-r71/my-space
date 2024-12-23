import { prisma } from '@/lib/prisma';
import React from 'react'
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from 'next/link';
export default async function Users() {
  const users= await prisma.user.findMany({});
  console.log(users)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {users.map((user)=>(
        <Link href={`/users/${user.id}`} key={user.id}>
          <Card key={user.id} className="flex items-center gap-4 p-5 sm:p-8">
            <Avatar className="h-18 w-18 sm:h-28 sm:w-28">
              <AvatarImage src={user.image} alt="@username" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-xl font-semibold">{user.name}</div>
              <div className="text-lg text-muted-foreground">{user.email}</div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}






