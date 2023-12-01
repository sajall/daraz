import { useForm } from "react-hook-form"



export function Login({user , setUser}){
let {handleSubmit , register , formState:{errors}} = useForm();
function loginData(data){
console.log(data);

}

    return (
        <>
        
        <form className="vh-100 gradient-custom" onSubmit={handleSubmit(loginData)}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div
          className="card bg-dark text-white"
          style={{ borderRadius: "1rem" }}
        >
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
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
              <p className="small mb-5 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <button
                className="btn btn-outline-light btn-lg px-5"
                type="submit"
              >
                Login
              </button>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white">
                  <i className="fab fa-facebook-f fa-lg" />
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-twitter fa-lg mx-4 px-2" />
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-google fa-lg" />
                </a>
              </div>
            </div>
            <div>
              <p className="mb-0">
                Don't have an account?{" "}
                <a href="#!" className="text-white-50 fw-bold">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>


        
        </>
    )
}