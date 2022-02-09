import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { Redirect } from "react-router-dom";

import { login } from "../actions";

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { addToast } = useToasts();

  const onLogin = (loginData) => {
    console.log(loginData);
    login(loginData).then(
      (_) => setRedirect(true),
      (errorMessage) =>
        addToast(errorMessage, {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        })
    );
  };

  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="auth-page">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Login</h3>
          <p className="subtitle has-text-grey">Please login to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="https://via.placeholder.com/128x128" />
            </figure>
            <form onSubmit={handleSubmit(onLogin)}>
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
                        <span className="help is-danger">
                          Email is required
                        </span>
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
              <button
                type="submit"
                className="button is-block is-info is-large is-fullwidth"
              >
                Sign In
              </button>
            </form>
          </div>
          <p className="has-text-grey">
            <a>Sign In With Google</a>&nbsp;
            <a href="/">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
