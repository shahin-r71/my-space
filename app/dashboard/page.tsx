import { auth } from '@/auth';
import {prisma} from '@/lib/prisma'
import { redirect } from 'next/navigation';
import UserDashboard from './user-dashboard';

export default async function Dashboard() {

  const session = await auth();
  if(!session) return redirect('/api/auth/signin')

  const userSession=session.user
  const user = await prisma.user.findUnique({
    where: {
      id: userSession?.id
    }
  })
  
  interface UserType {
    id: string,
    name: string,
    email: string,
    image: string,
  }
  const UserInfo: UserType={
    id: user!.id,
    name: user!.name,
    email: user!.email,
    image: user!.image
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <UserDashboard UserInfo={UserInfo}/>
    </div>
  );
} 