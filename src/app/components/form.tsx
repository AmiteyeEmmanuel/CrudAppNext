'use client';
import AddUsers from "./addUsers";
import UpdateUsers from "./updateUsers";


export default function Form() {

    const flag = true;

    return(
        <div className="container mx-auto py-5">
            {flag ? <AddUsers/>:<UpdateUsers/> }
        </div>
        //  
    )
}