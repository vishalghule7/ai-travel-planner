import React from 'react'
import { Button } from '../ui/button'
import Logo from '../../assets/logo.svg'; 
function Header() {
  return (
    <div className=' p-2 shadow-sm flex justify-between'>
        <img src={Logo}/>
        <Button>Signin</Button>
    </div>
  )
}

export default Header