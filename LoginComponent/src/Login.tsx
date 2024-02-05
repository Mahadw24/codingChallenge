import React, { useState } from "react";
import image from "./assets/sideImage.png";

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const validate = (values: FormValues) => {
    const errors = { email: "", password: "" };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters!";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate(formValues);
    if (errors.email || errors.password) {
      setFormErrors(errors);
    } else {
      setIsSubmit(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <div className="border-yellow-500 w-full h-screen flex flex-wrap">
        <div className="w-full xl:w-1/2 flex items-center justify-center flex-col pt-20 px-4 lg:px-0">
          <h1 className="text-black text-4xl md:text-5xl xl:text-7xl font-bold mb-2">Welcome Back!</h1>
          <p className="font-light pb-10 text-center md:text-md lg:text-xl">
            Login Page using Reactjs, Tailwindcss, Typescript.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full lg:w-[30rem] gap-y-10 mb-10"
          >
            <div className="w-full flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                className="border px-5 py-3 rounded-full border-black"
                placeholder="Email"
              />
              <p className="text-red-500">{formErrors.email}</p>
            </div>
            <div className="w-full flex flex-col">
              <input
                type="password"
                name="password"
                id="password"
                value={formValues.password}
                onChange={handleChange}
                className="border px-5 py-3 rounded-full border-black"
                placeholder="Password"
              />
              <p className="text-red-500">{formErrors.password}</p>
            </div>
            <button
              type="submit"
              className="w-full xl:w-[30rem] border-2 rounded-full px-5 py-3 bg-black text-white"
            >
              Submit
            </button>
            {isSubmit && (
              <div className="text-green-500">Submission successful!</div>
            )}
          </form>
        </div>

        <div className="hidden xl:flex w-full lg:w-1/2 items-center justify-center">
          <img
            src={image}
            className="lg:transform lg:scale-150"
            alt="Description"
          />
        </div>
      </div>
    </>
  );
};

export default Login;