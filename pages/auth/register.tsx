import Link from "next/link";
import styles from "../../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import {
  register_username,
  register_email,
  register_password,
  register_confirm_password,
} from "../../lib/validate";
import { useRouter } from "next/router";
import MainLayout from "../../layout/main";
import { Formik, Form, Field } from "formik";

export default function Register() {
  const [show, setShow] = useState({
    password: false,
    confirm_password: false,
  });
  const router = useRouter();

  return (
    <>
      <MainLayout>
        <section className="w-full md:w-1/2 mx-auto px-6 sm:px-0 flex flex-col gap-10">
          <div className="title">
            <h1 className="text-white text-4xl font-bold py-4">Sign Up</h1>
            <p className="mx-auto px-4 text-gray-400">
              If you don&apos;t have an account yet, you can create one to
              access all the features of this website.
            </p>
          </div>

          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirm_password: "",
            }}
            onSubmit={async (values) => {
              const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              };

              await fetch("http://localhost:3000/api/auth/signup", options)
                .then((res) => res.json())
                .then((data) => {
                  if (data) router.push("http://localhost:3000");
                });
            }}
          >
            {(props) => (
              <Form className="flex flex-col gap-5">
                <div
                  className={`${styles.input_group} ${
                    props.errors.username && props.touched.username
                      ? "border-rose-600"
                      : ""
                  }`}
                >
                  <Field
                    name="username"
                    type="text"
                    placeholder="Username"
                    className={styles.input_text}
                    validate={register_username}
                  />
                  <span className="icon flex items-center px-4">
                    <HiOutlineUser size={25} />
                  </span>
                </div>
                {props.errors.username && props.touched.username ? (
                  <span className="text-rose-500">{props.errors.username}</span>
                ) : (
                  <></>
                )}{" "}
                <div
                  className={`${styles.input_group} ${
                    props.errors.email && props.touched.email
                      ? "border-rose-600"
                      : ""
                  }`}
                >
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={styles.input_text}
                    validate={register_email}
                  />
                  <span className="icon flex items-center px-4">
                    <HiAtSymbol size={25} />
                  </span>
                </div>
                {props.errors.email && props.touched.email ? (
                  <span className="text-rose-500">{props.errors.email}</span>
                ) : (
                  <></>
                )}
                <div
                  className={`${styles.input_group} ${
                    props.errors.password && props.touched.password
                      ? "border-rose-600"
                      : ""
                  }`}
                >
                  <Field
                    name="password"
                    type={`${show.password ? "text" : "password"}`}
                    placeholder="Password"
                    className={styles.input_text}
                    validate={register_password}
                  />
                  <span
                    className="icon flex items-center px-4"
                    onClick={() =>
                      setShow({ ...show, password: !show.password })
                    }
                  >
                    <HiFingerPrint size={25} />
                  </span>
                </div>
                {props.errors.password && props.touched.password ? (
                  <span className="text-rose-500">{props.errors.password}</span>
                ) : (
                  <></>
                )}
                <div
                  className={`${styles.input_group} ${
                    props.errors.confirm_password &&
                    props.touched.confirm_password
                      ? "border-rose-600"
                      : ""
                  }`}
                >
                  <Field
                    name="confirm_password"
                    type={`${show.confirm_password ? "text" : "password"}`}
                    placeholder="Confirm Password"
                    className={styles.input_text}
                    validate={register_confirm_password}
                  />
                  <span
                    className="icon flex items-center px-4"
                    onClick={() =>
                      setShow({
                        ...show,
                        confirm_password: !show.confirm_password,
                      })
                    }
                  >
                    <HiFingerPrint size={25} />
                  </span>
                </div>
                {props.errors.confirm_password &&
                props.touched.confirm_password ? (
                  <span className="text-rose-500">
                    {props.errors.confirm_password}
                  </span>
                ) : props.values.confirm_password !== props.values.password &&
                  props.values.confirm_password !== "" &&
                  !props.values.password.includes(
                    props.values.confirm_password
                  ) ? (
                  <span className="text-rose-500">Password not match...!</span>
                ) : (
                  <></>
                )}
                <div className="input-button">
                  <button type="submit" className={styles.button}>
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          {/* bottom */}
          <p className="text-center text-gray-400 ">
            Have an account?{" "}
            <Link href={"/auth/login"} legacyBehavior>
              <a className="text-blue-700">Sign In</a>
            </Link>
          </p>
        </section>
      </MainLayout>
    </>
  );
}
