import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

export const Nevbar = () => {

    const [user,setUser] = useState(null);//ignore

  return (
    <div className='flex items-center justify-between py-4'>
        <Link to = '/'>
        <img src ={assets.logo} alt=""  className='w-28 sm:w-32 lg:w-40' />
        </Link>

        <div>
            {user ? <div></div>
            :
            <div> 
                <button>Login</button>
            </div>
            }
            
            
        </div>


    </div>
  )
}



export default Nevbar