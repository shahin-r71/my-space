import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

// export async function generateStaticParams() {
//   const posts: Post[] = await fetch('http://localhost:3000/api/content').then((res) => res.json())
 
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    (res) => res.json()
  )
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
              {/* <CardDescription></CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
            {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
        </Card>
    </div>
  )

}
