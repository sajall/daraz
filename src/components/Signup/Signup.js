import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";




export function Signup({user , setUser}){

 let dispatch =  useDispatch();

    let {register , handleSubmit , formState:{errors}} = useForm();
    function saveData(data){
      dispatch({
        type: "ADD_USER",
        payload:data
      })
    }
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
