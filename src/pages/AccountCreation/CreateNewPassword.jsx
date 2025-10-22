import { useState } from "react";
import { useForm } from "react-hook-form";
import FormFieldInput from "../../components/FormFieldInput";
import { Form, FormField } from "../../components/ui/form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../../components/FormSchema";
import LinkButton from "../../components/LinkButton";

function CreateNewPassword() {
  const [isView, setIsView] = useState(false);

  const form = useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  function onSubmit(values) {
    console.log("reset password", values);
  }

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">
          Create new password
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Your new password must be unique from those previously used
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
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
                    label="Confirm Password"
                    placeholder="Enter your confirm password"
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
              <LinkButton text="Reset Password" className="mt-6" />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default CreateNewPassword;
