import { PrismaClient } from '@prisma/client';
import ProfileHeader from "./components/profileHeader";


const MyProfile = (params: { session: any; profile: any}) => {

  const {session, profile} = params;
  //const { user } = session;

  //console.log(user);
 // const [auth, setAuth] = useState(false);

  return (
    <>
      <div className="flex min-h-[70vh] flex-col items-center  bg-slate-100">    
        <ProfileHeader user={session?.user} profile={ profile } />    
      </div>
    </>
  )
}




export default MyProfile
