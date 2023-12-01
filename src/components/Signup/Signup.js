import { useForm } from "react-hook-form"





export function Signup({user , setUser}){
    let {register , handleSubmit , formState:{errors}} = useForm();
    function saveData(data){
    user.push(data)
    setUser([...user])
        console.log(data);
    }
    return (
        <>
        
        <form className="vh-100" style={{ backgroundColor: "#508bfc" }} onSubmit={handleSubmit(saveData)}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-5 text-center">
            <h3 className="mb-5">Sign in</h3>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="typeEmailX-2">
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
              <label className="form-label" htmlFor="typePasswordX-2">
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
            {/* Checkbox */}
            {/* <div className="form-check d-flex justify-content-start mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form1Example3"
              />
              <label className="form-check-label" htmlFor="form1Example3">
                {" "}
                Remember password{" "}
              </label>
            </div> */}
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Signup
            </button>
            {/* <hr className="my-4" /> */}
            {/* <button
              className="btn btn-lg btn-block btn-primary"
              style={{ backgroundColor: "#dd4b39" }}
              type="submit"
            >
              <i className="fab fa-google me-2" /> Sign in with google
            </button> */}
            {/* <button
              className="btn btn-lg btn-block btn-primary mb-2"
              style={{ backgroundColor: "#3b5998" }}
              type="submit"
            >
              <i className="fab fa-facebook-f me-2" />
              Sign in with facebook
            </button> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

        </>
    )
}