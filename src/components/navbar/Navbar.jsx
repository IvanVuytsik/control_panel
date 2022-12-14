import React, { useContext } from 'react';
import "./navbar.scss";
import { DarkModeContext } from '../../context/lightModeContext';
import img from "../../images/avatar.png";
 
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';


const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon className='icon' /> English
          </div>
          <div className="item">
            <SettingsBrightnessIcon className='icon' onClick={() => dispatch({type: "TOGGLE"})}/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FullscreenIcon className='icon' />
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon' />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListIcon className='icon' />
          </div>

          <div className="item">
            <img src={img} alt="" className='avatar' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar