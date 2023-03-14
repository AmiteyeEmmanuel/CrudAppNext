import { BiX } from "react-icons/bi"

export default function Error() {
    return (
        <div className="success container mx-auto">
            <div className="flex justify-center mx-auto border border-red-200 bg-red-500 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
                Error please check your entries <BiX size={23} color={"rgb(248,113,113)"}/>
            </div>
        </div>
    )
}