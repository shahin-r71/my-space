// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"
import Image from "next/image"

export default async function User({ params }: { params: { id: string } }) {

  const { id } = params
  const user= await prisma.user.findUnique({ where: { id } })

  return (
    <div>
        <Card className="w-72 overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={user?.image}
              alt="Profile background"
              width={230}
              height={230}
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div> */}
            
          </div>
          <CardContent className="pt-16 pb-8 px-6 text-center">
            <h2 className="text-2xl font-bold text-primary mb-1">{user?.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">{user?.email}</p>
            <p className="text-sm text-secondary-foreground">
              {user?.bio} 
            </p>
          </CardContent>
      </Card>
    </div>
  )
}