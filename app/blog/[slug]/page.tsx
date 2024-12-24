import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { prisma } from "@/lib/prisma";
interface Post {
  title: string
  slug: string
  content: string
}

interface Props {
  params: {
    slug:string
  }
}


export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const posts: Post[] = await prisma.blog.findMany()
  const  post=posts.find((post)=>post.slug===slug);

  if(!post){
    return (
      <div>Post not found</div>
    )
  }
  return (
    <div>
      <Card key={post.slug} className='p-4'>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
        </Card>
    </div>
  )

}
