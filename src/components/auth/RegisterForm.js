import { useForm } from "react-hook-form";

const RegisterForm = () => {

  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  const getFormData = data => console.log(data);

  // console.log(watch("password")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(getFormData)}>
      <div className="field">
        <div className="control">
          <input {...register("email", {required: true}, { pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} className="input is-large" type="email" placeholder="Your Email" autoFocus="" autoComplete="email" />
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
            {...register("fullName", { required: true, minLength: 3, maxLength: 20 })}
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
            {...register("avatar",  {required: true}, { pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi})}
            className="input is-large"
            type="text"
            placeholder="Avatar"
            autoFocus=""
          />
          <div className="form-error">
            <span className="help is-danger">Avatar is required</span>
            <span className="help is-danger">Avatar is not valid</span>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("password", {required: true, minLength: 6})}
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
            {...register("password-confirmation", {required: true, minLength: 6})}
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