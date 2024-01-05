import { Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/button";
import { FormInput } from "../../components/input/formInput";
import { encrypt } from "../../helper";
import { keyConstants } from "../../helper/keyConstants";

export const Login = () => {
  const initialValues = {
    password: "",
    email: "",
  };

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const handleSubmit = async () => {
    const token = encrypt(import.meta.env.VITE_TEST_VAR ?? "", "myToken");
    const tokenExpire = new Date(new Date().getTime() + 3.456e8).getTime();
    localStorage.setItem(keyConstants.AUTH_TOKEN, token);
    localStorage.setItem(
      keyConstants.EXPIRY_TOKEN_TIME,
      tokenExpire.toString()
    );

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/app/dashboard");
    }, 2000);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="text-center text-base font-medium text-light">
          Log In
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {(formik) => (
            <>
              <Form className="my-5 w-[90%] md:w-3/4 lg:w-2/5">
                <FormInput
                  name="email"
                  label="Email Address"
                  placeholder="findseunoyewole@gmail.com"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="!rounded-sm !font-medium"
                />

                <div className={!formik.errors.email ? "!mt-5" : ""}>
                  <FormInput
                    name="password"
                    label="Password"
                    placeholder="xxxxx"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="!rounded-sm"
                  />
                </div>

                <div
                  className={`${`!text-sm text-primaryColor ${
                    !formik.errors.password ? "my-1" : ""
                  } `}`}
                >
                  <Link to="">Forgotten Password?</Link>
                </div>
                <Button
                  className="!mt-4 !py-4 !rounded-sm !bg-[#00E096]"
                  disabled={!formik.isValid}
                  isLoading={formik.isSubmitting || isLoading}
                >
                  submit
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
