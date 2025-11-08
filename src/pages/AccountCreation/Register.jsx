import { Link } from "react-router";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaWhatsappSquare } from "react-icons/fa";

import { Form, FormField } from "../../components/ui/form";

import { signUpFormSchema } from "../../components/FormSchema";
import FormFieldInput from "../../components/FormFieldInput";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import LinkButton from "../../components/LinkButton";

const Register = () => {
  const [isView, setIsView] = useState(false);

  const form = useForm({
    resolver: yupResolver(signUpFormSchema),
    criteriaMode: "firstError",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values) {
    console.log("register", values);
  }

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">Register</h2>
        <p className="text-sm text-gray-400 mb-6">
          Enter Your Personal Information
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormFieldInput
                    field={field}
                    label="User Name"
                    placeholder="Enter your user name"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormFieldInput
                    field={field}
                    label="Email"
                    placeholder="email@address.com"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormFieldInput
                    field={field}
                    label="Password"
                    placeholder="Enter your password"
                    icon={
                      isView ? (
                        <FaEyeSlash className="text-gray-500 cursor-pointer" />
                      ) : (
                        <FaEye className="text-gray-500 cursor-pointer" />
                      )
                    }
                    iconType={isView ? "text" : "password"}
                    onIconClick={() => {
                      setIsView(!isView);
                    }}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormFieldInput
                    field={field}
                    label="Password"
                    placeholder="Enter your password"
                    icon={
                      isView ? (
                        <FaEyeSlash className="text-gray-500 cursor-pointer" />
                      ) : (
                        <FaEye className="text-gray-500 cursor-pointer" />
                      )
                    }
                    iconType={isView ? "text" : "password"}
                    onIconClick={() => {
                      setIsView(!isView);
                    }}
                  />
                )}
              />

              {/* submit button*/}
              <LinkButton text="Register" className="mt-6" />
            </div>
          </form>

          <div className="flex flex-col gap-4 mt-3">
            <div className="mt-2 flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className=" text-gray-400 text-sm">Continue With</p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <span className="text-[15px]">Login with Google</span>
              <FcGoogle className="w-6 h-6" />
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <span className="text-[15px]">Login with Whatsapp</span>
              <FaWhatsappSquare className="text-green-600 rounded w-6 h-6" />
            </button>

            <div className="text-center text-sm">
              <p className="text-gray-500">
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-600">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
