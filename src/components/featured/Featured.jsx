import React from 'react';
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CircularProgressbar } from "react-circular-progressbar";

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Project Completion</h1>
        <MoreVertIcon fontSize='small'/> 
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
        </div>

        <p className="title">Progress</p>
        <p className="amount">$100.500</p>
        <p className="desc">Total planned budget</p>

        <div className="summary">

          <div className="item">
            <div className="itemTitle">Engineering</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">$65.500</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Marketing</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">$20.000</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Unsolicited</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$15.000</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Featured