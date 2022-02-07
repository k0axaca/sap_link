import { useForm } from "react-hook-form";

const RegisterForm = () => {

  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  const getFormData = data => console.log(data);

  // console.log(watch("fullName")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(getFormData)}>
      <div className="field">
        <div className="control">
          <input {...register("email")} className="input is-large" type="email" placeholder="Your Email" autoFocus="" autoComplete="email" />
          <div className="form-error">
            <span className="help is-danger">Email is required</span>
            <span className="help is-danger">
              Email address is not valid
            </span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("fullName")}
            className="input is-large"
            type="text"
            placeholder="Full Name"
            autoFocus=""
          />
          <div className="form-error">
            <span className="help is-danger">Name is required</span>
            <span className="help is-danger">Name is not valid</span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("avatar")}
            className="input is-large"
            type="text"
            placeholder="Avatar"
            autoFocus=""
          />
          <div className="form-error">
            <span className="help is-danger">Avatar is required</span>
            <span className="help is-danger">Avatart is not valid</span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("password")}
            className="input is-large"
            type="password"
            placeholder="Your Password"
            autoComplete="current-password"
          />
          <div className="form-error">
            <span className="help is-danger">Password is required</span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("email-confirmation")}
            className="input is-large"
            type="password"
            placeholder="Repeat Password"
            autoComplete="current-password"
          />
          <div className="form-error">
            <span className="help is-danger">
              Password Confirmation is required
            </span>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="button is-block is-info is-large is-fullwidth"
      >
        Register
      </button>
    </form>
  )
}

export default RegisterForm