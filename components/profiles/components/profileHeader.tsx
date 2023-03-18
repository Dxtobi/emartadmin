import  Image  from 'next/image';
import Link from 'next/link';
import ProfileItems from './profile';



const ProfileHeader = (params: { user: any; profile: any; }) => {

 // const [auth, setAuth] = useState(false);
const { user, profile } = params
//console.log(params.user)
  return (
    <>
      <div className="flex flex-col items-center p-2 mt-2  gap-4 bg-white py-8 rounded-xl">
        <Image alt='' src={user.image} width={120} height={120} className=' rounded-full ' />
        <div className='text-center flex flex-col gap-3'>
          <div className=' font-bold text-2xl'>{user.name}</div>
          {profile && <div className=' font-semibold text-sm text-green-600'>@{profile.username}</div>}
          {profile&&<div className=' font-semibold text-xl'>{profile.occupation}</div>}
          {profile && <div className=' text-sm'>{profile.bio}</div>}
          {profile && <Link href='/editprofile' className='text-center bg-green-700 text-white p-4 w-full rounded-lg'>Edit your Profile</Link>}
        </div>

          
      </div>
      {
            !profile ? <Link href='/createprofile' className='text-center bg-slate-600 text-white p-4 w-full rounded-lg'>New Profile</Link> : <ProfileItems user={user} profile={profile}/>
        }
    </>
  )
}




export default ProfileHeader
