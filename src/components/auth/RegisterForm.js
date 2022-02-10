/* eslint-disable */
import { useForm } from "react-hook-form";

const RegisterForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const getFormData = (data) => console.log(data);

  // console.log(watch("passwordConfirmation")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(props.onRegister)}>
      <div className="field">
        <div className="control">
          <input
            {...register(
              "email",
              { required: true },
              {
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }
            )}
            className="input is-large"
            type="email"
            placeholder="Your Email"
            autoFocus=""
            autoComplete="email"
          />
          {errors.email && (
            <div className="form-error">
              {errors.email.type === "required" && (
                <span className="help is-danger">Email is required</span>
              )}
              {errors.email.type === "pattern" && (
                <span className="help is-danger">
                  Email address is not valid
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("fullName", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
            className="input is-large"
            type="text"
            placeholder="Full Name"
            autoFocus=""
          />
          {errors.fullName && (
            <div className="form-error">
              {errors.fullName.type === "required" && (
                <span className="help is-danger">Name is required</span>
              )}
              {errors.fullName.type === "minLength" && (
                <span className="help is-danger">
                  Minimun length is 5 characters
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register(
              "avatar",
              { required: true },
              {
                pattern:
                  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
              }
            )}
            className="input is-large"
            type="text"
            placeholder="Avatar"
            autoFocus=""
          />
          {errors.avatar && (
            <div className="form-error">
              {errors.avatar.type === "required" && (
                <span className="help is-danger">Avatar is required</span>
              )}
              {errors.avatar.type === "pattern" && (
                <span className="help is-danger">Avatar is not valid</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("password", { required: true, minLength: 6 })}
            className="input is-large"
            type="password"
            placeholder="Your Password"
            autoComplete="current-password"
          />
          {errors.password && (
            <div className="form-error">
              {errors.password.type === "minLength" && (
                <span className="help is-danger">
                  Password must be 6 characters long
                </span>
              )}
              {errors.password.type === "required" && (
                <span className="help is-danger">Password is required</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            {...register("passwordConfirmation", {
              required: true,
              minLength: 6,
            })}
            className="input is-large"
            type="password"
            placeholder="Repeat Password"
            autoComplete="current-password"
          />
          {errors.passwordConfirmation && (
            <div className="form-error">
              {errors.passwordConfirmation.type === "minLength" && (
                <span className="help is-danger">
                  Password must be 6 characters long
                </span>
              )}
              {errors.passwordConfirmation.type === "required" && (
                <span className="help is-danger">
                  Password Confirmation is required
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="button is-block is-info is-large is-fullwidth"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
