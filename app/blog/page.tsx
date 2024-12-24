import React from 'react'
import { auth } from "@/auth"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'

interface Post{
  title: string
  slug: string
  content: string
}

export default async function blog() {
  const posts: Post[] = await prisma.blog.findMany()
  const session:string=await auth();
  if(!session){
    redirect('/api/auth/signin')  
  } 
  return (
  <>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      {
        posts.map((post)=>(
          <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className='p-4'>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
              </Card>
          </Link>
        ))
      }
      
    </div>
  </>
   
  )
}

