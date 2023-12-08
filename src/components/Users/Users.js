import { useDispatch, useSelector } from "react-redux"
import store from "../../Store/Store";
import './Users.css';

export function Users(){
    
let data = useSelector((store)=>{
    return store.UsersSection;
});


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
            </tr>
        </thead>
{
    data.users.map((item)=>{
        console.log(item.id , 'jhuejfhbkebkhj');
        return(

            <tr>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td><button onClick={()=>{
                 dispatch({
                    type:"DELETE_USER",
                    payload:item.id
                });
            }}>Delete</button></td>

            <td>
                <ol>
                    {userCreatedproducts.filter((product)=>{
    if(product.owner == item.id){
        return true;
    }
}).map((product)=>{
                        return <li>{product.category}</li>
                    })}
                </ol>
            </td>
           
        </tr>
    )
    })
}
    </table>


 
        </>
    )
}



