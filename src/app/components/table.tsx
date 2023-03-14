'use client';
import { BiEdit, BiTrashAlt } from 'react-icons/bi'; 
import { UserAPI } from '../api/hello/route';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';





export default function Table() {
    // console.log(UserAPI())
    // UserAPI().then(res => console.log(res))
    // const newLocal = useQuery('users'.UserAPI);
    // // console.log(UserAPI())
    // // UserAPI().then(res => console.log(res))

    // const { isLoading, isError, data, error } = newLocal

    const { isLoading, isError, data, error } = useQuery('user', UserAPI)
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });

    if(isLoading) return <div> Employee is Loading </div>
    if(isError) return <div> Error (error) </div>

    const onChange = (e) => {
        setUserInfo({
          ...userInfo,
          [e.target.name]: e.target.value,
        });
      };


    return(
    <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200" >Name</span>
                    </th>

                    <th className="px-14 py-2">
                        <span className="text-gray-200" > Email</span>
                    </th>

                    <th className="px-14 py-2">
                        <span className="text-gray-200" >Phone_Number</span>
                    </th>

                    <th className="px-14 py-2">
                        <span className="text-gray-200" >Status</span>
                    </th>

                    <th className="px-14 py-2">
                        <span className="text-gray-200" >Actions</span>
                    </th>

                </tr>
            </thead>

            <tbody className="bg-gray-200">
                
                    {
                        data.map((obj,/) => <Tr{...obj} key={/}/>)
                    }

            </tbody>

        </table>
    );
}


function Tr({id,name,email,phone,status}) {
    return(

        <tr className=" bg-gray-50 text-center">
        <td className="px-16 py-2 flex-row items-center">
            <span className="text-center ml-2 font-semibold " >  {name || "Unknown" } </span>
        </td>

        <td className="px-16 py-2">
            <span> {email || "Unknown" }</span>
        </td>

        <td className="px-16 py-2">
            <span> {phone || "Unknown" }</span>
        </td>

          <td className="px-16 py-2">
            <button className=" cursor-pointer"> <span className="bg-green-500 text-white rounded-md py-2 px-2">  {status || "Unknown" } </span>  </button>
        </td>

        <td className="px-16 py-2 flex justify-around gap-4">
            <button className="cursor"> <BiEdit size={23} color={"rgb(34,197,94)"} /> </button>
            <button className="cursor"> <BiTrashAlt size={23} color={"rgb(244,63,94)"} /> </button>
        </td>
        
    </tr> 
    )
}
