import React from 'react';
import "./widget.scss";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Widget = ( {type} ) => {

  let data;

  // front-end data 
  const money = 30000
  const percent = 20

  switch(type){
    case "user":
      data = {
        title: "USERS",
        isFinancial: false,
        link: "See all users",
        icon: <PersonOutlineIcon className='icon' style={{color:"var(--color-d)", backgroundColor:"var(--color-f)"}} />,
      };
    break;
    case "task":
      data = {
        title: "TASKS",
        isFinancial: false,
        link: "See all tasks",
        icon: <AccountTreeIcon className='icon' style={{color:"var(--color-d-b)", backgroundColor:"var(--color-l-b)"}} />,
      };
    break;
    case "statistics":
      data = {
        title: "STATISTICS",
        isFinancial: false,
        link: "See statistics",
        icon: <AssessmentIcon className='icon'style={{color:"var(--color-d-c)", backgroundColor:"var(--color-l-c)"}} />,
      };
    break;
    case "financial":
      data = {
        title: "FINANCIALS",
        isFinancial: true,
        link: "See financials",
        icon: <AccountBalanceIcon className='icon' style={{color:"var(--color-d-a)", backgroundColor:"var(--color-l-a)"}} />,
      };
    break;

    default:

    break;
  }


  return (
    <div className='widget'>  
      <div className='left'>
        <span className="title">{data.title}</span>
        <span className="counter">{data.isFinancial && "$"} {money}</span>
        <span className="link">{data.link}</span>
      </div>

      <div className='right'>
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {percent} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget