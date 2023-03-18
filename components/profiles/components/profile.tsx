import  Image  from 'next/image';
import Link from 'next/link';
import {  AiFillMail } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { GiSpiderWeb } from 'react-icons/gi';


const ProfileItems = (params: { profile: any; user: any}) => {

 // const [auth, setAuth] = useState(false);
const { profile, user } = params
console.log(profile)
  return (
    <>
      <div className="flex flex-col items-center p-2 mt-2  gap-4  py-8 rounded-xl w-full">
              <div className='flex justify-between items-center w-full bg-white'>
                  <AiFillMail size={30} className='text-green-600' />
                  <div>{user.email}</div>
              </div>
              <br />
              <Link href={`https://twitter.com/{profile.twitter}`} className='flex justify-between items-center w-full bg-white'>
                  <BsTwitter size={30} className='text-green-600' />
                  <div>{profile.twitter}</div>
              </Link>
              <br />
              <Link href={profile.slug} className='flex justify-between items-center w-full'>
                  <GiSpiderWeb size={30} className='text-green-600' />
                  <div>My Web</div>
              </Link>


              
              
      </div>
    </>
  )
}




export default ProfileItems
