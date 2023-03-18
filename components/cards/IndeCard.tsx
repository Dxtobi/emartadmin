
import Image from "next/image";
import Link  from "next/link";


export default function IndexCard({product}:{product:any}) {

  

    return (
        <>
            <div className="w-full box-shadow p-3  bg-gray-400 rounded-md slide relative flex-1 user-card my-8">
                <div className="flex gap-4 items-center">
                    <img width={100} height={100} src='/images/profile01.jpg' alt='' className=" w-[40%]" />
                    <div>
                        <div className=" font-bold text-3xl">50%</div>
                        <div className=" font-bold text-lg">Off</div>
                    </div>
                </div>
            </div>
            
      </>
    )
  }