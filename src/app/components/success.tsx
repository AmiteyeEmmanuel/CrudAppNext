 import { BiCheck } from "react-icons/bi"

 export default function Success() {
     return (
         <div className="success container mx-auto">
             <div className="flex justify-center mx-auto border border-green-200 bg-green-500 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
                 Data Successfully Added <BiCheck size={23} color={"rgb(34,197,94)"}/>
             </div>
         </div>
     )
 }