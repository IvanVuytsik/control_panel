import React from 'react'
import './home.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";


const Home = () => {
  return (
    <div className='home'>
        <Sidebar /> 
        <div className="home__container">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="task" />
            <Widget type="statistics" />
            <Widget type="financial" />
          </div>
          <div className="charts">
            <Featured />
            <Chart aspect={2 / 1} title="Revenue over six months" />
          </div>

          <div className="list__container">
            <div className="listTitle">Lates Activities</div>
            <Table />
          </div>
        </div>
    </div>
  )
}

export default Home