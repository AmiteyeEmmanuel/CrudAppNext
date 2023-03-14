'use client';
import { useReducer } from "react"
import { BiPlus } from "react-icons/bi";
import Success from "./success";
import Error from "./Error";

const formReducer = (state: any, event:any) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function AddUsers() {

    const [formData, setFormData] = useReducer(formReducer, {})  

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(Object.keys(formData).length == 0)
        return console.log("No data entry found!")
        console.log(formData)
    }

    if(Object.keys(formData).length > 0)
    return <Error/>

    // if(Object.keys(formData).length > 0)
    // return <Success message={"Data Added"}/>

    return(
        <form action="" className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" name="firstName" placeholder="First Name" />     
            </div>

            <div className="input-type">
            <input type="text" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" name="lastName" placeholder="Last Name" />
            </div>

            <div className="input-type">
            <input type="text" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" name="email" placeholder="Email" />
            </div>

            <div className="input-type">
            <input type="text" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" name="phone" placeholder="Phone" />
            </div>

            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" onChange={setFormData} value="Accepted" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-150 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                    <label htmlFor="radioDefault1" className="inline-block text-gray-800">
                        Accepted
                    </label>
                </div>

                <div className="form-check">
                    <input type="radio" onChange={setFormData} value="Declined" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-150 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                    <label htmlFor="radioDefault2" className="inline-block text-gray-800">
                       Declined
                    </label>
                </div>

            </div>

            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-900">Add
            <span className="px-1"><BiPlus size={23}/> </span>
            </button>
        </form>
    )
}