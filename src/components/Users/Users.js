import { useDispatch, useSelector } from "react-redux"
import store from "../../Store/Store";
import './Users.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:6070/"
export function Users(){
    
// let data = useSelector((store)=>{
//     return store.UsersSection;
// });


let [users , setUsers] = useState([]);


useEffect(()=>{
    axios.get('/user-lao' ).then((resp)=>{
        setUsers(resp.data.data);
        console.log(resp.data.data, 'users data response');

    });
},[]);

// recalling the get api 
const recallGetApi = async()=>{
   await axios.get('/user-lao' ).then((resp)=>{
        setUsers(resp.data.data);
        console.log(resp.data.data, 'users data response');

    });
}
// useDispatch
let dispatch = useDispatch();
let userCreatedproducts = useSelector((store)=>store.productsSection.products)
    return (
        <>
        <h1 id="user">Users</h1>
<hr />
    <table border='2px' id="usertable">
        <thead>
            <tr>

            <th>user email</th>
            <th>user password</th>
            <th>Delete User</th>
            <th>Edit</th>
            <th>User's products</th>    
            </tr>
        </thead>
{
    users && users.map((item , index)=>{
        // console.log(item.id , 'jhuejfhbkebkhj');
        return(

            <tr>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td><button onClick={()=>{
                axios.delete('/delete-user?id='+item._id  ).then((resp)=>{
                     if(resp.status === 200){
                        recallGetApi();
                     }
                });
            }} > Delete</button></td>

           <td> <button> <Link to={'/signup/'+item._id}>edit</Link> </button> </td>

            {/* <td>
                <ol>
                    {userCreatedproducts.filter((product)=>{
    if(product.owner == item.id){
        return true;
    }
}).map((product)=>{
                        return <li>{product.category}</li>
                    })}
                </ol>
            </td> */}
           
        </tr>
    )
    })
}
    </table>


 
        </>
    )
}




            {/* //  dispatch({ */}
            //     type:"DELETE_USER",
            //     payload:item.id
            {/* // }); */}
            // get of delete mn  dossry parameter mn data send nh kr skty is k liy query params use hoty hyn
            // post or put mn data ja skta hy 
            // query param chota mota data send krny k liy use hota hy