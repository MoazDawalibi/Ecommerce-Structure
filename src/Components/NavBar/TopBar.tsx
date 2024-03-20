import React, { useState } from 'react'
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs'
import Theme from '../Utils/Theme'
import Translate from '../Utils/Translate'
import { Link, useNavigate } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'
import { TOKEN_KEY } from '../../config/AppKey'

const TopBar = () => {

  const [isAuth , setIsAuth] = useState<any>(localStorage.getItem(TOKEN_KEY))
  const navigate = useNavigate()

  return (
    
       <header className='Header'>
     <Link to={'/'} >  <h1>Moaz Dawalibi</h1> </Link>
      <nav>
        <div className="Menu_Group">
          <Theme/>
          <Translate/>
        </div>

        <ul className='Media_Icon'>
        {
               ! isAuth ?
                <>
                  {/* <Link className='Link' to={'/auth'} onClick={()=>navigate('/auth' )}>  <h1>Register</h1> </Link> */}
                   <Link className='Link' to={'/auth'}  onClick={()=>navigate('/auth' )}>  <h1>Login</h1> </Link>
              
                </>:
                <>

                <h1 onClick={()=>{
                  localStorage.removeItem(TOKEN_KEY)
                  setIsAuth(false)
                }}>Logout</h1>
                </>

              }
        </ul>
        <div className='MenuNav'>

        <MenuFoldOutlined/>
        </div>
      </nav>
    </header>
  )
}

export default TopBar