
import Image from 'next/image'
import Link from 'next/link'
export default function UserAvatar({profilePicture}:{profilePicture:string}) {

  return(
    <div>
      <Link href={"/dashboard"}>
        <Image
          src={profilePicture}
          alt="User Avatar"
          width={50}
          height={50}
          className="rounded-full"
        />
      </Link>

    </div>
      
    
  )
}