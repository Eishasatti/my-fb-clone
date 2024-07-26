import React from 'react'

export default function Body() {
    return (

        <>
            <main className='flex flex-row'>
                <div className='container px-7 py-56 w-full h-full'>
                    <h1 className='text-blue-600  font-bold text-6xl w-1/2  '>facebook </h1>
                    <p className='text-3xl p-3  justify-normal px-5 '>
                        Facebook helps you connect and share with the people in your life.
                    </p>
                </div>
                <div className='containerflex  flex-col m-auto rounded-md py-4 h-auto w-1/2 shadow-3xl  mx-25 my-150  bg-slate-100'>
                    <form >

                        <input type='number/text/email' className='py-2 m-2 my-2 w-3/4 rounded-md border  border-slate-400 border-spacing-1' placeholder=' Email address or phone number'  ></input>
                        <input type='password' placeholder=' Password' className='py-2 mx-2 w-3/4 border border-slate-400 border-spacing-1 rounded-md my-3'></input>
                        <div>
                            <button className=" w-3/4 py-2 my-2 font-bold text-white bg-blue-600  rounded-lg">Log in</button>
                            
                        </div>
                        <div>
                        <a className='py-6 my-16 text-blue-500' href='/'>Forgotten Password?</a>
                        </div>
                        <div className='h-[1px] my-2 m-4 opacity-25 bg-gray-400'>

                        </div>
                        <div>
                            <button className=' text-white rounded-md font-bold bg-green-700 p-3 m-2'>Create new account</button>
                        </div>
                       
                    </form>

                </div>



            </main>
        </>

    )
}
