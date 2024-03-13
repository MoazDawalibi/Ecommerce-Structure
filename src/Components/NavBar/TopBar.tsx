import React from 'react'
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs'
import Theme from '../Utils/Theme'
import Translate from '../Utils/Translate'
import { Link } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'

const TopBar = () => {
  return (
    
       <header className='Header'>
     <Link to={'/'} >  <h1>KarimAlden</h1> </Link>
      <nav>
        <div className="Menu_Group">
          <Theme/>
          <Translate/>
        </div>

        <ul className='Media_Icon'>
          <li><a href="/"><BsFacebook/></a></li>
          <li><a href="/about"><BsGoogle/></a></li>
          <li><a href="/about"><BsInstagram/></a></li>

        </ul>
        <div className='MenuNav'>

        <MenuFoldOutlined/>
        </div>
      </nav>
    </header>
  )
}

export default TopBar