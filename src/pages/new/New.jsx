import React, { useState } from 'react'
import './new.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import UploadFileIcon from '@mui/icons-material/UploadFile';
import user_image from "../../images/char_3.png";

const New = ({inputs, title}) => {
  const [file, setFile] = useState("")

  return (
    <div className='new'>
      <Sidebar />
      <div className="new__container">
        <Navbar />
        <div className="top">
          <h1> {title} </h1>
        </div>

        <div className="bottom">

          <div className="left">
            <img src={file ? URL.createObjectURL(file) : user_image} alt="" />
          </div>

          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='file'>Image <UploadFileIcon className="icon" /></label>
                <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: 'none'}} />
              </div>

              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New