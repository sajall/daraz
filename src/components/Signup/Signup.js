import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 } from "uuid";




export function Signup({user , setUser}){

  let params = useParams();


let navigate =useNavigate();
 let dispatch =  useDispatch();

//  recalling get api that i made in users page
const recallGetApi = async()=>{
  await axios.get('/user-lao' ).then((resp)=>{


   });
}

    let {register , handleSubmit  , reset, formState:{errors}} = useForm();
    function saveData(data){
      if(params.id){
          axios.put(`/update-user/${params.id}` ,data).then((resp)=>{
              if(resp.status === 200){
                recallGetApi();
              }
          });
      }else{
        // data.id = v4();
        axios.post('/create-user' , data).then((resp)=>{
  
        })
      }
      console.log(data);
      navigate('/Login')
      // dispatch({
      //   type: "ADD_USER",
      //   payload:data
      // })

    }
     

    let [showuser , setShowuser] = useState({});
    useEffect(()=>{
      reset(showuser);
    },[showuser])

    useEffect(()=>{
      if(params.id){
        axios.get('/user-to-update?id='+params.id).then((resp)=>{
        console.log(resp.data);
        setShowuser(resp.data);
        
        });
      }
    },[])
    return (
        <>
        
        <form className="vh-100 "  onSubmit={handleSubmit(saveData)}>
  <div className="container  h-100 ">
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div className="card shadow-2-strong bg-dark" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-5 text-center">
            <h3 className="mb-5" style={{color:'white'}}>Sign in</h3>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="typeEmailX-2" style={{color:'white'}}>
                Email
              </label>
              <input
              {...register('email' , {required:true})}
                type="email"
                id="typeEmailX-2"
                className="form-control form-control-lg"
              />
              {errors.email ? <div className="errors">please enter valid email address</div> : null}
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="typePasswordX-2" style={{color:'white'}}>
                Password
              </label>
              <input
              {...register('password' , {required:true})}

                type="password"
                id="typePasswordX-2"
                className="form-control form-control-lg"
              />
              {errors.password ? <div className="errors">please enter correct password</div> : null}

            </div>
         
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Signup
            </button>
       
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

        </>
    )
}
