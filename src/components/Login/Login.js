import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";




export function Login({user , setUser}){
  let move = useNavigate();
 let dispatch =  useDispatch();
 let users =useSelector((store)=>store.UsersSection.users);

    let {register , handleSubmit , formState:{errors}} = useForm();
    function saveData(data){
      console.log(data);
      data.id = v4();
      let userFound= users.find((user)=>{
        if(data.email == user.email && data.password == user.password){
          return true;
        }
      })
      if(userFound){
       move('/Dashboard');
        dispatch({
          type: "USER_LOGGEDIN",
          payload:userFound
        })
      }
    }
    return (
        <>
        
        <form className="vh-100 "  onSubmit={handleSubmit(saveData)}>
  <div className="container  h-100 ">
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div className="card shadow-2-strong bg-dark" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-5 text-center">
            <h3 className="mb-5" style={{color:'white'}}>Login Now</h3>
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
              Login
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
