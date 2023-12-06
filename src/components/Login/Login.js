import { useForm } from "react-hook-form"



export function Login({user , setUser}){
let {handleSubmit , register , formState:{errors}} = useForm();
function loginData(data){
console.log(data);

}

    return (
        <>
        
        <form className="vh-100 gradient-custom" onSubmit={handleSubmit(loginData)}>
  {/* <div className="container py-5 h-100 bg-success"> */}
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div
          className="card bg-dark text-white "
          style={{ borderRadius: "1rem" , width:'450px', height:'500px'  }}
          

        >
          <div className="card-body p-5   text-center" >
            <div className="mb-md-5 mt-md-2 pb-2">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your email and password!
              </p>
              <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typeEmailX">
                  Email
                </label>
                <input
                {...register('email' ,{required:true ,validate:((value)=>{
                let userFound = user.find((item)=>{
                    if(item.email == value){
                        return item;
                    }
                })
                if(userFound){
                    return true;
                }else{
                    return false;
                }
                })})}
                  type="email"
                  id="typeEmailX"
                  className="form-control form-control-lg"
                />
              {errors.email && errors.email.type == "required" ? <div className="errors">please enter valid email address</div> : null}
              {errors.email && errors.email.type == "validate" ? <div className="errors">user alredy exists</div> : null}

              </div>
              <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typePasswordX">
                  Password
                </label>
                <input
              {...register('password' , {required:true})}
                  type="password"
                  id="typePasswordX"
                  className="form-control form-control-lg"
                />
              {errors.password ? <div className="errors">please enter correct password</div> : null}

              </div>
             
              <button
                className="btn btn-outline-light btn-lg px-5"
                type="submit"
              >
                Login
              </button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  {/* </div> */}
</form>


        
        </>
    )
}