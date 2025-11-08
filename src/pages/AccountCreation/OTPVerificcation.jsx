import { useState } from "react";
import { Link } from "react-router";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "../../components/ui/input-otp";
import LinkButton from "../../components/LinkButton";

const OTPVerificcation = () => {
  const [error, setError] = useState("");
  const [code, setCode] = useState("");

  function onVerify(e) {
    e.preventDefault();
    if (code.length < 4) {
      setError("Please enter the full code");
      return;
    }
    console.log("verify code", code);
    setError("");
  }

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">
          OTP Verification
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Enter the verification code we just sent on your email address
        </p>

        <form onSubmit={onVerify}>
          <div className="flex gap-3 justify-center mb-4 ">
            <InputOTP maxLength={6} value={code} onChange={setCode}>
              <InputOTPGroup className="gap-2 ">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {error ? (
            <p className="text-sm text-rose-500 text-center mb-4">{error}</p>
          ) : null}

          {/* submit button*/}
          <LinkButton text="Verify" className="mt-6" />

          <div className="text-center mt-6">
            <p className="text-gray-500">
              Don't received code?{" "}
              <Link to="#" className="underline">
                Resend
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerificcation;
