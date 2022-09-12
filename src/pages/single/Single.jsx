import React from 'react'
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

import singlePerson from "../../images/char_2.png";

const Single = () => {
  return (
    <div className='single'> 
      <Sidebar /> 
      <div className="single__container">
          <Navbar />
          <div className="top">
            <div className="left">

              <div className="editButton">Edit</div>
              <h1 className="title">Personal Details</h1>

              <div className="item">
                <img className='itemImg' src={singlePerson} alt="" />
                <div className="details">
                  <h2 className="itemTitle">Alice</h2>

                  <div className="detailItem">
                    <span className="itemKey">Email: </span>
                    <span className="itemValue">Alice@gmail.com</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Phone: </span>
                    <span className="itemValue">+1 2345 67 89</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Address: </span>
                    <span className="itemValue">Mephew St. 149a Brightwoods</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Country: </span>
                    <span className="itemValue">Canada</span>
                  </div>

                </div>
              </div>

            </div>
            <div className="right">
              <Chart aspect={3 / 1} title="Revenue over six months" />
            </div>
          </div>

          <div className="bottom">
            <h1 className="title">Information</h1>
            <Table />
          </div>

      </div>
    </div>
  )
}

export default Single