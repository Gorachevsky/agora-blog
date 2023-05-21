import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import styles from "../styles/Form.module.css";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "../lib/validate";
import { useRouter } from "next/router";
import MainLayout from "../layout/mainLayout";

const Login: React.FC<{}> = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  // formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values: any) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    if (status?.ok) router.push(status.url || "/");
  }

  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  // Github Login
  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <MainLayout>
        <section className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 mx-auto px-6 sm:px-0 flex flex-col gap-10">
          <div className="title">
            <h1 className="text-white text-4xl font-bold py-4">
              Inicia Sesión
            </h1>
            <p className="mx-auto px-4 text-gray-400">
              Es necesario iniciar session para poder acceder a todas las
              características de esta web.
            </p>
          </div>

          {/* form */}
          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            <div
              className={`${styles.input_group} ${
                formik.errors.email && formik.touched.email
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="email"
                placeholder="Email"
                className={styles.input_text}
                {...formik.getFieldProps("email")}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>
            {formik.errors.email && formik.touched.email ? (
              <span className="text-rose-500">{formik.errors.email}</span>
            ) : (
              <></>
            )}

            <div
              className={`${styles.input_group} ${
                formik.errors.password && formik.touched.password
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type={`${show ? "text" : "password"}`}
                placeholder="Password"
                className={styles.input_text}
                {...formik.getFieldProps("password")}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <span className="text-rose-500">{formik.errors.password}</span>
            ) : (
              <></>
            )}
            {/* login buttons */}
            <div className="input-button">
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
            <div className="input-button">
              <button
                type="button"
                onClick={handleGoogleSignin}
                className={styles.button_custom}
              >
                <span className="relative">
                  Sign In with Google
                  <Image
                    src={"/assets/google.svg"}
                    width={20}
                    height={20}
                    alt="Google"
                    className={styles.logo_google}
                  ></Image>
                </span>
              </button>
            </div>
            <div className="input-button">
              <button
                type="button"
                onClick={handleGithubSignin}
                className={styles.button_custom}
              >
                <span className="relative">
                  Sign In with Github
                  <Image
                    src={"/assets/github.svg"}
                    width={25}
                    height={25}
                    alt="Github"
                    className={styles.logo_github}
                  ></Image>
                </span>
              </button>
            </div>
          </form>

          {/* bottom */}
          <p className="text-center text-gray-400 ">
            don&apos;t have an account yet?{" "}
            <Link href={"/register"} legacyBehavior>
              <a className="text-blue-700">Sign Up</a>
            </Link>
          </p>
        </section>
      </MainLayout>
    </>
  );
};

export default Login;
