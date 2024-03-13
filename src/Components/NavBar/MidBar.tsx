import InputAutoComplete from './InputAutoComplete'
import { Link } from 'react-router-dom';
import ViewCart from './ViewCart';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { Button } from 'antd';

const MidBar = () => {

  return (
    <div className="MidBar">
        <div className='MidBar_Left'>
            <img src='/Layout/MoazLogoBlack.svg'  width={70}/>
        </div>
        <div className='MidBar_Mid'>
            <InputAutoComplete/>
        </div>
        <div className='MidBar_Right'>
        <div className="Cart_Icon">
        <Link to="/auth">
          <UserOutlined  />
        </Link>

          </div>
   <ViewCart/>
    

        </div>
        <div className='MediaMenu'> 
        <WithDrawer
        
              title='Nav Links'
              button={<Button icon={<MenuOutlined />} className='MenuButton' type='primary' />}
            >
               hi
            </WithDrawer>
      </div>
    </div>
  )
}

export default MidBar