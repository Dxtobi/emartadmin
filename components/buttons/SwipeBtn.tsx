
import { AiOutlineShareAlt } from "react-icons/ai";


export default function SwapCardBtn(params: { swapCards: any; }) {
    const {swapCards} = params
  return(
        <button onClick={swapCards} className='flex items-center justify-center fixed bottom-5 p-4 bg-slate-900 text-white rounded-full w-[80px] h-[80px] my-3 left-5'><AiOutlineShareAlt size={30}/></button>
    )
}