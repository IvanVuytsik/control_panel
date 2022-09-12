import adelaide from "../../images/char_0.png";
import alessandro from "../../images/char_1.png";
import alice from "../../images/char_2.png";
import domenikos from "../../images/char_3.png";
import edmund from "../../images/char_4.png";
import falero from "../../images/char_5.png";
import felix from "../../images/char_6.png";
import george from "../../images/char_7.png";
import leon from "../../images/char_8.png";

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "User", width: 230, renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div> 
        )
    } },
    { field: "email", headerName: "Email", width: 260 },
    { field: "age", headerName: "Age", width: 200 },
    { field: "status", headerName: "Status", width: 150, renderCell:(params) => {
        return <div className={`cellWithStatus ${params.row.status}`}> {params.row.status} </div>
    }},    
   
]   


export const userRows = [
    {  id: 1, username: "adelaide", img: adelaide, status: 'active', email: "adelaide@gmail.com",  age: 35 },
    {  id: 2, username: "alessandro", img: alessandro, status: 'active', email: "alessandro@gmail.com",  age: 27 },
    {  id: 3, username: "alice", img: alice, status: 'inactive', email: "alicee@gmail.com",  age: 28 },
    {  id: 4, username: "domenikos", img: domenikos, status: 'active', email: "domenikos@gmail.com",  age: 47 },
    {  id: 5, username: "edmund", img: edmund, status: 'active', email: "edmund@gmail.com",  age: 36 },
    {  id: 6, username: "falero", img: falero, status: 'inactive', email: "falero@gmail.com",  age: 57 },
    {  id: 7, username: "felix", img: felix, status: 'active', email: "felixe@gmail.com",  age: 45 },
    {  id: 8, username: "george", img: george, status: 'inactive', email: "george@gmail.com",  age: 53 },
    {  id: 9, username: "leon", img: leon, status: 'inactive', email: "leon@gmail.com",  age: 22 },
]