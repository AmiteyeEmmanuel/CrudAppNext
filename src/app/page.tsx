'use client';
import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { BiUserPlus } from 'react-icons/bi';
import styles from './page.module.css'
import Table from './components/table';
import Form from './components/form';
import { UserAPI } from './api/hello/route';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [visibility, setVisibility] = useState(false)



  // const handler = () => {
  //   setVisibility(visibility ? false:true)
  // }

  const handler = () => {
    setVisibility(!visibility)
  }


  return (
    <section>
      <Head>
        <title> THE CRUD APP </title>
        <meta name='description' content='Created with Nextjs and Nodejs app'></meta>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      
    <main className='py-5'>
      <h1 className='text-xl md:text-5xl text-center font-bold py-10'> User_Dashboard</h1>

      <div className='container mx-auto flex justify-between py-5 border-b'>
        <div className="left flex gap-3">
          <button onClick={handler} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-900 hover:border-green-500'>
            Add User <BiUserPlus className='ml-2'  size={23}  />
          </button>
        </div>

      
      </div>

       {/* Collapsable form */}
 
         {visibility ?  <Form/>:<></> }  
       


        {/* User table data */}
        <div className="container mx-auto">
        <Table/>
        </div>
      
  
    </main>
    </section>
  )
}
