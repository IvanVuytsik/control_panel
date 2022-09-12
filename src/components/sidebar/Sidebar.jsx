import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { DarkModeContext } from '../../context/lightModeContext';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import TaskIcon from '@mui/icons-material/Task';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AssessmentIcon from '@mui/icons-material/Assessment';


function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>

        <div className="top">
          <Link to="/">
            <span className="logo">Admin Panel</span>
          </Link>
        </div>

        <div className="center">
          <ul>
              <p className="title">MAIN</p>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>

              <Link to="/users">
                <li>
                  <GroupIcon className="icon" />               
                  <span>Users</span>
                </li>
              </ Link>

              <p className="title">WORKFLOW</p>
              <li>
                <AccountTreeIcon className="icon" />
                <span>Projects</span>
              </li>

              <Link to="/products">
                <li>
                  <TaskIcon className="icon" />
                  <span>Tasks</span>
                </li>
              </Link>

              <li>
                <AutorenewIcon className="icon" />
                <span>Task Lifecycle</span>
              </li>

              <p className="title">DATA</p>
              <li>
                <AssessmentIcon className="icon" />
                <span>Statistics</span>
              </li>
              <li>
                <NotificationsIcon className="icon" />
                <span>Notifications</span>
              </li>

              <p className="title">SYSTEM</p>
              <li>
                <ComputerIcon className="icon" />
                <span>System</span>
              </li>
              <li>
                <SettingsIcon className="icon" />
                <span>Settings</span>
              </li>

              <p className="title">USER</p>
              <li>
                <AccountCircleIcon className="icon" />
                <span>Profile</span>
              </li>
              <li>
                <LogoutIcon className="icon" />
                <span>Logout</span>
              </li>
           </ul>
        </div>

        <div className="bottom">
          <div className="color__option" onClick={() => dispatch({type: "LIGHT"})}></div>
          <div className="color__option" onClick={() => dispatch({type: "DARK"})}></div>
        </div>  
    </div>
  )
}

export default Sidebar