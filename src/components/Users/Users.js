import { useDispatch, useSelector } from "react-redux"
import store from "../../Store/Store";


export function Users(){
    
let data = useSelector((store)=>{
    return store.UsersSection;
});
// useDispatch
let dispatch = useDispatch();
    return (
        <>
    <table border='2px'>
        <thead>
            <tr>

            <th>email</th>
            <th>password</th>
            </tr>
        </thead>
{
    data.users.map((item)=>{
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
        </tr>
    )
    })
}
    </table>
        </>
    )
}