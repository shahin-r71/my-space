import React from 'react'
import { auth } from "@/auth"
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
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
  // const posts: Post[]= await fetch("http://localhost:3000/api/content")
  //                             .then((res)=>res.json());
  
  const posts: Post[] = await prisma.blog.findMany()
  const session:string=await auth();
  if(!session){
    redirect('/api/auth/signin')  
  } 
  // console.log(posts)
  return (
  <>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      {
        posts.map((post)=>(
          <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className='p-4'>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  {/* <CardDescription></CardDescription> */}
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>
          </Link>
        ))
      }
      
    </div>
  </>
   
  )
}

